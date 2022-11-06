const express = require('express');
const router = express.Router();
const message = require('../message');

/* GET home page. */
router.get('/', function(req, res, next) {
  message.send(req.body.message,req.body.wallet);
});

router.post('/', function(req,res, next){
  message.send(req.body);
});

module.exports = router;
