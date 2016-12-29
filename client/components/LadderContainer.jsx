import React from 'react';
import Encounter from './EncounterContainer';

export default class LadderContainer extends React.Component {
  render() {
    var {round} = this.props;

    if (!round || !round.players) {
      return false;
    }

    var levelIncrease = round.levelIncrease || 1;

    round.placements = [[]];
    var currentPlacementLevelCount = 1;

    for (var seed = 0; seed < round.players.length; seed++) {
      var player = round.players[seed];
      var currentPlacement = round.placements[round.placements.length - 1];
      if (currentPlacement.length < currentPlacementLevelCount) {
        currentPlacement.push(player);
      } else {
        round.placements.push([player]);
        currentPlacementLevelCount += levelIncrease;
      }
    }
    var lastRound = round.placements[round.placements.length - 1];

    if (lastRound.length < currentPlacementLevelCount) {
      var empties = new Array(currentPlacementLevelCount - lastRound.length).fill(undefined);
      round.placements[round.placements.length - 1] = [...lastRound, ...empties];
    }

    return (
      <div>
        <h1>Ladder</h1>
        {
          round.placements.map((placementLevel, index) => {
            return (<div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  {placementLevel.map(player => {
                    return (
                      <div style={{border: '1px solid black', padding: '10px 15px'}}>
                        {player ? player.name : '/'}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        }
        { !round.encounters ? false : (
          <div>
            <h2>Encounters</h2>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div>
                <h3>Challenges</h3>
                {
                  round.encounters
                    .filter(encounter => !encounter.result)
                    .map(encounter => <Encounter encounter={encounter} recordEncounter={this.props.recordEncounter}/>)
                }
              </div>
              <div>
                <h3>Completed</h3>
                {
                  round.encounters
                    .filter(encounter => !!encounter.result)
                    .map(encounter => <Encounter encounter={encounter}/>)
                }
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
