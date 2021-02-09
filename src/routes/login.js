import S from "fluent-json-schema";

const schema = {
  body: S.object()
    .prop("username", S.string().required())
    .prop("password", S.string().required()),
};

export default async function (fastify) {
  fastify.post("/login", { schema }, async (request) => {
    request.log.info("Login route");
    return;
  });
}
