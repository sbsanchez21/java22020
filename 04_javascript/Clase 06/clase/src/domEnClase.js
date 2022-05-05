// acceso a los atributos de document
console.log(document);
console.log(document.URL);
console.log(document.charset);
console.log(document.body.childNodes[3].innerHTML);

// utilización de los métodos, los métodos es que lo sabe hacer
document.getElementById("primerParrafo");
console.log(document.getElementsByClassName("textoAzul"))
console.log(document.getElementsByTagName("input"));


document.getElementById("msjBienvenida").innerHTML = "Bienvenido a DOM";
document.getElementById("msjBienvenida").style.backgroundColor = "lightblue";

function crearNota() {
    document.getElementById("nota").innerHTML = "Nota creada";
    document.getElementById("btnEventoNota").value = "Eliminar Nota";
    
}

var listElem = document.getElementsByClassName("textoAzul");
console.log(listElem);


/** EVENTOS 
    suceso que ocurre en la ventada del navegador
*/
const btnEvento = document.getElementById('btnEvento');
btnEvento.onclick = function () {
    document.body.style.backgroundColor = "blue";
}

btnEvento.onmouseover = function () {
    document.body.style.backgroundColor = "red";
}

btnEvento.onmouseleave = function () {
    document.body.style.backgroundColor = "green";
}

