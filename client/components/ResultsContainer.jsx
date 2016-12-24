import React from 'react';
import SimpleList from './SimpleList';

export default class ResultsContainer extends React.Component {
  render() {
    const {results} = this.props;

    if (!results) {
      return false;
    }

    return (
      <div>
        <h1>Results</h1>
        <SimpleList items={results}/>
      </div>
    );
  }
}
