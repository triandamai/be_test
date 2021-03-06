import { createUserService } from "../services/user-service.js";
import { loginSchema } from "../config.js";
export default async instance => {
  const { User } = instance;
  instance.register(async instance => {
    instance.decorate("User", createUserService({ model: User }));
    instance.register(routesPlugin);
  });
};

export const routesPlugin = async instance => {
  const { User } = instance;
  /**
   * get all
   */
  instance.get("/users", async (req, res) => {
    const user = await User.listAll();
    return { statusCode: 200, data: user };
  });
  /**
   * login
   */
  instance.post(
    "/login",
    { loginSchema, attachValidation: true },
    async (req, reply) => {
      // const { username, password } = req.body;
      // const user = await User.login({ username: username, password: password });
      // if (user.length < 1) return { statusCode: 400, data: user };

      return { data: req.validationError };
    }
  );
  /**
   * insert
   */
  instance.post("/user", async (req, reply) => {
    const user = await User.insert(req.body);
    if (!user) return { statusCode: 400, data: [] };
    return { statusCode: 200, data: [user] };
  });
  /**
   * update
   */
};
