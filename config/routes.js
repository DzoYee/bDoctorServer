var autocompleteController = require('../controllers/autocompleteController.js');
var searchController = require('../controllers/searchController.js');

module.exports = (app, express) => {
  app.get('/search', searchController.search);
  app.get('/autocompleteController/:input', (req, res, next) => {
    //hit api 

    api(req.params.input)
  });
}