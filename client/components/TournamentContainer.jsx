import React from 'react';
import Seeding from './SeedingContainer';
import Results from './ResultsContainer';
import StartRound from './StartRoundContainer';
import Round from './RoundContainer';

export default class TournamentContainer extends React.Component {
  render() {
    const {tournament, startRound} = this.props;

    if (!tournament) {
      return false;
    }

    return (
      <div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h1>{tournament.name}</h1>
          <button onClick={this.props.refreshTournament}>Refresh</button>
        </div>
        <Seeding players={tournament.seededPlayers}/>

        {tournament.rounds.map(round => <Round round={round}/>)}

        <hr/>

        <StartRound startRound={this.startRound}/>

        <Results />
      </div>
    );
  }

  startRound = (roundNumber) => {
    this.props.startRound(this.props.tournament, 'seededPlayers', roundNumber);
  };
}
