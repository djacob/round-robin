import React from 'react';

export default class EncounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: {
        player1: undefined,
        player2: undefined
      }
    };
  }

  render() {
    const {encounter} = this.props;
    if (!encounter) {
      return false;
    }

    var content;

    var {player1, player2, result, score} = encounter;
    if (result) {
      var [winner, loser] = [player1, player2];
      var [winnerScore, loserScore] = [score.player1, score.player2];
      if (result.winner.name !== winner.name) {
        [winner, loser] = [player2, player1];
        [winnerScore, loserScore] = [loserScore, winnerScore];
      }
      content = (
        <span>
          {winner.name} v <span style={{textDecoration: 'line-through'}}>{loser.name}</span> ({winnerScore}-{loserScore})
        </span>
      );
    } else {
      content = (
        <div>
          <div>
            <span>({player1.seed + (player1.seed !== undefined ? 1 : '')}) {player1.name}</span>
            <span> v </span>
            <span>({player2.seed + (player2.seed !== undefined ? 1 : '')}) {player2.name}</span>
          </div>
          <div>
            <input value={this.state.score.player1} onChange={this.scoreUpdated.bind(this, 'player1')}/>
            <input value={this.state.score.player2} onChange={this.scoreUpdated.bind(this, 'player2')}/>
            <button onClick={this.recordEncounter}>Record</button>
          </div>
        </div>
      );
    }
    return (
      <div>
        {content}
      </div>
    );
  }

  recordEncounter = () => {
    this.props.recordEncounter(this.props.encounter, this.state.score);
  };

  scoreUpdated = (player, e) => {
    var newScore = this.state.score;
    newScore[player] = e.target.value;
    this.setState({score: newScore});
  };
}
