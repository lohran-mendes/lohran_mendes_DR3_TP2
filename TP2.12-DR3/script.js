// Grupo - Adicionando Itens

// Objetivo: Criar um botão que, ao ser clicado, adicione novos itens a uma lista de forma dinâmica.
// Requisitos:
// Crie uma lista de id="lista" no HTML.
// No arquivo script.js:
// Crie um elemento <button> com o texto "Inserir" e atribua uma função de clique a ele.
// Adicione o botão ao <body> utilizando append.
// Ao clicar no botão:
// Crie um elemento <li> com o texto "Nova entrada".
// Adicione o <li> criado como filho do elemento <ul> com o id "lista".
// Obs: Não altere o arquivo index.html manualmente. Use apenas o DOM para manipulação.
const body = document.body;
const button = document.createElement("button");
const lista = document.createElement("ul");
lista.id = "lista";
button.innerText = "Inserir";
body.append(button);
body.append(lista);

button.addEventListener("click", () => {
  const novoItem = document.createElement("li");
  novoItem.innerText = "Nova entrada";
  lista.appendChild(novoItem);
});
