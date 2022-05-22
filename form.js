/*let buscador = document.getElementById('buscador')

buscador.addEventListener('input', ()=>{
    console.log(buscador.value)
})*/


let form = document.getElementById('idForm')

let arrayContacto = JSON.parse(localStorage.getItem('cliente')) ?? []

document.getElementById('boton1').addEventListener('click', (e) => {
    localStorage.setItem('cliente', JSON.stringify(arrayContacto))
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
    Swal.fire({
        icon: 'success',
        title: 'Has enviado el formulario con éxito',
        text: 'Mientas esperas nuestra respuesta, puedes visitar el sitio web y revisar las ofertas increíbles!',
      })
})
