const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { router: userRouter } = require("./routes/user");
const { router: eventRouter } = require("./routes/event");

const app = express();

async function setup() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }

  app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
  app.use(cookieParser());

  app.use('/', express.json(), userRouter);
  app.use('/', express.json(), eventRouter);

  app.get('/.well-known/pki-validation/1C918F4BC388B0A10FF1A47F9818E47D.txt', (req, res) => {

    res.sendFile(path.join(__dirname, '../1C918F4BC388B0A10FF1A47F9818E47D.txt'));
  });

  return app;
}

setup();

module.exports = app;
