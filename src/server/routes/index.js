'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../../client', './index.html'));
});

module.exports = router;
