"use client"
import { useState } from 'react';
import NewEventModal from '../../_components/NewEventModal';
import EventList from '../../_components/EventList';

export default function EventOrganizerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Event Organizer</h1>
      <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded">
        Create New Event
      </button>
      <NewEventModal isOpen={isModalOpen} onClose={closeModal} />
      <EventList />
    </div>
  );
}