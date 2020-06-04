/*esta funcion sirve para crear un objeto*/

const createUserObject = (array) => {
    let name = array[0]
    let age = array[1]
    let height = array[2]
    let userObject = {}
    userObject.name = name
    userObject.age = age
    userObject.height = height
    console.log(userObject)
}
var dataArray = [
    [
        "Ruben",
        25,
        1.70
    ], [
        "Yorch",
        23,
        1.80
    ], [
        "Juan",
        22,
        1.82
    ]
]
let newArray = dataArray.map(user => createUserObject(user))
console.log(newArray)
