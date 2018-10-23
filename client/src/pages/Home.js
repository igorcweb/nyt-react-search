import React, { Component } from 'react';
import Search from '../components/Search';
import Articles from '../components/Articles';

class Home extends Component {
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
