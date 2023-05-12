let copiar = document.getElementById("btn-copiar");
const validacion = /[a-zA-Z]/;

export const validacionResultado = (texto) => {
  if (validacion.test(texto)) {
    resultado.classList.remove("desactivado");
    copiar.classList.remove("desactivado");
    advertencia.classList.add("desactivado");
  } else {
    resultado.classList.add("desactivado");
    copiar.classList.add("desactivado");
    advertencia.classList.remove("desactivado");
  }

  resultado.innerHTML = texto;
};
