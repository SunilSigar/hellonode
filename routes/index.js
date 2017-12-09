var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

mongoose.connect('mongodb://sunilsigar:vfr4m5tgb@ds133816.mlab.com:33816/userlikes');

var mySchema = mongoose.Schema({
    icecream: String,
    name: String
});

var choiceModel = mongoose.model('choice', mySchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My App' });
});


router.get('/ilike/:icecream/:name', function(req, res) {
  var newChoice = new choiceModel();
  newChoice.icecream = req.params.icecream;
  newChoice.name = req.params.name;
  newChoice.save(function(err, savedData){
    // res.send(savedData); 
  });
  choiceModel.find({},function(err, savedData){
    res.send(savedData); 
  });
  
});


// router.get('/healthcheck', function(req, res) {
//   var resObj = {msg: "ok"};
//   res.send(resObj); 
// });



module.exports = router;
