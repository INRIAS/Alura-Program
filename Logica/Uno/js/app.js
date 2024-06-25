let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario;
let intentos = 1;
let quedan = 4;

console.log(numeroSecreto);
console.log(typeof numeroSecreto);


while (quedan != -1 && numeroSecreto != numeroUsuario) {

  numeroUsuario = parseInt(prompt("Indica un número entre 1 y 10 por favor:"));
  console.log(typeof numeroUsuario);
  if (typeof numeroUsuario == Number) {
  
  if (numeroUsuario == numeroSecreto) {
    alert(
      `Acertaste el número secreto, lo lograste en ${intentos} ${intentos==1 ? "intento." : "intentos."}`
    );
  } else if (numeroUsuario > numeroSecreto) {
    alert(
      `El número secreto es menor, Te ${quedan==1 ? "queda" : "quedan"} ${quedan} ${quedan==1 ? "intento restante." : "intentos restantes."}`
    );
    intentos++;
    quedan--;
  } else {
    alert(
      `El número secreto es mayor, Te ${quedan==1 ? "queda" : "quedan"} ${quedan} ${quedan==1 ? "intento restante." : "intentos restantes."}`
    );
    intentos++;
    quedan--;
  }
  palabraVeces = "intentos.";

  if (quedan == -1) {
    alert("Excediste el numero de intentos posibles, Sistema Blqueaado.!");
  }

  } else{
    alert("EL sistema solo admite números")
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
