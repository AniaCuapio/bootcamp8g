const log = console.log

//Nodos
var title = document.querySelector(".title").value
var text = document.querySelector(".text").value
var date = document.querySelector(".data")
var author = document.querySelector(".author").value
var submitButton = document.querySelector(".submit-button")
var feed = document.querySelector(".feed")


//Listeners
submitButton.addEventListener("click", savePost)



//Callbacks
var postObject = {}
function savePost() {
    // alert("prueba de botón")
    let postObject = { title, text, date, author }
    // log(postObject);
    saveData(postObject)
    getPosts()

}

//Esto guarda el objeto post en la DB
const saveData = (postObject) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        // console.log(this.readyState)
        // console.log(this.status)
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response)
            // console.log(response)
            return response
        }
    }
    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/equipo3/posts/.json", true)
    xhttp.send(JSON.stringify(postObject))
};


//Esto trae los posts almacenados en la DB
const getPosts = () => {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let posts = JSON.parse(this.responseText)
            for (const key in posts) {
                log(key, posts[key])
                renderPost(key, posts[key])
            }
        }
    }
    xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/equipo3/posts/.json", true)
    xhttp.send()
};

// //Esto dibuja el post en el DOM
const renderPost = (id, post) => {
    feed = "";
    let { title, text, date, author } = post
    let cardPost =
        `<div class="col-md-6">
     <div class="col-md-8">
         <div class="card-body">
             <h5 class="card-title">${title}</h5>
              <p class="card-text">${text}</p>
             <p class="card-text"><small class="text-muted"> Autor: ${author}13-12-1989</small></p>
             <p class="card-text"><small class="text-muted">${date}13-12-1989</small></p>
             <div class="btn btn-danger btn-sm delete-btn" data-id="${id}" edit-btn">Eliminar post</div>
             <div class="btn btn-secondary btn-sm update-btn" data-id="${id}" delete-btn">Editar post</div>
             <div class="btn btn-primary btn-sm save-btn .d-none" data-id="${id}" save-btn">Guardar post</div>
         </div>
     </div>
 </div>`
    const newNode = document.createElement("div")
    newNode.innerHTML = cardPost
    feed.appendChild(newNode)

    //NODOS de los botones
    var deleteBtns = document.querySelectorAll(".delete-btn")
    var updateBtns = document.querySelectorAll(".update-btn")
    var saveBtns = document.querySelectorAll(".save-btn")

    //Listeners de los botones
    deleteBtns.forEach(btn => btn.addEventListener("click", deletePost))

    updateBtns.forEach(btn => btn.addEventListener("click", updatePost))

    saveBtns.forEach(btn => btn.addEventListener("click", savePost))

}


const updatePost = (e) => {
    let id = e.target.id
    log(id)
    //1. Read again the new post and save it on an updated object
    //2. Activate the "save post btn"
}

////Esto actualiza el objeto post en la DB
const savePost = (e) => {
    let id = e.target.id
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState)
        console.log(this.status)
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response)
            // console.log(response)
            return response
        }
    }
    xhttp.open("PATCH", `https://ajaxclass-1ca34.firebaseio.com/equipo3/posts/.json`, true)
    xhttp.send(JSON.stringify(post(id)))
    renderPost()
};



////Esto borra el objeto post en la DB
const deletePost = (e) => {
    let id = e.target
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState)
        console.log(this.status)
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response)
            // console.log(response)
            return response
        }
    }
    xhttp.open("DELETE", `https://ajaxclass-1ca34.firebaseio.com/equipo3/posts/${id}.json`, true)
    xhttp.send(JSON.stringify(post(id)))
    renderPost()
};
