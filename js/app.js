import {
  templateInicio,
  templateProjetos,
  templateCadastro
} from "./templates.js";

import {getCadastros} from "./storage.js";
import {initFormulario} from "./formulario.js";
import {initGrafico} from "./graficos.js";

const app=
  document.getElementById("app");

const rotas={

  inicio:
    templateInicio,

  projetos:
    templateProjetos,

  cadastro:
    ()=>templateCadastro(
      getCadastros().length
    )
};

function rotaAtual(){

  return location.hash.replace("#","") ||
    "inicio";
}

function atualizarLinks(rota){

  document
    .querySelectorAll("[data-route]")
    .forEach(link=>{

      if(
        link.dataset.route===rota
      ){
        link.setAttribute(
          "aria-current",
          "page"
        );
      }else{
        link.removeAttribute(
          "aria-current"
        );
      }

    });
}

function fecharMenu(){

  const menu=
    document.getElementById("main-nav");

  const botao=
    document.getElementById(
      "menu-toggle"
    );

  menu.classList.remove("open");

  botao?.setAttribute(
    "aria-expanded",
    "false"
  );

  botao?.setAttribute(
    "aria-label",
    "Abrir menu"
  );

  document
    .querySelectorAll(
      ".dropdown.open"
    )
    .forEach(d=>
      d.classList.remove("open")
    );

  document
    .querySelectorAll(
      ".dropdown-toggle"
    )
    .forEach(b=>
      b.setAttribute(
        "aria-expanded",
        "false"
      )
    );
}

function render(
  rota,
  adicionarHistorico=false
){

  const pagina=
    rotas[rota] ||
    templateInicio;

  if(adicionarHistorico){

    history.pushState(
      {rota},
      "",
      `#${rota}`
    );
  }

  app.innerHTML=
    pagina();

  atualizarLinks(rota);

  fecharMenu();

  initFormulario();

  initGrafico();

  app.focus();
}

document.addEventListener(
  "click",
  event=>{

    const rotaLink=
      event.target.closest(
        "[data-route]"
      );

    if(rotaLink){

      event.preventDefault();

      render(
        rotaLink.dataset.route,
        true
      );

      return;
    }

    const toggle=
      event.target.closest(
        ".dropdown-toggle"
      );

    if(toggle){

      const dropdown=
        toggle.closest(".dropdown");

      const aberto=
        dropdown.classList.toggle(
          "open"
        );

      toggle.setAttribute(
        "aria-expanded",
        String(aberto)
      );
    }

  }
);

document
  .getElementById("menu-toggle")
  ?.addEventListener(
    "click",
    ()=>{

      const menu=
        document.getElementById(
          "main-nav"
        );

      const botao=
        document.getElementById(
          "menu-toggle"
        );

      const aberto=
        menu.classList.toggle(
          "open"
        );

      botao.setAttribute(
        "aria-expanded",
        String(aberto)
      );

      botao.setAttribute(
        "aria-label",
        aberto
          ? "Fechar menu"
          : "Abrir menu"
      );

    }
  );

window.addEventListener(
  "popstate",
  ()=>render(
    rotaAtual()
  )
);

window.addEventListener(
  "cadastro:salvo",
  event=>{

    mostrarToast(
      `Obrigado, ${event.detail.nome}! Seu cadastro foi registrado nesta simulação.`
    );

    const contador=
      document.getElementById(
        "cadastro-count"
      );

    if(contador){

      contador.textContent=
        `Cadastros registrados nesta simulação: ${getCadastros().length}`;
    }
  }
);

function mostrarToast(mensagem){

  const toast=
    document.getElementById("toast");

  toast.textContent=
    mensagem;

  toast.classList.add(
    "show"
  );

  clearTimeout(
    mostrarToast.timer
  );

  mostrarToast.timer=
    setTimeout(
      ()=>toast.classList.remove(
        "show"
      ),
      3500
    );
}

render(
  rotaAtual()
);