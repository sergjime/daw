/* 
1. Generar un número aleatorio entre 1 y 100.
2. Registrar el número del intento en el que el jugador se encuentre. Empezando en 1.
3. Darle al jugador una forma de adivinar cuál es el número.
4. Una vez que se ha introducido en número, registrarlo en alguna parte para que el jugador pueda ver sus intentos previos.
5. A continuación, comprobar si el número es correcto.
6. Si es correcto:
    1. Mostrar un mensaje de felicitaciones.
    2. Hacer que el jugador no pueda introducir más intentos (esto arruinaría el juego).
    3. Mostrar un control que permita al jugador volver a empezar el juego.
7. Si es incorrecto y al jugador todavía le quedan intentos:
    1. Decirle al jugador que ha fallado.
    2. Dejar que el jugador lo intente de nuevo.
    3. Incrementa el número de intentos en 1.
8. Si el jugador falla y no le quedan turnos:
    1. Decirle al jugador que el juego se ha terminado.
    2. Hacer que el jugador no pueda introducir más intentos (esto arruinaría el juego).
    3. Mostrar un control que permita al jugador volver a empezar el juego.
9. Una vez que el juego se reinicia, asegúrate de que la lógica del juego y la IU (interfaz de usuario) se restablezcan por completo, luego vuelve al paso 1.
*/

let numAzar = Math.floor(Math.random() * 100) + 1;

const intentos = document.querySelector(".guesses");
const ultimoResultado = document.querySelector(".lastResult");
const pista = document.querySelector(".lowOrHi");

const adivinaEnvio = document.querySelector(".guessSubmit");
const adivinaCampo = document.querySelector(".guessField");

let contadorIntentos = 1;
let botonReinicio;

function checkGuess() {
  let intentoUsuario = Number(adivinaCampo.value);
  if (contadorIntentos === 1) {
    intentos.textContent = "Intentos anteriores: ";
  }
  intentos.textContent += intentoUsuario + " ";

  if (intentoUsuario === numAzar) {
    ultimoResultado.textContent = "¡Felicidades! ¡Lo adivinaste!";
    ultimoResultado.style.backgroundColor = "green";
    pista.textContent = "";
    setGameOver();
  } else if (contadorIntentos === 10) {
    ultimoResultado.textContent = "!!!Fin del juego!!!";
    setGameOver();
  } else {
    ultimoResultado.textContent = "¡Incorrecto!";
    ultimoResultado.style.backgroundColor = "red";
    if (intentoUsuario < numAzar) {
      pista.textContent = "¡El número es muy bajo!";
    } else if (intentoUsuario > numAzar) {
      pista.textContent = "¡El número es muy grande!";
    }
  }

  contadorIntentos++;
  adivinaCampo.value = "";
  adivinaCampo.focus();
}

adivinaEnvio.addEventListener("click", checkGuess);

function setGameOver() {
  adivinaCampo.disabled = true;
  adivinaEnvio.disabled = true;
  botonReinicio = document.createElement("button");
  botonReinicio.textContent = "Iniciar nuevo juego";
  document.body.append(botonReinicio);
  botonReinicio.addEventListener("click", resetGame);
}

function resetGame() {
  contadorIntentos = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  botonReinicio.parentNode.removeChild(botonReinicio);

  adivinaCampo.disabled = false;
  adivinaEnvio.disabled = false;
  adivinaCampo.value = "";
  adivinaCampo.focus();

  ultimoResultado.style.backgroundColor = "white";

  numAzar = Math.floor(Math.random() * 100) + 1;
}
