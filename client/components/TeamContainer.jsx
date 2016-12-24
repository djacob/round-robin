import React from 'react';
import SimpleList from './SimpleList';

export default class TeamContainer extends React.Component {
  render() {
    return (
      <SimpleList items={this.props.teams}/>
    );
  }
}
