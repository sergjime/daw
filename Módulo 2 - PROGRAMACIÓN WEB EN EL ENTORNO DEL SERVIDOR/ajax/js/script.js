document.getElementById("all").addEventListener("click", loadList);

function loadList() {
  const xhr = new XMLHttpRequest();

  const apiEx = "https://digimon-api.vercel.app/api/digimon";

  xhr.open("GET", apiEx, true);

  xhr.onprogress = function () {
    console.log("READY STATE CHANGE", this.readyState);
    console.log("Procesando la peticion...");
  };

  xhr.onload = function () {
    console.log("READY STATE CHANGE", this.readyState);
    if (this.status == 200) {
      console.log(this.responseText);
      const res = JSON.parse(this.responseText);
      console.log(res);

      let info = "";

      res.forEach((digimon) => {
        info += `<ul>
                        <li><b>Nombre:</b> ${digimon.name}</li>
                        <li><img src="${digimon.img}" alt="${digimon.name}" width="50px" height="50px"></li>
                        <li><b>Nivel:</b> ${digimon.level}</li>
                    </ul>
                    `;
      });

      document.getElementById("digi").innerHTML = info;
    }
  };
  xhr.onerror = function () {
    console.log("Ha ocurrido un error...");
  };
  xhr.send();
}
