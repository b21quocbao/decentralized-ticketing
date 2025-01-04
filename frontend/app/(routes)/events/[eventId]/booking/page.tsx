"use client"
import { useRouter, useParams } from 'next/navigation';
import { useState } from 'react';

export default function BookingPage() {
  const { eventId } = useParams();
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [showBallotWarning, setShowBallotWarning] = useState(false);
  const seatPrice = 0.1; // Example price per seat in Ether

  const selectSeat = (seat: string) => {
    setSelectedSeats((prev) => [...prev, seat]);
  };

  const handleBooking = () => {
    if (selectedSeats.length > 5) { // Example condition for balloting
      setShowBallotWarning(true);
    } else {
      // Proceed with booking
      console.log('Booking confirmed for seats:', selectedSeats);
    }
  };

  const totalAmount = selectedSeats.length * seatPrice;
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Booking for Event {eventId}</h1>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Select Seats</h2>
        <div className="grid grid-cols-5 gap-2">
          {['A1', 'A2', 'A3', 'A4', 'A5', 'A6'].map((seat) => (
            <button
              key={seat}
              onClick={() => selectSeat(seat)}
              className={`border p-2 ${selectedSeats.includes(seat) ? 'bg-blue-500 text-white' : ''}`}
            >
              {seat}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Payment Details</h2>
        <p>Total Seats: {selectedSeats.length}</p>
        <p>Total Amount: {totalAmount} ETH</p>
      </div>
      <button onClick={handleBooking} className="bg-green-500 text-white px-4 py-2 rounded">
        Confirm Booking
      </button>

      {showBallotWarning && (
        <div className="mt-4 p-4 bg-yellow-200 border border-yellow-400 rounded">
          <p>Due to overwhelming interest, a ballot is needed for seat allocation.</p>
        </div>
      )}
    </div>
  );
}