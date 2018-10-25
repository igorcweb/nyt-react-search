import React, { Component } from 'react';
import Search from '../../components/Search';
import Articles from '../../components/Articles';
import API from '../../utils/API';

class Home extends Component {
  state = {
    topic: '',
    sYear: '',
    eYear: '',
    page: '0',
    results: [],
    previousSearch: {},
    noResults: false
  };

  saveArticle = article => {
    let newArticle = {
      date: article.pub_date,
      title: article.headline.main,
      url: article.web_url,
      summary: article.snippet
    };

    API.saveArticle(newArticle)
      .then(() => {
        let unsavedArticles = this.state.results.filter(
          article => article.headline.main !== newArticle.title
        );
        this.setState({ results: unsavedArticles });
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
    let query = { topic, startYear, endYear };
    this.getArticles(query);
  };

  getArticles = query => {
    if (
      query.topic !== this.state.previousSearch.topic ||
      query.eYear !== this.state.previousSearch.eYear ||
      query.sYear !== this.state.previousSearch.sYear
    ) {
      this.setState({ results: [] });
    }
    let { topic, startYear, endYear } = query;

    let queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&page=${
      this.state.page
    }`;
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
        this.setState(
          {
            results: [...this.state.results, ...results.data.response.docs],
            previousSearch: query,
            topic: '',
            sYear: '',
            eYear: ''
          },
          function() {
            this.state.results.length === 0
              ? this.setState({ noResults: true })
              : this.setState({ noResults: false });
          }
        );
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this);
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
