const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

router.get('/', (req, res) => {
  Article.find({ saved: false })
    .then(articles => {
      res.json(articles);
    })
    .catch(err => res.json({ error: err }));
});
router.get('/saved', (req, res) => {
  Article.find({ saved: true })
    .then(articles => {
      res.json(articles);
    })
    .catch(err => res.json({ error: err }));
});

module.exports = router;
