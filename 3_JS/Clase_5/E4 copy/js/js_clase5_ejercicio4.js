let nombre = prompt ("Escriba su nombre:");

let apellido = prompt ("Escriba su apellido:");

let nacionalidad = prompt ("Ingrese su nacionalidad:");

document.getElementById("nombre").innerHTML= nombre;
document.getElementById("apellido").innerHTML= apellido;
document.getElementById("nacionalidad").innerHTML= nacionalidad;



document.write ("Su nombre es: " + nombre + " " + "Su apellido es: " + apellido + " " + " Su nacionalidad es: " + nacionalidad);