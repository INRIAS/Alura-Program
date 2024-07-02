let numeroSecreto;
let intentos = 1;
let quedan = 4;
let listaNumerosRamdom = [];
let nummeroMaximo = 10;
let niveles = 1;

function asignarTextoElemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
}

//Generar codigo secreto aleatorio
function generarNumeroSecreto() {
  let numeroGenerado = parseInt(Math.floor(Math.random() * 10) + 1);
  // si ya sorteamos todos los numeros
  if (listaNumerosRamdom.length == nummeroMaximo) {
    asignarTextoElemento(
      "p",
      `Ya haz alcanzado todos los niveles del juego`
    );
    document.getElementById("iniciar").innerHTML="Reiniciar juego"
    niveles=1;
    listaNumerosRamdom=[];
    
  } else {
    //Si el numero generado esta en lista
    if (listaNumerosRamdom.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosRamdom.push(numeroGenerado);
      console.log(listaNumerosRamdom);
      return numeroGenerado;
    }
  }
};

//Limpiar campo
let limpiaCampo = function () {
  let limpiar = document.querySelector("#valorUsuario");
  limpiar.value = "";
};

//Generar codigo secreto aleatorio
function verificarIntento() {
  let numeroDeUsuario = document.getElementById("valorUsuario").value;
  numeroDeUsuario = parseInt(numeroDeUsuario);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      } del nivel ${niveles}`
    );
    document.getElementById("intentar").setAttribute("disabled", "true");
    document.getElementById("reiniciar").removeAttribute("disabled");
    niveles++;
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento(
        "p",
        `El número secreto es menor, ${
          quedan === 1
            ? `te queda ${quedan} intento`
            : `te quedan ${quedan} intentos`
        }`
      );
      quedan--;
      limpiaCampo();
    } else {
      asignarTextoElemento(
        "p",
        `El número secreto es mayor, ${
          quedan === 1
            ? `te queda ${quedan} intento`
            : `te quedan ${quedan} intentos`
        }`
      );
      quedan--;
      limpiaCampo();
    }
    if (quedan === -1) {
      document.getElementById("intentar").setAttribute("disabled", "true");
      document.getElementById("reiniciar").removeAttribute("disabled");
    }
  }
  return;
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número Secreto..!!");
  asignarTextoElemento("p", "Indica un número del 1 al 10");
  numeroSecreto = generarNumeroSecreto();
  console.log(numeroSecreto);
  intentos = 1;
  quedan = 4;
}

function reiniciarJuego() {
  limpiaCampo();
  condicionesIniciales();
  document.getElementById("reiniciar").setAttribute("disabled", "true");
  document.getElementById("intentar").removeAttribute("disabled");
}

condicionesIniciales();
