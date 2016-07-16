var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Superhero = mongoose.model('superheros');

/*
router.get('/superheros', function(req, res) {
  res.render('api', { title: 'Superhero API' });
});*/

router.get('/superheros', function(req, res) {
  Superhero.find(function(err, superheros){
    console.log(superheros)
    res.render(
      'api',
      {title : 'Superhero API', superheros : superheros}
    );
  });
});
router.get('/superheros/:id', function(req, res) {
  var query = {"_id": req.params.id};
  Superhero.findOne(query, function(err, superhero){
    console.log(superhero)
    res.render(
      'superhero',
      {title : 'Superhero API - ' + superhero.Email, superhero : superhero}
    );
  });
});
router.post('/superheros', function(req, res) {
  new Superhero({Email : req.body.txtEmail,password: req.body.password,Floor: req.body.Floor})
  .save(function(err, superhero) {
    console.log(superhero)
    res.redirect('/api/superheros');
  });
});

router.put('/superheros/:id', function(req, res) {
  var query = {"_id": req.params.id};
  var update = {Email : req.body.txtEmail2};
  var options = {new: true};
  Superhero.findOneAndUpdate(query, update, options, function(err, superhero){
    console.log(superhero)
    res.render(
      'superhero',
      {title : 'Superhero API - ' + superhero.Email, superhero : superhero}
    );
  });
});

router.delete('/superheros/:id', function(req, res) {
  var query = {"_id": req.params.id};
  Superhero.findOneAndRemove(query, function(err, superhero){
    console.log(superhero)
    res.redirect('/api/superheros');
  });
});


/*
router.post('/superheros', function(req, res) {
  console.log(req.body.name);
  res.redirect('/api/superheros');
});*/


module.exports = router;