export default {
  db: {
    uri:
      "mongodb+srv://Trian:asdf1998Buka@cluster0.ewqld.gcp.mongodb.net/db_test?retryWrites=true&w=majority"
  },
  server: {
    port: 3000
  }
};

export const loginSchema = {
  body: {
    type: "object",
    required: ["username", "password", "authmethod"],
    properties: {
      username: { type: "string" },
      password: { type: "string" },
      authmethod: {
        type: "string"
      }
    }
  },
  response: {
    200: {
      type: "object",
      properties: { username: { type: "string" } }
    }
  }
};
export const userSchema = {
  body: {
    type: "object",
    required: [
      "uid",
      "name",
      "email",
      "identity",
      "identity_type",
      "username",
      "password",
      "authmethod",
      "role"
    ],
    properties: {
      uid: {
        type: "string"
      },
      name: {
        type: "string"
      },
      email: {
        type: "string"
      },
      identity: {
        type: "string"
      },
      identity_type: {
        type: "string"
      },
      username: { type: "string" },
      password: { type: "string" },
      authmethod: {
        type: "string"
      }
    }
  }
};

export const testSchema = {
  type: "object",
  reqired: ["uid", "name", "code", "thumbnail", "description", "tags"],
  properties: {
    uid: { type: "string" },
    name: {
      type: "string"
    },
    code: {
      type: "string"
    },
    thumbnail: { type: "string" },
    description: {
      type: "string"
    },
    tags: {
      type: "string"
    }
  }
};
export const soalSchema = {
  type: "object",
  reqired: [
    "uid",
    "question",
    "mime_type",
    "mime",
    "answer",
    "answer_a",
    "answer_b",
    "answer_c",
    "answer_d"
  ],
  properties: {
    uid: {
      type: "string"
    },
    question: {
      type: "string"
    },
    mime_type: { type: "string" },
    mime: { type: "string" },
    answer: { type: "string" },
    answer_a: {
      type: "object",
      properties: { mime_type: { type: "string" }, body: { type: "string" } }
    },
    answer_b: {
      type: "object",
      properties: { mime_type: { type: "string" }, body: { type: "string" } }
    },
    answer_c: {
      type: "object",
      properties: { mime_type: { type: "string" }, body: { type: "string" } }
    },
    answer_d: {
      type: "object",
      properties: { mime_type: { type: "string" }, body: { type: "string" } }
    }
  }
};

export const result = {
  type: "object",
  required: ["uid", "user_uid", "test_uid", "result"],
  properties: {
    uid: { type: "string" },
    user_uid: { type: "string" },
    test_uid: { type: "string" },
    result: { type: "string" }
  }
};
