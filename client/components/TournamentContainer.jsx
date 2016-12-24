import React from 'react';
import Seeding from './SeedingContainer';
import Encounters from './EncountersContainer';
import Results from './ResultsContainer';
import Pools from './PoolsContainer';

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

        <Pools pools={(tournament.rounds.find(round => round.type === 'roundrobin') || {}).pools}/>


        <Results />
      </div>
    );
  }

  startInitialRound = () => {
    this.props.startRound(this.props.tournament, 'initialSeeding', 0);
  };
}
