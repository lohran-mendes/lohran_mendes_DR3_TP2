// Grupo - Acordeão

// Objetivo: Implementar um accordion que exibe e esconde conteúdo de forma dinâmica.
// Requisitos:
// No script.js:
// Torne todas as tags <p> invisíveis no estado inicial.
// Adicione uma classe no CSS para ocultar o conteúdo.
// Ao clicar em uma <div> com a classe "accordion-item":
// Mostre o conteúdo da <div> clicada.
// Esconda o conteúdo das outras <div> de classe "accordion-item", se houver alguma aberta.
// Se a <div> clicada já estiver com o conteúdo visível, oculte-o novamente.
// Dica: Consulte oAccordion do Bootstrap como referência.

// Assim que terminar, salve seu trabalho em PDF nomeando o arquivo conforme a regra “nome_sobrenome_DR3_TP1.PDF” e poste como resposta a este TP.
const accordion = document.querySelectorAll(".accordion-item");

accordion.forEach((div) =>
  div.addEventListener("click", () => mostrarParagrafo(div))
);

function mostrarParagrafo(div) {
  const p = div.querySelector("p");
  const img = div.querySelector(".container img");

  if (img.classList.contains("aberto") && p.classList.contains("ativo")) {
    img.classList.remove("aberto");
    p.classList.remove("ativo");
  } else {
    accordion.forEach((div) => {
      const pDestaDiv = div.querySelector("p");
      const imgDestaDiv = div.querySelector(".container img");
      imgDestaDiv.classList.remove("aberto");
      pDestaDiv.classList.remove("ativo");
    });
    img.classList.add("aberto");
    p.classList.add("ativo");
  }
}
