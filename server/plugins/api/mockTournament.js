var db = {tournaments: []};

const defaultRounds = {
  'ladder': {type: 'ladder', 'levelIncrease': 1},
  'roundrobin': {type: 'roundrobin', min: '4', preferred: '5', max: '6'},
  'singleelim': {type: 'singleelim'}
};

const defaultTournament = {
  name: 'Unnamed Tournament',
  seedingType: 'RANDOM',
  rounds: [],
  players: []
};

export function getTournament(req, reply) {
  var response = req.params.id ? db.tournaments[req.params.id] : db.tournaments;
  reply(response);
}

export function getRound(req, reply) {
  var tournament = db.tournaments[req.params.id];
  if (!tournament) {
    reply({message: "No tournament with id " + req.params.id}).code(404);
    return;
  }
  var response = req.params.round_index ? tournament.rounds[req.params.round_index] : tournament.rounds;
  reply(response);
}

export function startRound(req, reply) {
  var tournament = db.tournaments[req.params.id];
  var roundIndex = req.params.round_index;
  var round = tournament.rounds[roundIndex];
  var players = tournament[req.query.player_key];

  if (!tournament) {
    reply({message: "No tournament with id " + req.params.id}).code(404);
    return;
  }
  if (!round) {
    reply({message: "Tournament does not have a round " + roundIndex}).code(404);
    return;
  }
  if (!players) {
    reply({message: "Tournament does not have any players under " + req.query.player_key}).code(404);
    return;
  }

  var updatedTournament = {...tournament};

  switch (round.type) {
    case 'ladder':
      updatedTournament.rounds[roundIndex] = {...round, players};
      break;
    case 'roundrobin':
      var poolCount = Math.floor(players.length / round.preferred);
      var pools = [];
      for (var i = 0; i < poolCount; i++) {
        pools.push({players: []});
      }

      players.forEach((player, index) => {
        var poolIndex;
        var remainder = index % poolCount;
        var phase = Math.floor(index / poolCount);
        if (phase === 0 || phase % 2 === 0) {
          poolIndex = remainder;
        } else {
          poolIndex = (poolCount - 1) - remainder;
        }
        pools[poolIndex].players = [...pools[poolIndex].players, player];
      });

      pools.forEach(pool => {
        pool.encounters = [];
        pool.players.forEach((player1, player1Seed) => {
          pool.players.forEach((player2, player2Seed) => {
            if (player1Seed < player2Seed) {
              pool.encounters.push({player1: {...player1, seed: player1Seed}, player2: {...player2, seed: player2Seed}});
            }
          });
        });
      });
      updatedTournament.rounds[roundIndex] = {...round, pools};
      break;
    case 'singleelim':
      var roundCount = Math.ceil(Math.log2(players.length));
      var encounters = [];
      for (var roundNumber = 0; roundNumber < roundCount; roundNumber++) {
        var roundEncounterCount = Math.pow(2, roundNumber + 1);
        for (var k = 1; k < (roundEncounterCount + 1) / 2; k++) {
          encounters = [...encounters, {seed1: k, seed2: (roundEncounterCount + 1) - k}
          ];
        }
      }
      updatedTournament.rounds[roundIndex] = {...round, encounters: encounters.reverse(), players};
      break;
    default:
      break;
  }

  db.tournaments[req.params.id] = updatedTournament;
  reply(updatedTournament);
}

export function seedTournament(req, reply) {
  var tournament = db.tournaments[req.params.id];
  var players = tournament.players;
  var seedingType = req.query.type;
  var seededPlayers = [...players];

  switch (seedingType) {
    case 'RANDOM':
    default:
      seededPlayers.sort((player1, player2) => {
        const rand = Math.random();
        return rand > 0.5 ? -1 : rand < 0.5 ? 1 : 0;
      });
  }

  tournament.seededPlayers = seededPlayers;
  reply(tournament);
}

export function addEncounter(req, reply) {
  var tournament = db.tournaments[req.params.id];
  if (!tournament) {
    reply({message: "No tournament with id " + req.params.id}).code(404);
    return;
  }
  var roundIndex = req.params.round_index;
  var round = tournament.rounds[roundIndex];
  if (!round) {
    reply({message: "Tournament does not have a round " + roundIndex}).code(404);
    return;
  }
  const encounter = JSON.parse(req.payload);
  round.encounters = [...round.encounters, encounter].filter(encounter => !!encounter);

  reply(encounter);
}

export function updateEncounter(req, reply) {
  var tournament = db.tournaments[req.params.id];
  if (!tournament) {
    reply({message: "No tournament with id " + req.params.id}).code(404);
    return;
  }
  var roundIndex = req.params.round_index;
  var round = tournament.rounds[roundIndex];
  if (!round) {
    reply({message: "Tournament does not have a round " + roundIndex}).code(404);
    return;
  }
  const encounterIndex = round.encounters.findIndex(existingEncounter => existingEncounter.id === req.params.encounter_id);
  if (encounterIndex === -1) {
    reply({message: "Round does not have encounter " + req.params.encounter_id});
    return;
  }
  const encounter = JSON.parse(req.payload);
  const updatedEncounter = [...round.encounters[encounterIndex], ...encounter];
  round.encounters[encounterIndex] = updatedEncounter;
  reply(updatedEncounter);
}

export function newTournament(req, reply) {
  var options = JSON.parse(req.payload);
  var tournament = {
    ...defaultTournament,
    id: db.tournaments.length,
    rounds: options.rounds.map(roundName => defaultRounds[roundName]),
    players: options.players
  };
  db.tournaments.push(tournament);
  reply(tournament).code(202);
}

