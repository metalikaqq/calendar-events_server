const { Schema, model } = require('mongoose');

const DtoSchema = new Schema({
  username: { type: String, required: true },
  _id: { type: Schema.Types.ObjectId, required: true},
})

const EventSchema = new Schema({
  author: { type: DtoSchema, required: true },
  guests: { type: [DtoSchema], required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  text: { type: String, required: true },
})

module.exports = model('Event', EventSchema);

