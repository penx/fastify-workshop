import S from "fluent-json-schema";

const schema = {
  response: {
    200: S.array().items(S.object().prop("username", S.string().required())),
  },
};

export default async function (fastify) {
  fastify.get("/users", { schema }, async (request) => {
    request.log.info("Users route");
    return [{ username: "alice" }, { username: "bob" }];
  });
}
