// Botão com Múltiplos Eventos

// Objetivo: Implementar múltiplos eventos em um único botão.
// Requisitos:
// Ao clicar uma vez, exiba uma mensagem qualquer.
// Ao dar um duplo clique, mude a cor de fundo do botão.
const body = document.querySelector("body");
const botao = document.querySelector("button");
const paragrafo = document.createElement("p");
let timeoutID;

body.appendChild(paragrafo);

botao.addEventListener("click", exibirMensagem);
botao.addEventListener("dblclick", () => botao.classList.toggle("azul"));

function exibirMensagem() {
  clearTimeout(timeoutID);
  if (paragrafo.innerText.trim().length === 0) {
    paragrafo.innerText = "Botão foi clicado 1 vez.";
  } else {
    const texto = paragrafo.innerText.split(" ");
    paragrafo.innerText = `Botão foi clicado ${Number(texto[3]) + 1} vezes.`;
  }
  timeoutID = setTimeout(() => (paragrafo.innerText = ""), 5000);
}
