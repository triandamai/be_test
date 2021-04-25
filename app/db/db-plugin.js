import fp from "fastify-plugin";
import mongoose from "mongoose";

import { UserSchema } from "./db-models.js";

export const createDBPlugin = ({ db = mongoose } = {}) =>
  fp(async (instance, opts) => {
    await db.connect(opts.db.uri);
    instance
      .decorate("User", db.model("User", UserSchema))
      .addHook("onClose", () => db.close());
  });
