import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  eventId: String,
  name: String,
  description: String,
  date: Date,
  location: String,
  ticketsSold: Number,
});

export default mongoose.model('Event', EventSchema);
