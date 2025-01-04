import { Request, Response } from 'express';
import Event from '../models/Event';

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
  res.json(event);
};
