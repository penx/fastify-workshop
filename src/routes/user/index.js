import S from "fluent-json-schema";

const schema = {
  response: {
    200: S.object().prop("username", S.string().required()),
  },
};

export default async function (fastify) {
  fastify.get("/user", { schema, preValidation:  [fastify.authenticate]}, async (request) => {
    request.log.info("User route");
    return request.user;
  });
}
