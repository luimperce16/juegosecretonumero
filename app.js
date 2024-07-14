
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];

console.log(numeroSecreto);


function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento () {
      let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
     
     
      console.log(intentos);
      if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos ===1) ? "ves" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
      } else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "el número secreto es menor");
        }  else {
            asignarTextoElemento("p", "el número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
      }           
      return;
   }
function limpiarCaja() {
document.querySelector("#valorUsuario").value = ""; 
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
function condicionesIniciales() {
        asignarTextoElemento ("h1","juego del número secreto");
        asignarTextoElemento ("p","indica un número del 1 al 10");
        numeroSecreto = generarNumeroSecreto();
        intentos = 1;
    }

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled, true");    
}
condicionesIniciales();