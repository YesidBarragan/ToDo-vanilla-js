
let tareasPendientes = document.querySelector('.tareas-pendientes');
let userName = document.querySelector("#user-name")
let infoUser = JSON.parse(sessionStorage.getItem("usuario"));

userName.innerText = infoUser.email;

let obtenerTareas = () => {
    fetch("https://ctd-todo-api.herokuapp.com/v1/tasks", {
        method: "GET",
        headers: {
            'authorization': infoUser.elToken
        }
    })
    .then(response => {
        return response.json();
    })
    .then(userTasks => {
        console.log(userTasks);
        renderizarTodos(userTasks);
    })
}

let renderizarTodos = (userTasks) => {
    userTasks.forEach(todo =>{
        tareasPendientes.innerHTML += `
        <li class="tarea">
        <div class="not-done"></div>
        <div class="descripcion">
        <p class="nombre">${todo.description}</p>
        <p class="timestamp">Creada: ${todo.createdAt}</p>
        </div>
        </li>
        `
    })
}

tareasPendientes.innerHTML = "";
obtenerTareas();

let formNuevaTarea = document.querySelector("#nueva-tarea");

formNuevaTarea.addEventListener("submit", (event) => {
    event.preventDefault();
    let textoNuevaTarea = document.querySelector("#texto-nueva-tarea").value;
    
    let nuevaTarea = {
        description: textoNuevaTarea,
        completed: false
    }
    
    
    fetch("https://ctd-todo-api.herokuapp.com/v1/tasks", {
        method: "POST",
        headers: {
            'authorization': infoUser.elToken,
            'Content-type': 'application/json'
        },
        body: JSON.stringify(nuevaTarea)
    })
    obtenerTareas();
    formNuevaTarea.reset();
})