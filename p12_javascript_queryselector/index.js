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

export const saveData = (nodeList) => {
    values = []
    nodeList.forEach((node) => {
        values.push(node.value)
    })
    let [name, address, phone] = values
    let userObject = { name, address, phone }
    return userObject;
}

log(saveData(nodes))



var userObject = {}
var counter = 0;
const getUserData = (event) => {
    event.preventDefault()
    let inputsCollection = document.querySelectorAll("input")
    /*
    userObject = {
        name:"Israel Salinas",
        address:"some address",
        phone:"55437888096"
    }
*/
    inputsCollection.forEach(item => {
        /*Creamos una llave para nuestro objeto*/
        let objectKey = item.dataset.pointsTo
        /*Creamos un valor para nuestro objeto*/
        let objectValue = item.value
        /*insertamos la llave y el valor dentro de nuestro objeto*/
        userObject[objectKey] = objectValue
    })
    printUserData(userObject)
}
const printUserData = (userObject) => {
    const { name, address, phone } = userObject
    let dataRow = document.createElement('tr');
    let idTd = document.createElement('td')
    let nameTd = document.createElement('td')
    let addressTd = document.createElement('td')
    let phoneTd = document.createElement('td')
    let idTextNode = document.createTextNode(++counter)
    idTd.appendChild(idTextNode)
    let nameTextNode = document.createTextNode(name)
    nameTd.appendChild(nameTextNode)
    let phoneTextNode = document.createTextNode(phone)
    phoneTd.appendChild(phoneTextNode)
    let addressTextNode = document.createTextNode(address)
    addressTd.appendChild(addressTextNode)
    dataRow.appendChild(idTd)
    dataRow.appendChild(nameTd)
    dataRow.appendChild(addressTd)
    dataRow.appendChild(phoneTd)
    let usersTable = document.getElementById("users-table")
    usersTable.appendChild(dataRow)
}
var submitButton = document.getElementById('submit-button')
submitButton.addEventListener('click', getUserData)


//Nodo
var eraseBtn = document.querySelector("#erase-button")
let usersTable = document.getElementById("users-table")

if (usersTable.hasChildNodes()) {
    let children = usersTable.childNodes;
    log(children)
    Array.from(children)
}

//Listener
eraseBtn.addEventListener("click", eraseElement)

const eraseElement = () => {

}

