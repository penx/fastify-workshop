async function authenticate(fastify, opts) {
  fastify.register(import("fastify-jwt"), {
    secret: opts.JWT_SECRET,
  });

  fastify.decorate("authenticate", async function (request, reply) {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });
}

authenticate[Symbol.for('skip-override')] = true

export default authenticate;
