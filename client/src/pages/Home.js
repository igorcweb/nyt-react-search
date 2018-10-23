import React, { Component } from 'react';
import Search from '../components/Search';
import Articles from '../components/Articles';

class Home extends Component {
  state = {
    articles: [],
    query: '',
    startYear: '',
    endYear: ''
  };
  render() {
    return (
      <div className="container">
        <Search />
        <Articles />
      </div>
    );
  }
}

export default Home;
