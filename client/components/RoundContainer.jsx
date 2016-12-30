import React from 'react';
import Ladder from './LadderContainer';
import Pools from './PoolsContainer';
import AddEncounter from './AddEncounterContainer';

export default class RoundContainer extends React.Component {
  render() {
    const {round} = this.props;

    var content;
    switch (round.type) {
      case 'ladder':
        content = <Ladder round={round} recordEncounter={this.props.recordEncounter}/>;
        break;
      case 'roundrobin':
        content = <Pools pools={round.pools}/>;
        break;
      default:
        content = false;
    }
    return (
      <div>
        <div>
          {content}
        </div>
        <div>
          <h3>Add Encounter</h3>
          <AddEncounter round={round} addEncounter={this.props.addEncounter}/>
        </div>
      </div>
    );
  }
}
