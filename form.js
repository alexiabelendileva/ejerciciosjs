//buscador

let buscador = document.getElementById('buscador')

buscador.addEventListener('input', ()=>{
    console.log(buscador.value)
})

//
let form = document.getElementById('idForm')
let arrayContacto = []
document.getElementById('boton1').addEventListener('click', (e) => {
})
form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target)
    let name = document.getElementById('name').value
    let mail = document.getElementById('mail').value
    let num = document.getElementById('num').value
    let asunto = document.getElementById('asunto').value
    let msj = document.getElementById('msj').value

    let user = {name:name, mail:mail,num:num,asunto:asunto,msj:msj}
    arrayContacto.push(user)
    console.log(arrayContacto)
    form.reset()
})
