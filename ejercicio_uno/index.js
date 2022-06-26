class Estudiante {
    constructor(nombre) {
        this.nombre = nombre
    }
    mostrarNombre() {
        var input_nombre = document.getElementById("nombre_estudiante").value;
        document.getElementById("mostrar_nombre").innerHTML = input_nombre;

        var input_materias = document.getElementById("cantidad_materias").value;
        document.getElementById("mostrar_cantidad_materias").innerHTML = input_materias;

        var papeleria = 20000;
        var carne = 8000;
        var descuento = 0.2;
        var subtotal_valor_materia = 0;

        var tabla_valor_materia = document.getElementById("valor_materia").value;
        // var tablita = document.getElementsByClassName("valores").value;
        // console.log(tablita);
        console.log(tabla_valor_materia);
        // subtotal_valor_materia = subtotal_valor_materia + tabla_valor_materia;
        // console.log(subtotal_valor_materia);
        var total = papeleria + carne + descuento;

        document.getElementById("total").innerHTML = total;

    }
    mostrarTabla() {
        var numFilas = document.getElementById("cantidad_materias").value;
        var numColumnas = 2;
        var contenedorTabla = document.getElementById("contenedorTabla");

        contenedorTabla.innerHTML = "";
        var tabla = "<table>";
        tabla += "<tr><th>Materia</th><th>Valor</th></tr>";
        for (var f = 1; f <= numFilas; f++) {
            tabla += "<tr>";
            // for (var c = 1; c <= numColumnas; c++) {
            tabla += '<td><input type="text" id="nombre_materia" name="nombre_materia" value=""></td>';
            tabla += '<td><input type="text" id="valor_materia" name="valor_materia" value="" class="valores"></td>';
            // }
            tabla += "</tr>";
        }
        tabla += "</table>";
        contenedorTabla.innerHTML = tabla;
    }
}

const estudiante = new Estudiante("Estudiante");

document.getElementById("boton_calcular").addEventListener("click", function(event) {

    event.preventDefault();
    estudiante.mostrarNombre()

});

document.getElementById("boton_tabla").addEventListener("click", function(event) {

    event.preventDefault();
    estudiante.mostrarTabla()

});