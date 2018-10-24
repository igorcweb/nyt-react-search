import axios from 'axios';

const { REACT_APP_API_KEY } = process.env;
const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';

const API = {
  search: query => {
    return axios.get(`${url}api-key=${REACT_APP_API_KEY}&q=${query}`);
  }
};

export default API;
