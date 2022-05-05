function validarEMail() {
    let email=document.getElementById("email").value 

    // if (email=="") {
    if (email.length<=0 || email.indexOf("@")==-1 || email.indexOf("codoACodo.edu.ar")==-1) {
        document.getElementById("mensaje").innerHTML="Email incorrecto"
        document.getElementById("mensaje").style.backgroundColor="red"
    } else {
        document.getElementById("mensaje").innerHTML="Email correcto"
        document.getElementById("mensaje").style.backgroundColor="lightblue"
        
    }
}

function validar8char() {
    let texto=document.getElementById("8char").value 

    if (texto.length>=8) {
        document.getElementById("mensaje").innerHTML="Longitud correcta"
        document.getElementById("mensaje").style.backgroundColor="lightblue"
        
    } else {
        document.getElementById("mensaje").innerHTML="Longitud Incorrecta"
        document.getElementById("mensaje").style.backgroundColor="red"
        
    }
}

function updFortaleza() {
    let pass=document.getElementById("pass").value 
    let seguridad;
    let color;
    
    if (pass.length>0 && pass.length<5) {
        seguridad="10%"
        color="lightcoral"
    } else if(pass.length>=5 && pass.length<8) {
        seguridad="50%"
        color="lightblue"
        
    } else if(pass.length>=8) {
        seguridad="90%"
        color="blue"

    }

    document.getElementById("fortaleza").innerHTML=seguridad
    document.getElementById("fortaleza").style.color=color

}