
const registerRoutes = (server, options, next) => {
  server.route({
    method: "GET",
    path: '/tournament',
    config: {},
    handler: tournamentHandler
  });
  next();
};

const tournamentHandler = (request, reply) => {
  console.log('Testing!!!!');
  reply({tournament: 'starting event'}).code(200);
};

registerRoutes.attributes = {
  pkg: {
    name: "tournament",
    version: "1.0.0"
  }
};

module.exports = registerRoutes;
