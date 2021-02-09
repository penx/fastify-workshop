import Fastify from "fastify";
import autoload from "fastify-autoload";
import { fileURLToPath } from 'url'
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createApp(config) {
  const fastify = Fastify({ logger: { prettyPrint: true } });

  fastify.register(
    autoload,
    {
      options: config,
      dir: join(__dirname, "plugins"),
    },
    
  );
  fastify.register(autoload, {
    dir: join(__dirname, "routes"),
  });

  fastify.log.info({ config });

  return fastify;
}

export default createApp;
