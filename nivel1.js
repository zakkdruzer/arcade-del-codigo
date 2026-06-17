// NIVEL 1 - SECTOR DE ARRANQUE
// EL INVENTARIO DEL HÉROE

let nombre = "Kira";
let nivel = 7;
let energia = 88.5;
let estaVivo = true;
let monedas = 120;

const juego = "Arcade del Código";

let poderSecreto;
poderSecreto = 99;

console.log("Este es el nivel 1 del juego " + juego);
console.log("nombre es de tipo " + typeof nombre);
console.log("nivel es de tipo " + typeof nivel);
console.log("energia es de tipo " + typeof energia);
console.log("estaVivo es de tipo " + typeof estaVivo);
console.log("monedas es de tipo " + typeof monedas);

console.log("Héroe: " + nombre + " | Nivel " + nivel + " | Energía " + energia + " | ¿Vive? " + estaVivo + " | " + monedas + " monedas");
console.log("poderSecreto sin inicializar sería " + typeof poderSecreto);