import React from 'react';
import Ladder from './LadderContainer';
import Pools from './PoolsContainer';

export default class RoundContainer extends React.Component {
  render() {
    const {round} = this.props;

    var content;
    switch (round.type) {
      case 'ladder':
        content = <Ladder round={round}/>;
        break;
      case 'roundrobin':
        content = <Pools pools={round.pools}/>;
        break;
      default:
        content = false;
    }
    return content;
  }
}
