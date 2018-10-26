import React, { Component } from 'react';
import API from '../utils/API';
import { Article } from '../components/Article';

class Saved extends Component {
  state = {
    savedArticles: []
  };

  componentWillMount() {
    this.getArticles();
  }

  getArticles = () => {
    API.getArticles().then(results => {
      this.setState({ savedArticles: results.data });
    });
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(() => {
        let savedArticles = this.state.savedArticles.filter(
          article => article._id !== id
        );
        this.setState({ savedArticles: savedArticles });
        this.getArticles();
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this);
    return (
      <div className="row">
        <div className="col-sm-12">
          <br />
          <div className="card">
            <div className="card-header">
              <strong>
                <i className="fa fa-table" /> Saved Articles
              </strong>
            </div>
            <div className="card-body" id="article-section">
              {this.state.savedArticles.length
                ? this.state.savedArticles.map((article, index) => (
                    <Article
                      key={index}
                      title={article.title}
                      url={article.url}
                      summary={article.summary}
                      date={article.date}
                      type="Delete"
                      onClick={() => this.deleteArticle(article._id)}
                    />
                  ))
                : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Saved;
