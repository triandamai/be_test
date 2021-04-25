import fastify from "fastify";
import fastifySensible from "fastify-sensible";
import mongoose from "mongoose";
import { createDBPlugin } from "./app/db/db-plugin.js";
import config from "./app/config.js";
//endpoint
import userapi from "./app/api/api-user.js";
import testapi from "./app/api/api-test.js";

const db = new mongoose.Mongoose();

const app = fastify({ logger: true });

app.register(fastifySensible);
app.register(createDBPlugin({ db }), config);
app.register(userapi, { ...config, prefix: "/api" });
app.register(testapi, { ...config, prefix: "/api" });
app.listen(config.server.port);
