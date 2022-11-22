# Taller-practico-JS-matematicas
Es un taller para crear formulas matemáticas utilizando JavaScript

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