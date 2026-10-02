let INDEX_PREGUNTA = 0;
let INDEX_PREGUNTA2 = 8;
let puntaje = 0;
let puntaje2 = 0;
let jugador1 = true;
let jugador2 = false;
let count = 10;
let counter = null;
let objetopregunta = null;
let opciones = [];
let procesandoRespuesta = false; // Bug fix: prevent multiple answer processing

document.addEventListener("DOMContentLoaded", () => {
  if (typeof SoundManager !== "undefined") {
    SoundManager.init("sonidoTension.mp3");
  }

  // Obtener nombres de jugadores
  const player1 = localStorage.getItem("jugador1") || "Jugador 1";
  const player2 = localStorage.getItem("jugador2") || "Jugador 2";

  // Update scoreboard names
  const scoreNameEl1 = document.getElementById("score-name-1");
  const scoreNameEl2 = document.getElementById("score-name-2");
  if (scoreNameEl1) scoreNameEl1.textContent = player1;
  if (scoreNameEl2) scoreNameEl2.textContent = player2;

  cargarPregunta(INDEX_PREGUNTA);
  reiniciarTimer();
});

function cargarPregunta(index) {
  jugador1 = true;
  jugador2 = false;
  procesandoRespuesta = false;

  // Player 1 theme (fuchsia/pink)
  document.body.classList.remove("player2-turn");
  document.body.classList.add("player1-turn");

  if (!arregloCombinado || index >= arregloCombinado.length) {
    verificarFinDelJuego();
    return;
  }

  objetopregunta = arregloCombinado[index];
  prepararOpciones(objetopregunta);

  const player1 = localStorage.getItem("jugador1") || "Jugador 1";
  const elTurno = document.getElementById("mostrarJugador1");
  if (elTurno) {
    elTurno.innerHTML = player1;
    document.getElementById("score-card-1")?.classList.add("active-player");
    document.getElementById("score-card-2")?.classList.remove("active-player");
  }

  actualizarDOM();
}

function cargarPregunta2(index) {
  jugador1 = false;
  jugador2 = true;
  procesandoRespuesta = false;

  // Player 2 theme (cyan/blue)
  document.body.classList.remove("player1-turn");
  document.body.classList.add("player2-turn");

  if (!arregloCombinado || index >= arregloCombinado.length) {
    verificarFinDelJuego();
    return;
  }

  objetopregunta = arregloCombinado[index];
  prepararOpciones(objetopregunta);

  const player2 = localStorage.getItem("jugador2") || "Jugador 2";
  const elTurno = document.getElementById("mostrarJugador1");
  if (elTurno) {
    elTurno.innerHTML = player2;
    document.getElementById("score-card-1")?.classList.remove("active-player");
    document.getElementById("score-card-2")?.classList.add("active-player");
  }

  actualizarDOM();
}

function prepararOpciones(preguntaActual) {
  opciones = [...preguntaActual.distractores, preguntaActual.respuesta];
  for (let i = opciones.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opciones[i], opciones[j]] = [opciones[j], opciones[i]];
  }
}

function actualizarDOM() {
  const elPregunta = document.getElementById("pregunta");
  if (elPregunta) elPregunta.innerHTML = objetopregunta.pregunta;

  const elImagen = document.getElementById("imagen");
  if (elImagen) {
    elImagen.style.display = "none"; // hide until confirmed loaded
    elImagen.onerror = null;
    if (objetopregunta.imagen) {
      elImagen.onload = () => { elImagen.style.display = "block"; };
      elImagen.onerror = () => { elImagen.style.display = "none"; }; // hide if broken
      elImagen.src = objetopregunta.imagen;
    } else {
      elImagen.src = "";
    }
  }

  for (let i = 0; i < 4; i++) {
    const elOpcion = document.getElementById(`opcion-${i + 1}`);
    if (elOpcion) {
      elOpcion.innerHTML = opciones[i] || "";
      elOpcion.classList.remove("opcion-correcta", "opcion-incorrecta", "disabled");
    }
  }

  const elNivel = document.getElementById("nivel");
  if (elNivel) elNivel.innerHTML = objetopregunta.nivel;
}

function actualizarPuntajes() {
  const scoreVal1 = document.getElementById("score-value-1");
  const scoreVal2 = document.getElementById("score-value-2");
  if (scoreVal1) scoreVal1.textContent = puntaje;
  if (scoreVal2) scoreVal2.textContent = puntaje2;
}

async function seleccionarOpcion(index) {
  // Bug fix: prevent multiple answers being processed
  if (procesandoRespuesta) return;
  procesandoRespuesta = true;

  if (typeof SoundManager !== "undefined") SoundManager.playClick();
  detenerTimer();

  const esCorrecta = opciones[index] === objetopregunta.respuesta;
  const player1 = localStorage.getItem("jugador1") || "Jugador 1";
  const player2 = localStorage.getItem("jugador2") || "Jugador 2";
  const jugadorActual = jugador1 ? player1 : player2;

  // Visual feedback on buttons
  const btnSeleccionado = document.getElementById(`opcion-${index + 1}`);
  if (btnSeleccionado) {
    btnSeleccionado.classList.add(esCorrecta ? "opcion-correcta" : "opcion-incorrecta");
  }
  // Reveal correct answer if wrong
  if (!esCorrecta) {
    const respuestaIdx = opciones.indexOf(objetopregunta.respuesta);
    const btnCorrecto = document.getElementById(`opcion-${respuestaIdx + 1}`);
    if (btnCorrecto) btnCorrecto.classList.add("opcion-correcta");
  }

  if (esCorrecta) {
    if (jugador1) puntaje++;
    else puntaje2++;
    actualizarPuntajes();

    await Swal.fire({
      title: `¡Correcto, ${jugadorActual}! 🎉`,
      text: "La opción seleccionada es la correcta",
      icon: "success",
      confirmButtonColor: "#ec4899",
      background: "#1e1b4b",
      color: "#ffffff"
    });
  } else {
    await Swal.fire({
      title: `Incorrecto, ${jugadorActual} ❌`,
      text: `La respuesta correcta era: "${objetopregunta.respuesta}"`,
      icon: "error",
      confirmButtonColor: "#ec4899",
      background: "#1e1b4b",
      color: "#ffffff"
    });
  }

  avanzarTurno();
}

function avanzarTurno() {
  if (jugador1) {
    INDEX_PREGUNTA++;
    cargarPregunta2(INDEX_PREGUNTA2);
  } else {
    INDEX_PREGUNTA2++;
    if (INDEX_PREGUNTA2 >= 16) {
      verificarFinDelJuego();
      return;
    }
    cargarPregunta(INDEX_PREGUNTA);
  }
  reiniciarTimer();
}

async function verificarFinDelJuego() {
  detenerTimer();
  const player1 = localStorage.getItem("jugador1") || "Jugador 1";
  const player2 = localStorage.getItem("jugador2") || "Jugador 2";

  let resultado = "";
  if (puntaje === puntaje2) {
    resultado = "¡Fue un Empate! 🤝";
  } else if (puntaje > puntaje2) {
    resultado = `🏆 ¡${player1} es el Ganador!`;
  } else {
    resultado = `🏆 ¡${player2} es el Ganador!`;
  }

  const { isConfirmed } = await Swal.fire({
    title: resultado,
    text: `${player1}: ${puntaje}/8 pts | ${player2}: ${puntaje2}/8 pts`,
    imageUrl: objetopregunta?.imagenGanador || "imagenes/bmo.webp",
    imageHeight: 250,
    showCancelButton: true,
    confirmButtonText: "🔄 Jugar de nuevo",
    cancelButtonText: "🏠 Menú Principal",
    confirmButtonColor: "#ec4899",
    cancelButtonColor: "#8b5cf6",
    background: "#1e1b4b",
    color: "#ffffff"
  });

  if (isConfirmed) {
    location.reload();
  } else {
    window.location.href = "pagPrincipal.html";
  }
}

function pista() {
  if (typeof SoundManager !== "undefined") SoundManager.playClick();
  Swal.fire({
    title: "💡 Pista",
    text: objetopregunta.pista,
    imageUrl: objetopregunta.pistaImg,
    imageHeight: 250,
    confirmButtonColor: "#ec4899",
    background: "#1e1b4b",
    color: "#ffffff"
  });
}

function updateCountdown() {
  count--;
  const elCountdown = document.getElementById("countdown");
  if (elCountdown) elCountdown.textContent = count;

  // Visual urgency cue
  if (count <= 3 && elCountdown) {
    elCountdown.style.background = "radial-gradient(circle, #ef4444 0%, #b91c1c 100%)";
  }

  if (count <= 0) {
    detenerTimer(); // Bug fix: stop timer before advancing to prevent multiple calls
    avanzarTurno();
  }
}

function reiniciarTimer() {
  detenerTimer();
  count = 10;
  const elCountdown = document.getElementById("countdown");
  if (elCountdown) {
    elCountdown.textContent = count;
    elCountdown.style.background = ""; // Reset color
  }
  counter = setInterval(updateCountdown, 1000);
}

function detenerTimer() {
  if (counter) {
    clearInterval(counter);
    counter = null;
  }
}

function playagain() {
  window.location.href = "pagPrincipal.html";
}