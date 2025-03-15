// Grupo - Troca de Classes

// Objetivo: Alternar as classes dos elementos de uma tabela dinamicamente.
// Requisitos:
// No HTML crie uma tabela com 4 colunas preenchidas com o nome e a idade de 4 pessoas fictícias.
// Nas linhas pares adicione a classe "vermelho" que coloca a cor de fundo com a cor vermelha. Nas linhas ímpares adicione a classe "azul" que coloca a cor de fundo com a cor azul.
// No script.js, inverta as classes dos itens da tabela:
// Elementos com classe azul devem receber a classe vermelho.
// Elementos com classe vermelho devem receber a classe azul.
// Obs: Não altere o arquivo index.html manualmente. Utilize o DOM para todas as alterações.

const azul = document.querySelector(".azul");
const vermelho = document.querySelector(".vermelho");

setInterval(() => {
  if (
    azul.classList.contains("azul") &&
    vermelho.classList.contains("vermelho")
  ) {
    azul.classList.replace("azul", "vermelho");
    vermelho.classList.replace("vermelho", "azul");
  } else {
    azul.classList.replace("vermelho", "azul");
    vermelho.classList.replace("azul", "vermelho");
  }
}, 2000);
