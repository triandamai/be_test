import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema(
  {
    nama: { type: String },
    username: { type: String },
    email: { type: String }
  },
  { versionKey: false }
);
