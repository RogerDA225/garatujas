const gaveta = document.querySelector('.toggle-drawer')
const drawer = document.querySelector('#drawer')

gaveta.addEventListener('click', () => {
    const aberto = drawer.classList.toggle('aberto')
    gaveta.setAttribute('aria-expanded', aberto)
})