const valorTicket=200

function calcTotal() {
    let cant=document.getElementById("cant").value 

    let categoria=document.getElementById("categoria").value 
    let desc
    if (categoria==1) {
        desc=80
    } else if (categoria==2) {
        desc=50
    } else {
        desc=15
    }

    let total=cant*valorTicket;
    total-=total*desc/100

    document.getElementById("total").innerHTML=total
}

function updCat(cat) {
    document.getElementById("categoria").value=cat
    calcTotal()
}

function editarAcercaDe() {
    document.getElementById("acercaDe").style.display="block"
}

function updTxtAcercaDe(texto) {
    document.getElementById("txtAcercaDe").innerHTML=texto
}