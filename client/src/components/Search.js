import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '5' };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
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
                    id="search-trem"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Number of Records to Retrieve:</label>
                  <select
                    id="article-count"
                    className="custom-select"
                    aria-labelledby="dropdownMenuButton"
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <option value="1">1</option>

                    <option value="5">5</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="start-year">Start Year (Optional):</label>
                  <input type="text" className="form-control" id="start-year" />
                </div>
                <div className="form-group">
                  <label htmlFor="end-year">End Year (Optional):</label>
                  <input type="text" className="form-control" id="end-year" />
                </div>
                <button
                  type="submit"
                  className="btn btn-default"
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
