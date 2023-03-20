//Ejercicios con WHILE - DO WHILE

// 1. Agregar a la página todo lo que escriba el usuario (usando prompt)como párrafo <p>, hasta que ingrese “Fin” 

function escritor() {    
    let texto;
    do {
        texto = prompt ('Ingresa tantos párrafos como quieras para confeccionar tu texto, cuando termines escribe "Fin".');
        document.write ("<p>" + texto + "</p><br>");
    }while (texto != "Fin")
}

// escritor ();

//2. Preguntarle al usuario si quiere “Ver la página” (usando confirm) hasta que acepte

function verPagina () {
    let confirmar;  
    do {
        confirmar = confirm ('¿Desea ver la página?');          
    }while (confirmar == false)
}
  
//verPagina ();

// 3. Solicitar al internauta el ingreso de valores (usando prompt), de a uno por vez, hasta que ingrese 0. Mostrar en la página, la cantidad de números ingresados, y el total acumulado.


function ingresarValores () {
    let valor;
    let i = 0;
    let suma = 0;
    do {
        valor = parseInt (prompt ("Ingrese un valor numérico:"));
        document.write ("Ingresó " + valor + "<br>");
        i++;
        suma = suma + valor;
    } while (valor != 0);
    document.write ("Intentos totales = " + i + "<br>");
    document.write ("Total Acumulado = " + suma);
}

// OTRA OPCION CON CONTROL

function ingresarValores () {
    let valor;
    let i = 0;
    let suma = 0;
   
    do {
        valor = prompt ("Ingrese un valor numérico:");
      if (Number (valor) == valor) {
        valor = Number (valor);
        document.write ("Ingresó " + valor + "<br>");
        i++;
        suma = suma + valor;
        } else {
          alert ("El valor ingresado no es un número");
        }
    } while (valor != 0);
    document.write ("Intentos totales = " + i + "<br>");
    document.write ("Total Acumulado = " + suma);
}
