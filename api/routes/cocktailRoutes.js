'use strict';
module.exports = function(app) {
  var cocktailApi = require('../controllers/cocktailController');

  // Cocktail API Routes
  //http request jutut
  app.route('/Cocktails')
    .get(cocktailApi.list_all_Cocktails)
    .post(cocktailApi.create_a_Cocktail);

  //http request jutut id:n mukaan
  app.route('/Cocktails/:CocktailId')
    .get(cocktailApi.read_a_Cocktail)
    .put(cocktailApi.update_a_Cocktail)
    .delete(cocktailApi.delete_a_Cocktail);
};
