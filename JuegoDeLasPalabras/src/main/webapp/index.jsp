<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JuegoDeLasPalabras</title>
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="script/JuegoDeLasPalabras.js" defer></script>
</head>
<body>
<div class="container">
    <h1>JuegoDeLasPalabras</h1>
    <div>
        <label for="tema">Selecciona un tema:</label>
        <select id="tema">
            <option value="colores">Colores</option>
            <option value="paises">Países</option>
            <option value="tecnologia">Tecnología</option>
        </select>
    </div>
    <button id="iniciarJuego" class="boton">Iniciar Juego</button>
    <p id="palabraOculta" class="palabra"></p>
    <div id="entradaLetra" class="entrada" style="display: none;">
        <div id="tecladoVisual" class="teclado-visual">
            <!-- Botones para letras -->
            <button class="teclado-boton" onclick="adivinarLetra('a')">A</button>
            <!-- Agrega más botones para otras letras -->
            <!-- Botón para el espacio -->
            <button class="teclado-boton espacio" onclick="adivinarLetra(' ')">Espacio</button>
        </div>
    </div>
    <p id="mensaje" class="mensaje"></p>
</div>
</body>
</html>
