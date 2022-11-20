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