import React, { Component } from 'react';
import Search from '../components/Search';
import Articles from '../components/Articles';
import API from '../utils/API';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      topic: '',
      startYear: '',
      endYear: '',
      articles: []
    };
  }

  saveArticle = article => {
    const newArticle = {
      date: article.pub_date,
      title: article.headline.main,
      url: article.web_url,
      description: article.snippet
    };

    API.saveArticle(newArticle)
      .then(() => {
        const articles = this.state.results.filter(
          article => article.headline.main !== newArticle.title
        );
        this.setState({ articles });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { topic, startYear, endYear } = this.state;
    const query = { topic, startYear, endYear };
    this.getArticles(query);
  };

  getArticles = query => {
    this.setState({ articles: [] });
    let { topic, startYear, endYear } = query;

    let queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest`;
    let key = `&api-key=${process.env.REACT_APP_API_KEY}`;

    if (topic.indexOf(' ') >= 0) {
      topic = topic.replace(/\s/g, '+');
    }
    if (topic) {
      queryUrl += `&fq=${topic}`;
    }
    if (startYear) {
      queryUrl += `&begin_date=${startYear}`;
    }
    if (endYear) {
      queryUrl += `&end_date=${endYear}`;
    }
    queryUrl += key;

    API.search(queryUrl)
      .then(results => {
        this.setState({
          articles: [...this.state.results, ...results.data.response.docs],
          topic: '',
          startYear: '',
          endYear: ''
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    // console.log('this', this.handleInputChange);
    return (
      <React.Fragment>
        <Search
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          state={this.state}
        />
        <Articles />
      </React.Fragment>
    );
  }
}

export default Home;
