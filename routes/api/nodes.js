const express = require('express');
const router = express.Router();
const Node = require('../../models/Node');
const passport = require('passport');
const validateNodeInput = require('../../validation/node');

// Test Route
router.get('/test', (req, res) => res.json({ msg: "Welcome to the Domain of the Nodes" }));

// Create Node
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {

  const { errors, isValid } = validateNodeInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newNode = new Node({
    name: req.body.name,
    tree_id: req.body.tree_id
  });

  newNode.save().then(node => res.json(node));
  });

// Get All Nodes for Specific Tree
router.get('/tree/:tree_id', (req, res) => {
  Node.find({ tree_id: req.params.tree_id })
    .then(nodes => res.json(nodes))
    .catch(err => res.status(404).json({ noNodesFound: "No Nodes found on that tree" }))
});

// Delete a Node
router.delete('/:id', (req, res) => {
  Node.findByIdAndDelete(req.params.id)
    .then(node => res.json(node))
    .catch(err => res.status(404).json(err))
});

// Update a Node
router.patch('/:id', (req, res) => {
 Node.findByIdAndUpdate(req.params.id, req.body, { new:true })
    .then(node => res.json(node))
    .catch(err => res.status(404).json(err))
});

module.exports = router;