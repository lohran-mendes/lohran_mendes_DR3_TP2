// Formulário Interativo

// Objetivo: Exibir o texto digitado em um campo de entrada.
// Requisitos:
// Crie um campo de texto (input type="text") e um botão de envio.
// O texto digitado deve ser exibido abaixo do formulário:
// Com o clique no botão de envio.
// Ou ao pressionar uma tecla específica (à sua escolha).
const input = document.querySelector("input");
const button = document.querySelector("button");
const form = document.querySelector("form");
const textoDigitado = document.createElement("p");
form.appendChild(textoDigitado);

button.addEventListener("click", (event) => {
  event.preventDefault();
  textoDigitado.innerText = input.value;
  input.value = "";
});
