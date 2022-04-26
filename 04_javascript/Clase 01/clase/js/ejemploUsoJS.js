
function sumar() {
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    var result = parseFloat(a) + parseFloat(b);

    document.getElementById("resultSuma").innerHTML = result;

}

function restar() {
    console.error("Ingresó a la función restar");
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    var result = parseFloat(c) - parseFloat(d);

    console.warn(c);
    console.log(d);
    console.log(result);
    
    document.getElementById("resultResta").innerHTML = result;
}

function resaltar() {
    document.getElementById("titulo").style.backgroundColor="red";
    
}

function opacar() {
    document.getElementById("titulo").style.backgroundColor="lightgray";
}

function imprimir() {
    window.print();
}
