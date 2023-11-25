class Encuesta {
    constructor(pregunta, opciones) {
      this.pregunta = pregunta;
      this.opciones = opciones;
      this.resultados = new Map();
    }
  
    agregarVoto(opcion) {
      if (this.opciones.includes(opcion)) {
        this.resultados.set(opcion, (this.resultados.get(opcion) || 0) + 1);
        this.mostrarResultados();
      } else {
        console.log("Opción no válida");
      }
    }
  
    mostrarResultados() {
      console.log("Resultados de la encuesta: " + this.pregunta);
      this.opciones.forEach(opcion => {
        const votos = this.resultados.get(opcion) || 0;
        console.log(`${opcion}: ${votos} votos`);
      });
    }
    realizarEncuesta() {
        const nombre = prompt("Por favor, ingresa tu nombre:");
        hello(nombre); 
        console.log(`Hola, ${nombre}!`);
        const respuesta = prompt(`Nueva encuesta: ${this.pregunta}\n\n${this.opciones.map((opcion, index) => `${index + 1}. ${opcion}`).join('\n')}\n\nPor favor, ingresa el número de tu elección:`);
  
        if (respuesta && !isNaN(respuesta)) {
          const opcionElegida = this.opciones[parseInt(respuesta) - 1];
  
          if (opcionElegida) {
            this.agregarVoto(opcionElegida);
            console.log(`¡Has votado por ${opcionElegida}!`);
          } else {
            console.log("Número de opción no válido.");
          }
        } else {
          console.log("Por favor, ingresa un número válido.");
        }
      }
    }
      function hello(name) {
            console.log("Hola, mi nombre es: " + name);
      }
  const encuesta1 = new Encuesta("¿Color faborito?", ["Rojo", "Negro", "Azul", "Rosa"]);
  encuesta1.realizarEncuesta();
  encuesta1.realizarEncuesta();
  encuesta1.realizarEncuesta();
  encuesta1.realizarEncuesta();
  encuesta1.realizarEncuesta();
  encuesta1.mostrarResultados();
  const encuesta2 = new Encuesta("¿Cual es tu animal faborito?", ["Perro", "Gato", "Conejo","Hámster"]);
  encuesta2.realizarEncuesta();
  encuesta2.realizarEncuesta()
  encuesta2.realizarEncuesta()
  encuesta2.realizarEncuesta()
  encuesta2.realizarEncuesta()
  encuesta2.mostrarResultados();
  const encuesta3 = new Encuesta("¿Cuál género musical es tu favorito?", ["Pop", "Rock", "Electrónica", "Hip-hop"]);
  encuesta3.realizarEncuesta();
  encuesta3.realizarEncuesta();
  encuesta3.realizarEncuesta();
  encuesta3.realizarEncuesta();
  encuesta3.realizarEncuesta();
  encuesta3.mostrarResultados();
  const encuesta4 = new Encuesta("¿Prefieres?", ["Café", "Tequila", "Refresco", "Té"]);
  encuesta4.realizarEncuesta();
  encuesta4.realizarEncuesta();
  encuesta4.realizarEncuesta();
  encuesta4.realizarEncuesta();
  encuesta4.realizarEncuesta();
  encuesta4.mostrarResultados();
  const encuesta5 = new Encuesta("¿A donde irias de vacaciones?", ["Ciudad de Mexico", "Puerto vallarta", "Mazatlan", "Guallavitos"]);
  encuesta5.realizarEncuesta();
  encuesta5.realizarEncuesta();
  encuesta5.realizarEncuesta();
  encuesta5.realizarEncuesta();
  encuesta5.realizarEncuesta();
  encuesta5.mostrarResultados();
          