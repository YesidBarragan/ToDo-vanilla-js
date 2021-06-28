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

renderizarTodos()