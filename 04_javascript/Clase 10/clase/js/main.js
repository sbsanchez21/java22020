
// callback con función inline
// document.addEventListener(
//     "keypress", 
//     function(e) {
//         console.log(e.key)
//         if (e.key == "Enter") {
//             let inputs=document.getElementsByTagName("input") 
//             for (let i = 0; i < inputs.length; i++) {
//                 inputs[i].style.display="none"
            
//             }
//         }
//     }
// )

// callback enviar una función como parámetro
document.addEventListener("keypress", hideInputs)

// addEventListener(typo, funcion) {
//     let e=caputra el evento
//     hideInputs(e)
// }

function hideInputs(e) {
    console.log(e.key)
    if (e.key == "Enter") {
        let inputs=document.getElementsByTagName("input") 
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.display="none"
           
        }
    }
}

document.addEventListener("keypress", actualizar)
function actualizar(e) {
    if (e.key == "*") {
        location.reload()
    }
}



window.onload=function () {

    let listAlumnos=[
        [11, "Pedro", "Tarkowsky", 25665466],
        [42, "Juan", "Jarosewsky", 25456654],
        [33, "Nicanor", "Paredes", 25666345],
        [4, "Jacinto", "Chiclana", 25666345],
        [54, "Santos", "Vega", 25666345],
        [6, "Ariel", "Ramírez", 25666345],
        [7, "Enrique Santos", "Dicepolo", 25666345],
        [8, "Carlos", "Vega", 25666345],
        [9, "Enrique Santos", "Dicepolo", 25666345],
        [10, "Enrique Santos", "Dicepolo", 366556546],
        [11, "Jose", "Antonio", 33555555],
        [12, "Marta", "Gonzalez", 34444455],        
    ]

    
    var body=document.getElementsByTagName("body")[0]
    // var body=document.getElementById("body1")
    
    // tabla
    var table=document.createElement("table")
    table.setAttribute(`class`,`table table-striped`)

    /************** encabezado ******************/
    var thead=document.createElement("thead")
    var tr=document.createElement("tr")
    // col id
    var th=document.createElement("th")
    var txt=document.createTextNode("#ID")
    th.appendChild(txt)
    tr.appendChild(th)
    // col nombre
    var th=document.createElement("th")
    var txt=document.createTextNode("Nombre")
    th.appendChild(txt)
    tr.appendChild(th)
    // col apellido
    var th=document.createElement("th")
    var txt=document.createTextNode("Apellido")
    th.appendChild(txt)
    tr.appendChild(th)
    // col dni
    var th=document.createElement("th")
    var txt=document.createTextNode("DNI")
    th.appendChild(txt)
    tr.appendChild(th)
    // col operaciones
    var th=document.createElement("th")
    var txt=document.createTextNode("")
    th.appendChild(txt)
    tr.appendChild(th)

    thead.appendChild(tr)
    table.appendChild(thead)


    /************** cuerpo tabla ******************/
    var tbody=document.createElement("tbody")
    for (let i = 0; i < listAlumnos.length; i++) {
        var tr=document.createElement("tr")
        tr.setAttribute("id",`tr${i}`)
        // col id
        var td=document.createElement("td")
        var txt=document.createTextNode(listAlumnos[i][0])
        td.appendChild(txt)
        tr.appendChild(td)

        // col nombre
        var td=document.createElement("td")
        // div texto
        var div=document.createElement("div")
        div.setAttribute(`id`,`txtnom${i}`)
        div.setAttribute(`onclick`,`habilitarInput('nom${i}')`)
        var txt=document.createTextNode(listAlumnos[i][1])
        div.appendChild(txt)
        td.appendChild(div)
        // div input
        var div=document.createElement("div")
        var input=document.createElement("input")
        input.setAttribute(`type`,`text`)
        input.setAttribute(`name`,`nom${i}`)
        input.setAttribute(`id`,`nom${i}`)
        input.setAttribute(`class`,`form-control`)
        input.setAttribute(`style`,`display: none`)
        input.setAttribute(`onkeyup`,`updTexto('txtnom${i}', this.value)`)
        div.appendChild(input)
        td.appendChild(div)

        tr.appendChild(td)
        
        // col apellido
        var td=document.createElement("td")
        // div texto
        var div=document.createElement("div")
        div.setAttribute(`id`,`txtape${i}`)
        div.setAttribute(`onclick`,`habilitarInput('ape${i}')`)
        var txt=document.createTextNode(listAlumnos[i][2])
        div.appendChild(txt)
        td.appendChild(div)
        // div input
        var div=document.createElement("div")
        var input=document.createElement("input")
        input.setAttribute(`type`,`text`)
        input.setAttribute(`name`,`ape${i}`)
        input.setAttribute(`id`,`ape${i}`)
        input.setAttribute(`class`,`form-control`)
        input.setAttribute(`style`,`display: none`)
        input.setAttribute(`onkeyup`,`updTexto('txtape${i}', this.value)`)
        div.appendChild(input)
        td.appendChild(div)

        tr.appendChild(td)

        // col dni
        var td=document.createElement("td")
        // div texto
        var div=document.createElement("div")
        div.setAttribute(`id`,`txtdni${i}`)
        div.setAttribute(`onclick`,`habilitarInput('dni${i}')`)
        var txt=document.createTextNode(listAlumnos[i][3])
        div.appendChild(txt)
        td.appendChild(div)
        // div input
        var div=document.createElement("div")
        var input=document.createElement("input")
        input.setAttribute(`type`,`number`)
        input.setAttribute(`name`,`dni${i}`)
        input.setAttribute(`id`,`dni${i}`)
        input.setAttribute(`class`,`form-control`)
        input.setAttribute(`style`,`display: none`)
        input.setAttribute(`onkeyup`,`updTexto('txtdni${i}', this.value)`)
        div.appendChild(input)
        td.appendChild(div)

        tr.appendChild(td)

        // col operaciones
        var td=document.createElement("td")
        var iTag=document.createElement("i")
        iTag.setAttribute("class", "fa-solid fa-pen m-1")
        iTag.setAttribute(`onclick`,`habilitarAll(${i})`)
        td.appendChild(iTag)
        var iTag=document.createElement("i")
        iTag.setAttribute("class", "fa-solid fa-trash-can m-1")
        iTag.setAttribute(`onclick`,`eliminarFila('tr${i}')`)
        td.appendChild(iTag)
        tr.appendChild(td)


        tbody.appendChild(tr)
    }
    table.appendChild(tbody)

    body.appendChild(table)
}

function eliminarFila(id) {
    document.getElementById(id).style.display="none"
}

function habilitarInput(id) {
    document.getElementById(id).style.display="block"
    document.getElementById(id).focus()
}

function updTexto(id,texto) {
    document.getElementById(id).innerHTML=texto
}

function habilitarAll(fila) {
    document.querySelector(`input#nom${fila}`).style.display="block"
    document.querySelector(`input#ape${fila}`).style.display="block"
    document.querySelector(`input#dni${fila}`).style.display="block"
    
}