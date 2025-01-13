"use client";
import { useState } from "react";
import { ethers } from "ethers";
import { VerificationLevel, IDKitWidget, useIDKit } from "@worldcoin/idkit";
import type { ISuccessResult } from "@worldcoin/idkit";
import { verify } from "../actions/verify";

export default function ConnectWalletButton() {
  const [account, setAccount] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState<boolean>(false);

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

  const app_id = process.env.NEXT_PUBLIC_WLD_APP_ID as `app_${string}`;
  const action = process.env.NEXT_PUBLIC_WLD_ACTION;

  if (!app_id) {
    throw new Error("app_id is not set in environment variables!");
  }
  if (!action) {
    throw new Error("action is not set in environment variables!");
  }

  const { setOpen } = useIDKit();

  const onSuccess = (result: ISuccessResult) => {
    // This is where you should perform frontend actions once a user has been verified, such as redirecting to a new page
    window.alert(
      "Successfully verified with World ID! Your nullifier hash is: " +
        result.nullifier_hash
    );
  };

  const handleProof = async (result: ISuccessResult) => {
    console.log(
      "Proof received from IDKit, sending to backend:\n",
      JSON.stringify(result)
    ); // Log the proof from IDKit to the console for visibility
    const data = await verify(result);
    if (data.success) {
      console.log("Successful response from backend:\n", JSON.stringify(data)); // Log the response from our backend for visibility
    } else {
      throw new Error(`Verification failed: ${data.detail}`);
    }
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={connectWallet}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {account ? `Connected: ${account}` : "Connect Wallet"}
      </button>
      {account && (
        <div>
          <IDKitWidget
            action={action}
            app_id={app_id}
            onSuccess={onSuccess}
            handleVerify={handleProof}
            verification_level={VerificationLevel.Orb} // Change this to VerificationLevel.Device to accept Orb- and Device-verified users
          />
          <button
            className="border border-black rounded-md"
            onClick={() => setOpen(true)}
          >
            <div className="mx-3 my-1">Verify with World ID</div>
          </button>
        </div>
      )}
    </div>
  );
}
