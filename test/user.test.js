import fastify from "fastify";
import fastifySensible from "fastify-sensible";

import { routesPlugin } from "../app/api/api-user.js";

import stub from "sbuts";

export default t => {
  const createTestApp = ({ listAll }) => {
    const app = fastify();
    app.register(fastifySensible);

    //inject mock
    app.decorate("User", listAll);
    app.register(routesPlugin);
    return app;
  };
  t.test(`GET all user should return 200 with the matching user`, async t => {
    const user = {
      statusCode: 200,
      data: [
        {
          _id: "6071d76a0d5f31cb3e7e8a31",
          nama: "Trian",
          username: "Damai",
          email: "trian@gmail.com",
          password: 1234
        }
      ]
    };
    const listAll = stub().resolve(user);
    const app = createTestApp({ listAll });
    const res = await app.inject({ method: "GET", url: "/users" });

    t.eq(res.statusCode, 200);
    const json = await res.json();
    t.eq(json, user);
  });
};
