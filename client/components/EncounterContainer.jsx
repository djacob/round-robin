import React from 'react';

export default class EncounterContainer extends React.Component {
  render() {
    const {encounter} = this.props;
    if (!encounter) {
      return false;
    }

    return (
      <div>
        {encounter.index1 + 1} v {encounter.index2 + 1} -- {encounter.player1.name} v {encounter.player2.name}
      </div>
    );
  }
}
