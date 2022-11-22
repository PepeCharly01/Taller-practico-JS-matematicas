const btn = document.querySelector('#calcular');
const inputPrecio = document.querySelector('#precio');
const inputCupon = document.querySelector('#cupon');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

const price = Number(inputPrecio.value);
const descuento = inputCupon.value;

const discounts = {
    platzivacation: 10,
    mothersday: 15,
    independenceday: 20,
    christmas: 50,
  };

  function calcularPrecioConDescuento() {
    let total;
    let discountOnNumber =  descuento[discounts.value];
  
    if (!discountOnNumber) 
    return pResult.innerText = 'ERROR';
  
    total = (price * (100 - discountOnNumber)) / 100;
  
    return pResult.innerText = 'El precio final con descuento es: $' + total;
  }