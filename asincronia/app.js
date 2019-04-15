const URL = "https://fluentjobs-fa22e.firebaseio.com/trabajos.json";

// GET - obtener
// POST - crear
// PUT - actualizar
// DELETE - eliminar

function getJobs () {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', URL);

  xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === 4) {
      let ofertas = JSON.parse(xhr.responseText);
      console.log("Datos: ", ofertas);
    }
  })

  xhr.send();
  // xhr.onreadystatechange = function () {
  //   if (xhr.readyState === 4) {
  //     // console.log("Datos: ", xhr.responseText);
  //     let ofertas = JSON.parse(xhr.responseText);
  //     console.log("Datos: ", ofertas);
  //   }
  // }

}

getJobs();