import React from 'react';
import './States.css';

/**
 * Define States, a React component of Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.models.states.
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log('window.models.states', window.models.states);
  }

  render() {
    return (
      <div>
  

	<h1>Project States View</h1>

	<h3> 
		List of all states in alphabetical order
	</h3>
	<p>
		{{states}}
	</p>

	<h3>
		List of all states containing a substring
	</h3>
	<p>
		Enter a substring, and the view will display in alphabetical order a list of all states
		whose names contain the given substring (ignoring differences in case).
	</p>
	<label class="states-input">Please enter a substring: <input type="text"
        ng-model="substring"></label>
    <button ng-click="filterStates(substring)">Filter!</button>
    <p>
    	<span ng-if="match">List of all states after filtering: {{statesAfterFilter}}</span>
    	<span ng-if="noMatch">No matching states found.</span>
    </p>

      </div>
    );
  }
}

export default States;
