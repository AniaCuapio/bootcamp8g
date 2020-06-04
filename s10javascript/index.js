/*pedir al usuario su nombre completo*/
/*contar la cantidad de letras que tenga su nombre*/
/*contar la cantidad de vocales que tiene su nombre*/
/*indicarle al usuario si la cantidad de letras en su nombre corresponde a un número primo*/
const log = console.log

const countLetters = (string) => {
    let words = string.split(" ")
    let stringWithoutSpaces = words.join("")
    let stringLength = stringWithoutSpaces.length
    return stringLength
}

// const arrayOfVowels = ["a", "e", "i", "o", "u"]
const countVowels = (string) => {
    const arrayOfVowels = ["a", "e", "i", "o", "u"]
    let letters = string.toLowerCase().split("")
    log(letters)
    let counter = 0;
    letters.forEach(element => {
        if (arrayOfVowels.includes(element)) {
            counter++
        }
    });
    log(counter)
    return counter
}

const verifyIfOdd = (number) => {
    if (number === 0 || number === 1) {
        return false
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false
            }
        }
    }
    return true
}

const getUserName = () => {

    let fullName = prompt("¿Cuál es tu nombre completo?")

    let numberOfLetters = countLetters(fullName)

    alert("Tu nombre tiene " + numberOfLetters + " letras.")

    let numberOfVowels = countVowels(fullName)

    alert("Tu nombre tiene " + numberOfVowels + "vocales")

    let odd = (verifyIfOdd(numberOfVowels));
    log(odd);

    const isOdd = (number) => {
        if (number == true) {
            alert("Dicha cantidad Sí corresponde a un número primo")
        } else {
            alert("Dicha cantidad NO corresponde a un número primo")
        }
    }

    isOdd(odd)
}

getUserName()