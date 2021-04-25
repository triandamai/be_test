import fp from "fastify-plugin";
import mongoose from "mongoose";

import { SoalSchema, TestSchema, UserSchema } from "./db-models.js";

export const createDBPlugin = ({ db = mongoose } = {}) =>
  fp(async (instance, opts) => {
    await db.connect(opts.db.uri, { useNewUrlParser: true });
    instance
      .decorate("User", db.model("User", UserSchema))
      .decorate("Test", db.model("Test", TestSchema))
      .decorate("Soal", db.model("Soal", SoalSchema))
      .addHook("onClose", () => db.close());
  });
