import React from 'react';
import Pool from './PoolContainer';

export default class PoolsContainer extends React.Component {
  render() {
    const {pools} = this.props;
    if (!pools) {
      return false;
    }

    return (
      <div>
        <h1>Pools</h1>
        {pools.map((pool, index) => <Pool pool={pool} index={index}/>)}
      </div>
    );
  }
}
