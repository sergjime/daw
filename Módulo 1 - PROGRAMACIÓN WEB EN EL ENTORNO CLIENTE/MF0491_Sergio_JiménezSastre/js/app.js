const formulario = document.querySelector("form");
const euroInput = document.querySelector("#euros");
const dolarInput = document.querySelector("#dolares");
const divForm = document.querySelector(".formulario");
const small = document.createElement("small");

euroInput.focus();

formulario.addEventListener("submit", validarInput);

function crearMensaje() {
  small.textContent = "El valor ha de ser positivo y que sea un número";
  small.style.color = "red";
  small.style.fontSize = "9px";
  divForm.appendChild(small);
}

function validarInput(e) {
  e.preventDefault();
  if (
    isNaN(euroInput.value) ||
    euroInput.value <= 0 ||
    Array.from(euroInput.value).length == 0
  ) {
    crearMensaje();
  } else {
    dolarInput.value = cambioMoneda(euroInput.value);
    small.remove();
    dolarInput.style.backgroundColor = "white";
    dolarInput.style.border = "black 1px solid";
  }
}

function cambioMoneda(num) {
  return Math.round(num * 1.123888888888889 * 100) / 100;
}
