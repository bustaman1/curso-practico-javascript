//Helpers

function esPar(numerito){
    return(numerito%2===0);
 };
 
function calcularMedia(lista){
 
     const sumaLista = lista.reduce(
         function(valorAcumulado=0,nuevoElemento){
             return valorAcumulado+nuevoElemento;
         }
     );
 
     let mediana =sumaLista/lista.length;  
     return mediana;
 }
//Calculadora de Mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
    if(esPar(lista.length)){
        const personitamitad1=lista[mitad-1];
        const personitamitad2=lista[mitad];
        const mediana = calcularMedia([personitamitad1,personitamitad2]);
        return mediana;
    }else{
        const personitamitad=lista[mitad];
        return personitamitad;
    }
}

//Mediana General
const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA,salaryB){
        return salaryA-salaryB;
    }
);
const medianaGeneralCol= medianaSalarios(salariosColSorted);

//Mediana del Top 10%

const spliceStart=(salariosColSorted.length * 0.90);
const spliceCount=salariosColSorted.length- spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);

const medianaTop10Col= medianaSalarios(salariosColTop10);

console.log(
    medianaGeneralCol,
    medianaTop10Col,
);