import React from 'react';
import Seeding from './SeedingContainer';
import Encounters from './EncountersContainer';
import Results from './ResultsContainer';
import Pools from './PoolsContainer';
import SingleElimination from './SingleEliminationContainer';
import Ladder from './LadderContainer';

export default class TournamentContainer extends React.Component {
  render() {
    const {tournament, startRound} = this.props;

    if (!tournament) {
      return false;
    }

    return (
      <div>
        <h1>{tournament.name}</h1>

        <Seeding players={tournament.initialSeeding}/>

        <button onClick={this.startInitialRound}>Start Round</button>

        <hr/>

        <Ladder round={tournament.rounds.find(round => round.type === 'ladder')} />

        <Pools pools={(tournament.rounds.find(round => round.type === 'roundrobin') || {}).pools}/>

        <button onClick={this.startSecondRound}>Start Round 2</button>

        {/*<SingleElimination round={tournament.rounds.find(round => round.type === 'singleelim')}/>*/}

        <Results />
      </div>
    );
  }

  startInitialRound = () => {
    this.props.startRound(this.props.tournament, 'initialSeeding', 0);
  };

  startSecondRound = () => {
    this.props.startRound(this.props.tournament, 'initialSeeding', 1);
  }
}
