// -Crear una función que reciba una palabra del usuario
//     - Si el usuario escribe más de una palabra, indicarle que debe ingresar sólo una palabra
//         - Si el usuario ingresa al menos un número dentro de la palabra, indicarle que no puede ingresar números
//             - si el usuario ingresa una palabra, evaluar si esa palabra es un palíndromo(https://www.estandarte.com/noticias/idioma-espanol/qu-es-un-palndromo-ejemplos_1723.html)
//                 -Indicar el resultado al usuario

const getWordFromUser = () => {
    let word = prompt("Por favor, ingresa una palabra: ")



}

const verifyIfPhrase = (string) => {
    if (string.includes(" ") == true || string.includes(",") == true) {
        alert("Introdujiste MÁS de un número, por favor introduce sólo UNA palabra")
    }
    else {
        return true
    }
}
verifyIfPhrase("HOLA esto es una oración.")


const verifyIfNAN = (string) => {
    let splittedString = string.split("");
    for (let i = 0; i < splittedString.length; i++) {
        let char = splittedString[i];
        console.log(char)
        let number = parseInt(char)
        console.log(number)
        if (number !== NaN) {
            alert("El palabra introducida no puede contener números")
        }
        else {
            return true
        }
    }
}

verifyIfNAN("el27deseptiembre")

const verifyIfPalindrome = (string) => {
    let splittedString = string.split("");
    let splittedStringInvertido = splittedString.reverse()
    console.log(splittedStringInvertido);
    if (splittedString === splittedStringInvertido) {
        alert("La palabra SÍ es un palíndromo");
    } else {
        alert("La palabra NO es un palíndromo");
    }
}

// verifyIfPalindrome("anitalavalatina")


// -crear una función que reciba un número del usuario

// -si el usuario ingresa algo diferente a un número, indicarle que debe ingresar un número

// -si el usuario ingresa más de un número ( por ejemplo 22 10, ó 25,15,89) indicarle que debe ingresar únicamente un número

// -si el usuario ingresa un número, descomponer ese número en sus factores primos ( https://www.youtube.com/watch?v=NPaBFe6QBDQ )

// -concatenar cada factor primo encontrado en un string, y entregar ese string como resultado final al usuario.

// input -> 24
// output -> "2, 2, 2, 3"

let number = prompt("")
