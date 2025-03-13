// //  Transformação com Mouse Over

// Objetivo: Criar um efeito visual ao passar o mouse sobre um quadrado.
// Requisitos:
// Crie um quadrado azul usando HTML e CSS.
// Ao passar o mouse sobre o quadrado (evento onMouseOver):
// O quadrado deve se tornar transparente usando rgba.
// Uma imagem oculta atrás do quadrado deve aparecer (use z-index).
// Quando o mouse sair do quadrado, ele deve retornar ao estado original.

function deixaTransparente(evento) {
  evento.target.style.backgroundColor = " rgba(0, 0, 255, 0.11)";
}
function voltaAoNormal(evento) {
  evento.target.style.backgroundColor = "blue";
}
