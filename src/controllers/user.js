const UserServices = require("../services/user");

class UserController {
  async getAll(req, res) {
    try {
      const UserData = await UserServices.getAll();

      console.log("getAll", UserData);

      res.status(200).send(UserData);
    } catch (error) {
      console.error(error);

      res.status(400).send(error.message);
    }
  }

  async registration(req, res) {
    try {
      const { username, password } = req.body;

      const UserData = await UserServices.registration(username, password);

      console.log("registration", UserData);

      res.status(200).send(UserData);
    } catch (error) {
      console.error(error);

      res.status(400).send(error.message);
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;

      console.log(username, password);
      const UserData = await UserServices.login(username, password);

      console.log("login", UserData);

      res.status(200).send(UserData);
    } catch (error) {
      console.error(error);

      res.status(400).send(error.message);
    }
  }
}

module.exports = new UserController();
