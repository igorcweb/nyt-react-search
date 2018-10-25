import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Title from './components/Title';
import Home from './pages/home';
import Saved from './pages/saved';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <Title />
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
