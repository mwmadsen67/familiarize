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
  }
);

// Get All Trees
router.get('/', (req, res) => { 
  Tree.find()
    .then(trees => res.json(trees))
    .catch(err => res.status(404).json({ noTreesFound: "No trees found"}))
});

// Get Specific Tree
router.get('/:id')

module.exports = router;