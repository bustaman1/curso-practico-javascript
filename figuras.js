console.log("Hello world");
//codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: "+ladoCuadrado +"cm");
function perimetroCuadrado(lado){
    return lado*4;
};
// console.log("El perimetro del cuadrado es: "+perimetroCuadrado+"cm");
function areaCuadrado(lado){
return lado*lado;
}
// console.log("El area del cuadrado es: "+areaCuadrado+"cm^2");
console.groupEnd();

//codigo del triangulo

console.group("Tringulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTringulo = 5;
// console.log("Los lados del triangulo miden: "
//     +ladoTriangulo1+"cm, "
//     +ladoTriangulo2+"cm, "
//     +baseTriangulo+"cm ");    
// console.log("La altura del triangulo mide: "+alturaTringulo);
function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2 , baseTriangulo){
    return ladoTriangulo1+ ladoTriangulo2 + baseTriangulo;
}
// const perimetroTriangulo= ladoTriangulo1+ ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo mide: "+perimetroTriangulo);
function areaTriangulo(baseTriangulo, alturaTringulo){
    return  baseTriangulo*alturaTringulo/2;
}
// const areaTriangulo=(baseTriangulo*alturaTringulo)/2;
// console.log("El area del triangulo mide: "+areaTriangulo);


console.groupEnd();

//codigo del circulo

console.group("Circulos");

// //Radio
// const radioCirculo=4;
// console.log("El radio del circulo es: "+radioCirculo+"cm");

//Diametro
function diametroCirculo(radio){
    return radio*2
}
// const diametroCirculo = radioCirculo*2;
// console.log("El diametro del circulo es: "+diametroCirculo+"cm");

//PI
const PI = Math.PI;
console.log("Pi es: " +PI);

//Circunferencia
function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio);
    return diametro*PI;

}
// const perimetro = diametroCirculo*PI;
// console.log("El perimetro del circulo es: "+perimetro+"cm");

//Area
function areaCirculo(radio){
    return radio*radio*PI;
}
// const area=PI*radioCirculo*radioCirculo;
// console.log("El area del circulo es: "+area+"cm");

// console.groupEnd();

//AQUI INTERACTUAMOS CON EL HTML

function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
function CalcularPerimetroTriangulo(){
    const input = document.getElementById("InputTringulo");
    const value = input.value;
    const perimetro = perimetroTringulo(value);
    alert(perimetro);
}
function CalcularAreaTriangulo(){
    const input = document.getElementById("InputTringulo");
    const value = input.value;
    const area = areaTringulo(value);
    alert(area);
}