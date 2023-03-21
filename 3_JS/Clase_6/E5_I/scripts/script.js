/* 
1. Hacer un programa que:
        Pida un número (utilizando prompt)
        Si es mayor a cero mostrar “Número positivo”
        Si es menor a cero mostrar “Número negativo”
        Si es igual a cero mostrar “Es cero”
        Si no cumple ninguna mostrar “No es un número!”
*/
function evaluarNumero () {
    let numero = parseInt (prompt ("Escriba un número para evaluarlo"));

    if (numero > 0 ) {
        document.write ("<h2>Es un número <b>POSITIVO.</b></h2>");
    } else if (numero < 0) {
        document.write ("<h2>Es un número <b>NEGATIVO.</b></h2>");
    } else if (numero == 0) {
        document.write ("<h2>El número es <b>CERO.</b></h2>");
    } else {
        document.write ("<h2>No es un número.</h2>");
    }
}

evaluarNumero ();