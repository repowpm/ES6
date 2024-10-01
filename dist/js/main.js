"use strict";

var _cliente = require("./cliente.js");
// Crear instancia de Cliente
var cliente1 = new _cliente.Cliente('Juan Perez', 100000, 20000);

// Mostrar el resultado en el HTML
var resultado = "El impuesto anual a pagar por ".concat(cliente1.getNombre(), " es: ").concat(cliente1.calcularImpuesto());
document.getElementById('resultado').innerText = resultado;