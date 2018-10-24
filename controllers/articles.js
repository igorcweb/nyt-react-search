const router = require('express').Router();
const articlesController = require('./articlesController');

//Route: /api/articles"
router
  .route('/')
  .get(articlesController.findAll)
  .post(articlesController.create);

// Route: /api/articles/:id"
router
  .route('/:id')
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;
