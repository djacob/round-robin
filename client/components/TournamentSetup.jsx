import React from 'react';
import PlayerContainer from './PlayerContainer';

export default class TournamentSetup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playerName: ''
    };
  }

  render() {

    const {tournament, addPlayer, saveTournament} = this.props;

    const playerList = tournament.players.map(player => <PlayerContainer player={player}/>);

    return (
      <div>
        <h1>Setup Tournament</h1>
        {playerList}
        <input value={this.state.playerName} onChange={this.playerNameChanged} onKeyUp={this.checkEnter}/>
        <button onClick={this.addPlayer}>Add Player</button>

        <hr/>

        <button onClick={this.saveTournament}>Save Tournament</button>
      </div>
    );
  }

  playerNameChanged = (e) => {
    this.setState({playerName: e.target.value});
  };

  checkEnter = (e) => {
    if (e.keyCode === 13) {
      this.addPlayer();
    }
  };

  addPlayer = () => {
    this.props.addPlayer({name: this.state.playerName});
    this.setState({playerName: ''});
  };

  saveTournament = (e) => {
    this.props.saveTournament();
  };
}
