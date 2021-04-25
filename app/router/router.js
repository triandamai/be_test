async function routes(fastify, options) {
  fastify.get("/", async (request, reply) => {
    return {
      data: fastify.mongo.db
    };
  });
}

module.exports = routes;
