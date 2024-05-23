window.onload = function() {
    // Array de palabras disponibles para el juego
    const palabras = [
        "programacion", "computadora", "internet", "javascript", "desarrollo",
        "software", "tecnologia", "basededatos", "frontend", "backend",
        "servidor", "cliente", "web", "aplicacion", "codigo"
    ];

    let palabraSeleccionada = ''; // Variable para almacenar la palabra seleccionada aleatoriamente
    let palabraOculta = []; // Array para almacenar la representación oculta de la palabra
    let intentos = 0; // Contador de intentos fallidos
    const maxIntentos = 10; // Número máximo de intentos permitidos
    const botonIniciar = document.getElementById("iniciarJuego"); // Botón para iniciar el juego
    const palabraOcultaElement = document.getElementById("palabraOculta"); // Elemento donde se muestra la palabra oculta
    const letraInput = document.getElementById("letra"); // Campo de entrada para la letra adivinada por el usuario
    const botonAdivinar = document.getElementById("adivinarLetra"); // Botón para enviar la letra adivinada
    const mensajeElement = document.getElementById("mensaje"); // Elemento donde se muestran los mensajes al usuario

    // Evento para iniciar el juego
    botonIniciar.addEventListener("click", function() {
        // Selecciona una palabra aleatoria del array
        const indiceAleatorio = Math.floor(Math.random() * palabras.length);
        palabraSeleccionada = palabras[indiceAleatorio];
        // Inicializa el array de la palabra oculta con guiones bajos
        palabraOculta = Array(palabraSeleccionada.length).fill("_");
        // Muestra la palabra oculta en el elemento correspondiente
        palabraOcultaElement.textContent = palabraOculta.join(" ");
        mensajeElement.textContent = ""; // Limpia cualquier mensaje previo
        intentos = 0; // Reinicia el contador de intentos
    });

    // Evento para adivinar una letra
    botonAdivinar.addEventListener("click", function() {
        const letra = letraInput.value.toLowerCase(); // Obtiene la letra ingresada por el usuario y la convierte a minúscula
        if (letra && letra.length === 1) { // Verifica que se haya ingresado una letra válida
            let letraEncontrada = false; // Variable para verificar si la letra fue encontrada en la palabra
            // Recorre la palabra seleccionada para verificar si contiene la letra ingresada
            for (let i = 0; i < palabraSeleccionada.length; i++) {
                if (palabraSeleccionada[i] === letra) {
                    palabraOculta[i] = letra; // Reemplaza el guión bajo con la letra correspondiente
                    letraEncontrada = true; // Indica que la letra fue encontrada
                }
            }
            // Actualiza la visualización de la palabra oculta
            palabraOcultaElement.textContent = palabraOculta.join(" ");
            letraInput.value = ''; // Limpia el campo de entrada
            if (!letraEncontrada) { // Si la letra no fue encontrada
                mensajeElement.textContent = "Letra no encontrada."; // Muestra mensaje de letra no encontrada
                intentos++; // Incrementa el contador de intentos fallidos
                if (intentos >= maxIntentos) { // Si se alcanzó el número máximo de intentos
                    mensajeElement.textContent = "¡Has perdido! La palabra era: " + palabraSeleccionada; // Muestra mensaje de pérdida
                }
            } else {
                mensajeElement.textContent = ""; // Limpia el mensaje si la letra fue encontrada
            }
            if (!palabraOculta.includes("_")) { // Si no quedan guiones bajos en la palabra oculta
                mensajeElement.textContent = "¡Felicidades! Has adivinado la palabra."; // Muestra mensaje de victoria
            }
        }
    });
}
