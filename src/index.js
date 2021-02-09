import Fastify from "fastify";

function createApp() {
  const fastify = Fastify({ logger: { prettyPrint: true } });
  fastify.register(import("./routes/users.js"));
  fastify.register(import("./routes/login.js"));

  return fastify;
}

export default createApp;
