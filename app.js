let inicioJuego = confirm("¿Querés jugar un juego?");
let numero = Math.floor(Math.random() * 100) + 1;
let oportunidad;
let intento;

if (inicioJuego == true) {

while (inicioJuego == true) {
oportunidad = 3
do  {
    intento = Number(prompt("ingrese un número del 1 al 100"));
    oportunidad--;
    if (intento == numero) {
    alert("Felicitaciones! Ganaste!");
    break;
    } else {
    alert(`No tuviste suerte, te quedan ${oportunidad} intentos`);
    }
    }
    while (oportunidad > 0
        )
        inicioJuego = confirm("¿Querés jugar de nuevo?");   
    }
} else {
    alert("En otra ocasión");
}
