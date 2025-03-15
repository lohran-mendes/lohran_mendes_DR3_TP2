// Grupo - Condições

// Objetivo: Adicionar estilos condicionais às linhas de uma tabela com base no valor de uma classe.
// Requisitos:
// Recrie a tabela abaixo no HTML:

// No script.js:
// Adicione um evento de clique ao botão dentro da tag <td>.
// Ao clicar no botão, uma função deve verificar:
// Se o valor da coluna "nota" da linha do botão clicado for maior ou igual a 5, adicione uma classe que deixe a cor de fundo da <tr>verde.
// Se o valor da coluna "nota" da linha do botão clicado for menor que 5, adicione uma classe que deixe a cor de fundo da <tr>vermelha.
// Obs: Não altere o arquivo index.html manualmente. Utilize apenas o DOM para manipulação.

function checarAprovacao(event) {
  const linhaAtual = event.target.parentElement.parentElement;
  const colunasDaLinhaAtual = linhaAtual.querySelectorAll("td");
  const nota = Number(colunasDaLinhaAtual[1].innerText);
  if (!isNaN(nota) && nota >= 0 && nota <= 10) {
    if (nota > 5) {
      linhaAtual.classList.add("verde");
    } else {
      linhaAtual.classList.add("vermelho");
    }
  } else
    alert(
      `"${colunasDaLinhaAtual[1].innerText}" não é uma nota válida para checar a aprovação do(a) aluno(a) ${colunasDaLinhaAtual[0].innerText}\nA nota tem que ser um valor numérico entre 0 e 10.`
    );
}
