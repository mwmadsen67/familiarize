const express = require('express');
const router = express.Router();
const Node = require('../../models/Node');
const passport = require('passport');
const validateNodeInput = require('../../validation/node');

// Test Route
router.get('/test', (req, res) => res.json({ msg: "Welcome to the Domain of the Nodes" }));


module.exports = router;