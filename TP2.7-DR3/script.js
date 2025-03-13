// Texto Exibido com Atraso (onload)

// Objetivo: Exibir um parágrafo 5 segundos após o carregamento da página.
// Requisitos:
// Utilize JavaScript para implementar um atraso de 5 segundos antes de exibir o texto.
function exibirParagrafo() {
  const paragrafo = document.createElement("p");
  const h1 = document.querySelector("h1");
  paragrafo.innerText = "O parágrafo está sendo carregado...";
  h1.appendChild(paragrafo);
  setTimeout(() => {
    paragrafo.innerText =
      "Pronto! este é o parágrafo já carregado adequadamente!";
  }, 5000);
}
