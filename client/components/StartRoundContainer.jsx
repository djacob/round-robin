import React from 'react';

export default class StartRoundContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {roundNumber: 0};
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.startRound}>Start Round</button>
        <input type="number" value={this.state.roundNumber} onChange={this.roundNumberChanged}/>
      </div>
    );
  }

  startRound = () => {
    this.props.startRound(this.state.roundNumber);
  };

  roundNumberChanged = (e) => {
    this.setState({roundNumber: e.target.value});
  };
}
