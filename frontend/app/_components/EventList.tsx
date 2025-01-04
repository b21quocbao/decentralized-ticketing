import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Event {
  id: string;
  name: string;
  date: string;
  description: string;
}

export default function EventList() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Fetch events from the backend and update state
    // This is a placeholder for fetching events
    setEvents([
      { id: '1', name: 'Blockchain Conference', date: '2023-12-01', description: 'A conference about blockchain technology.' },
      { id: '2', name: 'Web3 Summit', date: '2023-12-15', description: 'Exploring the future of the web.' },
    ]);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id} className="mb-4 border p-4 rounded">
            <h2 className="text-xl font-bold">{event.name}</h2>
            <p>Date: {event.date}</p>
            <Link href={`/events/${event.id}`}>
              <span className="text-blue-500">View Details</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}