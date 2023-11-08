const userModel = require("../models/user-model");

class UserServices {
  async getAll() {
    const users = await userModel.find({});

    return users.map(({ _id, username }) => ({ _id: _id, username }));
  }

  async registration(username, password) {
    const isUserExist = await userModel.findOne({ username });

    if (isUserExist) {
      throw new Error("User already exists");
    }

    const user = await userModel.create({ username, password });

    return user;
  }

  async login(username, password) {
    const userAuth = await userModel.findOne({ username, password });

    if (!userAuth) {
      throw new Error("password or name is incorrect");
    }

    return userAuth;
  }
}

module.exports = new UserServices();