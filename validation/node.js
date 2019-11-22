const validText = require('./valid-text');
const Validator = require('validator');

module.exports = function validateNodeInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Node name is required'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};