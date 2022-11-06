const express = require('express');
const router = express.Router();
const Message = require('../message');
const message = new Message();

/* GET home page. */
router.get('/action', function(req, res, next) {
  console.log(req.query.message);
  console.log(req.query.wallet);
  message.send(req.query.message,req.query.wallet);
});


router.post('/', function(req,res, next){
  message.send(req.body.message,req.body.wallet);
});


module.exports = router;
