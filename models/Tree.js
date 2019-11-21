const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TreeSchema = new Schema({
  name: {
    type: String,
    requre: true
  }
});

module.exports = Tree = mongoose.model('trees', TreeSchema);