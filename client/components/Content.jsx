import React from 'react';
import TournamentSetup from './TournamentSetupContainer';
import TournamentContainer from './TournamentContainer';

export default class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {

    const mockData = {
      teams: [{id: '1', name: 'SPORTS1'}, {id: '2', name: 'SPORTS2'}],
      sports: [{id: '1', name: 'SPORTSBALL'}],
      players: [{id: '1', name: 'A'}, {id: '2', name: 'B'}, {id: '3', name: 'C'}, {id: '4', ame: 'D'}],
      tournaments: [{id: '1', name: 'test tournament'}],
      matches: [{id: '1'}, {id: '2'}, {id: '3'}],
      encounters: [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}, {id: '6'}]
    };

    return (
      <div>
        <TournamentSetup saveTournament={this.saveTournament}/>
        <TournamentContainer tournament={this.state.tournament} startRound={this.startRound}/>
      </div>
    );
  }

  saveTournament = (tournament) => {
    var seededTournament = {
      ...tournament,
      initialSeeding: this.seedPlayers(tournament.players)
    };
    this.setState({tournament: seededTournament});
  };

  seedPlayers = (players, seedingType) => {
    var seededPlayers = [...players];

    switch (seedingType) {
      case 'RANDOM':
      default:
        seededPlayers.sort((player1, player2) => {
          const rand = Math.random();
          return rand > 0.5 ? -1 : rand < 0.5 ? 1 : 0;
        });
    }

    return seededPlayers;
  };

  startRound = (tournament, playerKey, roundIndex) => {
    var players = tournament[playerKey];
    var round = tournament.rounds[roundIndex];
    var updatedTournament = {...tournament};

    switch (round.type) {
      case 'ladder':
        updatedTournament.rounds[roundIndex] = {...round, players};
        break;
      case 'roundrobin':
        var poolCount = Math.floor(players.length / round.preferred);
        var pools = [];
        for (var i = 0; i < poolCount; i++) {
          pools.push({players: []});
        }

        players.forEach((player, index) => {
          var poolIndex;
          var remainder = index % poolCount;
          var phase = Math.floor(index / poolCount);
          if (phase === 0 || phase % 2 === 0) {
            poolIndex = remainder;
          } else {
            poolIndex = (poolCount - 1) - remainder;
          }
          pools[poolIndex].players = [...pools[poolIndex].players, player];
        });

        pools.forEach(pool => {
          pool.encounters = [];
          pool.players.forEach((player1, index1) => {
            pool.players.forEach((player2, index2) => {
              if (index1 < index2) {
                pool.encounters.push({index1, index2, player1, player2});
              }
            });
          });
        });

        updatedTournament.rounds[roundIndex] = {...round, pools};
        break;
      case 'singleelim':
        var roundCount = Math.ceil(Math.log2(players.length));
        var encounters = [];
        for (var roundNumber = 0; roundNumber < roundCount; roundNumber++) {
          var roundEncounterCount = Math.pow(2, roundNumber + 1);
          for (var k = 1; k < (roundEncounterCount + 1) / 2; k++) {
            encounters = [...encounters, {seed1: k, seed2: (roundEncounterCount + 1) - k}
            ];
          }
        }

        updatedTournament.rounds[roundIndex] = {...round, encounters: encounters.reverse(), players};
        break;
      default:
        break;
    }

    this.setState({tournament: updatedTournament});
  };
}
