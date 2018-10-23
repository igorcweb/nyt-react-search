import React from 'react';
import Nav from './Nav';

const Title = () => {
  return (
    <div className="jumbotron">
      <Nav />
      <h1 className="text-center">
        <i className="fa fa-newspaper-o" /> New York Times Search
      </h1>
    </div>
  );
};

export default Title;
