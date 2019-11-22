const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NodeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  parents: [{
    type: Schema.Types.ObjectId,
    ref: 'nodes'
  }],
  children: [{
    type: Schema.Types.ObjectId,
    ref: 'nodes'
  }],
  tree_id: {
    type: Schema.Types.ObjectId,
    ref: 'trees',
    required: true
  },
  current_company: {
    type: String
  }
});

module.exports = Node = mongoose.model('nodes', NodeSchema);