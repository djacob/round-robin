import React from 'react';

export default class AddEncounterContainer extends React.Component {

  initialState = {
    player1: '',
    player2: '',
    date: '',
    time: ''
  };

  constructor(props) {
    super(props);
    this.state = {...this.initialState};
  }

  render() {
    const {round} = this.props;
    if (!round || !round.players) {
      return false;
    }

    return (
      <div>
        <div>
          Player1: <input value={this.state.player1} onChange={this.updateField.bind(this, 'player1')}/>
        </div>
        <div>
          Player2: <input value={this.state.player2} onChange={this.updateField.bind(this, 'player2')}/>
        </div>
        <div>
          Date: <input value={this.state.date} onChange={this.updateField.bind(this, 'date')}/>
        </div>
        <div>
          Time: <input value={this.state.time} onChange={this.updateField.bind(this, 'time')}/>
        </div>

        <button onClick={this.addEncounter}>Add Encounter</button>
      </div>
    );
  }

  updateField = (field, e) => {
    var state = {...this.state};
    state[field] = e.target.value;
    this.setState(state);
  };

  addEncounter = () => {
    const [player1, player2] = ['player1', 'player2'].map(playerKey => {
      var playerSeed = this.props.round.players.findIndex(player => player.name === this.state[playerKey]);
      var player = this.props.round.players[playerSeed] || {name: this.state[playerKey]};
      if (playerSeed !== -1) {
        player.seed = playerSeed;
      }
      return player;
    });

    var encounter = {
      player1, player2,
      date: this.state.date,
      time: this.state.time
    };

    console.log('initial state', this.initialState);

    this.setState(this.initialState);
    this.props.addEncounter(encounter);
  };
}
