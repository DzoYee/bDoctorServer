const autocompleteController = require('../controllers/autocompleteController.js');
const searchController = require('../controllers/searchController.js');


module.exports = (app, express) => {
  app.get('/search/:input', searchController.search);
  app.get('/autocomplete/:input', autocompleteController.search);
}