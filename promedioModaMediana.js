
function calcularPromedio (lista) {

    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }

   const promedio = sumaLista / lista.length;
    console.log('El promedio es de ' + promedio);
    return promedio;
}