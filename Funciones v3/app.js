function mostrarMensajeConsola() {
    console.log("El botón fue cliqueado!")
}

function mostarAlerta(){
    alert("YO AMO JS");
}

function mostarCiudad(){
    let ciudad = prompt("Por favor, ingrese el nombre de una ciudad de Argentina:");
   alert("Estuve en " + ciudad + " y me acordé de ti.");
} 

function sumarDosNumeros(){
    let numeroDeUsuario = document.getElementById('valorUsuario').value;
    console.log()


    let primerNumero = parseInt(prompt("Digite el primer número"));
    let segundoNumero = parseInt(prompt("Digite el segundo número"));
    let resultado = primerNumero + segundoNumero;
    alert(`Se indicó el número: ${primerNumero} y ${segundoNumero}, y el resultado es: ${resultado}`);
}

// Creando funciones reutilizables y modularizando el código de "Funciones v2"

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
asignarTexto('h1', "Hora del primer Desafío v3");


