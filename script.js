let monto= parseInt(prompt('ingrese el monto'))
let cuotas= parseInt(prompt('ingrese cantidad de cuotas (pueden ser desde 1 a 12)'))
let pagoTotal=0
function pagoCuotas(monto,cuotas){
    if (cuotas<=6){
        pagoTotal=monto/cuotas;
        alert('No tiene recargo, por lo tanto, el monto a abonar en '+cuotas+' meses es de '+pagoTotal+'.')
    }else if (cuotas<=12){
        pagoTotal=(monto/cuotas)*1.1;
        alert('Tiene un recargo del 10%. El monto a abonar en '+cuotas+' meses es de '+pagoTotal+'.')
    }else{
        alert('Ingrese cantidad de cuotas válido')
    }
}
pagoCuotas(monto,cuotas);