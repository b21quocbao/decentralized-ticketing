"use client";

import { Button, Modal } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ConnectWorldIDButton from "./ConnectWorldIDButton";

export default function Component() {
  const [openModal, setOpenModal] = useState(false);
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
    <>
      <Link href="#" onClick={() => setOpenModal(true)}>
        Login as User
      </Link>
      <Modal
        show={openModal}
        popup
        dismissible
        className="pt-[130px]"
        size="3xl"
        position="center"
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>
          <p
            style={{
              fontSize: "18px",
              marginLeft: "10px",
              marginTop: "3px",
              marginBottom: "30px",
              fontWeight: "bold",
            }}
          >
            Choose your login method
          </p>
        </Modal.Header>
        <Modal.Body>
          <Link
            href="#"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 3fr",
              border: "2px solid #ddd",
              padding: "20px",
              borderRadius: "25px",
              marginBottom: "20px",
            }}
            onClick={() => {
              connectWallet();
              setOpenModal(false);
            }}
          >
            <div
              style={{
                color: "white",
                textAlign: "center",
                marginLeft: "10px",
              }}
            >
              <Image
                src="/assets/img/metamask.png"
                width={60}
                height={60}
                alt="metamask"
              />
            </div>
            <div className="font-light">
              <div
                style={{
                  fontSize: "20px",
                }}
              >
                Metamask
              </div>
              <div
                style={{
                  fontSize: "15px",
                }}
                className="text-etGray"
              >
                Connect with Metamask Wallet
              </div>
            </div>
          </Link>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 3fr",
              border: "2px solid #ddd",
              padding: "20px",
              borderRadius: "25px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                color: "white",
                textAlign: "center",
                marginLeft: "10px",
                width: "60px",
                height: "60px",
              }}
            >
              <Image
                src="/assets/img/worldid.png"
                width={60}
                height={60}
                alt="metamask"
              />
            </div>
            <div className="font-light">
              <ConnectWorldIDButton onClick={() => setOpenModal(false)}>
                <div
                  style={{
                    fontSize: "20px",
                  }}
                >
                  WorldID
                </div>
                <div
                  style={{
                    fontSize: "15px",
                  }}
                  className="text-etGray"
                >
                  Connect with WorldID
                </div>
              </ConnectWorldIDButton>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
