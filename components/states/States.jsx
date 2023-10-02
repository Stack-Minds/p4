import React, { Component } from 'react';
import './States.css';

class States extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { searchTerm } = this.state;
    const stateNames = models.states();

    const filteredStates = stateNames.filter((state) =>
      state.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="states-container">
          <br/><br/><br/>
          <h1 className="states-heading">States View</h1>
          <input
            className="states-input"
            type="text"
            placeholder="Enter a substring..."
            value={searchTerm}
            onChange={this.handleSearchChange}
          />
          {searchTerm && (
            <div className="states-filter-info">
              <p>Filtering by: {searchTerm}</p>
            </div>
          )}
          <ul className="states-list">
            {filteredStates.length > 0 ? (
              filteredStates.map((state) => (
                <li key={state} className="states-list-item">{state}</li>
              ))
            ) : (
              <p className="states-no-match">No matching states found.</p>
            )}
          </ul>
        </div>
    );
  }
}

export default States;
