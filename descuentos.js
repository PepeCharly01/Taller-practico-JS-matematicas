const btn = document.querySelector('#calcular');
const inputPrecio = document.querySelector('#precio');
const inputDescuento = document.querySelector('#descuento');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    const precio = Number(inputPrecio.value);
    const descuento = Number(inputDescuento.value);

    if (!precio || !descuento) {
        pResult.innerText = 'ERROR! por favor llene corectamente el formulario';
        return;
    }
    if (descuento > 100) {
        pResult.innerText = 'ERROR! el descuento no puede ser mayor de un 100%';
        return;
    }

    const precioFinal = (precio * (100 - descuento)) / 100;

    pResult.innerText = 'El precio final con descuento es: $' + precioFinal;
}