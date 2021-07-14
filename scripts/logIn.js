/*
email: "prueba@fronty2.com"
password: "milanesa"
*/
let incorrectEmail = () => {
  document.getElementsByClassName("incorrect-email")[0].style.visibility = "visible";
}
let correctEmail = () => {
  document.getElementsByClassName("incorrect-email")[0].style.visibility = "hidden";
}
let incorrectPassword = () => {
  document.getElementsByClassName("incorrect-password")[0].style.visibility = "visible";
}

window.addEventListener("load", () => {
  let formulario = document.querySelector("form");
  let inputEmail = document.querySelector("#email");
  let inputPassword = document.querySelector("#password");
  let btnCrearUsuario = document.querySelector("#btnCrearCuenta");
  
  btnCrearUsuario.addEventListener("click", () => {
    window.location.href = "signup.html";
  })
  
  formulario.addEventListener("submit", event => {
    event.preventDefault();

    let datosUsuario = {
      email: inputEmail.value,
      password: inputPassword.value
    }

    fetch("https://ctd-todo-api.herokuapp.com/v1/users/login", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(datosUsuario)
    })
    .then(response => {
      if (response.ok) {
        window.location.href = "lista-tareas.html";
      }
      if (response.status === 400) {
        incorrectPassword();
      } 
      if (response.status === 404) {
        incorrectEmail();
      } else {
        correctEmail();
      }
      return response.json();
    })
    .then(responseUser => {
      console.log(responseUser);
    })
  })
})

