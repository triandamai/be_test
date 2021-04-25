import { createSoalService } from "../services/soal-service.js";
import { createTestService } from "../services/test-service.js";
import { createUserService } from "../services/user-service";
export default async instance => {
  const { Soal, Test, User } = instance;
  instance.register(async instance => {
    instance.decorate("Test", createTestService({ model: Test }));
    instance.decorate("Soal", createSoalService({ model: Soal }));
    instance.decorate("User", createUserService({ model: User }));
    instance.register(routesPlugin);
  });
};

export const routesPlugin = async instance => {
  const { Soal, Test, User } = instance;
};
