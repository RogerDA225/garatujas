//const valorA = prompt("Qual é o seu nome?", 0)
//const valorB = prompt("Digite um valor: ", 0)
//const resultado = parseInt(valorA) + parseInt(valorB)
//alert("O resultado é: " + resultado)
const bt = document.querySelector("button")
const res = document.querySelector("span")
const inpA = document.querySelector("#valorA")
const inpB = document.querySelector("#valorB")

function soma() {
    const A = inpA.value
    const B = inpB.value
    const R = parseInt(A) + parseInt(B)
    res.innerText = R
}
inpA.onkeypress = soma
inpB.onkeypress = soma
res.onmouseover = soma
bt.onclick = soma