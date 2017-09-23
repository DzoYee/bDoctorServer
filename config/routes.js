const autocompleteController = require('../controllers/autocompleteController.js');
const searchController = require('../controllers/searchController.js');


module.exports = (app, express) => {
  app.get('/search', searchController.search);
  app.get('/autocompleteController/:input', autocompleteController.search);
}