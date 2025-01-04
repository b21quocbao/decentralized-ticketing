import { ethers, EventLog } from 'ethers';
import Event from '../models/Event';
import Ticket from '../models/Ticket';

export const crawlEvents = async () => {
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
  const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS as string, ['...ABI...'], provider);

  const events = await contract.queryFilter('EventCreated') as EventLog[];
  for (const event of events) {
    const { eventId, name, description, date, location } = event.args;
    await Event.updateOne(
      { eventId },
      { eventId, name, description, date, location },
      { upsert: true }
    );
  }
  console.log('Events crawled and saved to DB');
};

export const crawlTickets = async () => {
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
  const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS as string, ['...ABI...'], provider);

  const tickets = await contract.queryFilter('TicketPurchased') as EventLog[];
  for (const ticket of tickets) {
    const { ticketId, eventId, owner, purchasedAt } = ticket.args;
    await Ticket.updateOne(
      { ticketId },
      { ticketId, eventId, owner, purchasedAt },
      { upsert: true }
    );
  }
  console.log('Tickets crawled and saved to DB');
};