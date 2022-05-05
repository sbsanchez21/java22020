console.log(document);
console.log(document.URL);
console.log(document.body.childNodes);
console.log(document.getElementById("msjBienvenida"))

// métodos de dom
console.log(document.getElementsByTagName("p"))
console.log(document.getElementsByClassName("textoSecundario"))

// atributos de los elementos
document.getElementById("msjBienvenida").innerHTML="Hello DOM"
document.getElementById("msjBienvenida").className="textoSecundario"

function crearNota() {
    // crea una nota
    document.getElementById("nota").innerHTML="Nota creada dinámicamente"

    

    // modifica el texto del botón
    document.getElementById("btnNota").value = "ELIMINAR nota"

    // modificar la función del evento
    document.getElementById("btnNota").onclick = eliminarNota
}

function eliminarNota() {
    // eliminamos una nota
    document.getElementById("nota").innerHTML=""

    // modifica el texto del botón
    document.getElementById("btnNota").value = "CREAR nota"

    // modificar la función del evento
    document.getElementById("btnNota").onclick = crearNota
}


// eventos
var btnEvento = document.getElementById("btnEvento")
// creación de evento dinámicamente
// btnEvento.onclick = function () {
document.getElementById("btnEvento").onclick = function () {
    document.body.style.backgroundColor = "blue";
    btnEvento.value = "Cambiar color"
}

btnEvento.onmouseover = function () {
    document.body.style.backgroundColor = "red";
}

var inputEmail = document.getElementById("email")
inputEmail.onkeyup = function () {
    if (inputEmail.length > 0) {
        document.getElementById("nota").innerHTML="ok"
    } else {
        document.getElementById("nota").innerHTML="vacio"
    }
}


