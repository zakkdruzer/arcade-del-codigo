{
// NIVEL 3 - POWER-UPS
// LA MÁQUINA DE PUNTAJE

let monedas = 3;
let gemas = 5;
let multiplicador = 2;

console.log("Este es el nivel 3 del juego " + juego);

// Misión A — Aritmética básica
console.log("Suma: " + (monedas + gemas) + " | " + "Resta: " + (gemas - monedas) + " | " + "Multiplicación: " + (gemas * monedas) + " | " + "División: " + (gemas / monedas));

// Misión B — Precedencia
let puntajeSinParentesis = monedas + gemas * multiplicador;
let puntajeConParentesis = (monedas + gemas) * multiplicador;

console.log("Puntaje (sin paréntesis): " + puntajeSinParentesis);
console.log("Puntaje (con paréntesis): " + puntajeConParentesis);

// Misión C — Resto
let restoPuntaje = puntajeSinParentesis % 2;
console.log("Resto del puntaje entre 2: " + restoPuntaje);
}