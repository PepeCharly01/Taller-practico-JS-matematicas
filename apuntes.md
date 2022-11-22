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