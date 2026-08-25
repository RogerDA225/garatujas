const btns = document.querySelectorAll("main button")
const xo = ["X", "O"]
let turn = 0

function adicionaEventoClickBotoes(bt) {
    bt.onclick = function() {
    if (bt.textContent.trim() != '') return
    bt.textContent = xo[turn % 2]
    const col = index % 3
    const lin = index / 3
    turn++
  }
}
btns.forEach(adicionaEventoClickBotoes)