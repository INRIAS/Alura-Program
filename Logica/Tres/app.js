let titulo = (document.querySelector("h1").innerHTML = "Hora del Desafio");

function consola() {
  let alerta = "Log Prueba";
  alert("Probando");
  console.log(alerta);
}

function mensaje() {
  let mensajePrompt = prompt("Nombre de una ciudad de Brasil");
  alert("Yo estuve en " + mensajePrompt);
}

function amor() {
  alert("Yo Amo JS");
}

function suma() {
  let numeroUno = parseInt(prompt("Indica el #1: "));
  let numeroDos = parseInt(prompt("Indica el #2: "));
  alert("El resultado de la suma es: " + (numeroUno + numeroDos));
}
