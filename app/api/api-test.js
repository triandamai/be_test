import { createSoalService } from "../services/soal-service.js";
import { createTestService } from "../services/test-service.js";
import { createUserService } from "../services/user-service.js";
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

  instance.get(`/soal`, async request => {
    const soal = await Soal.listAll();
    return { statusCode: 200, data: soal };
  });
  instance.get(`/soal/:id`, async request => {
    if (!request.params.id)
      return { statusCode: 400, data: [], message: "Id tidak ada" };
    const soal = await Soal.listAll();
    return { statusCode: 200, data: soal };
  });
  instance.get(`/test`, async request => {
    const test = await Test.listAll();
    return {
      statusCode: 200,
      data: test
    };
  });
  instance.get(`/test/:id`, async request => {
    if (!request.params.id)
      return { statusCode: 400, data: [], message: "Id tidak ada" };
    const test = await Test.listAll();
    return {
      statusCode: 200,
      data: test
    };
  });

  instance.post(`/soal`, async request => {
    const {} = request.body;
  });
  instance.post(`/test`, async request => {
    const {} = request.body;
  });
};
