import {saveCadastro} from "./storage.js";

const apenasDigitos=v=>v.replace(/\D/g,"");

const mascaraCPF=v=>{
  v=apenasDigitos(v).slice(0,11);

  return v
    .replace(/(\d{3})(\d)/,"$1.$2")
    .replace(/(\d{3})(\d)/,"$1.$2")
    .replace(/(\d{3})(\d{1,2})$/,"$1-$2");
};

const mascaraCEP=v=>
  apenasDigitos(v)
    .slice(0,8)
    .replace(/(\d{5})(\d)/,"$1-$2");

const mascaraTelefone=v=>
  apenasDigitos(v)
    .slice(0,11)
    .replace(/(\d{2})(\d)/,"($1) $2")
    .replace(/(\d{5})(\d)/,"$1-$2");

function adicionarMascara(id,formatar){

  const el=document.getElementById(id);

  if(el){
    el.addEventListener("input",()=>{
      el.value=formatar(el.value);
      validarCampo(el);
    });
  }
}

function validarCPF(cpf){

  const n=apenasDigitos(cpf);

  if(
    n.length!==11 ||
    /^([0-9])\1+$/.test(n)
  ){
    return false;
  }

  let soma=0;

  for(let i=0;i<9;i++){
    soma+=Number(n[i])*(10-i);
  }

  let r=(soma*10)%11;

  if(r===10)r=0;

  if(r!==Number(n[9])){
    return false;
  }

  soma=0;

  for(let i=0;i<10;i++){
    soma+=Number(n[i])*(11-i);
  }

  r=(soma*10)%11;

  if(r===10)r=0;

  return r===Number(n[10]);
}

function mensagemErro(campo){

  if(campo.validity.valueMissing)
    return "Este campo é obrigatório.";

  if(campo.validity.typeMismatch)
    return "Informe um formato válido.";

  if(campo.validity.tooShort)
    return `Informe pelo menos ${campo.minLength} caracteres.`;

  if(campo.validity.patternMismatch)
    return "Use o formato indicado.";

  return "Verifique a informação digitada.";
}

function validarCampo(campo){

  if(
    !campo ||
    campo.type==="radio" ||
    campo.type==="submit"
  ){
    return true;
  }

  const grupo=campo.closest(".field");

  let erro=grupo?.querySelector(".error-msg");

  if(!erro){

    erro=document.createElement("small");

    erro.className="error-msg";

    campo.setAttribute(
      "aria-describedby",
      `${campo.id}-error`
    );

    grupo?.appendChild(erro);
  }

  campo.setCustomValidity(
    campo.id==="cpf" &&
    !validarCPF(campo.value)
      ? "CPF inválido."
      : ""
  );

  const valido=campo.checkValidity();

  campo.setAttribute(
    "aria-invalid",
    String(!valido)
  );

  erro.textContent=
    valido
      ? ""
      : mensagemErro(campo);

  return valido;
}

function mostrarAlerta(tipo,mensagem){

  const box=document.getElementById("form-alert");

  if(!box)return;

  box.hidden=false;

  box.className=`alert alert-${tipo}`;

  box.textContent=mensagem;
}

export function initFormulario(){

  const form=
    document.getElementById("cadastro-form");

  if(!form)return;

  adicionarMascara("cpf",mascaraCPF);
  adicionarMascara("cep",mascaraCEP);
  adicionarMascara("telefone",mascaraTelefone);

  form.querySelectorAll("input").forEach(campo=>{

    campo.addEventListener(
      "blur",
      ()=>validarCampo(campo)
    );

  });

  form.addEventListener("submit",event=>{

    event.preventDefault();

    const campos=[
      ...form.querySelectorAll("input")
    ].filter(
      c=>c.type!=="radio"
    );

    const camposValidos=
      campos.every(validarCampo);

    const radioValido=
      form.querySelector(
        "input[name='participacao']:checked"
      );

    if(!camposValidos || !radioValido){

      mostrarAlerta(
        "error",
        "Revise os campos destacados antes de continuar."
      );

      form
        .querySelector("[aria-invalid='true']")
        ?.focus();

      return;
    }

    const dados=
      Object.fromEntries(
        new FormData(form).entries()
      );

    saveCadastro(dados);

    form.reset();

    form
      .querySelectorAll("[aria-invalid]")
      .forEach(c=>
        c.setAttribute(
          "aria-invalid",
          "false"
        )
      );

    form
      .querySelectorAll(".error-msg")
      .forEach(e=>
        e.textContent=""
      );

    mostrarAlerta(
      "success",
      "Cadastro validado e salvo localmente com sucesso."
    );

    window.dispatchEvent(
      new CustomEvent(
        "cadastro:salvo",
        {detail:dados}
      )
    );

  });
}