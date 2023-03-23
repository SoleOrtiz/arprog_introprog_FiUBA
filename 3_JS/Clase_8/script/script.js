function sumar() {
    let numeroUno = parseFloat (document.getElementById ("numero1").value);
    let numeroDos = parseFloat (document.getElementById ("numero2").value);
    
    let suma = numeroUno + numeroDos;  
    
    let p = document.querySelector("p");
      p.innerHTML = "El resultado es: " + suma ;
  }
  
  function restar() {
    let numeroUno = parseFloat (document.getElementById ("numero1").value);
    let numeroDos = parseFloat (document.getElementById ("numero2").value);
    
    let resta = numeroUno - numeroDos;  
    
    let p = document.querySelector("p");
      p.innerHTML = "El resultado es: " + resta ;
  }
  
  function multiplicar() {
    let numeroUno = parseFloat (document.getElementById ("numero1").value);
    let numeroDos = parseFloat (document.getElementById ("numero2").value);
    
    let multiplicacion = numeroUno * numeroDos;  
    
    let p = document.querySelector("p");
      p.innerHTML = "El resultado es: " + multiplicacion ;
  }
  
  function dividir() {
    let numeroUno = parseFloat (document.getElementById ("numero1").value);
    let numeroDos = parseFloat (document.getElementById ("numero2").value);
    
    if (numeroDos == 0){
    let p = document.querySelector("p");
      p.innerHTML = "La división por cero es INDEFINIDA" ;
    }else{
      let division = numeroUno / numeroDos;  
      let p = document.querySelector("p");
      p.innerHTML = "El resultado es: " + division ;}
  }
  
  function agregarNumeros() {
      let numeroUno = document.getElementById ("numero1").value;
      let numeroDos = document.getElementById ("numero2").value;
      let p = document.querySelector("p");
      p.innerHTML += "Numero 1: " + numeroUno + "<br>";
      p.innerHTML += "Numero 2: " + numeroDos + "<br>";
   
   }