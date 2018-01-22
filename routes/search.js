var express = require('express');
var router = express.Router();
var bloodcell = require('../models/bloodcell.js')

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("oooh");
    bloodcell.getUsersByGroup(req.params.id, function(err, rows) {
      console.log(rows);
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
});

module.exports = router;
