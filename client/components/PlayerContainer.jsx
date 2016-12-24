import React from 'react';

export default class PlayerContainer extends React.Component {
  render() {
    const {player} = this.props;

    return (
      <div>Player: {player.name} </div>
    );
  }
}
