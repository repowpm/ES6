import { Cliente } from './cliente.js';
import { Empresa } from './empresa.js';

const empresa = new Empresa('XYZ Consultores');

const form = document.getElementById('clienteForm');
form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const montoBruto = parseFloat(document.getElementById('montoBruto').value);
    const deducciones = parseFloat(document.getElementById('deducciones').value);

    const nuevoCliente = new Cliente(nombre, montoBruto, deducciones);

    empresa.agregarCliente(nuevoCliente);

    const impuesto = nuevoCliente.calcularImpuesto();
    document.getElementById('resultado').innerText = `El impuesto anual a pagar por ${nuevoCliente.getNombre()} es: ${impuesto}`;
    
    form.reset();
});
