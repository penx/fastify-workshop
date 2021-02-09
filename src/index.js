import Fastify from "fastify";

function createApp(config) {
  const fastify = Fastify({ logger: { prettyPrint: true } });
  fastify.register(import("fastify-jwt"), {
    secret: "supersecret",
  });

  fastify.register(import("./routes/users.js"));
  fastify.register(import("./routes/login.js"));

  fastify.log.info({ config });

  return fastify;
}

export default createApp;
