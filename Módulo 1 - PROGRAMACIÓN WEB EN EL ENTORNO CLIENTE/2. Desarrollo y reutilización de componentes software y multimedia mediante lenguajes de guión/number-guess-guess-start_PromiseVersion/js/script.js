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
adivinaCampo.focus();

let contadorIntentos = 1;

function checkGuess() {
  let intentoUsuario = Number(adivinaCampo.value);
  if (contadorIntentos === 1) {
    intentos.textContent = "Intentos anteriores: ";
  }
  intentos.textContent += intentoUsuario + " ";

  if (intentoUsuario === numAzar) {
    Swal.fire({
      title: "¡Felicidades! ¡Lo adivinaste!",
      icon: "success",
      confirmButtonText: "Juega de nuevo",
      allowOutsideClick: false,
      didClose: () => {
        adivinaCampo.focus();
      },
    }).then((result) => {
      if (result.isConfirmed) {
        pista.textContent = "";
        resetGame();
      }
    });
  } else if (contadorIntentos === 10) {
    Swal.fire({
      icon: "error",
      title: "Fin del juego",
      text: "Fallaste en todos tus intentos!",
      confirmButtonText: "Juega de nuevo",
      allowOutsideClick: false,
      didClose: () => {
        adivinaCampo.focus();
      },
    }).then((result) => {
      if (result.isConfirmed) {
        pista.textContent = "";
        resetGame();
      }
    });
  } else {
    ultimoResultado.textContent = "¡Incorrecto!";
    ultimoResultado.className = "alert alert-danger";
    if (intentoUsuario < numAzar) {
      pista.innerHTML = `El número <b>${intentoUsuario}</b> es menor`;
    } else if (intentoUsuario > numAzar) {
      pista.innerHTML = `El número <b>${intentoUsuario}</b> es mayor`;
    }
  }

  contadorIntentos++;
  adivinaCampo.value = "";
  adivinaCampo.focus();
}

adivinaEnvio.addEventListener("click", checkGuess);

function resetGame() {
  contadorIntentos = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  adivinaCampo.disabled = false;
  adivinaEnvio.disabled = false;
  adivinaCampo.value = "";

  ultimoResultado.style.backgroundColor = "white";

  numAzar = Math.floor(Math.random() * 100) + 1;
}
