
// 1: -Pedir al usuario su nombre completo
//     - Determinar la cantidad de palabras que tiene su nombre
//         - si la cantidad de palabras es mayor que 3, indicarle al usuario que su nombre es muy largo
//             - si no, indicar al usuario que tiene un nombre corto

// 2: pedir al usuario mediante diferentes propmts su dirección
//     (calle)
//     (número)
//     (colonia)
//     (alcaldía)
//     (estado)
// mostrar al usuario su dirección completa con el siguiente formato:

// input -> san mateo
// 172

// deja las pongo una por una
// 1:
// -Pedir al usuario su nombre completo
//     - Determinar la cantidad de palabras que tiene su nombre
//         - si la cantidad de palabras es mayor que 3, indicarle al usuario que su nombre es muy largo
//             - si no, indicar al usuario que tiene un nombre corto

// 2: pedir al usuario mediante diferentes propmts su dirección
//     (calle)
//     (número)
//     (colonia)
//     (alcaldía)
//     (estado)
// mostrar al usuario su dirección completa con el siguiente formato:

// input -> san mateo
// 172
// la preciosa
// azcapotzalco
// ciudad de mexico
// output -> San Mateo, 172, La Preciosa, Azcapotzalco, Ciudad De México
// You

// 3:
// // Pedir al usuario que escriba una frase
// // Pedir al usuario que escriba un caracter
// // Indicarle al usuario la cantidad de veces que ese caracter aparece en su frase;
// var phrase = prompt("Escribe una frase por favor", "una mosca parada en la pared");
// var char = prompt("Escribe un caracter:", "a")
// var splittedPhrase = phrase.split(char).length - 1
// console.log(splittedPhrase);
// //  :O

// 4:
// Pedir al usuario su nombre completo
// Mostrarle al usuario sus iniciales con el siguiente formato:
// input -> "Israel Salinas Martínez"
// // output -> I.S.M.
// var name = prompt("Excribe tu nombre completo")
// var words = name.split(" ");
// console.log("words: ", words)
// var firstLetter = words.forEach(letter => {
//     word[0].toUpperCase;
// });
// console.log("firstLetter: ", firstLetter)
var n1 = parseInt(prompt("Escribe el primer número:"));
console.log(n1);
var n2 = parseInt(prompt("Escribe el segundo número:"));
console.log(n2);
var operation = parseInt(prompt("Selecciona el número del tipo de operación quieres hacer: 1 Suma, 2 Resta, 3 División, 4 Multiplicación"));
console.log(operation);
const calculator = (n1, n2, operation) => {
    switch (operation) {
        case 1:
            alert(`Elegiste hacer una suma, el resultado es: ${n1 + n2}`)
            break;
        case 2:
            alert(`Elegiste hacer una resta, el resultado es:  ${n1 - n2}`)
            break;
        case 3:
            alert(`Elegiste hacer una división, el resultado es: ${n1 - n2}`)
            break;
        case 4:
            alert(`Elegiste hacer una multiplicación, el resultado es: ${n1 * n2}`)
            break;
    }
}

calculator();


// var result;

// function calculadora(a, b, operacion) {
//     switch (operacion) {
//         case 1:
//             result = a + b;
//             alert("Este es el resultado: " + result);
//             break;
//         case 2:
//             result = a - b;
//             alert("Este es el resultado: " + result);
//             break;
//         case 3:
//             result = a * b;
//             alert("Este es el resultado: " + result);
//             break;
//     }
// }

// alert("Esta es una prueba del alert");
//console.log(calculadora());