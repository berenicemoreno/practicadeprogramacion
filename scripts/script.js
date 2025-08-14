window.onload = function () {
    var nombre = prompt('Dime tu nombre', '');
    if (nombre === null || nombre.trim() === "") {
        alert("Debes ingresar un nombre para continuar.");
        return;
    }
    alert("Hola " + nombre + ", lee las instrucciones de la página");
    document.getElementById("contenido").style.display = "block";
};

let funcionEjecutada = false;

function dias() {
    if (funcionEjecutada) return;
    funcionEjecutada = true;

    const dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    dias.forEach((dia, i) => {
        resultado.innerHTML += `Día ${i + 1}: ${dia}<br>`;
    });

    resultado.innerHTML += `<br><strong>Para volver a iniciar las funciones, recarga la página.</strong>`;
}

function tablaMulti(numero) {
    if (funcionEjecutada) return;
    funcionEjecutada = true;

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    numero = parseInt(numero);
    if (isNaN(numero)) {
        resultado.innerHTML = "Por favor, ingresa un número válido.";
        return;
    }

    for (let j = 1; j <= 10; j++) {
        resultado.innerHTML += `${numero} x ${j} = ${numero * j}<br>`;
    }

    resultado.innerHTML += `<br><strong>Para volver a iniciar las funciones, recarga la página.</strong>`;
}
