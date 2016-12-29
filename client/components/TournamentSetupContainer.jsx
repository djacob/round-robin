import React from 'react';
import TournamentSetup from './TournamentSetup';

export default class TournamentSetupContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tournament: {
        seedingType: 'RANDOM',
        rounds: [
          {type: 'ladder', 'levelIncrease': 1},
          {type: 'roundrobin', min: '2', preferred: '5', max: '4'},
          {type: 'singleelim'}
        ],
        players: []
      }
    };
  }

  render() {
    return (
      <TournamentSetup tournament={this.state.tournament}
                       addPlayer={this.addPlayer}
                       saveTournament={this.saveTournament}/>
    );
  }

  addPlayer = (player) => {
    var players = [...this.state.tournament.players, player];
    this.setState({tournament: {...this.state.tournament, players}});
  };

  saveTournament = () => {
    this.props.saveTournament(this.state.tournament);
  };
}
