{
// NIVEL 4 - COMBATE
// EL DUELO DE PODERES

console.log("Este es el nivel 4 del juego " + juego);

// Misión A — Incremento y decremento
console.log("Misión A — Incremento y decremento");
let vidasNivel4 = 3;
vidasNivel4++;
console.log("Vidas tras power-up: " + vidasNivel4);

let aNivel4 = 3;
let resultadoPostfijoNivel4 = aNivel4++;
console.log("a++ devuelve " + resultadoPostfijoNivel4 + " y luego a vale " + aNivel4);

let bNivel4 = 3;
let resultadoPrefijoNivel4 = ++bNivel4;
console.log("++a devuelve " + resultadoPrefijoNivel4);

// a++ primero devuelve el valor actual y después suma 1
// ++a primero suma 1 y después devuelve el nuevo valor

// Misión B — Comparaciones
console.log("Misión B — Comparaciones");
let poderHeroeNivel4 = 7;
let poderEnemigoNivel4 = 5;

console.log("poderHeroe == poderEnemigo -> " + (poderHeroeNivel4 == poderEnemigoNivel4));
console.log("poderHeroe != poderEnemigo -> " + (poderHeroeNivel4 != poderEnemigoNivel4));
console.log("poderHeroe > poderEnemigo -> " + (poderHeroeNivel4 > poderEnemigoNivel4));
console.log("poderHeroe >= poderEnemigo -> " + (poderHeroeNivel4 >= poderEnemigoNivel4));
console.log("poderHeroe < poderEnemigo -> " + (poderHeroeNivel4 < poderEnemigoNivel4));
console.log("poderHeroe <= poderEnemigo -> " + (poderHeroeNivel4 <= poderEnemigoNivel4));
}