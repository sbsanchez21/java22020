/**
 * 
 */
document.addEventListener("keypress", function(e) {
    // console.log(e.key)
    if (e.key=="Enter") {
        let inputs=document.getElementsByTagName("input")
        // console.log(inputs)  
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.display="none"
        }          
    }
}
)


/**
 * 
 * @param {*} id 
 */
function showInput(id) {
    document.getElementById(id).style.display="block"
    document.getElementById(id).focus()
}

/**
 * Modifica el texto de la tabla según lo
 * que se ingresó en el input
 * @param {*} id 
 * @param {*} texto 
 */
function updTexto(id, texto) {
    document.getElementById(id).innerHTML=texto
}

/**
 * Pone visible todos los inputs de la fila
 * dada por el parámetro fila
 * @param {*} fila recibe el número de la fila
 */
function showAllInputs(fila) {
    // console.log(document.getElementById("txtnom1").innerHTML)

    // console.log(document.querySelector("input#dni1"))
    document.querySelector(`input#nom${fila}`).style.display="block"
    document.querySelector(`input#ape${fila}`).style.display="block"
    document.querySelector(`input#dni${fila}`).style.display="block"

}

function ocultarFila(id) {
    document.getElementById(id).style.display="none"
}

