const EventServices = require('../services/event');

class EventController {
  async createEvent(req, res) {
    try {
      const { author, guests, date, description, text } = req.body;

      const event = await EventServices.createEvent({ author, guests, date, description, text });

      console.log("createEvent", event);

      res.status(200).send(event);
    } catch (error) {
      console.error(error);

      res.status(400).send(error.message);
    }
  }

  async getAll(req, res) {
    try {
      const events = await EventServices.getAll();

      res.status(200).send(events);
    } catch (error) {
      console.error(error);

      res.status(400).send(error.message);
    }
  }

  async getEventsByUser(req, res) {
    try {
      const { _id } = req.query;

      const events = await EventServices.getEventsByUser(_id);

      res.status(200).send(events);
    } catch (error) {
      console.error(error);

      res.status(400).send(error.message);
    }
  }

}

module.exports = new EventController();


// author: { type: String, required: true },
// guest: { type: String, required: true },
// date: { type: String, required: true },
// description: { type: String, required: true },