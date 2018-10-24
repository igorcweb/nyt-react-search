import React, { Component } from 'react';
import Search from '../components/Search';
import Articles from '../components/Articles';
import API from '../utils/API';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      number: 0
    };
  }

  searchArticles = query => {
    API.search(query).then(result => {
      let articles = [];
      console.log(result);
    });
  };

  setQuery = ({ searchParams }) => {
    const { query, startDate, endDate, number } = searchParams;
    this.setState({ number });
    const queryString = `${query}${startDate}${number}${endDate}`;
    this.searchArticles(queryString);
  };

  render() {
    return (
      <React.Fragment>
        <Search query={this.setQuery} />
        <Articles articles={this.state} />
      </React.Fragment>
    );
  }
}

export default Home;
