// Exibição de Imagem ao Carregar a Página (onload)

// Objetivo: Exibir uma imagem e uma mensagem ao carregar a página.
// Requisitos:
// Ao carregar a página, exiba uma foto qualquer e um parágrafo com a mensagem "Imagem carregando...".
const body = document.querySelector("body");

function carregaPagina() {
  const paragrafo = document.createElement("p");
  const imagem = document.createElement("img");
  imagem.width = "200";
  imagem.height = "200";
  imagem.style.objectFit = "cover";
  imagem.src = "./img/depay.jpeg";
  paragrafo.innerText = "Imagem carregando...";
  body.appendChild(paragrafo);
  setTimeout(() => {
    paragrafo.remove();
    body.appendChild(imagem);
  }, 2000);
}
carregaPagina();
