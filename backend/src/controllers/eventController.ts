import { Request, Response } from 'express';
import Event from '../models/Event';
import Ticket from '../models/Ticket';

export const listEvents = async (req: Request, res: Response) => {
  const events = await Event.find();
  res.json(events);
};

export const getEventDetail = async (req: Request, res: Response) => {
  const { id } = req.params;
  const event = await Event.findOne({ eventId: id });
  if (!event) {
    res.status(404).json({ message: 'Event not found' });
    return;
  }

  // get list of asscoiated tickets and attach to event
  const tickets = await Ticket.find({ eventId: id });
  event.set('tickets', tickets, { strict: false });

  res.json(event);
};

// create a new event
export const createEvent = async (req: Request, res: Response) => {
  const { name, description, date, location } = req.body;
  const event = new Event({ name, description, date, location });
  await event.save();
  res.json(event);
};
