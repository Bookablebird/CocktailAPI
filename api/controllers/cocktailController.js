'use strict';


var mongoose = require('mongoose'),
  Cocktail = mongoose.model('Cocktails');

exports.list_all_Cocktails = function(req, res) {
  Cocktail.find({}, function(err, Cocktail) {
    if (err)
      res.send(err);
    res.json(Cocktail);
  });
};

exports.create_a_Cocktail = function(req, res) {
  var new_Cocktail = new Cocktail(req.body);
  new_Cocktail.save(function(err, Cocktail) {
    if (err)
      res.send(err);
    res.json(Cocktail);
  });
};

exports.read_a_Cocktail = function(req, res) {
  Cocktail.findById(req.params.CocktailId, function(err, Cocktail) {
    if (err)
      res.send(err);
    res.json(Cocktail);
  });
};

exports.update_a_Cocktail = function(req, res) {
  Cocktail.findOneAndUpdate({_id: req.params.CocktailId}, req.body, {new: true}, function(err, Cocktail) {
    if (err)
      res.send(err);
    res.json(Cocktail);
  });
};

exports.delete_a_Cocktail = function(req, res) {

  Cocktail.remove({
    _id: req.params.CocktailId
  }, function(err, Cocktail) {
    if (err)
      res.send(err);
    res.json({ message: 'Cocktail successfully deleted' });
  });
};
