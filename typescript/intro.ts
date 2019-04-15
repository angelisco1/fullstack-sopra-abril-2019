// var nombre: string = "Ángel";
// nombre = "3";
// console.log("Me llamo " + nombre);

// // Union de tipos
// var variosTipos: number | boolean = true;
// variosTipos = 3;
// // variosTipos = "Un string";

// // Alias
// type numBool = number | boolean;
// var otraVariosTipos: numBool;
// otraVariosTipos = false;

// // Sin tipo y sin inicializar coge como tipo: any
// var esVerdad;
// esVerdad = 1;
// esVerdad = "si";

// // Template literals
// var apellido = "Villalba";
// console.log("Me llamo " + nombre + " " + apellido);
// console.log(`Me llamo:
//  ${nombre} ${apellido}`);

// // Desestructuración
// var serie = {
//   titulo: "Game of Thrones",
//   vista: false
// }
// // var titulo = serie.titulo;
// // var vista = serie.vista;
// var { titulo, vista } = serie;

// var personajes = ["Robb", "Arya", "Sansa", "Bran", "Rickon", "Jon"];

// var [robb, arya, ...restoPersonajes] = personajes;

// console.log(`Mis personajes favoritos de ${titulo} son: ${robb} y ${arya}`);

// // Condicionales
// var num = 1;
// if (num == 1) {
//   console.log("Es 1");
// } else if (num == 2) {
//   console.log("Es 2");
// } else {
//   console.log("Es otro");
// }

// switch(num) {
//   case 1:
//     console.log("Es 1");
//     break;
//   case 2:
//     console.log("Es 2");
//     break;
//   default:
//     console.log("Es otro");
// }


// // Bucles
// for (var i = 0; i < personajes.length; i++) {
//   console.log(personajes[i]);
// }

// for (let pos in personajes) {
//   // La variable 'pos' obtiene la posición
//   console.log(`${pos}: ${personajes[pos]}`)
// }

// for (let val of personajes) {
//   // La variable 'val' obtiene el valor
//   console.log(val)
// }

// personajes.forEach(function (val, pos) {
//   console.log(val);
// });

// var index = 1;
// while (index < 3) {
//   console.log('Hola a todos');
//   index++;
// }

// // var n1: number = 2;
// // var n2: number | string = "2";
// // console.log(n1 + n2); // Concatena los valores
// // console.log(n1 == n2);

// // Funciones


// function getNumLoteria(...nums: Array<number>): string {
//   // console.log("NUMS: ", nums);
//   return nums
//     .sort(function(a, b) {
//       return a-b;
//     })
//     .join(", ");
// }

// let numLoteria = getNumLoteria(12, 5);
// console.log(numLoteria);
// console.log(getNumLoteria(12, 2, 5, 44, 36));


// // Funcion flecha
// // personajes.forEach(function (val, pos) {
// //   console.log(val);
// // });

// // personajes.forEach(val => {
// //   console.log(val)
// // });

// function esPar (n) {
//   return n % 2 === 0;
// }


// let numPares = [1, 2, 3, 4, 5].filter(esPar);

// function getDatos(cb: Function) {
//   console.log("Dentro de getDatos");
//   setTimeout(() => {
//     // return ['Un dato', 'Otro dato'];
//     cb(['Un dato', 'Otro dato']);
//   }, 2000);
// }

// console.log('Antes de ejecutar getDatos');
// // let misDatos = getDatos();
// // console.log(misDatos);
// var muestraDatos = datos => {
//   console.log(datos);
// }
// getDatos(muestraDatos);

// Clases e interfaces

import { Producto } from './producto';
import { CestaCompra } from './cesta';




// let oneplus = new Producto(1, "One Plus 6T", 500, new Date(2019, 5, 20));
let oneplus = new Producto("One Plus 6T", 500, new Date(2019, 5, 20));

oneplus.toString();


let miCesta = new CestaCompra();
miCesta.addProducto(oneplus);
console.log(miCesta);

console.log(CestaCompra.siguienteId)
