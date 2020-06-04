
// crear una función que pida al usuario los siguientes datos:
// nombre, apellidos, calle, número, colonia, código postal, alcaldía o municipio
// esa función debe devolver un objeto con la siguiente estructura:

const createUserObject = () => {
    let nombre = prompt("¿Cuál es tu nombre(s)?")
    let apellidos = prompt("¿Cuales son tus apellidos?")
    let calle = prompt("Ingresa tu dirección, comenzando por Calle:")
    let numeroExt = prompt("Número Exterior:")
    let numeroInt = prompt("Número Interior:")
    let colonia = prompt("Colonia:")
    let cp = prompt("Código Postal:")
    let alcaldia = prompt("Alcaldía:")

    let userObject = {
        nombre, apellidos, direccion:
            { calle, numeroExt, numeroInt, colonia, cp, alcaldia }
    }
    return userObject
}



console.log(createUserObject())


/*
cars = [
    {
        year:"2000",
        maker:"Toyota",
        model:"Corolla",
        hp:"300"
    },
    {
        year:"1967",
        maker:"Ford",
        model:"Mustang",
        hp:"500"
    },
    {
        year:"2000",
        maker:"Nissan",
        model:"Sentra",
        hp:"128"
    },
    {
        year:"2012",
        maker:"Mitubishi",
        model:"Lancer",
        hp:"300"
    },
    {
        year:"2000",
        maker:"Nissan",
        model:"Altima",
        hp:"200"
    },
    {
        year:"1990",
        maker:"Volkswagen",
        model:"Sedan",
        hp:"80"
    },
    {
        year:"2015",
        maker:"Nissan",
        model:"Tiida",
        hp:"200"
    }
]
// */
// crear una función que pida al usuario un año(2000, 1989, etc).
// la función debe extraer los autos del array cars, cuyo año sea mayor al indicado por el usuario
// por cada auto extraído, mostrar al usuario un mensaje que diga "Opción ${indice}: ${fabricante del auto} ${nombre del auto} del año ${año de fabricación}, con ${hp} caballos de fuerza"
