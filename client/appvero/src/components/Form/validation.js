// regex utiles
const regexString = /^[A-Za-z0-9\s-]+$/
const regexNumber = /^\d+$/
const regexDecimals = /^\d+(\.\d{1,2})?$/

// guardo errores aca
// validation.js
export const validateForm = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Debe ingresar un nombre';
  } else if (!regexString.test(values.name)) {
    errors.name = 'Solo letras y números o guiones';
  }

  if (!values.productKey) {
    errors.productKey = 'Debe ingresar un código de producto';
  } else if (values.productKey.toString().length !== 13) {
    errors.productKey = 'Los códigos de producto solo pueden tener 13 dígitos';
  } else if (!regexNumber.test(values.productKey)) {
    errors.productKey = 'Solo ingresar números';
  }

  if(!regexNumber.test(values.quantity)) {
    errors.quantity = 'Solo ingresar numeros'
  }

  if (!regexDecimals.test(values.pricePerPack)) {
    errors.pricePerPack = 'Solo ingresar números decimales';
  }

  if (!regexDecimals.test(values.pricePerUnit)) {
    errors.pricePerUnit = 'Solo ingresar números decimales';
  }

  return errors;
};
