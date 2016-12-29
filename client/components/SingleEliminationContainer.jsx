import React from 'react';

export default class SingleEliminationContainer extends React.Component {
  render() {
    const {round} = this.props;

    if (!round && !round.encounters) {
      return false;
    }

    // round.bracketRound = 1;

    var roundCount = Math.ceil(Math.log2(players.length));

    var x = 64;

    // round.bracketRound =
    for (var i = 1; i < x; i*=2) {
      for (var j = 0; j < i; j++) {
        // players[]
      }
    }

    return (
      <div>
        Coming Soon
      </div>
    );
  }
}
