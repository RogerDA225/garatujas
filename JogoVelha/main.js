const bt11 = document.querySelector("main :nth-child(1)")
const ox = ["O", "X"]
let turn = 0

bt11.onclick = function() {
    if (bt11.textContent.trim() != '') return
    bt11.textContent = ox[turn % 2]
    turn++
}