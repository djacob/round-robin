import React from 'react';

export default class SimpleList extends React.Component {
  render() {
    const items = this.props.items.map((item, index) => (
      <div key={index}>
        {JSON.stringify(item)}
      </div>
    ));

    return ( <div> {items} </div> );
  }
}
