import express from 'express';
import { listEvents, getEventDetail } from '../controllers/eventController';
import { generateQR } from '../controllers/ticketController';

const router = express.Router();

// Event APIs
router.get('/events', listEvents);
router.get('/events/:id', getEventDetail);

// Ticket APIs
router.get('/tickets/:ticketId/qr', generateQR);

export default router;
