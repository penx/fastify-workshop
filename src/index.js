import Fastify from 'fastify'

function createApp () {
    const fastify = Fastify()
    fastify.register(import('./routes/users.js'))

    return fastify;
}

export default createApp;

