import React from 'react';
import SimpleList from './SimpleList';

export default class PlayerContainer extends React.Component {
  render() {
    return (
      <SimpleList items={this.props.players}/>
    );
  }
}
