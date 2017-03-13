var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

router.get('/', function(req, res) {
  res.send('im the home page');
});

router.get('/about', function(req, res) {
  res.send('im the about page');
});

module.exports = router;