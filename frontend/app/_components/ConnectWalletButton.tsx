"use client";
import Link from "next/link";
import { useState } from "react";

export default function ConnectWalletButton() {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    // @ts-ignore
    if (window.ethereum) {
      try {
        // @ts-ignore
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Failed to connect wallet:", error);
      }
    } else {
      alert("Please install a MetaMask wallet to use this feature.");
    }
  };

  return (
    <Link href="#" onClick={connectWallet}>
      Login as a User
    </Link>
  );
}
