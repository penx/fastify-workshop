import Fastify from 'fastify'
import users from './routes/users.js'

export default () => {
    const fastify = Fastify()
    fastify.register(users)

    return fastify;
}

