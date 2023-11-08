const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/users", userController.getAll);
router.post("/users/registration", userController.registration);
router.post("/users/login", userController.login);

module.exports = { router };
