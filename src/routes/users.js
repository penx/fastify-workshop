export default function (fastify) {
    fastify.get('/users', {}, async (request) => {
        request.log.info('Users route')
        return [
            { username: 'alice' },
            { username: 'bob' }
        ]
    })
  }