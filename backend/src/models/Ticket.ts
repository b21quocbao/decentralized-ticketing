import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
  ticketId: String,
  eventId: String,
  owner: String,
  purchasedAt: Date,
  qrLink: String,
});

export default mongoose.model('Ticket', TicketSchema);
