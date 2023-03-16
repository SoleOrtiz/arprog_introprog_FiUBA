/* 
    1. Definir dos variables de tipo numéricas. Realizar las cuatro operaciones
    básicas: suma, resta, multiplicación y división, y mostrar los resultados en
    la consola.

    2. Definir tres cadenas de caracteres: “Argentina”, “Programa”, “4.0”, y una
    constante que contenga un espacio en blanco. Concatenar estas variables
    con la constante y mostrar en consola: “Argentina Programa 4.0”. */

let num1 = parseInt (prompt ("Escribe un número."));
console.log ("El primer número es" + num1);

let num2 = parseInt (prompt ("Ahora escribe otro."));
console.log ("El segundo número es " + num2);

document.write ("Mira los resultados de las operaciones en la consola")

let suma = num1 + num2;
let resta = num1 - num2;
let multi = num1 * num2;
let divi = num1 / num2;

console.log ("La suma es igual a " + suma);
console.log ("La resta es igual a " + resta);
console.log ("La multiplicación es igual a " + multi);
console.log ("La división es igual a " + divi);

let cad1 = "Argentina";
let cad2 = "Programa";
let cad3 = "4.0";
const ESP = " ";


console.log( cad1 + ESP + cad2 + ESP + cad3 );