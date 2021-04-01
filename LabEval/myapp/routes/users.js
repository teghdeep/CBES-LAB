var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/:id', function(req, res, next) {
  var i = req.params.id;
  var square = i*i;
  res.render('user',{number: square})
  res.send('respond with a resource');
});
module.exports = router;
