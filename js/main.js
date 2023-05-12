import { encriptador, desencriptador } from "./encriptacion.js";
import { validacionResultado } from "./resultado.js";

let mensaje = document.getElementById("mensaje"),
  resultado = document.getElementById("resultado"),
  advertencia = document.getElementById("advertencia"),
  encriptar = document.getElementById("btn-encriptar"),
  desencriptar = document.getElementById("btn-desencriptar"),
  copiar = document.getElementById("btn-copiar");

let textoConvertido = "";

encriptar.addEventListener("click", () => {
  textoConvertido = mensaje.value;
  textoConvertido = encriptador(textoConvertido);
  validacionResultado(textoConvertido);
  textoConvertido = mensaje.value;
});

desencriptar.addEventListener("click", () => {
  textoConvertido = mensaje.value;
  textoConvertido = desencriptador(textoConvertido);
  validacionResultado(textoConvertido);
  textoConvertido = mensaje.value;
});

copiar.addEventListener("click", () => {
  navigator.clipboard.writeText(resultado.textContent);
  copiar.innerHTML = "Copiado ✓";
  setTimeout(() => {
    copiar.innerHTML = "Copiar";
  }, 1000);
});
