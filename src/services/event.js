const event = require("../controllers/event");
const EventModel = require("../models/event-model");

class EventServices {
  async createEvent({ author, guests, date, description, text }) {
    try {
      const event = await EventModel.create({
        author,
        guests,
        date,
        description,
        text,
      });

      return event;
    } catch (error) {
      console.error(error);

      throw new Error(error);
    }
  }npm

  async getAll() {
    try {
      const events = await EventModel.find();

      return events;
    } catch (error) {
      console.error(error);

      throw new Error(error);
    }
  }

  async getEventsByUser(_id) {
    try {
      const asAdmin = await EventModel.find({ 'author._id': _id })
      const asGuest = await EventModel.find({ guests: { $elemMatch: { _id } }})

      return [
          ...asAdmin.map(event => ({...event.toObject(), role: 'admin'})),
          ...asGuest.map(event => ({...event.toObject(), role: 'guest'})),
        ];
    } catch (error) {
      console.error(error);

      throw new Error(error);
    }
  }
}

module.exports = new EventServices();
