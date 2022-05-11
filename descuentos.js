function calcularPrecioConDescuentoDeCupon (precio, cupon) {
    let descuento = 0;

    const cupones = ["cupon-1", "cupon-2", "cupon-3"];

    switch (cupon) {
        case cupones[0]:
            descuento += 15;
        break;
        case cupones[1]:
            descuento += 25;
        break;
        case cupones[2]:
            descuento += 50;
        break;
        default:
            descuento = 0;
    }

    descuento *= 1;

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const resultP = document.getElementById("ResultP");
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    var inputCoupon = document.getElementById("InputCoupon");
    var couponValue = inputCoupon.value;

    const priceWithDiscount = calcularPrecioConDescuentoDeCupon(priceValue, couponValue);

    if (priceWithDiscount == priceValue) {
        resultP.innerHTML = "Cupón no válido :("
    } else {
        resultP.innerText = "El precio a pagar es de: $" + priceWithDiscount;
    }
}