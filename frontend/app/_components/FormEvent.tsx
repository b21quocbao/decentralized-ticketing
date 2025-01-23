"use client";
import { Modal } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";

function FormEvent() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const handleFormSubmit = () => {
    setPopupVisible(false);
  };

  return (
    <div className="flex justify-end pt-5">
      <Link
        href="#"
        onClick={handleButtonClick}
        className="et-btn bg-etBlue inline-flex items-center justify-center gap-x-[13px] h-[45px] px-[15px] text-white font-normal text-[17px] rounded-full hover:!bg-black hover:!text-white"
      >
        Create Event
      </Link>

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
        <Modal.Body className="text-lg">
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
                className="border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none"
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
                className="border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none"
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
                className="border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none"
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
                className="border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none"
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
                name="image-url"
                id="et-image-url"
                placeholder="Enter a valid URL"
                className="border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none"
              />
            </div>

            <div className="flex justify-around pt-3">
              <button
                type="submit"
                className="et-btn bg-etBlue inline-flex items-center justify-center gap-x-[13px] h-[45px] px-[15px] text-white font-normal text-[15px] px-10 py-7 rounded-3xl hover:!bg-black hover:!text-white"
              >
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
