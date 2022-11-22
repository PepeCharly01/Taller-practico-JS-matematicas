const btn = document.querySelector('#calcular');
const inputPrecio = document.querySelector('#precio');
const inputCupon = document.querySelector('#cupon');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

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

    const cuponInArray = cuponesLista.find(isCuponInArray);

    if (cuponInArray) {
        descuento = cuponInArray.descuento;
    } else {
        pResult.innerText = 'ERROR! el cupón no es valido';
        return;
    }

    const precioFinal = (precio * (100 - descuento)) / 100;
    pResult.innerText = 'El precio final con descuento es: $' + precioFinal;
}