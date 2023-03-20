//Usando FOR

// 1. Hacer una cuenta regresiva desde 10, mostrando cada número, y luego mostrar “Despegue!”.

function cuentaRegresiva (){
  for (let i = 10; i >= 0 ; i--) {
      if (i>0) { 
      let cr = "<h2>"+"El cohete será lanzado en: " +i+"</h2>";
      document.write(cr);
      } else {
          let cr = "<h1>"+"---DESPEGUE!!!---"+"</h1>";
          document.write(cr);    
      }
  }
}

cuentaRegresiva ();

// OTRA OPCION 

function cuentaRegresivaDos (){
  for (let i = 10; i >= 1 ; i--) {
    let cr = "<h2>"+"El cohete será lanzado en: " +i+"</h2>";
    document.write(cr);
  }
  document.write ("<h1>"+"---DESPEGUE!!!---"+"</h1>")
}

// 2. Mostrar los primeros 20 números pares, separados por coma.

function numerosParesI() {
  for (let i = 2; i <= 40; i++) {
    if (i%2 == 0 && i<40) {  
    let parI = i + " es par" + ", ";
      document.write(parI);
    } else if (i%2 == 0 && i==40) {
        let finI = i + " es par" + ".";
      document.write(finI);
    }       
  }
}

// OTRA OPCION 

function numerosParesIi() {
  for (let i = 2; i < 40; i+=2) {
    let parIi = i + " es par" + ", ";
      document.write(parIi);
   }
  document.write (" 40 es par.")
}

//3. Mostrar los números pares menores a 30, separados por coma.

function numerosMenoresTreintaI () { 
  for (let i = 0; i <= 30; i++) {
    if (i%2 == 0 && i<28) {  
    let menosTreinta = i + ", ";
      document.write(menosTreinta);
    } else if (i%2 == 0 && i==28) {
        let finIi = i + ".";
      document.write(finIi);
    }       
  }
}

// OTRA OPCION 

function menoresTreintaIi () {
  for (i=0 ; i<30; i+=2) {
    let menorTreintaIi = i + ", ";
    document.write (menorTreintaIi);
  }
}