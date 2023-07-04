const { nameValidator, numberValidator, decimalValidator } = require('../utils/regexValidators')

let errors = ""

const validator = (product) => {
  if (product.productKey.toString().length !== 13) errors = "Codigo incorrecto"
  if (!product.productKey) errors = 'Codigo de producto faltante'
  if (!nameValidator(product.name)) errors = 'El nombre solo puede tener letras y numeros y maximo 50 caracteres'
  if (!product.name) errors = 'Nombre de producto faltante'
  if (!numberValidator(product.quantity)) errors = 'Solo numeros'
  if (!decimalValidator(product.pricePerPack)) errors = 'Precio por paquete debe ser un numero decimal';
  if (!decimalValidator(product.pricePerUnit)) errors = 'Precio por unidad debe ser un numero decimal';
  console.log(errors)
  return errors
}

module.exports = {
  validator
}