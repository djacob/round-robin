import React from 'react';
import TournamentSetup from './TournamentSetupContainer';
import TournamentContainer from './TournamentContainer';

export default class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {

    return (
      <div>
        <TournamentSetup saveTournament={this.saveTournament}/>
        <TournamentContainer tournament={this.state.tournament}
                             startRound={this.startRound}
                             refreshTournament={this.refreshTournament}
                             recordEncounter={this.recordEncounter}
                             addEncounter={this.addEncounter}
        />
      </div>
    );
  }

  saveTournament = (tournament) => {
    var options = {
      method: 'POST',
      ContentType: 'application/json',
      body: JSON.stringify(tournament)
    };

    /* TODO: Invstigate redux-saga with react-router and server side rendering */
    /* TODO: Add Error Handling */
    fetch('/tournament', options)
      .then(res => res.json())
      .then(newTournament => {
        options.body = JSON.stringify(newTournament);
        fetch('/tournament/' + newTournament.id + '/seed', options)
          .then(res => res.json())
          .then(seededTournament => {
            this.setState({tournament: seededTournament});
          });
      });
  };

  startRound = (tournament, playerKey, roundIndex) => {
    var query = '?player_key=' + playerKey;
    var options = {
      method: 'POST',
      ContentType: 'application/json'
    };

    fetch('/tournament/' + tournament.id + '/round/' + roundIndex + '/start' + query, options)
      .then(res => res.json())
      .then(updatedTournament => {
        this.setState({tournament: updatedTournament});
      });
  };

  refreshTournament = () => {
    var options = {
      method: 'GET',
      ContentType: 'application/json'
    };

    fetch('/tournament/' + this.state.tournament.id, options)
      .then(res => res.json())
      .then(tournament => {
        this.setState({tournament});
      });
  };

  addEncounter = (roundIndex, encounter) => {
    var options = {
      method: 'POST',
      ContentType: 'application/json',
      body: JSON.stringify({...encounter})
    };

    //TODO: Adds extra undefined encounter at the start of the list :'(
    fetch('/tournament/' + this.state.tournament.id + '/round/' + roundIndex + '/encounter', options)
      .then(res => res.json())
      .then(encounter => {
        var updatedTournament = {...this.state.tournament};
        updatedTournament.rounds[roundIndex].encounters = [
          ...updatedTournament.rounds[roundIndex].encounters,
          encounter
        ].filter(encounter => !!encounter);
        this.setState({tournament: updatedTournament});
      });
  };

  recordEncounter = (roundIndex, encounter, score) => {
    var options = {
      method: 'PUT',
      ContentType: 'application/json',
      body: JSON.stringify({...encounter, score})
    };

    fetch('/tournament/' + this.state.tournament.id + '/round/' + roundIndex + '/encounter/' + encounter.id, options)
      .then(res => res.json())
      .then(encounter => {
        var encounterIndex = this.state.tournament.rounds[roundIndex].encounters.findIndex(en => en.id === encounter.id);
        var updatedTournament = {...this.state.tournament};
        updatedTournament.rounds[roundIndex].encounters[encounterIndex] = encounter;
        this.setState({tournament: updatedTournament});
      });
  };
}

