import React from 'react';
import SimpleList from './SimpleList';

export default class SportContainer extends React.Component {
  render() {
    return (
      <SimpleList items={this.props.sports}/>
    );
  }
}



