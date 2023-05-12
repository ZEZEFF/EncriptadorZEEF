export const encriptador = (texto) => {
  const caracteres = texto.split("");
  texto = caracteres
    .map((caracter) => {
      switch (caracter) {
        case "a":
          return "ai";
        case "e":
          return "enter";
        case "i":
          return "imes";
        case "o":
          return "ober";
        case "u":
          return "ufat";
        default:
          return caracter;
      }
    })
    .join("");

  return texto;
};

export const desencriptador = (texto) => {
  texto = texto
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  return texto;
};
