import React from 'react';
import SimpleList from './SimpleList';

export default class MatchContainer extends React.Component {
  render() {
    return (
      <SimpleList items={this.props.matches}/>
    );
  }
}
