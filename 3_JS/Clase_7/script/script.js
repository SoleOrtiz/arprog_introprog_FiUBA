function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let dni = document.getElementById("dni").value;
    let email = document.getElementById("email").value;
  
    if (nombre.length < 2 || nombre.length > 20) {
        alert("El nombre debe tener entre 2 y 20 caracteres.");
        return false;
      }
    
      if (apellido.length < 2 || apellido.length > 25) {
        alert("El apellido debe tener entre 2 y 25 caracteres.");
        return false;
      }
    
      if (edad < 18 || edad > 120 ) {
        alert("La edad debe ser un número entre 18 y 120.");
        return false;
      }
    
      if (dni.length <= 6) {
        alert("El DNI debe tener más de 6 caracteres.");
        return false;
      }
    
      if (!email.includes("@")) {
        alert("El correo electrónico debe incluir '@'.");
        return false;
      }

      //document.getElementById("datosFormulario").innerHTML+= "<td>" + nombre + "</td>" + "<td>" + apellido +"</td>" + "<td>" + edad +"</td>" + "<td>" + dni +"</td>" + "<td>" + email +"</td>"+ "<tr></tr>";
          
      document.getElementById("tablaNombre").innerHTML+=nombre + "<br>";
      document.getElementById("tablaApellido").innerHTML+= apellido+ "<br>";
      document.getElementById("tablaEdad").innerHTML+= edad+ "<br>";
      document.getElementById("tablaDni").innerHTML+= dni+ "<br>";
      document.getElementById("tablaEmail").innerHTML+= email+ "<br>";

    formulario.reset ()



}

    
    /*agregarDatosTabla(nombre, apellido, edad, dni, email);
  
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("email").value = "";
    
  
 
  
  /*
  function agregarDatosTabla(nombre, apellido, edad, dni, email) {
    var tabla = document.querySelector("table");
    var fila = tabla.insertRow();
    var celdaNombre = fila.insertCell();
    var celdaApellido = fila.insertCell();
    var celdaEdad = fila.insertCell();
    var celdaDni = fila.insertCell();
    var celdaEmail = fila.insertCell();
  
    celdaNombre.innerText = nombre;
    celdaApellido.innerText = apellido;
    celdaEdad.innerText = edad;
    celdaDni.innerText = dni;
    celdaEmail.innerText = email;
  }
*/


/*document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    let nombre = document.getElementById('nombre').value;
    if(nombre.length <=2) {
      alert('Su nombre debe superar los 2 caracteres.');
      return;
    }
    let apellido = document.getElementById('apellido').value;
    if (apellido.length <=2) {
      alert('Su apellido debe superar los 2 caracteres.');
      return;
    }
    let edad = document.getElementById('edad').value;
    if (edad >=18 && edad <= 120) {
      alert('Su edad está fuera del rango permitido (18-120 años).');
      return;
    }
    let dni = document.getElementById('dni').value;
    if (dni.length >=6) {
      alert('Su dni debe superar los 6 caracteres.');
      return;
    }
    let email = document.getElementById('email').value;
    if (email.length >=6) {
      alert('No es un correo eléctronico válido, debe contener el caracter @');
      return;
    }
    this.submit();
  }
*/