const form = document.getElementById("formTaller");

const nombre = document.getElementById("nombre");
const grado = document.getElementById("grado");
const taller = document.getElementById("taller");
const email = document.getElementById("email");
const success = document.getElementById("success");

// ==========================
// VALIDACIÓN EN TIEMPO REAL (solo nombre y correo)
// ==========================

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

// ==========================
// VALIDACIÓN AL ENVIAR (tu código original)
// ==========================

form.addEventListener("submit", function(e) {

  let valido = true;

  // limpiar mensajes
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  success.textContent = "";

  // validar nombre
  if (nombre.value.trim() === "") {
    nombre.nextElementSibling.textContent = "El nombre es obligatorio";
    valido = false;
  }

  // validar grado
  if (grado.value === "") {
    grado.nextElementSibling.textContent = "Seleccione un grado";
    valido = false;
  }

  // validar taller
  if (taller.value === "") {
    taller.nextElementSibling.textContent = "Seleccione un taller";
    valido = false;
  }

  // validar email
  if (email.value.trim() === "" || !email.value.includes("@")) {
    email.nextElementSibling.textContent = "Ingrese un correo válido";
    valido = false;
  }

  if (!valido) {
    e.preventDefault();
  } else {
    e.preventDefault();
    success.textContent = "Inscripción realizada con éxito";
  }

});