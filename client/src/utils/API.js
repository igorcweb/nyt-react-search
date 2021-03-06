import axios from 'axios';

//abstracted API methods
export default {
  getArticles: function() {
    return axios.get('/api/articles');
  },
  getArticle: function(id) {
    return axios.get('/api/articles/' + id);
  },
  deleteArticle: function(id) {
    return axios.delete('/api/articles/' + id);
  },
  saveArticle: function(articleData) {
    return axios.post('/api/articles', articleData);
  },
  search: function(queryUrl) {
    return axios.get(queryUrl);
  }
};
