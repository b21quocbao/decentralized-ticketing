import { ethers, EventLog } from 'ethers';
import Ticket from '../models/Ticket';
import QRCode from 'qrcode';
import { Request, Response } from 'express';

export const generateQR = async (req: Request, res: Response) =>  {
  const { ticketId } = req.params;
  const ticket = await Ticket.findOne({ ticketId });
  if (!ticket) {
    res.status(404).json({ message: 'Ticket not found' });
    return;
  }

  const qrCode = await QRCode.toDataURL(`https://yourdomain.com/tickets/${ticketId}`);
  ticket.qrLink = qrCode;
  await ticket.save();

  res.json({ qrCode });
};
