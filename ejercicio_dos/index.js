class Numero {
    constructor(numero) {
        this.numero = numero
    }
    mostrarNumeroUno() {
        let input_cantidad_numeros = document.getElementById("cantidad_numeros").value;
        document.getElementById("mostrar_cantidad_numeros").innerHTML = input_cantidad_numeros;

        let numero_mayor = 0;
        let numero_menor = 100000000;

        // var $formulario = document.getElementById("field_wrapper");
        // var $fieldHTML = '<div><input type="text" name="field_name[]" value=""/></div>';
        // $formulario.append($fieldHTML.innerHTML);

        var $numero_uno = document.getElementById("numero_uno").value;
        var $numero_dos = document.getElementById("numero_dos").value;
        var $numero_tres = document.getElementById("numero_tres").value;
        var $numero_cuatro = document.getElementById("numero_cuatro").value;

        var myArray = [$numero_uno, $numero_dos, $numero_tres, $numero_cuatro];
        var menor = Math.min(...myArray);
        var mayor = Math.max(...myArray);
        document.getElementById("numero_menor").innerHTML = menor;
        document.getElementById("numero_mayor").innerHTML = mayor;

    }

    mostrarNumeroDos() {
        let input_cantidad_numeros = document.getElementById("cantidad_numeros").value;
        document.getElementById("mostrar_cantidad_numeros_forma2").innerHTML = input_cantidad_numeros;

        let numero_mayor = 0;
        let numero_menor = 100000000;

        document.getElementById("numero_menor_forma2").innerHTML = numero_menor;
        document.getElementById("numero_mayor_forma2").innerHTML = numero_mayor;

    }
}

const numero = new Numero("Dos");

document.getElementById("boton_uno").addEventListener("click", function(event) {

    event.preventDefault();
    numero.mostrarNumeroUno()

});

document.getElementById("boton_dos").addEventListener("click", function(event) {

    event.preventDefault();
    numero.mostrarNumeroDos()

});