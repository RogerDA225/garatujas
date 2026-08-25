const btns = document.querySelectorAll("main button")
const xo = ["X", "O"]
let turn = 0, contx = 0, conto = 0
const colbtx = new Array(5)
const linbtx = new Array(5)
const colbto = new Array(4)
const linbto = new Array(4)

function adicionaEventoClickBotoes(bt) {
    bt.onclick = function() {
    if (bt.textContent.trim() != '') return
    bt.textContent = xo[turn % 2]
    if (turn % 2 == 0) {
    colbtx[contx] = index % 3
    linbtx[contx] = index / 3
    contx++
    } else {
      colbto[conto] = index % 3
      linbto = index / 3
      conto++
    }
    turn++
  }
}
btns.forEach(adicionaEventoClickBotoes)

function adicionaEventoVitoria() {
    if 
}
