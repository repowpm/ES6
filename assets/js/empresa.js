export class Empresa {
    constructor(nombre) {
        this.nombre = nombre;
        this.clientes = []; 
    }


    agregarCliente(cliente) {
        this.clientes.push(cliente);
    }

  
    calcularImpuestoTotal() {
        return this.clientes.reduce((total, cliente) => {
            return total + cliente.calcularImpuesto();
        }, 0);
    }


    mostrarClientes() {
        this.clientes.forEach(cliente => {
            console.log(`Cliente: ${cliente.getNombre()}, Impuesto: ${cliente.calcularImpuesto()}`);
        });
    }
}
