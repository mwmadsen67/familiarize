const express = require('express');
const router = express();
const Tree = require('../../models/Tree');

router.get('/test', (req, res) => (res.json({ msg: 'This be the trees . . . ' })));

module.exports = router;