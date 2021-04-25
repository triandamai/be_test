export const createUserService = ({ model }) => {
  return {
    listAll() {
      return model.find();
    },
    async login({ username, password }) {
      return model.find({ username: username, password: password });
    },
    async insert(user) {
      return new model(user).save();
    }
  };
};
