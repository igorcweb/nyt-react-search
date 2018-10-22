import React from 'react';

const Articles = () => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <br />
        <div className="card">
          <div className="card-header">
            <strong>
              <i className="fa fa-table" /> Top Articles
            </strong>
          </div>
          <div className="card-body" id="article-section" />
        </div>
      </div>
    </div>
  );
};

export default Articles;
