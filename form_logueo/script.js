const form = document.getElementById("formRegistro");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const success = document.getElementById("success");

// Validación en tiempo real (solo nombre y correo)

nombre.addEventListener("input", function() {
  if (nombre.value.trim() !== "") {
    nombre.classList.add("valido");
    nombre.classList.remove("invalido");
  } else {
    nombre.classList.add("invalido");
    nombre.classList.remove("valido");
  }
});

email.addEventListener("input", function() {
  if (email.value.includes("@")) {
    email.classList.add("valido");
    email.classList.remove("invalido");
  } else {
    email.classList.add("invalido");
    email.classList.remove("valido");
  }
});

// Validación al enviar

form.addEventListener("submit", function(e) {

  let valido = true;

  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  success.textContent = "";

  // Nombre
  if (nombre.value.trim() === "") {
    nombre.nextElementSibling.textContent = "El nombre es obligatorio";
    valido = false;
  }

  // Email
  if (email.value.trim() === "" || !email.value.includes("@")) {
    email.nextElementSibling.textContent = "Ingrese un correo válido";
    valido = false;
  }

   // Password
if (password.value.trim() === "") {
  password.nextElementSibling.textContent = "Ingrese una contraseña";
  valido = false;

} else if (password.value.length < 6) {
  password.nextElementSibling.textContent = "La contraseña debe tener al menos 6 caracteres";
  valido = false;
}

  // Confirmar
  if (confirmar.value !== password.value || confirmar.value === "") {
    confirmar.nextElementSibling.textContent = "Las contraseñas no coinciden";
    valido = false;
  }

  if (!valido) {
    e.preventDefault();
  } else {
    e.preventDefault();
    success.textContent = "Registro exitoso";
  }

});