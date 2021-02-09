export default function (fastify, opts, done) {
    fastify.get('/', () => {
        return { hello: 'world' }
      })
    done()
  }