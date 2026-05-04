const form = document.getElementById("formConcierto");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const entrada = document.getElementById("entrada");
const cantidad = document.getElementById("cantidad");
const success = document.getElementById("success");

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

  // validar email
  if (email.value.trim() === "" || !email.value.includes("@")) {
    email.nextElementSibling.textContent = "Ingrese un email válido";
    valido = false;
  }

  // validar entrada
  if (entrada.value === "") {
    entrada.nextElementSibling.textContent = "Seleccione un tipo de entrada";
    valido = false;
  }

  // validar cantidad
  if (cantidad.value === "" || cantidad.value <= 0) {
    cantidad.nextElementSibling.textContent = "Ingrese una cantidad válida";
    valido = false;
  }

  if (!valido) {
    e.preventDefault(); // bloquea envío
  } else {
    e.preventDefault(); // simulamos envío
    success.textContent = "Registro exitoso. ¡Nos vemos en el concierto!";
  }

});