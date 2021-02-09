import createApp from './index.js';

const start = async function () {
  const fastify = createApp();

  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
