import axios from 'axios';

// const { REACT_APP_API_KEY } = process.env;
// const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';

// const API = {
//   search: query => {
//     return axios.get(`${url}api-key=${REACT_APP_API_KEY}&q=${query}`);
//   }
// };
const API = {
  getArticles: () => axios.get('api/articles'),
  getArticle: id => axios.get('api/articles' + id),
  deleteArticle: id => axios.delete('api/articles' + id),
  saveArticle: article => axios.post('api/articles' + article),
  search: queryUrl => axios.get(queryUrl)
};

export default API;
