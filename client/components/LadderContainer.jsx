import React from 'react';

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

      </div>
    );
  }
}
