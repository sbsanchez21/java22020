/** DOM 
 Permite la manipulación de elementos html
 Con DOM JavaScript obtiene todo el poder que necesita para crear HTML dinámico
 * */

/** Métodos y propiedades
   Los métodos HTML DOM son acciones que puede realizar (en elementos HTML).
   Las propiedades HTML DOM son valores (de elementos HTML) que puede establecer o cambiar.
*/
// método getElementByid, propiedad innerHTML
document.getElementById("hola").innerHTML = "Bienvenidos a DOM!";





function crearNota() {
    // modificación contenido html
    document.getElementById("nota").innerHTML = "Bienvenido DOM"
}

// modifiación estilo css
function cambiarColorNota() {
    document.getElementById("nota").style.color = "blue";
}

//var x = document.getElementsByTagName("p");
//var x = document.getElementsByClassName("intro");
// var x = document.querySelectorAll("p.intro");
// document.getElementById("p2").style.color = "blue";
// buscar por nombre etiqueta
var listaP = document.getElementsByTagName("p");
console.log(listaP);

// buscar por nombre de clase
var listaClase = document.getElementsByClassName("textoPrincipal");
console.log(listaClase);

//animaciones

/** EVENTOS 
    suceso que ocurre en la ventada del navegador
*/
const btn = document.getElementById('btnEvento');
btn.onclick = function () {
    document.body.style.backgroundColor = "blue";
}

btn.onmouseover = function () {
    document.body.style.backgroundColor = "red";
}

btn.onmouseleave = function () {
    document.body.style.backgroundColor = "green";
}


const p = document.getElementById('mouserOver');
p.onmouseover = logMouseOver;
p.onmouseout = logMouseOut;
function logMouseOver() {
    p.innerHTML = 'MOUSE OVER detected';
    p.style.color = "red";
}

function logMouseOut() {
    p.innerHTML = 'MOUSE OUT detected';
    p.style.color = "blue";
}
