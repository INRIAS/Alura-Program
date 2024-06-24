alert("Buen día..!!");

//-----------Dia de la semana-------------
/* let diaSemana = prompt("Que día de la semana es: ");

let diaSemanaLow= diaSemana.toLowerCase();

diaSemanaLow == "sabado" || diaSemanaLow == "domingo"
  ? alert("Buen fin de Semana")
  : alert("Buena Semana"); */

//--------Numero POsitivo u Negativo------------
/* let numero = prompt("Ingrese un número: ");

numero > 0
  ? alert("El número es positivo")
  : numero < 0
  ? alert("El número es Negativo")
  : alert("El número es Cero");
 */

//--------Puntuación------------
/* let puntuacion = prompt("ingrese su puntuacion: ");

puntuacion != 99 && puntuacion >= 100
  ? alert(`!Felicidades has ganado¡ tu puntuacion fue de ${puntuacion}`)
  : puntuacion != 99 && puntuacion < 99
  ? alert(`Lo sentimos has perdido, te faltaron ${100 - puntuacion} puntos para ganar`)
  : alert(`Lo sentimos has perdido, te falto 1 punto para ganar`); */

//----Bucle----
iterador = 1;
let numeroContar = prompt("Ingresa el número veces que se contara: ");
numeroContar ++;

while (iterador != numeroContar) {
  console.log(`${iterador}`);
    iterador++;
  }
