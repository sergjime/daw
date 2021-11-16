function addTarea() {
  const tarea = document.createElement("li");
  tarea.className = "collection-item";
  const miTexto = document.createTextNode(
    document.querySelector("input").value
  ).textContent;
  tarea.append(miTexto);
  const enlace = document.createElement("a");
  enlace.className = "delete-item secondary-content";
  enlace.innerHTML = '<i class="fa fa-remove"></i>';
  tarea.append(enlace);

  const ul = document.querySelector("ul.collection");
  ul.append(tarea);
}

const task = document.querySelector(".btn");
task.addEventListener("click", function (event) {
  event.preventDefault();
  addTarea();
});
