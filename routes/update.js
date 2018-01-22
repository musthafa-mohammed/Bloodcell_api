var express = require('express');
var router = express.Router();
var bloodcell = require('../models/bloodcell.js');

router.post('/', function(req, res, next) {
  bloodcell.updateUser(req.body,function(err,count){
  if(err)
  {
  res.json(err);
  }
  else{
  res.json(req.body);//or return count for 1 &amp;amp;amp; 0
  }
  });
});

module.exports = router;
