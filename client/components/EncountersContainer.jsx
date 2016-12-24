import React from 'react';
import Encounter from './EncounterContainer';

export default class EncountersContainer extends React.Component {
  render() {
    const {encounters} = this.props;
    if (!encounters) {
      return false;
    }

    return (
      <div>
        {encounters.map(encounter => <Encounter encounter={encounter}/>)}
      </div>
    );
  }
}

