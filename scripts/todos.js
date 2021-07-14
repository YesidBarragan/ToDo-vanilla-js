let listadoTodos = [
    {
        description: "Mi hermosa tarea 1",
        createdAt: "19/04/20"
    },

    {
        description: "Mi hermosa tarea 2",
        createdAt: "20/04/20"
    },

    {
        description: "Mi hermosa tarea 3",
        createdAt: "21/04/20"
    },

    {
        description: "Mi hermosa tarea 4",
        createdAt: "22/04/20"
    },

    {
        description: "Mi hermosa tarea 5",
        createdAt: "23/04/20"
    },
];

const tareasPendientes = document.querySelector('.tareas-pendientes');

function renderizarTodos() {
    listadoTodos.forEach(todo =>{
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

function fechaDeHoy() {
    let today = new Date();
    const dateOptions = {
        day: "numeric",
        month: "numeric",
        year: "2-digit"
    }
    return today.toLocaleDateString("es-AR", dateOptions)
}

let formNuevaTarea = document.querySelector("#nueva-tarea");
renderizarTodos();

formNuevaTarea.addEventListener("submit", (event) => {
    event.preventDefault();
    let textoNuevaTarea = document.querySelector("#texto-nueva-tarea").value;
    let nuevaTarea = {};
    if (textoNuevaTarea != "") {
        nuevaTarea.description = textoNuevaTarea;
        nuevaTarea.createdAt = fechaDeHoy();
    }
    tareasPendientes.innerHTML = "";
    listadoTodos.push(nuevaTarea);
    renderizarTodos();
    formNuevaTarea.reset();
})

