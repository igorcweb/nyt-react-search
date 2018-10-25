import React from 'react';
import { Article } from './Article';

const Articles = props => {
  console.log(props);
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
          <div className="card-body" id="article-section">
            {props.state.results.map((article, index) => (
              <Article
                key={index}
                title={article.headline.main}
                url={article.web_url}
                summary={article.snippet}
                date={article.pub_date}
                type="Save"
                onClick={() => this.saveArticle(article)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
