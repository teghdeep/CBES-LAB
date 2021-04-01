var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user/:id', function(req, res, next) {
  var id= req.params.id
  var square = id*id;
  res.render('user', { output: square });
});



module.exports = router;
