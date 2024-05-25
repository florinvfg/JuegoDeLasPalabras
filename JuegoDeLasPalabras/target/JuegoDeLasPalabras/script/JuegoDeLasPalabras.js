const temas = {
    colores: ['azul', 'amarillo', 'rojo', 'verde', 'turquesa', 'rosa', 'morado', 'malva', 'blanco', 'negro', 'marron', 'naranja', 'violeta', 'lila', 'beige'],
    paises: [ 'Albania', 'Alemania', 'Andorra', 'Austria', 'Bielorrusia', 'Bélgica', 'Bosnia y Herzegovina', 'Bulgaria', 'Chipre', 'Croacia', 'Dinamarca', 'Eslovaquia', 'Eslovenia',
        'España', 'Estonia', 'Finlandia', 'Francia', 'Grecia', 'Hungría', 'Irlanda', 'Islandia', 'Italia', 'Kosovo', 'Letonia', 'Liechtenstein', 'Lituania',
        'Luxemburgo', 'Macedonia del Norte', 'Malta', 'Moldavia', 'Mónaco', 'Montenegro', 'Noruega', 'Países Bajos', 'Polonia', 'Portugal', 'Reino Unido', 'República Checa', 'Rumania', 'Rusia', 'San Marino', 'Serbia', 'Suecia', 'Suiza', 'Ucrania', 'Vaticano'],
    tecnologia: ['programacion', 'computadora', 'internet', 'javascript', 'desarrollo', 'software', 'tecnologia', 'basededatos', 'frontend', 'backend', 'servidor', 'cliente', 'web', 'aplicacion', 'codigo']
};

window.onload = function() {
    let palabraSeleccionada = '';
    let palabraOculta = [];
    let intentos = 0;
    const maxIntentos = 10;
    const botonIniciar = document.getElementById("iniciarJuego");
    const palabraOcultaElement = document.getElementById("palabraOculta");
    const tecladoVisual = document.getElementById("tecladoVisual");
    const mensajeElement = document.getElementById("mensaje");
    const temaSelect = document.getElementById("tema");

    botonIniciar.addEventListener("click", function() {
        const temaSeleccionado = temaSelect.value;
        const palabras = temas[temaSeleccionado];
        const indiceAleatorio = Math.floor(Math.random() * palabras.length);
        palabraSeleccionada = palabras[indiceAleatorio].toLowerCase();
        palabraOculta = Array(palabraSeleccionada.length).fill("_");
        palabraOcultaElement.textContent = palabraOculta.join(" ");
        mensajeElement.textContent = "";
        intentos = 0;
        tecladoVisual.innerHTML = '';
        document.getElementById("entradaLetra").style.display = 'block';
        crearTecladoVisual();
    });

    function crearTecladoVisual() {
        const letras = 'abcdefghijklmnopqrstuvwxyz'.split('');
        letras.forEach(letra => {
            const boton = document.createElement('button');
            boton.textContent = letra.toUpperCase();
            boton.value = letra;
            boton.classList.add('teclado-boton');
            boton.addEventListener('click', function() {
                adivinarLetra(letra);
                boton.disabled = true;
            });
            tecladoVisual.appendChild(boton);
        });

        // Botón especial para el espacio
        const espacioBoton = document.createElement('button');
        espacioBoton.textContent = "ESPACIO";
        espacioBoton.value = " ";
        espacioBoton.classList.add('teclado-boton', 'espacio');
        espacioBoton.addEventListener('click', function() {
            adivinarLetra(" ");
            espacioBoton.disabled = true;
        });
        tecladoVisual.appendChild(espacioBoton);
    }

    function adivinarLetra(letra) {
        if (letra === ' ') {
            // Aquí puedes manejar el espacio según tus necesidades
            // Por ejemplo, puedes omitirlo o tratarlo como una letra válida
        } else {
            let letraEncontrada = false;
            for (let i = 0; i < palabraSeleccionada.length; i++) {
                if (palabraSeleccionada[i] === letra) {
                    palabraOculta[i] = letra;
                    letraEncontrada = true;
                }
            }
            palabraOcultaElement.textContent = palabraOculta.join(" ");
            if (!letraEncontrada) {
                mensajeElement.textContent = "Letra no encontrada.";
                intentos++;
                if (intentos >= maxIntentos) {
                    cambiarTextoMarquesina("¡Has perdido! La palabra era: " + palabraSeleccionada);
                    document.getElementById("entradaLetra").style.display = 'none';
                }
            } else {
                mensajeElement.textContent = "";
            }
            if (!palabraOculta.includes("_")) {
                cambiarTextoMarquesina("¡Felicidades! Has adivinado la palabra.");
                document.getElementById("entradaLetra").style.display = 'none';
            }
        }
    }

    function cambiarTextoMarquesina(nuevoTexto) {
        const textoMarquesina = document.getElementById("mensaje");
        textoMarquesina.textContent = nuevoTexto;
    }
}
