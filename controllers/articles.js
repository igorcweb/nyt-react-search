const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

//Display articles
router.get('/', (req, res) => {
  Article.find({ saved: false })
    .then(articles => {
      res.json(articles);
    })
    .catch(err => res.json({ error: err }));
});

//Display saved articles
router.get('/saved', (req, res) => {
  Article.find({ saved: true })
    .then(articles => {
      res.json(articles);
    })
    .catch(err => res.json({ error: err }));
});

//Save article
router.post('/:id', (req, res) => {
  const _id = req.params.id;
  Article.findByIdAndUpdate({ _id }, { $set: { saved: true } })
    .then(() => res.send('saved'))
    .catch(err => console.log(err));
});

//Remove from saved
router.post('/remove/:id', (req, res) => {
  const _id = req.params.id;
  Article.findByIdAndUpdate({ _id }, { $set: { saved: false } })
    .then(() => res.send('removed'))
    .catch(err => console.log(err));
});

module.exports = router;
