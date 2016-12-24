import React from 'react';
import Encounters from './EncountersContainer';

export default class PoolContainer extends React.Component {
  render() {
    const {pool, index} = this.props;
    if (!pool) {
      return false;
    }

    return (
      <div>
        <h2>Pool {index + 1}</h2>

        <table>
          <tr>
            <td></td>
            {pool.players.map((player, index) => {
              return (<td>{index + 1}</td>);
            })}
          </tr>
          <tr>
            <td></td>
            {pool.players.map(player => (
              <td>{player.name}</td>
            ))}
          </tr>
          {
            pool.players.map((player1, index) => {
              return (
                <tr>
                  <td>{index + 1} {player1.name}</td>
                  {
                    pool.players.map(player2 => {
                      return (
                        <td style={{border: '1px solid black'}}>
                          {player1 === player2 ? 'X' : ' '}
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </table>

        <Encounters encounters={pool.encounters}/>
      </div>
    );
  }
}
