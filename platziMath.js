const PlatziMath = {};

PlatziMath.esPar = function esPar(lista) {
    return !(lista.length % 2);
}
PlatziMath.esImPar = function esImPar(lista) {
    return lista.length % 2;
}

PlatziMath.calcularModa = function calcularModa(lista) {
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];

        if (listaCount[elemento]) {
        listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }

    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidemensional(listaArray, 1);
    const listaMaxNumber = listaOrdenada[listaArray.length -1];
    const moda = listaMaxNumber[0];
    // console.log({listaCount, listaArray, listaOrdenada, listaMaxNumber});
    // console.log('La moda es ' + listaMaxNumber[0]);
    return moda;

}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
    const lista = PlatziMath.ordenarLista(listaDesordenada);
    const listaEsPar = PlatziMath.esPar(lista);

    if (listaEsPar) {
        const mitad1ListaPar = lista[(lista.length / 2) - 1];
        const mitad2ListaPar = lista[lista.length / 2];
        const listaMitades = [mitad1ListaPar, mitad2ListaPar];
        const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
        return medianaListaPar;
        
    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        return medianaListaImpar;
    }

}

PlatziMath.calcularPromedio = function calcularPromedio (lista) {

    function sumarTodosElementos(valorA, valorN) {
        return valorA + valorN;
    }

    const sumaLista = lista.reduce(sumarTodosElementos);

// const sumaLista = lista.reduce((valorA, valorN) => valorA + valorN);

    const promedio = sumaLista / lista.length;
    // console.log('El promedio es de ' + promedio);
    return promedio;
}

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorA, valorN) {
        return valorA - valorN;
    }
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}

PlatziMath.ordenarListaBidemensional = function ordenarListaBidemensional(listaDesordenada, i) {
    function ordenarListaSort(valorA, valorN) {
        return valorA[i] - valorN[i];
    }
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}
const listaBi2 = [['a',100], ['b',20], ['c',30],]

const notes = [
    {
        course: "Educaci??n Fis??ca",
        note: 10,
        credit: 2,
    },
    {
        course: "Programaci??n",
        note: 8,
        credit: 5, 
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5, 
    },
];

const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function(sum = 0, newVal) {
        return sum + newVal;
    }
);

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;