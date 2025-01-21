import type { NextApiRequest, NextApiResponse } from 'next';

export const events = [
  {
    id: '1',
    name: 'Blockchain Conference',
    description: 'A conference about blockchain technology.',
    timeMs: 1704067200000, // Example timestamp in milliseconds
    durationMs: 7200000, // Example duration in milliseconds (2 hours)
    imageUrl: '/assets/img/event1.jpg',
  },
  {
    id: '2',
    name: 'Web3 Summit',
    description: 'Exploring the future of the web.',
    timeMs: 1705153600000, // Example timestamp in milliseconds
    durationMs: 10800000, // Example duration in milliseconds (3 hours)
    imageUrl: '/assets/img/event2.jpg',
  },
  {
    id: '3',
    name: 'Decentralized Finance Expo',
    description: 'An expo showcasing the latest in DeFi.',
    timeMs: 1706240000000, // Example timestamp in milliseconds
    durationMs: 14400000, // Example duration in milliseconds (4 hours)
    imageUrl: '/assets/img/event3.jpg',
  },
];

export async function GET() {
  return Response.json(events)
}

export async function POST(req: Request) {
  const event = await req.json()

  const { name, description, timeMs, durationMs, imageUrl } = event;

  if (!name || !description || !timeMs || !durationMs || !imageUrl) {
    return Response.json({ message: 'Missing required fields' }, {
      status: 400,
    });
  }

  const newEvent = {
    id: (events.length + 1).toString(), // Generate a new ID
    name,
    description,
    timeMs,
    durationMs,
    imageUrl,
  };

  events.push(newEvent);
  Response.json(newEvent, { status: 201 });
}