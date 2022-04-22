//ponemos un class para obtener las caracteristicas del objeto
class Producto {
   //creacion de instancias - objeto
    constructor(tipo, precio, stock) {
        //propiedades
        this.tipo = tipo;
        this.precio = precio;
        this.stock = stock;
    }
    //metodo - generalmente son acciones
    mostrar() {
        console.log(`El producto de tipo ${this.tipo} fue ingresado`)
    }
}

const producto1 = new Producto("Porta Sahumerio", 250, 12)

const producto2 = new Producto("Planta con Maceta", 560, 8)

producto1.mostrar()
producto2.mostrar()
const SeccionDeco = [producto1, producto2]
console.log(SeccionDeco)