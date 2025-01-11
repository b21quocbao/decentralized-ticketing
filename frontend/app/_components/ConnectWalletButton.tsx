"use client"
import { useState } from 'react';
import { ethers } from 'ethers';

export default function ConnectWalletButton() {
  const [account, setAccount] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const connectWallet = async () => {
    // @ts-ignore
    if (window.ethereum) {
      try {
        // @ts-ignore
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error('Failed to connect wallet:', error);
      }
    } else {
      alert('Please install a MetaMask wallet to use this feature.');
    }
  };

  const verifyWithWorldID = async () => {
    try {
      // Placeholder for WorldID verification logic
      // Replace with actual WorldID API/SDK calls
      const verificationResult = await fakeWorldIDVerification();
      setIsVerified(verificationResult);
    } catch (error) {
      console.error('Failed to verify with WorldID:', error);
    }
  };

  // Placeholder function for WorldID verification
  const fakeWorldIDVerification = async () => {
    // Simulate a successful verification
    return new Promise<boolean>((resolve) => setTimeout(() => resolve(true), 1000));
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={connectWallet}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {account ? `Connected: ${account}` : 'Connect Wallet'}
      </button>
      {account && (
        <button
          onClick={verifyWithWorldID}
          disabled={isVerified}
          className={`${
            isVerified ? 'bg-green-500' : 'bg-yellow-500 hover:bg-yellow-700'
          } text-white font-bold py-2 px-4 rounded`}
        >
          {isVerified ? 'Verified with WorldID' : 'Verify with WorldID'}
        </button>
      )}
    </div>
  );
}