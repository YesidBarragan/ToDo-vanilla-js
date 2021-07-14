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
        'Content-type': 'application/json'
      },
      body: JSON.stringify(datosUsuario)
    })
    .then(response => {
      return response.json();
    })
    .then(responseUser => {
      console.log(responseUser);
    })
    .catch(error => {
      alert(error);
    })
  })
})