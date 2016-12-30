import * as tournament from './mockTournament';

const registerRoutes = (server, options, next) => {
  server.route({method: "GET", path: '/tournament', handler: tournament.getTournament});
  server.route({method: "GET", path: '/tournament/{id}', handler: tournament.getTournament});
  server.route({method: "GET", path: '/tournament/{id}/round', handler: tournament.getRound});
  server.route({method: "GET", path: '/tournament/{id}/round/{round_index}', handler: tournament.getRound});

  server.route({method: "POST", path: '/tournament', handler: tournament.newTournament});
  server.route({method: "POST", path: '/tournament/{id}/seed', handler: tournament.seedTournament});
  server.route({method: "POST", path: '/tournament/{id}/round/{round_index}/start', handler: tournament.startRound});
  server.route({
    method: "POST", path: '/tournament/{id}/round/{round_index}/encounter',
    handler: tournament.addEncounter
  });
  server.route({
    method: "PUT", path: '/tournament/{id}/round/{round_index}/encounter/{encounter_id}',
    handler: tournament.recordEncounter
  });

  next();
};

registerRoutes.attributes = {
  pkg: {
    name: "tournament",
    version: "1.0.0"
  }
};

module.exports = registerRoutes;
