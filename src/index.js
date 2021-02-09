import Fastify from "fastify";

function createApp() {
  const fastify = Fastify({ logger: { prettyPrint: true } });
  fastify.register(import("./routes/users.js"));

  return fastify;
}

export default createApp;
