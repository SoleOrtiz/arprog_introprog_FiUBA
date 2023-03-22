/*
    1. Tomá el ejercicio ejemplo y recortá la función suma y colocala en un archivo .js y vincula el archivo .js a tu página html, para que pueda seguir usando la función.*/


/*let sumando_1 = parseInt (prompt ("Escribe un número."));
let sumando_2 = parseInt (prompt ("Ahora escribe otro número para sumarle al anterior."));

function suma (sumando_1, sumando_2) {
    const total = sumando_1 + sumando_2;
    return total;
}

let total_suma = suma(sumando_1, sumando_2);
alert("El total de la suma es: " + total_suma);*/


/*
    2. Agregá las funciones resta, multiplicación y división al archivo .js; y modificá el código JavaScript de la página html, para que en lugar de mostrar mediante un alert el total de la suma; muestre en el cuerpo de la página el resultado de la suma, la resta, la multiplicación y la división de los valores ingresados, con los respectivos mensajes aclaratorios.*/

let sumando_1 = parseFloat (prompt ("Escribe un número."));
let sumando_2 = parseFloat (prompt ("Ahora escribe otro número para operar."));

function suma (sumando_1, sumando_2) {
    const totalSuma = sumando_1 + sumando_2;
    return totalSuma;
}

function resta (sumando_1, sumando_2) {
    const totalResta = sumando_1 - sumando_2;
    return totalResta;
}

function multi (sumando_1, sumando_2) {
    const totalMulti = sumando_1 * sumando_2;
    return totalMulti;
}

function divi (sumando_1, sumando_2) {
    if (sumando_2 > 0){ 
    const totalDivi = sumando_1 / sumando_2;
    return totalDivi;
    } else {
      return "No es posible dividir por 0"
    }
}

let total_suma = suma(sumando_1, sumando_2);
let total_resta = resta (sumando_1, sumando_2);
let total_multi = multi (sumando_1, sumando_2);
let total_divi = divi(sumando_1, sumando_2);


function myFunction() {
document.getElementById ("htmlSuma").innerHTML= sumando_1;
document.getElementById ("htmlResta").innerHTML= total_resta;
document.getElementById ("htmlMulti").innerHTML= total_multi;
document.getElementById ("htmlDivi").innerHTML= total_divi;
}

//alert("El total de la suma es: " + total_suma + " " + total_resta + " " + total_multi + " " + total_divi);