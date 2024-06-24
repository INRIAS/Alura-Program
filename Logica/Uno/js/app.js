let numeroSecreto = 6;
let numeroUsuario;
let intentos = 1;
let quedan = 4;
let palabraVeces = "intento";
let palabraIntentos = "intentos",
  queda = "quedan",
  restante = "restantes.";

while (quedan != -1 && numeroSecreto != numeroUsuario) {
  if (quedan == 1) {
    palabraIntentos = "intento";
    queda = "queda";
    restante = "restante.";
  }

  numeroUsuario = prompt("Indica un número entre 1 y 10 por favor:");
  if (numeroUsuario == numeroSecreto) {
    alert(
      `Acertaste el número secreto, lo lograste en ${intentos} ${palabraVeces}`
    );
  } else if (numeroUsuario > numeroSecreto) {
    alert(
      `El número secreto es menor, Te ${queda} ${quedan} ${palabraIntentos} ${restante}`
    );
    intentos++;
    quedan--;
  } else {
    alert(
      `El número secreto es mayor, Te ${queda} ${quedan} ${palabraIntentos} ${restante}`
    );
    intentos++;
    quedan--;
  }
  palabraVeces = "intentos.";

  if (quedan == -1) {
    alert("Excediste el numero de intentos posibles, Sistema Blqueaado.!");
  }
}

/* --------------------- Codigo Licencia de Conducir--------------
const nombre="Luna";
const mensajeDeError="!Error¡ Completa todos los campos";
let edad=25, numeroDeVentas=50, saldoDisponible=1000;
const nombreIngresar=prompt("Ingrese su nombre");
const edadIngresar=prompt("Ingrese su edad");


alert("Bienvnid@s a Nuestro sitio Web");
// alert(mensajeDeError);

if (edadIngresar>=18) {
    alert(nombreIngresar + " , Puedes obtener una licencia de conducir")
} else{
    alert(nombreIngresar + " , Para obtener una licencia debes tener minimo 18 años")
}; */
