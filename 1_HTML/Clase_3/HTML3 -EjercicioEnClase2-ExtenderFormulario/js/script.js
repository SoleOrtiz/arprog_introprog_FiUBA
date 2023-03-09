const form = document.querySelector("form");
const datos_enviados = document.querySelector("#datos_enviados");

form.onsubmit = (event) => {
  event.preventDefault();
  const datos_crudos = [...event.target.elements];
  const datos = datos_crudos
    .map(e=>({clave:e.name, valor:e.value}))
    .filter( e=> e.clave && e.valor );
  mostrar_datos(datos);
}

function mostrar_datos( datos ) {
  let html_a_mostrar = '<h2>Datos enviados:</h2>';
  datos.forEach( dato => {
    html_a_mostrar += `<p><b>${dato.clave}:</b> ${dato.valor}</p>`
  });
  console.log(datos_enviados,html_a_mostrar);
  datos_enviados.setHTML(html_a_mostrar);
}