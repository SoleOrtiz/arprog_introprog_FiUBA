/* 
2. Hacer un programa que:
    Pregunte si quiere recibir notificaciones por mail (utilizando confirm)
    Si dice que si: 
    Pida su email (utilizando prompt)
    Pida su edad (utilizando prompt)
    Si la edad es mayor o igual a 18: Mostrar el mail
    Si No: Mostrar que “No tiene la edad suficiente”
*/

let notificaciones = confirm ("¿Desea recibir notificaciones por mail?");

if (notificaciones = true) {
    let email = prompt ("A continuación escriba su casilla de mail:");
    let edad = parseInt (prompt ("Y ahora su edad:"));
    
    if (edad >= 18) {
        document.write ("<h3>El email ingresado es: </h3>" + email);
    } else {
        document.write ("<h3>No tiene la edad suficiente.</h3>");
    }
}