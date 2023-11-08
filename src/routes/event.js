const express = require("express");
const router = express.Router();
const EventController = require("../controllers/event");

router.get("/events", EventController.getAll);
router.get("/events/user", EventController.getEventsByUser);
router.post("/events/create", EventController.createEvent);

module.exports = { router };
