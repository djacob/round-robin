import React from 'react';
import Teams from './TeamContainer';
import Players from './PlayerContainer';
import Sports from './SportContainer';
import Tournaments from './TournamentContainer';
import Matches from './MatchContainer';
import Encounters from './EncounterContainer';

export default class TournamentContainer extends React.Component {
  render() {

    const mockData = {
      teams: [{id: '1', name: 'SPORTS1'}, {id: '2', name: 'SPORTS2'}],
      sports: [{id: '1', name: 'SPORTSBALL'}],
      players: [{id: '1', name: 'A'}, {id: '2', name: 'B'}, {id: '3', name: 'C'}, {id: '4', ame: 'D'}],
      tournaments: [{id: '1', name: 'test tournament'}],
      matches: [{id: '1'}, {id: '2'}, {id: '3'}],
      encounters: [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}, {id: '6'}]
    };

    const {teams, sports, players, tournaments, matches, encounters} = mockData;

    return (
      <div>

        <Teams teams={teams}/>
        <Sports sports={sports}/>
        <Players players={players}/>

        <Tournaments tournaments={tournaments}/>
        <Matches matches={matches}/>
        <Encounters encounters={encounters}/>

      </div>
    );
  }
}
