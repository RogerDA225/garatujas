const frm = document.querySelector("form")
const inp = document.querySelector("input")
const lst = document.querySelector("ul")

frm.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const valor = inp.value
    if (valor.trim() == "") return
    inp.value = ""
    lst.innerHTML += `
    <li>
     <button>Remover</button>
     <span>${valor}</span>
    </li>
    `
})

lst.addEventListener('click', (ev) => {
    if (ev.target.closest('button')) {
        ev.target.closest('li').remove()
    }
})

