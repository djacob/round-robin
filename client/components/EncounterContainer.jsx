import React from 'react';

export default class EncounterContainer extends React.Component {
  render() {
    const {encounter} = this.props;
    if (!encounter) {
      return false;
    }

    var content;

    var {player1, player2, result} = encounter;
    if (result) {
      var [winner, loser] = [player1, player2];
      if (result.winner !== winner.name) {
        [winner, loser] = [loser, winner]
      }
      content = (
        <span>
          {winner.name} v <span style={{textDecoration: 'line-through'}}>{loser.name}</span> ({result.score})
        </span>
      );
    } else {
      content = (
        <span>
          {player1.name}({player1.seed + 1}) v {player2.name}({player2.seed + 1})
        </span>
      );
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}
