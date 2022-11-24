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