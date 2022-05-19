let edades=[17,18,16,15,21,20,20]
const mayorEdad=18

let result=edades.filter(esMayorEdad)
console.log(result)

function esMayorEdad(edad) {
    // edad=17, edad=18, edad=16 ...
    if (edad>=mayorEdad) {
        return true
    } else {
        return false
    }
}

result=edades.filter(esMenorEdad)
console.log(result)

function esMenorEdad(edad) {
    // edad=17, edad=18, edad=16 ...
    if (edad<mayorEdad) {
        return true
    } else {
        return false
    }
}

console.log(edades.every(esMayorEdad))
console.log(edades.some(esMayorEdad))

let sueldos=[50,60,70,80,50]

console.log(sueldos.map(aumentar10))

function aumentar10(sueldo) {
    // let aumento=sueldo*10/100
    // sueldo=sueldo+aumento

    // return sueldo

    return sueldo+=sueldo*.1
}