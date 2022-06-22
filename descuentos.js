// const precioOriginal=120;
// const descuento=18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = (100 - descuento)/100;
    const precioConDescuento=precio*porcentajePrecioConDescuento;
    return precioConDescuento;

}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// })

function ButtonPriceDiscount(){
    const inputPrice =document.getElementById("InputPrice");
    const priceValue=inputPrice.value;
    const inputDiscount =document.getElementById("InputDiscount");
    const discountValue=inputDiscount.value;
    const precioConDescuento=calcularPrecioConDescuento(priceValue,discountValue)

    const resultP = document.getElementById("ResultPrice")
    resultP.innerText="Tu precio con descuento son $"+precioConDescuento;
}