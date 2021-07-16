/* 
Diego
Barragan
pruebadiego@fronty2.com
milanesa*/

window.addEventListener("load", () => {
  let formulario = document.querySelector("form");
  let inputName = document.querySelector("#nombre");
  let inputLastName = document.querySelector("#apellido");
  let inputEmail = document.querySelector("#email");
  let inputPassword = document.querySelector("#password");
  let btnIniciarSesion = document.querySelector("#btnIniciarSesion");
  
  btnIniciarSesion.addEventListener("click", () => {
    window.location.href = "index.html";
  })
  
  formulario.addEventListener("submit", event => {
    event.preventDefault();


    let datosUsuario = {
      firstName: inputName.value,
      lastName: inputLastName.value,
      email: inputEmail.value,
      password: inputPassword.value
    }

    fetch("https://ctd-todo-api.herokuapp.com/v1/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(datosUsuario)
    })
    .then(response => {
      //if(response.status === 200) {
      //}
      return response.json();
    })
    .then(token => {
      let usuarioSession = {
        elToken: token.jwt,
        email: inputEmail.value,
        firstName: inputName.value
      }
      sessionStorage.setItem("usuario", JSON.stringify(usuarioSession));
      window.location.href = "lista-tareas.html";
    })
    .catch(error => {
      alert(error);
    })
  })
})