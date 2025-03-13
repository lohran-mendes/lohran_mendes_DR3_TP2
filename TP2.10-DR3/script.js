// Quadrado com Efeitos CSS e Eventos de Clique

// Objetivo: Criar um quadrado com múltiplos eventos interativos.
// Requisitos:
// Ao passar o mouse, aplique um efeito CSS (como girar, mover ou redimensionar).
// Ao clicar, mude a cor do quadrado e exiba um texto abaixo dele.
const quadrado = document.getElementById("quadrado");
const body = document.querySelector("body");
const paragrafo = document.createElement("p");
body.appendChild(paragrafo);
let timeoutID;

quadrado.addEventListener("click", () => {
  clearTimeout(timeoutID);
  if (paragrafo.innerText.trim().length === 0) {
    paragrafo.innerText = "Quadrado clicado 1 vez!";
  } else {
    const texto = paragrafo.innerText.split(" ");
    paragrafo.innerText = `Quadrado clicado ${Number(texto[2]) + 1} vezes!`;
  }
  timeoutID = setTimeout(() => (paragrafo.innerText = ""), 5000);
  quadrado.style.backgroundColor === "blue"
    ? (quadrado.style.backgroundColor = "yellow")
    : (quadrado.style.backgroundColor = "blue");
});

quadrado.addEventListener("mouseenter", () => {
  quadrado.classList.add("girar");
});
quadrado.addEventListener("mouseleave", () => {
  quadrado.classList.remove("girar");
});
