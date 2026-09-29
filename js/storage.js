const CHAVE="reconecta_cadastros";

export function getCadastros(){

  try{
    return JSON.parse(
      localStorage.getItem(CHAVE)||"[]"
    );
  }catch{
    return [];
  }
}

export function saveCadastro(cadastro){

  const lista=getCadastros();

  lista.push({
    ...cadastro,
    dataCadastro:new Date().toISOString()
  });

  localStorage.setItem(
    CHAVE,
    JSON.stringify(lista)
  );

  return lista;
}