export default function (fastify) {
    fastify.get('/users', {}, async () => [
        { username: 'alice' },
        { username: 'bob' }
      ])
  }