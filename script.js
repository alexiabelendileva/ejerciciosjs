function capturar() {
    function Producto(nombre, precio, stock) {
        //propiedades
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.seccion = 3;
    }

    let nombreProd = document.getElementById("nombre").value;
    let precioProd = document.getElementById("precio").value;
    let stockProd = document.getElementById("stock").value;

    if (isNaN(nombreProd)) {
        console.log(nombreProd)
    } else {
        alert('Ingrese únicamente palabras que identifiquen al producto')
    }
    if (precioProd != isNaN && precioProd > -1 && precioProd != "") {
        console.log(precioProd);
    } else {
        alert('ingrese números válidos para el precio')
    }
    if (stockProd != isNaN && stockProd > -1 && stockProd != "") {
        console.log(stockProd);
    } else {
        alert('ingrese números válidos para el stock')
    }

    nuevoProd = new Producto(nombreProd, precioProd, stockProd);
    console.log(nuevoProd);
    agregoProd();
}
let guardarProd = []

function agregoProd() {
    guardarProd.push(nuevoProd)
    console.log(guardarProd)
    document.getElementById("tabla").innerHTML += ' <tbody><td>'+nuevoProd.nombre+'</td><td>'+nuevoProd.precio+'</td><td>'+nuevoProd.stock+'</td></tbody>';
}