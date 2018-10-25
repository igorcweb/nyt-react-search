import React, { Component } from 'react';

class Search extends Component {
  render() {
    // API.search('trump').then(result => console.log(result.data.response));
    console.log(this.props);
    return (
      <div className="row">
        <div className="col-sm-12">
          <br />
          <div className="card">
            <div className="card-header">
              <strong>
                <i className="fa fa-list-alt" /> Search Parameters
              </strong>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="search">Search Term</label>
                  <input
                    type="text"
                    className="form-control"
                    id="topic"
                    name="topic"
                    value={this.props.state.topic}
                    onChange={this.props.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="startYear">Start Date (Optional):</label>
                  <input
                    type="date"
                    className="form-control"
                    id="startYear"
                    maxLength="4"
                    name="startYear"
                    onChange={this.props.handleInputChange}
                    value={this.props.state.startYear}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="endYear">End Date (Optional):</label>
                  <input
                    type="date"
                    className="form-control"
                    id="endYear"
                    maxLength="4"
                    name="endYear"
                    onChange={this.props.handleInputChange}
                    value={this.props.state.endYear}
                  />
                </div>
                <button
                  disabled={!this.props.state.topic}
                  onClick={this.props.handleSubmit}
                  type="submit"
                  className="btn btn-default mr-2"
                  id="run-search"
                >
                  <i className="fa fa-search" /> Search
                </button>
                <button className="btn btn-default" id="clear-all">
                  <i className="fa fa-trash" /> Clear Results
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
