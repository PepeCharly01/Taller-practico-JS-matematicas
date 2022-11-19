console.group('Cuadrado')

// cuadrado
const ladoCuadrado = 5;

// perimetro del cuadrado
const perimetroCuadrado = ladoCuadrado * 4;

// area del cuadrado
const areaCuadrada = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrada,
});
console.groupEnd('Cuadrado')

// funcion para el cuadrado
function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado,
    };
}
calcularCuadrado(5)

console.group('Triangulo')
// triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
// perimetro triangulo.
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;

// area del triangulo
const alturaTriangulo = 5.5;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
});
console.groupEnd('Triangulo')

// una funcion que hace lo mismo.
function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    };
}
calcularTriangulo(6,6,4,5.5)

console.group('Rectangulo')
// rectangulo.
const ladoAltura = 4;
const ladoAncho = 12;

// perimetro del rectangulo.
const perimetroRectangulo = (ladoAltura * 2) + (ladoAncho * 2);

// area del rectangulo.
const areaRectangulo = ladoAltura * ladoAncho;

console.log({
    ladoAltura,
    ladoAncho,
    perimetroRectangulo,
    areaRectangulo,
});
console.groupEnd('Rectangulo')

// funcion del rectangulo.
function calcularRectangulo(altura, ancho) {
    return {
        perimetro: (altura * 2) + (ancho * 2),
        area: altura * ancho,
    }
}
calcularRectangulo(4,12)