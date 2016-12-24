import React from 'react';
import SimpleList from './SimpleList';

export default class EncounterContainer extends React.Component {
  render() {
    return (
      <SimpleList items={this.props.encounters}/>
    );
  }
}
