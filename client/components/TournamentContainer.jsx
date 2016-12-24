import React from 'react';
import SimpleList from './SimpleList';

export default class TournamentContainer extends React.Component {
  render() {
    return (
      <SimpleList items={this.props.tournaments}/>
    );
  }
}
