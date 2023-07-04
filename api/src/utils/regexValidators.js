// aca van a ir las regular expressions
const regexUUIDV4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
const regexLetters = /^[a-zA-Z0-9\s]{1,50}$/
const regexNumber = /^\d+$/
const decimalRegex = /^\d+(\.\d+)?$/;

const decimalValidator = (value) => {
  // Use a regular expression to check if the value is a decimal number
  return decimalRegex.test(value);
};


const uuidValidator = (code) => {
  return regexUUIDV4.test(code)
}

const nameValidator = (name) => {
  return regexLetters.test(name)
}

const numberValidator = (numb) => {
  return regexNumber.test(numb)
}

module.exports = {
  uuidValidator,
  nameValidator,
  numberValidator,
  decimalValidator
}