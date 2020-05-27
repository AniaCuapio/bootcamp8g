//1.- Declarar una variable que contenga un número cualquiera y determinar mediante un mensaje si ese número es par o impar
var num = 3;
if (num % 2 === 0) {
    console.log("El número: " + num + " es par")
} else {
    console.log("El número: " + num + " es impar")
}

//2.- Determinar 2 variables ( base, altura ) e indicar si con ellas se forma un cuadrado o un rectángulo

var base = 18;
var altura = 12;
if (base > altura || base < altura) {
    console.log("La figura que se puede formar es un rectángulo.")
} else if (base === altura) {
    console.log("La figura que se puede formar es un cuadrado.")
}

//3.- Determinar una variable (numeroDeLados) e indicar el nombre de la figura geométrica que tiene esa cantidad de lados,si numero de lados es mayor que 5, poner un mensaje que diga "tu figura tiene muchos lados ".
var numeroDeLados = 5;
if (numeroDeLados === 3) {
    console.log("Por el número de lados, la figura geométrica que se puede formar es un triángulo.")
} else if (numeroDeLados === 4) {
    console.log("Por el número de lados, la figura geométrica que se puede formar es un rectángulo.")
} else if (numeroDeLados === 5) {
    console.log("Por el número de lados, la figura geométrica que se puede formar es un pentágono.")
} else if (numeroDeLados > 5) {
    "Tu figura tiene más de cinco lados."
}