"use client"
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function EventDetailsPage() {
  const { eventId } = useParams();
  const router = useRouter();
  const [event, setEvent] = useState({
    id: eventId,
    name: 'Blockchain Conference',
    date: '2023-12-01',
    description: 'A conference about blockchain technology.',
  });

  const goToBookingPage = () => {
    router.push(`/events/${event.id}/booking`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{event.name}</h1>
      <p className="mb-2">Date: {event.date}</p>
      <p className="mb-4">{event.description}</p>
      <button onClick={goToBookingPage} className="bg-blue-500 text-white px-4 py-2 rounded">
        Book Now
      </button>
    </div>
  );
}