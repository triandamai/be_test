import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema(
  {
    nama: { type: String },
    username: { type: String },
    email: { type: String }
  },
  { versionKey: false }
);

export const TestSchema = new mongoose.Schema({});

export const SoalSchema = new mongoose.Schema({});
