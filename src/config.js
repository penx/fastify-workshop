import envSchema from 'env-schema';

const schema = {
  type: 'object',
  required: [ 'JWT_SECRET' ],
  properties: {
    JWT_SECRET: {
      type: 'string',
      default: 'supersecret'
    }
  }
}

export default envSchema({
  schema: schema,
  dotenv: true // load .env if it's there, default: false
})
