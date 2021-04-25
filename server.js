import fastify from "fastify";
import fastifySensible from "fastify-sensible";
import mongoose from "mongoose";
import { createDBPlugin } from "./src/db/db-plugin.js";
import config from "./src/config.js";
import api from "./src/api/api-user.js";

const db = new mongoose.Mongoose();

const app = fastify({ logger: true });

app.register(fastifySensible);
app.register(createDBPlugin({ db }), config);
app.register(api, { ...config, prefix: "/api" });
app.listen(config.server.port);
