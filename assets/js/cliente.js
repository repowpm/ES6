export class Cliente {
    constructor(nombre, montoBrutoAnual, deducciones) {
      this.nombre = nombre;
      this.montoBrutoAnual = montoBrutoAnual;
      this.deducciones = deducciones;
    }
  
    getNombre() {
      return this.nombre;
    }
  
    setNombre(nombre) {
      this.nombre = nombre;
    }
  
    calcularImpuesto() {
      return (this.montoBrutoAnual - this.deducciones) * 0.21;
    }
  }