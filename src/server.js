import createApp from "./index.js";

const PORT = 3000;

const start = async function () {
  const fastify = createApp();

  try {
    fastify.log.info(`fastify is starting on port ${PORT}`);
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
