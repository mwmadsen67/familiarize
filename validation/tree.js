const validText = require('./valid-text');
const Validator = require('validator');

module.exports = function validateTreeInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Tree name is required'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};