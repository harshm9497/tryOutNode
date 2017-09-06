var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/harish',function(req,res,next)
{
  res.send("this is harish , thankyou");
});
router.get('/login',function(req,res,next)
{
  res.render('login',{user:"harish"});
});

module.exports = router;
