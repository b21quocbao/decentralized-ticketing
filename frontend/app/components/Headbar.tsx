import React from 'react';
import ConnectWalletButton from '../_components/ConnectWalletButton';

const Headbar: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Event Ticketing</h1>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
          <ConnectWalletButton />
        </nav>
      </div>
    </header>
  );
};

export default Headbar;