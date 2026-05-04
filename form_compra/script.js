const form = document.getElementById("formCompra");

const nombre = document.getElementById("nombre");
const producto = document.getElementById("producto");
const cantidad = document.getElementById("cantidad");
const email = document.getElementById("email");
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

  if (nombre.value.trim() === "") {
    nombre.nextElementSibling.textContent = "El nombre es obligatorio";
    valido = false;
  }

  if (producto.value === "") {
    producto.nextElementSibling.textContent = "Seleccione un producto";
    valido = false;
  }

  if (cantidad.value === "" || cantidad.value <= 0) {
    cantidad.nextElementSibling.textContent = "Ingrese una cantidad válida";
    valido = false;
  }

  if (email.value.trim() === "" || !email.value.includes("@")) {
    email.nextElementSibling.textContent = "Ingrese un correo válido";
    valido = false;
  }

  if (!valido) {
    e.preventDefault();
  } else {
    e.preventDefault();
    success.textContent = "Pedido realizado con éxito";
  }

});