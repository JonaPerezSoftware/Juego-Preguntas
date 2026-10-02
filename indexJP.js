let INDEX_PREGUNTA = 0;
let puntaje = 0;
let count = 10;
let counter = null;
let objetopregunta = null;
let opciones = [];
let procesandoRespuesta = false; // Bug fix: prevent multiple answer processing

document.addEventListener("DOMContentLoaded", () => {
  if (typeof SoundManager !== "undefined") {
    SoundManager.init("sonidoTension.mp3");
  }
  cargarPregunta(INDEX_PREGUNTA);
  reiniciarTimer();
});

function cargarPregunta(index) {
  procesandoRespuesta = false;

  if (!objetosSeleccionados || index >= objetosSeleccionados.length) {
    finalizarJuego();
    return;
  }

  objetopregunta = objetosSeleccionados[index];
  
  // Copy and shuffle options
  opciones = [...objetopregunta.distractores, objetopregunta.respuesta];
  for (let i = opciones.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opciones[i], opciones[j]] = [opciones[j], opciones[i]];
  }

  // Update DOM
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

  // Update progress badge
  const elProgreso = document.getElementById("progreso");
  if (elProgreso) elProgreso.textContent = `${index + 1} / ${Math.min(objetosSeleccionados.length, 8)}`;
}

async function seleccionarOpcion(index) {
  // Bug fix: prevent double-answer processing
  if (procesandoRespuesta) return;
  procesandoRespuesta = true;

  if (typeof SoundManager !== "undefined") SoundManager.playClick();
  detenerTimer();

  const esCorrecta = opciones[index] === objetopregunta.respuesta;

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
    puntaje++;
    // Update score badge
    const scoreEl = document.getElementById("puntaje-valor");
    if (scoreEl) scoreEl.textContent = puntaje;

    await Swal.fire({
      title: "¡Respuesta Correcta! 🎉",
      text: "¡Excelente trabajo!",
      icon: "success",
      confirmButtonColor: "#ec4899",
      background: "#1e1b4b",
      color: "#ffffff"
    });
  } else {
    await Swal.fire({
      title: "Respuesta Incorrecta ❌",
      text: `La respuesta correcta era: "${objetopregunta.respuesta}"`,
      icon: "error",
      confirmButtonColor: "#ec4899",
      background: "#1e1b4b",
      color: "#ffffff"
    });
  }

  INDEX_PREGUNTA++;

  if (INDEX_PREGUNTA >= 8) {
    await finalizarJuego();
  } else {
    cargarPregunta(INDEX_PREGUNTA);
    reiniciarTimer();
  }
}

async function finalizarJuego() {
  detenerTimer();

  const { isConfirmed } = await Swal.fire({
    title: "¡Juego Terminado!",
    text: `Tu puntaje final fue: ${puntaje} / 8`,
    imageUrl: objetopregunta?.imagenFinalizado || "imagenes/bmo.webp",
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
  if (elCountdown) {
    elCountdown.textContent = count;
    // Visual urgency cue on last 3 seconds
    if (count <= 3) {
      elCountdown.style.background = "radial-gradient(circle, #ef4444 0%, #b91c1c 100%)";
    }
  }

  if (count <= 0) {
    detenerTimer(); // Bug fix: stop timer BEFORE advancing to prevent multiple calls
    INDEX_PREGUNTA++;
    if (INDEX_PREGUNTA >= 8) {
      finalizarJuego();
    } else {
      cargarPregunta(INDEX_PREGUNTA);
      reiniciarTimer();
    }
  }
}

function reiniciarTimer() {
  detenerTimer();
  count = 10;
  const elCountdown = document.getElementById("countdown");
  if (elCountdown) {
    elCountdown.textContent = count;
    elCountdown.style.background = ""; // Reset urgent color
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
