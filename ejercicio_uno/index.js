class Estudiante {
    constructor(nombre) {
        this.nombre = nombre
    }
    mostrarNombre() {
        let input_nombre = document.getElementById("nombre_estudiante").value;
        document.getElementById("mostrar_nombre").innerHTML = input_nombre;

        let input_materias = document.getElementById("cantidad_materias").value;
        document.getElementById("mostrar_cantidad_materias").innerHTML = input_materias;

        let papeleria = 20000;
        let carne = 8000;
        let descuento = 0.2;

        let total = papeleria + carne + descuento;

        document.getElementById("total").innerHTML = total;

    }
}

const estudiante = new Estudiante("Estudiante");

document.getElementById("boton").addEventListener("click", function(event) {

    event.preventDefault();
    estudiante.mostrarNombre()

});

// const botonHTML = document.querySelector('#boton');
// const nombreEstudianteHTML = document.querySelector('#nombre_estudiante');
// botonHTML.addEventListener('click', estudiante.mostrarNombre);