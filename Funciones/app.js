let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del primer Desafío v2';

function mostarMensajeEnLaConsola() {
    console.log('El botón fue cliqueado!')
}

function mostarCiudad(){
    let ciudad = prompt("Por favor, ingrese el nombre de una ciudad de Argentina:");
   alert("Estuve en " + ciudad + " y me acordé de ti.");
} 

function mostarAlerta(){
    alert("YO AMO JS");
}

function sumarDosNumeros(){
    let primerNumero = parseInt(prompt('Digite el primer número'));
    let segundoNumero = parseInt(prompt('Digite el segundo número'));
    let resultado = primerNumero + segundoNumero;
    alert(`Se indicó el número: ${primerNumero} y ${segundoNumero}, y el resultado es: ${resultado}`);
}
