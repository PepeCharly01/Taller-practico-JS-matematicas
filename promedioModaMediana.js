function esPar(lista) {
    return !(lista.length % 2);
}
function esImPar(lista) {
    return lista.length % 2;
}

function calcularMediana(listaDesordenada) {
    const lista = ordenarLista(listaDesordenada);
    const listaEsPar = esPar(lista);

    if (listaEsPar) {
        const mitad1ListaPar = lista[(lista.length / 2) - 1];
        const mitad2ListaPar = lista[lista.length / 2];
        const listaMitades = [mitad1ListaPar, mitad2ListaPar];
        const medianaListaPar = calcularPromedio(listaMitades);
        return medianaListaPar;
        
    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        return medianaListaImpar;
    }

}

function calcularPromedio (lista) {

    function sumarTodosElementos(valorA, valorN) {
        return valorA + valorN;
    }

    const sumaLista = lista.reduce(sumarTodosElementos);

// const sumaLista = lista.reduce((valorA, valorN) => valorA + valorN);

    const promedio = sumaLista / lista.length;
    console.log('El promedio es de ' + promedio);
    return promedio;
}

function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorA, valorN) {
        return valorA - valorN;
    }
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}
