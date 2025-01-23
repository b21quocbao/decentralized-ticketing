"use client";
import { ethers } from "ethers";
import { Modal, Spinner } from "flowbite-react";
import { useState } from "react";

const CONTRACT_ADDRESS = "0x4d48aFf599E0fe92293F2a80811526fBD98A5c44";
const CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "imageUrl",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "createEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

function FormEvent() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;
    const description = e.target.description.value;
    const imageUrl = e.target.imageUrl.value;
    const time = new Date(e.target.time.value).getTime();
    const duration = e.target.duration.value * 60 * 1000;

    console.log({
      name,
      description,
      imageUrl,
      time,
      duration,
    })

    // @ts-ignore
    if (typeof window.ethereum !== "undefined") {
      let signer = null;

      let provider;

      // @ts-ignore
      if (window.ethereum == null) {
        console.log("MetaMask not installed; using read-only defaults");
        provider = ethers.getDefaultProvider();
      } else {
        // @ts-ignore
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
      }

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer
      );

      try {
        const tx = await contract.createEvent(
          name,
          description,
          imageUrl,
          time,
          duration
        );
        await tx.wait();
        console.log("Transaction successful:", tx);

        await fetch("/api/events", {
          method: "POST",
          body: JSON.stringify({ name, description, imageUrl, timeMs: time, durationMs: duration }),
        });
      } catch (error) {
        console.error("Transaction failed:", error);
      }
    }

    setPopupVisible(false);
    setIsLoading(false);
  };

  return (
    <div className="flex justify-end pt-5">
      <button
        onClick={handleButtonClick}
        className="et-btn bg-etBlue inline-flex items-center justify-center gap-x-[13px] h-[45px] px-[15px] text-white font-normal text-[17px] rounded-full hover:!bg-black hover:!text-white"
      >
        Create Event
      </button>

      <Modal
        show={isPopupVisible}
        // popup
        dismissible
        className="pt-[130px]"
        size="3xl"
        position="center"
        onClose={() => setPopupVisible(false)}
      >
        <Modal.Header>
          <p className="font-bold text-2xl">Create Event</p>
        </Modal.Header>
        <Modal.Body className="text-xl">
          <form onSubmit={handleFormSubmit} className="px-5">
            <div className="pb-5">
              <label
                htmlFor="et-event-name"
                className="font-lato font-semibold text-etBlack block mb-[12px]"
              >
                Event Name*
              </label>
              <input
                type="text"
                name="name"
                id="et-event-name"
                placeholder="Event Name"
                className="text-xl border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none"
              />
            </div>
            <div className="pb-5">
              <label
                htmlFor="et-description"
                className="font-lato font-semibold text-etBlack block mb-[12px]"
              >
                Description*
              </label>
              <input
                type="text"
                name="description"
                id="et-description"
                placeholder="Description"
                className="text-xl border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none"
              />
            </div>

            <div className="pb-5">
              <label
                htmlFor="et-start-time"
                className="font-lato font-semibold text-etBlack block mb-[12px]"
              >
                Start Time*
              </label>
              <input
                type="datetime-local"
                name="time"
                id="et-start-time"
                className="text-xl border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none"
              />
            </div>

            <div className="pb-5">
              <label
                htmlFor="et-duration"
                className="font-lato font-semibold text-etBlack block mb-[12px]"
              >
                Duration (in minutes)*:
              </label>
              <input
                type="number"
                name="duration"
                id="et-duration"
                min="1"
                step="1"
                placeholder="Enter duration in minutes"
                className="text-xl border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none"
              />
            </div>

            <div className="pb-5">
              <label
                htmlFor="et-image-url"
                className="font-lato font-semibold text-etBlack block mb-[12px]"
              >
                Image URL*
              </label>
              <input
                type="text"
                name="imageUrl"
                id="et-image-url"
                placeholder="Enter a valid URL"
                className="text-xl border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none"
              />
            </div>

            <div className="flex justify-around pt-3">
              <button
                type="submit"
                className="et-btn bg-etBlue inline-flex items-center justify-center gap-x-[13px] h-[45px] px-[15px] text-white font-normal text-[15px] px-10 py-7 rounded-3xl hover:!bg-black hover:!text-white"
              >
                {isLoading && <Spinner />}
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default FormEvent;
