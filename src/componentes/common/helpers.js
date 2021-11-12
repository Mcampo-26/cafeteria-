const campoRequerido = (valor) => {
  if (valor.trim === "")
    //no paso la validacion
    return false;
  else {
    return true;
  }
};

const rangoPrecio = (valor) => {
  if (valor >0 && valor < 5000) {
    return true;
  } else {
    return false;
  }
};

export { campoRequerido, rangoPrecio };
