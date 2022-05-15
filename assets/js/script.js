class Producto {
    constructor(tipo, marca, precio, stock) {
        this.tipo = tipo
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

const prod1 = new Producto('camion', 'camioncito', 680, 15)
const prod2 = new Producto('peluche jjk', 'peluche jjk', 390, 5)
const prod3 = new Producto('pelota spider-man', 'pelota spider', 520, 4)
const prod4 = new Producto('maceta', 'maceta flork', 450, 7)
const prod5 = new Producto('botella', 'botella estampada', 240, 8)
const prod6 = new Producto('taza', 'taza flork', 760, 14)
const prod7 = new Producto('remera hanamichi', 'remera hanamichi', 1370, 23)
const prod8 = new Producto('buzo bakugo', 'buzo bakugo', 2985, 13)
//
let arrayProd = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8]
let carrito = []
let array = JSON.parse(localStorage.getItem('carrito')) ?? []

let buscaProd = document.getElementById('buscaProd')
//

//
let boton1 = document.getElementById('boton1')
let boton2 = document.getElementById('boton2')
let boton3 = document.getElementById('boton3')
let boton4 = document.getElementById('boton4')
let boton5 = document.getElementById('boton5')
let boton6 = document.getElementById('boton6')
let boton7 = document.getElementById('boton7')
let boton8 = document.getElementById('boton8')
//
boton1.addEventListener('click', () => {
    
    if (array.some(producto => producto.tipo == "camion")){
        let indice = array.findIndex(producto => producto.tipo == "camion")
        array[indice].cant++
    }else{
    let arrayProd1 = {
        ...prod1,
        cant: 1
    }
    array.push(arrayProd1)
}
    localStorage.setItem('carrito', JSON.stringify(array))
    console.log(array)
})
boton2.addEventListener('click', () => {
    
    if (array.some(producto => producto.tipo == "peluche jjk")){
        let indice = array.findIndex(producto => producto.tipo == "peluche jjk")
        array[indice].cant++
    }else{
    let arrayProd2 = {
        ...prod2,
        cant: 1
    }
    array.push(arrayProd2)
}
    localStorage.setItem('carrito', JSON.stringify(array))
    console.log(array)
})
boton3.addEventListener('click', () => {
    
    if (array.some(producto => producto.tipo == "pelota spider-man")){
        let indice = array.findIndex(producto => producto.tipo == "pelota spider-man")
        array[indice].cant++
    }else{
    let arrayProd3 = {
        ...prod3,
        cant: 1
    }
    array.push(arrayProd3)
}
    localStorage.setItem('carrito', JSON.stringify(array))
    console.log(array)
})
boton4.addEventListener('click', () => {
    
    if (array.some(producto => producto.tipo == "maceta")){
        let indice = array.findIndex(producto => producto.tipo == "maceta")
        array[indice].cant++
    }else{
    let arrayProd4 = {
        ...prod4,
        cant: 1
    }
    array.push(arrayProd4)
}
    localStorage.setItem('carrito', JSON.stringify(array))
    console.log(array)
})
boton5.addEventListener('click', () => {
    
    if (array.some(producto => producto.tipo == "botella")){
        let indice = array.findIndex(producto => producto.tipo == "botella")
        array[indice].cant++
    }else{
    let arrayProd5 = {
        ...prod5,
        cant: 1
    }
    array.push(arrayProd5)
}
    localStorage.setItem('carrito', JSON.stringify(array))
    console.log(array)
})
boton6.addEventListener('click', () => {
    
    if (array.some(producto => producto.tipo == "taza")){
        let indice = array.findIndex(producto => producto.tipo == "taza")
        array[indice].cant++
    }else{
    let arrayProd6 = {
        ...prod6,
        cant: 1
    }
    array.push(arrayProd6)
}
    localStorage.setItem('carrito', JSON.stringify(array))
    console.log(array)
})
boton7.addEventListener('click', () => {
    
    if (array.some(producto => producto.tipo == "remera hanamichi")){
        let indice = array.findIndex(producto => producto.tipo == "remera hanamichi")
        array[indice].cant++
    }else{
    let arrayProd7 = {
        ...prod7,
        cant: 1
    }
    array.push(arrayProd7)
}
    localStorage.setItem('carrito', JSON.stringify(array))
    console.log(array)
})
boton8.addEventListener('click', () => {
    
    if (array.some(producto => producto.tipo == "buzo bakugo")){
        let indice = array.findIndex(producto => producto.tipo == "buzo bakugo")
        array[indice].cant++
    }else{
    let arrayProd8 = {
        ...prod8,
        cant: 1
    }
    array.push(arrayProd8)
}
    localStorage.setItem('carrito', JSON.stringify(array))
    console.log(array)
})
//
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

contenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-info')) {
        console.log('Estás aumentando')
        contador++
        span.textContent = contador
    }
    if (e.target.classList.contains('btn-danger')) {
        console.log('Estás disminuyendo')
        contador--
        span.textContent = contador
    }
})