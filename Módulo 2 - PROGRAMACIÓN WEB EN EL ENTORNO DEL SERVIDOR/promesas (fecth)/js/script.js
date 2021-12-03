document.querySelector("#button1").addEventListener("click", getText);
document.querySelector("#button2").addEventListener("click", getJson);
document.querySelector("#button3").addEventListener("click", getData);

function getText() {
  fetch("./text/data.txt")
    .then((response) => response.text())
    .then((data) => (document.querySelector("#salida").innerHTML = data))
    .catch((err) => console.log("Ha habido un error: " + err));
}

function getJson() {
  fetch("./json/movies.json")
    .then((response) => response.json())
    .then(function (movies) {
      let lista = "";
      movies.forEach((movie) => {
        lista += `<li><b>Nombre</b> ${movie.nombre} |
           <b>Año de lanzamiento</b> ${movie.anyo_lanzamiento} |
            <b>Género</b> ${movie.genero}</li>`;
      });
      document.querySelector("#salida").innerHTML = lista;
    })
    .catch((err) => console.log("Ha habido un error: " + err));
}

function getData() {
  fetch("https://digimon-api.vercel.app/api/digimon/level/Mega")
    .then((response) => response.json())
    .then(function (digimons) {
      let lista = "";
      digimons.forEach((digi) => {
        lista += `<li><b>Nombre</b> ${digi.name} |
          <b>Nivel</b> ${digi.level}
          <img src="${digi.img}" alt="${digi.name}" width="70px" height="70px"></li>`;
      });
      document.querySelector("#salida").innerHTML = lista;
    })
    .catch((err) => console.log("Ha habido un error: " + err));
}
