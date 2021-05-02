import mongoose from "mongoose";

const { Schema } = mongoose;

export const UserSchema = new Schema(
  {
    uid: {
      type: String
    },
    name: {
      type: String
    },
    email: {
      type: String
    },
    identity: {
      type: String
    },
    identity_type: {
      type: String
    },
    username: { type: String },
    password: { type: String },
    authmethod: {
      type: String
    }
  },
  { versionKey: false }
);

export const TestSchema = new Schema({
  uid: { type: String },
  name: {
    type: String
  },
  code: {
    type: String
  },
  thumbnail: { type: String },
  description: {
    type: String
  },
  tags: {
    type: String
  }
});

export const QuestionSchema = new Schema({
  uid: {
    type: String
  },
  question: {
    type: String
  },
  mime_type: { type: String },
  mime: { type: String },
  answer: { type: String },
  answer_a: { mime_type: String, body: String },
  answer_b: { mime_type: String, body: String },
  answer_c: { mime_type: String, body: String },
  answer_d: {
    mime_type: String,
    body: String
  }
});

export const ResultSchema = new Schema({
  uid: { type: String },
  user_uid: { type: String },
  test_uid: { type: String },
  result: { type: String }
});
