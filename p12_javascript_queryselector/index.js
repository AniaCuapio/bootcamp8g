//Diferentes formas de hacer NODOS
// var nameInput = document.getElementById('user-name');
// console.log(nameInput.value)
// var inputs = document.getElementsByClassName('form-control');
// console.log(inputs)
// var inputsByName = document.getElementsByName('user')
// console.log(inputsByName)
// var elementsByTagname = document.getElementsByTagName("input")
// console.log(elementsByTagname)
// var elementByQuery = document.querySelector("input.form-control")
// console.log(elementByQuery)
// var allElementsByQuery = document.querySelectorAll("input.form-control")
// console.log(allElementsByQuery)

const log = console.log
//Primera opción:

//Nodos
var name = document.querySelector("#user-name").value
var address = document.querySelector("#user-address").value
var phone = document.querySelector("#user-phone").value

const saveInfo = () => {
    let userObject = { name, address, phone }
    return userObject;
}


log(saveInfo());

//Segunda opción:

//NodeList
var nodes = document.querySelectorAll(".form-control")

const saveData = (nodeList) => {
    values = []
    nodeList.forEach((node) => {
        values.push(node.value)
    })
    let [name, address, phone] = values
    let userObject = { name, address, phone }
    return userObject;
}

log(saveData(nodes))