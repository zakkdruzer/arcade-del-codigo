{
console.log("Este es el Jefe Final del juego " + juego);

// Cliente
let nombreCliente = "Kira";
let monedasDisponibles = 300;

// Productos
let producto1 = "VidaExtra";
let precioProducto1 = 50;
let cantidadProducto1 = 2;

let producto2 = "EscudoLegendario";
let precioProducto2 = 75;
let cantidadProducto2 = 1;

let producto3 = "Pocion";
let precioProducto3 = 15;
let cantidadProducto3 = 3;

// Subtotales
let subtotalProducto1 = precioProducto1 * cantidadProducto1;
let subtotalProducto2 = precioProducto2 * cantidadProducto2;
let subtotalProducto3 = precioProducto3 * cantidadProducto3;

// Total
let total = subtotalProducto1 + subtotalProducto2 + subtotalProducto3;

// Descuento 10%
let descuento = total * 0.10;
let totalConDescuento = total - descuento;

// BONUS 1: IVA 19% (Chile)
let iva = totalConDescuento * 0.19;
let totalMasIva = totalConDescuento + iva;

// Saldo final
let saldoFinal = monedasDisponibles - totalMasIva;

// BONUS 2: código con primera letra + largo + última letra
let codigoCliente =
nombreCliente.charAt(0) +
nombreCliente.length +
nombreCliente.charAt(nombreCliente.length - 1);

// BONUS 3: letras del producto más caro
// Lo definimos manualmente como el más caro para no usar if
let productoMasCaro = producto2;
let letrasProductoMasCaro = productoMasCaro.length;

// Recibo
console.log("===== TIENDA DEL ARCADE =====");
console.log("Cliente: " + nombreCliente + " (código " + codigoCliente + ")");
console.log(producto1 + " x" + cantidadProducto1 + " = " + subtotalProducto1 + " monedas");
console.log(producto2 + " x" + cantidadProducto2 + " = " + subtotalProducto2 + " monedas");
console.log(producto3 + " x" + cantidadProducto3 + " = " + subtotalProducto3 + " monedas");
console.log("-----------------------------");
console.log("Total: " + total + " monedas");
console.log("Descuento (10%): -" + descuento + " monedas");
console.log("Subtotal con descuento: " + totalConDescuento + " monedas");
console.log("IVA (19%): +" + iva + " monedas");
console.log("TOTAL A PAGAR: " + totalMasIva + " monedas");
console.log("Saldo restante: " + saldoFinal + " monedas");
console.log("Producto más caro: " + productoMasCaro);
console.log("Letras del producto más caro: " + letrasProductoMasCaro);
console.log("=============================");
}