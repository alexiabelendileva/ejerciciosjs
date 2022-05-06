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

const prod1 = new Producto('JugueteCamion', 'Camioncito', 680, 15)
const prod2 = new Producto('Peluche', 'Peluchin', 380, 5)
const prod3 = new Producto('Carrito', 'Cacharro', 80, 4)
const prod4 = new Producto('Maceta', 'Macetin', 580, 7)
const prod5 = new Producto('Botella', 'Botellin', 180, 8)

let arrayProd = [prod1, prod2, prod3, prod4, prod5]
let listaProd = document.getElementById('listaProd')
let Precio = document.getElementById('Precio')
let Stock = document.getElementById('Stock')
//arrayProd.push(prod1)

let buscador = document.getElementById("buscador")
buscador.addEventListener('change', () => {
    /*let Buscador = buscador.value*/
    console.log(Buscador.toLowerCase())
    let Filtro = arrayProd.filter(producto => producto.tipo.includes(buscador.value))

    Filtro.forEach(producto =>{
        document.getElementById("lista").innerHTML += ' <tbody><td>'+producto.tipo+'</td><td>'+producto.marca+'</td><td>'+producto.stock+'</td></tbody>';
    })
})

