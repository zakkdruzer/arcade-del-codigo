# Arcade del Código - Módulo 4 · Lección 02

## Descripción
Este proyecto corresponde a una actividad práctica de JavaScript enfocada en el uso de variables, operadores y cadenas de caracteres.

La tarea fue desarrollada por niveles, separando cada ejercicio en archivos `.js` distintos para mantener el código ordenado y facilitar su exposición en consola. Los resultados se muestran con `console.log()` desde un archivo `index.html` que carga cada script en orden.

## Objetivo
Practicar los fundamentos de JavaScript vistos en clase:

- Declaración de variables con `let` y `const`.
- Uso de `typeof`.
- Operadores aritméticos.
- Incremento y decremento.
- Operadores de comparación.
- Concatenación de cadenas.
- Uso de `.length` y `charAt()`.

## Estructura del proyecto

```text
/
├── index.html
├── nivel1.js
├── nivel2.js
├── nivel3.js
├── nivel4.js
├── nivel5.js
└── jefeFinal.js
```

## Ejecución
1. Abrir el archivo `index.html` en el navegador.
2. Abrir la consola del navegador con `F12`.
3. Revisar los resultados impresos por cada nivel.

## index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Arcade del Código</title>
</head>
<body>
  <h5 style="color: red; font-size: 40px;">Debes abrir la consola para ver los resultados</h5>

  <script src="nivel1.js"></script>
  <script src="nivel2.js"></script>
  <script src="nivel3.js"></script>
  <script src="nivel4.js"></script>
  <script src="nivel5.js"></script>
  <script src="jefeFinal.js"></script>
</body>
</html>
```

## Contenido de la tarea

### Nivel 1
Se trabajó la declaración e inicialización de variables con distintos tipos de datos, además del uso de `typeof` para identificarlos.

### Nivel 2
Se practicó el tipado dinámico de JavaScript, incluyendo `undefined`, cambio de tipo en una misma variable y el comportamiento del operador `+` con números y texto.

### Nivel 3
Se resolvieron ejercicios de suma, resta, multiplicación, división, precedencia de operadores y uso del operador resto `%`.

### Nivel 4
Se aplicaron operadores de incremento y decremento, junto con comparaciones que retornan `true` o `false`.

### Nivel 5
Se trabajó la concatenación de cadenas, la propiedad `.length` y el método `charAt()` para acceder a caracteres específicos.

### Jefe final
Se integraron variables, operadores y cadenas en un recibo de compra para una tienda arcade, calculando subtotales, descuento, saldo final y código de cliente.

## Bonus implementados
En el jefe final también se pueden incorporar misiones extra como:

- Cálculo de IVA del 19%.
- Longitud del nombre del producto más caro.
- Código de cliente con primera letra, cantidad de letras y última letra del nombre.

## Problema encontrado
Al cargar varios archivos JavaScript en la misma página, apareció el error:

```js
Uncaught SyntaxError: Identifier 'monedas' has already been declared
```

Esto ocurre porque varios archivos comparten el mismo alcance global al cargarse desde distintos `<script>` en un mismo HTML. Para evitarlo, se usaron nombres de variables diferentes o bloques `{ ... }` para aislar cada nivel, ya que `let` y `const` tienen alcance de bloque.

## Tecnologías utilizadas

```text
- HTML5
- JavaScript
- Consola del navegador
- Markdown
```

## Aprendizajes
Esta actividad permitió reforzar la lógica básica de JavaScript antes de avanzar a estructuras condicionales. También ayudó a comprender mejor la organización del código en múltiples archivos y la importancia del alcance de variables al trabajar con varios scripts en una misma página.

**Puedes ver el resultado en:**

https://zakkdruzer.github.io/arcade-del-codigo/
