async function authenticate(fastify, opts) {
  fastify.register(import("fastify-jwt"), {
    secret: opts.JWT_SECRET,
  });

  fastify.decorate("authenticate", async function (request, response) {
    try {
      await request.jwtVerify();
    } catch (err) {
      response.send(err);
    }
  });
}

authenticate[Symbol.for("skip-override")] = true;

export default authenticate;
