<%--
  Created by IntelliJ IDEA.
  User: YoFlorinVFG
  Date: 22/05/2024
  Time: 20:33
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %> <!-- Configura el tipo de contenido y el juego de caracteres de la página -->

<!doctype html> <!-- Define el documento como HTML5 -->
<html lang="es"> <!-- Especifica que el idioma del contenido es español -->
<head>
    <meta charset="UTF-8"> <!-- Define el conjunto de caracteres del documento como UTF-8 -->
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <!-- Configura la vista para adaptarse al ancho del dispositivo, desactivando la escalabilidad del usuario -->
    <meta http-equiv="X-UA-Compatible" content="ie=edge"> <!-- Configura el modo de compatibilidad de Internet Explorer para Edge -->
    <title>JuegoDeLasPalabras</title> <!-- Título de la página -->
    <link rel="stylesheet" href="css/responsive.css"> <!-- Enlace a la hoja de estilos responsive -->
    <link rel="stylesheet" href="css/style.css"> <!-- Enlace a la hoja de estilos principal -->
    <script src="script/JuegoDeLasPalabras.js" defer></script> <!-- Enlace al script del juego, con defer para cargarlo después del HTML -->
</head>
<body>
<div class="container"> <!-- Contenedor principal centrado con estilo -->
    <h1>JuegoDeLasPalabras</h1> <!-- Título del juego -->
    <button id="iniciarJuego" class="boton">Iniciar Juego</button> <!-- Botón para iniciar el juego -->
    <p id="palabraOculta" class="palabra"></p> <!-- Elemento para mostrar la palabra oculta -->
    <div id="entradaLetra" class="entrada"> <!-- Contenedor para la entrada de la letra -->
        <label for="letra">Introduce una letra: </label> <!-- Etiqueta para el campo de entrada de letra -->
        <input type="text" id="letra" maxlength="1"> <!-- Campo de entrada para una sola letra -->
        <button id="adivinarLetra" class="boton">Adivinar</button> <!-- Botón para adivinar la letra -->
    </div>
    <p id="mensaje" class="mensaje"></p> <!-- Elemento para mostrar mensajes al usuario -->
</div>
</body>
</html>
