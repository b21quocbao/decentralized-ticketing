"use client"
import { useState, useEffect } from 'react';

interface Ticket {
  id: string;
  eventName: string;
  seat: string;
  date: string;
}

export default function TicketPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    // Simulate fetching purchased tickets
    const purchasedTickets: Ticket[] = [
      { id: '1', eventName: 'Blockchain Conference', seat: 'A1', date: '2023-12-01' },
      { id: '2', eventName: 'Blockchain Conference', seat: 'A2', date: '2023-12-01' },
    ];
    setTickets(purchasedTickets);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Tickets</h1>
      {tickets.length > 0 ? (
        <ul>
          {tickets.map((ticket) => (
            <li key={ticket.id} className="mb-4 border p-4 rounded">
              <h2 className="text-xl font-bold">{ticket.eventName}</h2>
              <p>Seat: {ticket.seat}</p>
              <p>Date: {ticket.date}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tickets purchased yet.</p>
      )}
    </div>
  );
}