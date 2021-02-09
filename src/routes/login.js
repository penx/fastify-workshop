import S from "fluent-json-schema";
import createError from "http-errors";

const schema = {
  body: S.object()
    .prop("username", S.string().required())
    .prop("password", S.string().required()),
};

export default async function (fastify) {
  fastify.post("/login", { schema }, async (request, response) => {
    const { username, password } = request.body;
    request.log.info(`Login route ${username}`);
    if (username === password) {
      return { token: fastify.jwt.sign({ username }) };
    } else {
      return createError(401, "Unauthorized");
    }
  });
}
