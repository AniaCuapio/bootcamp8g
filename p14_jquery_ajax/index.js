const log = console.log

//Nodos

// $(window).load(function () {
let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let koders = JSON.parse(this.responseText)
        log(koders)
        for (const key in koders) {
            log(koders[key])
            renderRow(koders[key])
        }
    }
}
xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/equipo3/koders/.json", true)
xhttp.send()


$("#submit").click(function (e) {
    e.preventDefault();
    let firstName = $("#first").val()
    let lastName = $("#last").val()
    let age = $("#age").val()
    let mail = $("#mail").val()
    let userObject = { firstName, lastName, age, mail }
    // log(userObject)
    renderRow(userObject)
});

function renderRow(userObject) {
    let { firstName, lastName, age, mail } = userObject
    userRow = `
    <tr>
    <td class="firstName" data-name="${firstName}" >${firstName}</td>
    <td class="lastName" data-last="${lastName}">${lastName}</td>
    <td class="age">${age}</td>
    <td class="mail">${mail}</td>
    <td class="delete"><svg class="bi bi-x text-danger" width="3em" height="3em" viewBox="0 0 16 16"
            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
            <path fill-rule="evenodd"
                d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
        </svg></td>
</tr>
    `
    $("tbody").append(userRow);
    $(".delete").click(function () {
        $(this).parent().remove();
    })
}

var arrayKoders = []

$("#saveData").click(function (e) {
    $("tbody tr").each(function () {
        // $("td", this)
        let firstName = $(".firstName", this).text()
        let lastName = $(".lastName", this).text()
        let age = $(".age", this).text()
        let mail = $(".mail", this).text()
        let userObject = { firstName, lastName, age, mail }

        let id = putAJAX(userObject).name
        $(this).data("koderId", id)
    });
})

const putAJAX = (object) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState)
        console.log(this.status)
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response)
            console.log(response)
            return response
        }
    }
    xhttp.open("PUT", `https://ajaxclass-1ca34.firebaseio.com/equipo3/koders/.json`, true)
    xhttp.send(JSON.stringify(object))
};
