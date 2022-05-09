/*const itemList = document.createElement('li')
itemList.textContent */
class Producto {
    constructor(tipo, marca, precio, stock) {
        this.tipo = tipo
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

const prod1 = new Producto('camion', 'camioncito', 680, 15)
const prod2 = new Producto('peluche', 'peluchin', 380, 5)
const prod3 = new Producto('carrito', 'cacharro', 80, 4)
const prod4 = new Producto('maceta', 'macetin', 580, 7)
const prod5 = new Producto('botella', 'botellin', 180, 8)

let arrayProd = [prod1, prod2, prod3, prod4, prod5]
let buscaProd = document.getElementById('buscaProd')

buscaProd.addEventListener('input', () => {
    let buscador = buscaProd.value
    console.log(buscador.toLowerCase())
    let prodFiltrados = arrayProd.filter(prods => prods.marca.includes(buscador.toLowerCase()))

    prodFiltrados.forEach(prods => {
        prodDiv.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Producto: ${prods.tipo}</h5>
                <p>Marca: ${prods.marca} </p>
                <p>Precio: $${prods.precio} </p>
                <p>Stock: ${prods.stock} </p>
            </div>
        </div>
        `
    })
    document.getElementById("buscaProd").value = ""
})
//CONTADOR
const botonAumentar = document.getElementById('botonAumentar')
const botonDisminuir = document.getElementById('botonDisminuir') 
const span = document.getElementById('span')
const contenedor = document.getElementById('contenedor')
let contador = 0

/*contenedor.addEventListener('click', (e) => {
if (e.target.classList.contains('btn-info')){
    console.log('Estás aumentando')
    contador++
    span.textContent = contador
}
if (e.target.classList.contains('btn-danger')){
    console.log('Estás disminuyendo')
    contador--
    span.textContent = contador
}
})
*/

botonAumentar.addEventListener('click', () => {
    console.log('Estás aumentando')
    contador++
    span.textContent = contador
})
botonDisminuir.addEventListener('click', () => {
    console.log('Estás disminuyendo')
    contador--
    span.textContent = contador
})
