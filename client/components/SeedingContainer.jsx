import React from 'react';
import Player from './PlayerContainer';

export default class SeedingContainer extends React.Component {
  render() {
    const {players, startRound} = this.props;

    if (!players) {
      return false;
    }

    return (
      <div>
        <h1>Seeding</h1>
        {players.map((player, index) => (
          <div style={{display: 'flex'}}>
            <span>{index + 1} </span>
            <Player player={player}/>
          </div>
        ))}
      </div>
    );
  }
}
