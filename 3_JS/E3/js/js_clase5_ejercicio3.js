/* 
Pedir el ingreso de un nombre mediante el uso de prompt(), y mostrarlo en
consola junto con algún texto de saludo.
Ejemplo: ¡Hola, Juan!

2. Pedir primero el ingreso de un nombre mediante el uso de prompt(); luego
pedir un apellido, también usando prompt(); por último mostrar usando un
alert() el mensaje “Su apellido y nombre es: apellido, nombre”,
reemplazando apellido por el apellido ingresado y nombre por el nombre
ingresado.

3. Pedir un número mediante prompt(), y a continuación usando un alert(),
informar el resultado de elevarlo al cuadrado
    */

let nombre = prompt ("¿Cuál es tu nombre?");

console.log ("¡Hola, " + nombre + "!");

let apellido = prompt ("¿Y tu apellido?");

alert ("Su apellido y nombre son: " + apellido + " " + nombre + ".");

let num1 = parseInt (prompt ("Ahora dime un número para calcular su cuadrado."));
let cuad = num1 * num1;

alert ("El cuadrado de " + num1 + " es " + cuad + " .");


