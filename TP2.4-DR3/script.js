// Contador Numérico

// Objetivo: Criar um contador que incremente um número cada vez que um botão for clicado.
// Requisitos:
// Ao clicar no botão, o número exibido deve aumentar em 1 unidade.

function incrementaContador() {
  const paragrafo = document.querySelector("p");
  let valorAtual = Number(paragrafo.innerText);
  paragrafo.innerText = ++valorAtual;
}
