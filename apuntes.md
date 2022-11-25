## notas sobre el curso
para calcular la area del circulo utilizamos dos objetos math.pow y math.PI
el primero ayuda a elevar un cierto numero a la potencia y necesita 2 argumentos. el primero es el numero que quieres elevar y el segundo es a que potencia.
```js
math.pow(5, 2) = 25;
math.PI
```
Tambien existe esta propiedad ".toFixed()" que sirve para limitar los decimales, ya depende de cuantos quieras.
```js
Math.PI.toFixed(5)
// Ejemplo:
altura = Math.sqrt((Math.pow(lado01, 2)) - (Math.pow(base01, 2)) / 4).toFixed(5);
```
### se pone hasta el final de toda la ecuación para que el resultado en este caso solo salga con 5 decimales. O tienes que encerrar en un parentesis la operación que quieres reducir los decimales.
para no tener decimales puedes utilizar
```js
.toFixed(0);
Math.floor(Math.sqrt((Math.pow(lado01, 2)) - (Math.pow(base01, 2)) / 4));
```
## resolvi el reto.
consistia en hacer una calculadora de descuentos pero ahora ya los resultados se deben ver en la pantalla no en la consola y ademas el usuario puede poder el precio y el descuento.
### en HTML es 
```html
<h1>Taller de Matemáticas con JavaScript </h1>
    <p>
        Por favor abre la consola del inspector de elementos
    </p>
    <input id="inputPrecio" placeholder="Escribe el precio real ">
    <input id="inputDescuento" placeholder="Escribe el descuento">
    <button id="calcular">Calcular</button>
    <p id="parrafo"></p>
```
### en javaScript es 
```js
const parrafo = document.querySelector('#parrafo');
const precio = document.querySelector('#inputPrecio');
const descuento = document.querySelector('#inputDescuento');
const calcular = document.querySelector('#calcular');
const instruciones = document.querySelector('p');

calcular.addEventListener('click', precioConDescuento);


function precioConDescuento() {
    const precioFinal = (Number(precio.value)) * (100 - Number(descuento.value)) / 100;
    parrafo.innerText = "El precio final es de: $" + precioFinal;
}

instruciones.innerText = "Calculadora de precios con descuento";
```
de esta forma yo pude resolver el reto de inicio del modulo.

### notas de la clase
si en html a los input le poner el type: number, ya en JS no necesitas ponerle Number(input.value) solamente input.value
y el html el for en un label ayuda a que si le das click al label te selecciona el input.
```html
<label for="precio">Precio original de tu producto:</label>
<input id="precio" type="number" placeholder="Escribe el precio">
```

### reto hacer cupones donde el descuento ya este establecido.
asi se comenta en html
```html
   <!--  -->
    <button id="descuento20">20% de descuento</button>
    <button id="descuento30">30% de descuento</button>
    <button id="descuento50">50% de descuento</button>
```
```js

const inputPrecio = document.querySelector('#precio');
const pResult = document.querySelector('#result');
const primerDescuento = document.querySelector('#descuento20');
const segundoDescuento = document.querySelector('#descuento30');
const tercerDescuento = document.querySelector('#descuento50');

primerDescuento.addEventListener('click', calcularPrimerDescuento);

function calcularPrimerDescuento() {
    const precio = Number(inputPrecio.value);
    const precioDescuento = (precio * (100 - 20)) / 100;

    pResult.innerText = 'Este es tu precio final: $' + precioDescuento;
}

segundoDescuento.addEventListener('click', calcularSegundoDescuento);

function calcularSegundoDescuento() {
    const precio = Number(inputPrecio.value);
    const precioDescuento = (precio * (100 - 30)) / 100;

    pResult.innerText = 'Este es tu precio final: $' + precioDescuento;
}

tercerDescuento.addEventListener('click', calcularTercerDescuento);

function calcularTercerDescuento() {
    const precio = Number(inputPrecio.value);
    const precioDescuento = (precio * (100 - 50)) / 100;

    pResult.innerText = 'Este es tu precio final: $' + precioDescuento;
}
```
### asi lo resolvio el profesor al reto:
haciendo condicionales y con los cupones.
```js
const btn = document.querySelector('#calcular');
const inputPrecio = document.querySelector('#precio');
const inputCupon = document.querySelector('#cupon');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    const precio = Number(inputPrecio.value);
    const cupon = inputCupon.value;

    if (!precio || !cupon) {
        pResult.innerText = 'ERROR! por favor llene corectamente el formulario';
        return;
    }

    let descuento;

    if (cupon == 'Descuento_del_20%') {
        descuento = 20;
    } else if (cupon == 'Descuento_del_30%') {
        descuento = 30;
    } else {
        pResult.innerText = 'ERROR! el cupón no es valido';
        return;
    }

    const precioFinal = (precio * (100 - descuento)) / 100;
    pResult.innerText = 'El precio final con descuento es: $' + precioFinal;
}
```
### En esta otra forma usando un switch:
```js
switch (cupon) {
        case 'Descuento_del_20%':
        descuento = 20;
        break;

        case 'Descuento_del_30%':
        descuento = 30;
        break;

        default:
            pResult.innerText = 'ERROR! el cupón no es válido';
        return;
    }
```
### intento de hacerlo con objetos pero no pude hacerlo funcionar.
```js
const btn = document.querySelector('#calcular');
const inputPrecio = document.querySelector('#precio');
const inputCupon = document.querySelector('#cupon');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

const price = Number(inputPrecio.value);
const descuento = inputCupon.value;

const discounts = {
    'platzivacation': 10,
    'mothersday': 15,
    'independenceday': 20,
    'christmas': 50,
  };

  function calcularPrecioConDescuento() {
    let total;
    let discountOnNumber =  descuento[discounts.value];
  
    if (!discountOnNumber) 
    return pResult.innerText = 'ERROR';
  
    total = (price * (100 - discountOnNumber)) / 100;
  
    return pResult.innerText = 'El precio final con descuento es: $' + total;
  }
```
## Esta es la forma correcta de resolver el reto con objetos.
```js
const cuponesObj = {
    'Descuento_20%': 20,
    'Descuento_30%': 30,
    'Descuento_50%': 50,
}

function calcularPrecioConDescuento() {
    const precio = Number(inputPrecio.value);
    const cupon = inputCupon.value;

    if (!precio || !cupon) {
        pResult.innerText = 'ERROR! por favor llene corectamente el formulario';
        return;
    }

    let descuento;

    if (cuponesObj[cupon]) {
        descuento = cuponesObj[cupon];
    } else {
        pResult.innerText = 'ERROR! el cupón no es valido';
        return;
    }

    const precioFinal = (precio * (100 - descuento)) / 100;
    pResult.innerText = 'El precio final con descuento es: $' + precioFinal;
}
```
### esta es la forma de utilizar Array con el metodo de filter. (Nos devuelve un Array con todos los objetos)
```js
cuponesLista = [];
cuponesLista.push({
    nombre: 'Descuento_20%',
    descuento: 20,
});
cuponesLista.push({
    nombre: 'Descuento_30%',
    descuento: 30,
});
cuponesLista.push({
    nombre: 'Descuento_50%',
    descuento: 50,
});

function calcularPrecioConDescuento() {
    const precio = Number(inputPrecio.value);
    const cupon = inputCupon.value;

    if (!precio || !cupon) {
        pResult.innerText = 'ERROR! por favor llene corectamente el formulario';
        return;
    }

    let descuento;

    function isCuponInArray(elementoCupon) {
       return elementoCupon.nombre == cupon;
    }

    const cuponInArray = cuponesLista.filter(isCuponInArray);

    if (cuponInArray.length > 0) {
        descuento = cuponInArray[0].descuento;
    } else {
        pResult.innerText = 'ERROR! el cupón no es valido';
        return;
    }

    const precioFinal = (precio * (100 - descuento)) / 100;
    pResult.innerText = 'El precio final con descuento es: $' + precioFinal;
}
```
### con el metodo de find este de te vuelve solo un objeto.

```js
const cuponInArray = cuponesLista.find(isCuponInArray);

    if (cuponInArray) {
        descuento = cuponInArray.descuento;
    } else {
        pResult.innerText = 'ERROR! el cupón no es valido';
        return;
    }
 ```
    De esta forma te devuelve la primera coincidencia el primer objeto que coincida.

### La formula para encontrar el promedio usando un array y un ciclo for.
```js
let arrayEdades = [13,13,24,45,34,34,23,23,23,23,26,28,29,27,12,12,30,17,18,20];

function sumaPromedio () {

    let sumaEdades = 0;
    let promedio;

    for (let i = 0; i < arrayEdades.length; i++) {
       promedio = (sumaEdades + arrayEdades[i]) / arrayEdades.length;
    }
}

sumaPromedio();
console.log('El total de edad es de: ' + sumaEdades + ' años');
console.log('El promedio de edad es de: ' + promedio + ' años');
```
El profesor lo resolvio asi:
```js
function calcularPromedio (lista) {

    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }

   const promedio = sumaLista / lista.length;
    console.log('El promedio es de ' + promedio);
    return promedio;
}
```
### Metodo reduce.
```js
let lista = [13,13,24,45,34,34,23,23,23,23,26,28,29,27,12,12,30,17,18,20];

function calcularPromedio () {

    function sumarTodosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarTodosElementos);

    promedio = sumaLista / lista.length;
}

calcularPromedio();
console.log('El promedio es de ' + promedio);
```
En esta forma ya tienes un array y lo puedes ver desde studio code. (no se porque al promedio si le pongo let o const al corrarlo me dice que no esta definido.)

la forma del profesor:
```js
function calcularPromedio (lista) {

    function sumarTodosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarTodosElementos);
    const promedio = sumaLista / lista.length;
    console.log('El promedio es de ' + promedio);
    return promedio;
}

// arrow function
// const sumarTodosElementos = (valorA, nuevoV) => {
//  return valorA + nuevoV;
// };

    // o de esta forma
// const sumarTod = (valorA, valorN) => valorA + valorN;

// const sumaLista = lista.reduce((valorA, valorN) => valorA + valorN);

```
Es importante decir que lo que hizo el ciclo for donde sumamos los valores del array el metodo reduce hace lo mismo debe recibir una función con dos parametros el valor que va acumulando y el nuevo valor.

### si un numero es o no es par.
De esta forma con las function arrows.
```js
const esPar = arr => arr.length % 2 ? false : true;

console.log(esPar([1,2,3,4]));
```
# asi se calcula la mediana con JS
```js
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

function esPar(lista) {
    return !(lista.length % 2);
}
function esImPar(lista) {
    return lista.length % 2;
}

function calcularMediana(lista) {
    const listaEsPar = esPar(lista);

    if (listaEsPar) {
        const indexMitad1ListaPar = (lista.length / 2) - 1;
        const indexMitad2ListaPar = lista.length / 2;
        const listaMitades = [lista[indexMitad1ListaPar], lista[indexMitad2ListaPar]];
        calcularPromedio(listaMitades)
        
    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}

console.log(calcularMediana([10,20,30]));
console.log(calcularMediana([10,20,30,40]));
```
esta forma es un poco dificil de entender es la versión 1,0
```js
if (listaEsPar) {
        const mitad1ListaPar = lista[(lista.length / 2) - 1];
        const mitad2ListaPar = lista[lista.length / 2];
        const listaMitades = [mitad1ListaPar, mitad2ListaPar];
        calcularPromedio(listaMitades)
    }
        // o puede ser
        if (listaEsPar) {
        const indexMitad1ListaPar = (lista.length / 2) - 1;
        const indexMitad2ListaPar = lista.length / 2;
        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);
        calcularPromedio(listaMitades)
        }
```
Este vez se cambian ya no tienes un index sino que directamente le pasas la posicion a tu variable.
O puedes crear una nueva array vacia y con .push enviarle el contenido de los dos index.

## Metodo .sort este metodo ordena una lista desordenada.
```js
function OrdenarLista(listaDesordenada) {
    function ordenarListaSort(valorA, valorN) {
        if (valorA > valorN) {
            return 1;
        } else if (valorA == valorN) {
            return 0;
        } else if (valorA < valorN) {
            return -1;
        }
    }
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}
// de esta forma es mas sencillo obtener el 1, 0, -1
function OrdenarLista(listaDesordenada) {
    function ordenarListaSort(valorA, valorN) {
        return valorA - valorN;
    }
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}
```
este metodo sort le tienes que mandarle una funcion que te devuelva un 1 si quieres que mueva el numero menor antes del numero acumulado y si son iguales o en acumulado es menor al siguiente lo deja ahi.
"si quieres ordenar de mayor a menor la lista solo devuelveprimero -1 0 1. y de menor a mayor es 1, 0, -1.".
### Si ya lo entiendes es importante esto.
```js
const lista = listaDesordenada.sort((a,b) => a-b);
```
esto significa que estan ordenando una lista "array" para cuando aparezca ese tipo de funciones.

## Moda funcion para calcular cuantas coincidencias de elementos hay en nuestra lista.
```js
function calcularModa(lista) {
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];

        if (listaCount[elemento]) {
        listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }

    console.log(listaCount);
}
calcularModa([1,2,3,4,5,1,1,3,3,3,2,2,4,4,4,5,]);
```
### función calcular Moda
```js
function calcularModa(lista) {
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
console.log(calcularModa([1,2,3,4,5,1,1,3,3,3,2,2,4,4,4,5,3,3,3]));

function ordenarListaBidemensional(listaDesordenada, i) {
    function ordenarListaSort(valorA, valorN) {
        return valorA[i] - valorN[i];
    }
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}
const listaBi2 = [['a',100], ['b',20], ['c',30],]
```
De esta forma ya se puede calcular la moda pero necesitas ordenar esos arrays por eso el .sort, le pasas un nueva busqueda que es "i" donde tu escribes la pocicion del array que queres buscar.
cuando veas "listaArray.length -1" significa que buscas la ultima pocicion del array.
tambien el "Object.entries" crea un array de arrays osea "una lista de listas" una lista Bidimencional.
```js
function solution(obj) {
  const array = [];
  const objEntries = Object.entries(obj);
  for (let i = 0; i < objEntries.length; i++) {
    array.push({
      id: objEntries[i][0],
      name: objEntries[i][1],
    });
  }
  return array;
}
```
es un ejercicio donde tienes que utilizar el object.entries

Ahora sí, vamos paso a paso implementando el promedio ponderado en JavaScript:

Definir el conjunto de números junto al peso de cada elemento
Para esto vamos a crear un array de objetos llamado notes. Cada objeto tendrá tres valores: course con el nombre de la materia (aunque en realidad no lo utilizaremos 😅), note con la nota de la materia y credit con los créditos de la materia.
```js
const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];
```
Ahora vamos paso a paso construyendo nuestra máquina para sacar promedios ponderados.

Multiplicar cada número de la lista por su peso
Vamos a usar de nuevo el método map de los arrays. Crearemos un nuevo arreglo de solo números a partir de multiplicar cada nota con sus créditos.
```js
const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});
```
Sumar todos los elementos del arreglo de elementos multiplicados por su peso
Vamos a usar de nuevo el método reduce de los arrays.

Crearemos una nueva variable sumOfNotesWithCredit que tenga como resultado la suma de todos los elementos del arreglo notesWithCredit. Recuerda que la función reduce recibe una función con dos parámetros: el valor acumulado (que para evitar errores debemos inicializar con 0) y el nuevo elemento de los arrays.
```js
const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);
```
Sumar todos los pesos (créditos)
Sí, otra vez map y reduce. Vamos a crear un nuevo arreglo credits únicamente con los créditos de cada materia y otra nueva variable sumOfCredits que recorra el arreglo credits y sume sus elementos.
```js
const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);
```
Hacer la división entre ambas “sumas”
Lo último que nos falta es dividir nuestra variable sumOfNotesWithCredit sobre la variable sumOfCredits.
```js
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
console.log(promedioPonderadoNotasConCreditos);
```
En este caso, el promedio ponderado de una nota de 10 con créditos de 2, otra nota de 8 con un crédito de 5 y una última nota de 7 con créditos de 5 nos da como resultado 7.916.

La media aritmética sin tener en cuenta el peso de cada nota habría sido 8.333.

### notas dos
recuerda cuando isas if si quieres usar otro if, entonces al primero le tienes que poner un "return;" vacio.
por otra parte puedes utilizar un else if y continuar con lo que quieras.