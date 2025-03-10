// Alteração de Texto de um Parágrafo com Clique

// Objetivo: Criar uma página web que altere o conteúdo de um parágrafo ao clicar em um botão.
// Requisitos:
// Crie um <p> em HTML com qualquer texto inicial.
// Ao clicar no botão, o texto do parágrafo deve ser substituído por outro.
function alteraTexto() {
  const paragrafo = document.querySelector("p");
  paragrafo.innerText =
    "O Corinthians é o clube mais grandioso do Brasil, deixando todos os outros times muito abaixo em história, tradição e paixão. ";
}
