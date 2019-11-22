const express = require('express');
const router = express();
const Tree = require('../../models/Tree');
const validateTreeInput = require('../../validation/tree');
const passport = require('passport');

// Test Route
router.get('/test', (req, res) => (res.json({ msg: 'This be the trees . . . ' })));

// Create Tree
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateTreeInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newTree = new Tree({
      name: req.body.name,
      creator: req.user.id
    });

    newTree.save().then(tree => res.json(tree));
  });

// Get All Trees
router.get('/', (req, res) => { 
  Tree.find()
    .then(trees => res.json(trees))
    .catch(err => res.status(404).json({ noTreesFound: "No trees found"}))
});

// Get Specific Tree
router.get('/:id', (req, res) => {
  Tree.find({ _id: req.params.id })
    .then((tree) => res.json(tree))
    .catch(err => res.status(404).json({ noTreeFound: 'No tree found' }))
});

// Update Specific Tree
router.patch('/:id', (req, res) => {
  Tree.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(tree => res.json(tree))
    .catch(err => res.status(404).json(err))
});

// Delete Specific Tree
router.delete('/:id', (req, res) => {
  Tree.findByIdAndDelete(req.params.id)
    .then(tree => res.json(tree))
    .catch(err => res.status(404).json(err))
});

// Get Specific User's Trees
router.get('/user/:user_id', (req, res) => {
  Tree.find({ creator: req.params.user_id })
    .then(trees => res.json(trees))
    .catch(err => res.status(404).json({ noTreesFound: "No trees found by that user" }))
});


module.exports = router;