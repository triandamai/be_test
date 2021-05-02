import fp from "fastify-plugin";
import mongoose from "mongoose";

import {
  QuestionSchema,
  ResultSchema,
  TestSchema,
  UserSchema
} from "./db-models.js";

export const createDBPlugin = ({ db = mongoose } = {}) =>
  fp(async (instance, opts) => {
    await db.connect(opts.db.uri, { useNewUrlParser: true });
    instance
      .decorate("User", db.model("User", UserSchema))
      .decorate("Test", db.model("Test", TestSchema))
      .decorate("Question", db.model("Question", QuestionSchema))
      .decorate("Reult", db.model("Result", ResultSchema))
      .addHook("onClose", () => db.close());
  });
