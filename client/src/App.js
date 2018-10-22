import React, { Component } from 'react';
import Title from './components/Title';
import Search from './components/Search';
import Articles from './components/Articles';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Title />
        <Search />
        <Articles />
        <Footer />
      </div>
    );
  }
}

export default App;
