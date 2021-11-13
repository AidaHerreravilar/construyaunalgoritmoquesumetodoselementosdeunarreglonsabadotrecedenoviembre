//CONSTRUYA UN ALGORITMO QUE SUME TODOS LOS ELEMENTOS
//DE UN ARREGLO DE TAMAÑO N.
//LA DIMENSION DEL ARREGLO ES INGRESADA POR EL USUARIO.
//LOS ELEMENTOS (NÙMEROS) DEL ARREGLO SON INGRESADOS POR EL USUARIO

let dimensionArreglo : number = Number(prompt(`Ingrese la dimensión del arreglo: `));
let arreglo : number[] = new Array (dimensionArreglo);
let indice : number;
let resultado : number = 0;
for (indice = 0; indice < dimensionArreglo; indice++) {
arreglo[indice] = Number(prompt(`Indique el nro que va en la posición ${indice}: `));
resultado += arreglo[indice];
}
for (indice = 0; indice < dimensionArreglo; indice++) {
console.log(`El número en la posición ${indice} es: ${arreglo[indice]}`);
}
console.log(`La suma del arreglo es: ${resultado}`);
