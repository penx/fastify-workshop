import tap from "tap";
import createApp from "../index.js";

const { test } = tap;

test('requests the "/users" route', async (t) => {
  const fastify = createApp();

  const response = await fastify.inject({
    method: "GET",
    url: "/users",
  });
  t.strictEqual(response.statusCode, 200, "returns a status code of 200");
  t.deepEqual(
    response.json(),
    [{ username: "alice" }, { username: "bob" }],
    "returns a users array"
  );
});
