import S from "fluent-json-schema";

const schema = {
//   response: {
//     200: S.array().items(S.object().prop("username", S.string().required())),
//   },
};

export default async function (fastify) {
    fastify.addHook('preValidation', async (request, response) => {
        fastify.authenticate(request, response);
    })

  fastify.get("/user", { schema }, async (request) => {
    request.log.info("User route");
    return request.user;
  });
}
