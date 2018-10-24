import React, { Component } from 'react';
import API from '../utils/API';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParams: {
        query: null,
        number: '5',
        startYear: null,
        endYear: null
      }
    };
  }

  handleNumberChange = e => {
    this.setState({
      searchParams: {
        number: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      searchParams: {
        query: this.refs.query.value,
        number: this.refs.number.value,
        startYear: this.refs.startYear.value,
        endYear: this.refs.endYear.value
      }
    });
    console.log(this.state);
  };

  render() {
    // API.search('trump').then(result => console.log(result.data.response));
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
                    id="query"
                    ref="query"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Number of Records to Retrieve:</label>
                  <select
                    id="number"
                    className="custom-select"
                    aria-labelledby="dropdownMenuButton"
                    value={this.state.searchParams.number}
                    onChange={this.handleNumberChange}
                    ref="number"
                  >
                    <option value="1">1</option>

                    <option value="5">5</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="startYear">Start Year (Optional):</label>
                  <input
                    type="text"
                    className="form-control"
                    id="startYear"
                    maxLength="4"
                    ref="startYear"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="endYear">End Year (Optional):</label>
                  <input
                    type="text"
                    className="form-control"
                    id="endYear"
                    maxLength="4"
                    ref="endYear"
                  />
                </div>
                <button
                  onClick={this.handleSubmit}
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
