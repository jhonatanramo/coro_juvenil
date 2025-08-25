// js/Repertorio.js
class Repertorio {
  constructor() {
    this.general = ""; // inicializamos vacío
    this.nombres = [];
    this.coro = [];
    this.parrafo = [];
  }
  async cargar() {
    try {
      const response = await fetch('./himno.txt'); // ajusta la ruta según tu HTML
      if (!response.ok) throw new Error("Archivo no encontrado");
      
      this.general = await response.text(); // guardamos el texto
      return this.general; // opcional
    } catch (error) {
      console.error(error);
    }
  }

  mostrar() {
    return this.general;
  }
}
