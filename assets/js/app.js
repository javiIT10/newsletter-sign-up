// Seleccionar elementos de la Interfaz
const form = document.querySelector("form");
const inputEmail = document.querySelector("#email");

const modalMessage = document.querySelector("#modalMessage");
const mainContent = document.querySelector("#main");
const emailField = document.querySelector("#emailField");
const btnDismissMessage = document.querySelector("#btnDismissMessage");

// Asignar eventos
form.addEventListener("submit", validar);
btnDismissMessage.addEventListener("click", ocultarModal);

// Funciones
function validar(e) {
  e.preventDefault();

  if (inputEmail.value.trim() === "") {
    mostrarAlerta("The fild is empty", inputEmail);
    return;
  }
  if (!validarEmail(inputEmail.value)) {
    mostrarAlerta("Valid email required", inputEmail);
    return;
  } else {
    limpiarAlerta(inputEmail, inputEmail.previousElementSibling);
    const email = inputEmail.value;
    resetFormulario();
    mostrarModal(email);
  }
}

function mostrarAlerta(mensaje, referencia) {
  /*  Seleccionar el elemnto anterior al input para mostrar mensaje */
  const contenedorAlerta = referencia.previousElementSibling;

  /* Limpiar alerta si ya existe */
  limpiarAlerta(referencia, contenedorAlerta);

  /* Generar mensaje de alerta */
  const error = document.createElement("P");
  error.textContent = mensaje;
  error.classList.add("text-tomato", "font-bold", "text-[13px]");

  /* Insertar mensaje */
  contenedorAlerta.appendChild(error);
  referencia.classList.remove("placeholder:text-grey", "border-grey");
  referencia.classList.add(
    "placeholder:text-tomato",
    "text-tomato",
    "border-tomato",
    "bg-[#FFE8E6]"
  );
}

function mostrarModal(email) {
  emailField.textContent = email;
  modalMessage.classList.remove("translate-x-full");
  main.classList.remove("lg:flex");
  main.classList.add("hidden");
}

function ocultarModal() {
  modalMessage.classList.add("translate-x-full");
  main.classList.add("lg:flex");
  main.classList.remove("hidden");
}

function limpiarAlerta(referencia, contenedorAlerta) {
  const alerta = contenedorAlerta.querySelector("p");

  if (alerta) {
    alerta.remove();
    referencia.classList.add("placeholder:text-grey", "border-grey");
    referencia.classList.remove(
      "placeholder:text-tomato",
      "text-tomato",
      "border-tomato",
      "bg-[#FFE8E6]"
    );
  }
}

function validarEmail(email) {
  const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const resultado = regex.test(email);
  return resultado;
}

function resetFormulario() {
  form.reset();
}
