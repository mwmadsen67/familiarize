const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TreeSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  creator: {
    type: Schema.types.ObjectID,
    ref: "users"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Tree = mongoose.model('trees', TreeSchema);