let horariosButton = document.getElementById('horarios_button')
let horarios = document.getElementById('horarios')

horariosButton.addEventListener('click', (e) => {
    e.preventDefault()
    horarios.classList.toggle('display')
})