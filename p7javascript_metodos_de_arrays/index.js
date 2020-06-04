// 1. - Regresar un nuevo string, en el cual las palabras pares esten escritas en minúscula, y las palabras nones en mayúscula
// input => "La mejor forma de predecir el futuro es creándolo"
// output => "LA mejor FORMA de PREDECIR el FUTURO es CREÁNDOLO"
// 2. - Regresar un nuevo string, que sea una frase formada con todas las palabras del string original que tengan más de 5 letras
// input => "La mejor forma de predecir el futuro es creándolo"
// output => "mejor forma predecir futuro creándolo"
// 3. - Regresar el promedio de caracteres por palabra con base en el string original
// input => "La mejor forma de predecir el futuro es creándolo"
// output => "La frase usa en promedio ${average} caracteres por palabra"

let newArray = []

const callback = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            newArray.push(word.toUpperCase())
        }
        else newArray.push(word)
    }
    return newArray
}

const oddWords = (string) => {
    let words = string.split("")
    return words
}


oddWords("Hola esta es una funcion de prueba Porfas")
