import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema(
  {
    nama: { type: String },
    username: { type: String },
    email: { type: String }
  },
  { versionKey: false }
);

export const TestSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  thumbnail: { type: String },
  soal: { type: Array }
});

export const SoalSchema = new mongoose.Schema({
  question: { type: String },
  image: { type: String },
  soal_type: { type: Number },
  choise: { type: Array },
  answer: { type: String }
});
