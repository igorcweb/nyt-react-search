const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  saved: { type: Boolean, default: false },
  summary: { type: String, required: false },
  date: { type: Date, required: true }
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
