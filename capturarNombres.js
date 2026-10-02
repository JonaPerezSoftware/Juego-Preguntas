function almacenarYAvanzar() {
    if (typeof SoundManager !== 'undefined') SoundManager.playClick();
    
    var player1 = document.getElementById("jugador1").value.trim();
    var player2 = document.getElementById("jugador2").value.trim();

    if (player1 !== '' && player2 !== '') {
        localStorage.setItem("jugador1", player1);
        localStorage.setItem("jugador2", player2);
        window.location.href = "versus.html";
    } else {
        if (typeof Swal !== 'undefined') {
            Swal.fire({
                title: 'Campos incompletos',
                text: 'Por favor, ingresa los nombres de ambos jugadores para continuar.',
                icon: 'warning',
                confirmButtonColor: '#ec4899',
                background: '#1e1b4b',
                color: '#ffffff'
            });
        } else {
            alert("Por favor, ingrese ambos jugadores antes de avanzar.");
        }
    }
}
