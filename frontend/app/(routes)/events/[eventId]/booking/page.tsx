"use client";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Event } from "../../page";
import { ethers, parseEther } from "ethers";
import { useUser } from "@/app/_context/UserContext";
import { Spinner } from "flowbite-react";
import { toast, ToastContainer } from "react-toastify";

export const dynamic = "force-dynamic";

const CONTRACT_ADDRESS = "0x4d48aFf599E0fe92293F2a80811526fBD98A5c44";
const CONTRACT_ABI = [
  {
    inputs: [
      { internalType: "uint256", name: "eventId", type: "uint256" },
      { internalType: "uint256", name: "quantity", type: "uint256" },
      { internalType: "uint256", name: "price", type: "uint256" },
    ],
    name: "bookTicket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const SGDT_ADDRESS = "0x12b408E193dC2b00510C0e36B64ffBd5A34F204F";
const SGDT_ABI = [
  // Minimal ABI to get ERC20 Token balance
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export default function BookingPage() {
  const { eventId } = useParams() as any;
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [showBallotWarning, setShowBallotWarning] = useState(false);
  const seatPrice = 0.1; // Example price per seat in Ether
  const [event, setEvent] = useState<Event | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(20);
  const [waitTime, setWaitTime] = useState(13);
  const { setUpdateBalance } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [showTickets, setShowTickets] = useState(false);

  const selectSeat = (seat: string) => {
    setSelectedSeats((prev) => [...prev, seat]);
  };

  const handleBuyNow = async () => {
    // @ts-ignore
    if (typeof window.ethereum !== "undefined") {
      setIsLoading(true);
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

      const sgdtContract = new ethers.Contract(SGDT_ADDRESS, SGDT_ABI, signer);

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer
      );

      try {
        console.log(
          price * quantity,
          parseEther((price * quantity).toString())
        );
        const approveTx = await sgdtContract.approve(
          CONTRACT_ADDRESS,
          parseEther((price * quantity).toString())
        );
        await approveTx.wait();
        console.log("Approve transaction successful:", approveTx);
        const tx = await contract.bookTicket(
          eventId,
          quantity,
          parseEther(price.toString())
        );
        await tx.wait();
        console.log("Transaction successful:", tx);
        // @ts-ignore
        setUpdateBalance((prev) => prev + 1); // Fake update balance
        showSuccessMsg();
      } catch (error: any) {
        console.error("Transaction failed:", error.message);
        toast.error("Transaction was canceled by the user");
      } finally {
        setIsLoading(false);
      }
    } else {
      console.error("Ethereum object not found, install MetaMask.");
    }
  };

  const showSuccessMsg = useCallback(() => {
    toast.success(
      <>
        <span className="text-xl">
          Ticket purchased successfully! View&nbsp;
          <Link href="/tickets" className="underline text-blue-500">
            here
          </Link>
        </span>
      </>
    );
  }, []);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch("/api/events/" + eventId, {
          cache: "no-store",
        });
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvent();
  }, [eventId]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWaitTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <ToastContainer />
      <section className="et-breadcrumb bg-[#000D83] pt-[210px] lg:pt-[190px] sm:pt-[160px] pb-[130px] lg:pb-[110px] sm:pb-[80px] relative z-[1] before:absolute before:inset-0 before:bg-no-repeat before:bg-cover before:bg-center before:-z-[1] before:opacity-30">
        <div className="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full text-center text-white">
          <h1 className="et-breadcrumb-title font-medium text-[56px] md:text-[50px] xs:text-[45px]">
            Event Details
          </h1>
          <ul className="inline-flex items-center gap-[10px] font-medium text-[16px]">
            <li className="opacity-80">
              <Link href="/events" className="hover:text-etBlue">
                Home
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <i className="fa-solid fa-angle-right"></i>
            </li>
            <li className="current-page">Event Details</li>
          </ul>
        </div>
      </section>

      <div className="et-event-details-content py-[130px] lg:py-[80px] md:py-[60px]">
        <div className="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full">
          <div className="flex gap-[30px] lg:gap-[20px] md:flex-col md:items-center">
            <div className="left">
              <div className="relative rounded-[8px] overflow-hidden">
                <img src={event?.imageUrl} alt="event-details-img" />
                <span className="absolute top-[20px] left-[20px] bg-etBlue rounded-[6px] text-white px-[12px] py-[5px] inline-block font-normal text-[16px]">
                  Hall No: 59
                </span>
              </div>

              <div>
                <h4 className="text-[30px] xs:text-[25px] xxs:text-[22px] font-medium text-etBlack mb-[11px] mt-[27px]">
                  Description
                </h4>

                <p className="font-light text-[16px] text-etGray mb-[15px]">
                  {event?.description}
                </p>

                <h4 className="text-[30px] xs:text-[25px] xxs:text-[22px] font-medium text-etBlack mb-[11px] mt-[19px]">
                  Requirements for the event
                </h4>

                <p className="font-light text-[16px] text-etGray mb-[21px]">
                  Please ensure you meet the following requirements to attend
                  the event:
                </p>

                <ul className="et-event-details-requirements-list font-light text-[16px] text-etGray grid grid-cols-2 xxs:grid-cols-1 gap-[20px] xxs:gap-[10px]">
                  <li>Valid ID for entry verification</li>
                  <li>Proof of ticket purchase</li>
                  <li>Adherence to the event's dress code</li>
                  <li>Compliance with health and safety guidelines</li>
                </ul>

                <div className="grid grid-cols-2 xxs:grid-cols-1 gap-[30px] lg:gap-[20px] mt-[38px] mb-[33px]">
                  <img
                    src="/assets/img/event-detailsimg-2.jpg"
                    alt="event-details-img"
                    className="max-h-[306px] w-full object-cover rounded-[8px]"
                  />
                  <img
                    src="/assets/img/event-detailsimg-3.jpg"
                    alt="event-details-img"
                    className="max-h-[306px] w-full object-cover rounded-[8px]"
                  />
                </div>

                <p className="font-light text-[16px] text-etGray mb-[43px]">
                  Please note that all attendees must arrive at least 30 minutes
                  before the event start time to ensure a smooth entry process.
                  Late arrivals may not be guaranteed entry. We appreciate your
                  understanding and cooperation.
                </p>
              </div>

              <div className="border-y border-[#d9d9d9] py-[24px] flex items-center xxs:flex-col gap-[20px]">
                <Link
                  href="#"
                  className="inline-flex items-center h-[50px] rounded-full bg-etBlue px-[20px] text-[17px] font-medium text-white gap-[10px] hover:bg-etGray"
                >
                  Register Yourself{" "}
                  <i className="fa-arrow-right-long fa-solid"></i>
                </Link>
                <div className="flex gap-[12px]">
                  <span className="icon bg-etBlue w-[50px] aspect-square rounded-full outline-[2px] outline outline-white -outline-offset-[3px] flex items-center justify-center">
                    <img src="/assets/img/call-icon.svg" alt="call icon" />
                  </span>

                  <span className="txt font-semibold text-etBlack">
                    <span className="block text-[14px] mb-[2px]">
                      Call Us Now
                    </span>
                    <Link
                      href="tel:+65-1234-5678"
                      className="text-[18px] hover:text-etBlue"
                    >
                      +65-1234-5678
                    </Link>
                  </span>
                </div>
              </div>

              <div className="mt-[50px]">
                <h3 className="text-[30px] xs:text-[25px] font-semibold text-etBlack mb-[30px] xs:mb-[15px]">
                  Event Artists
                </h3>

                <div className="border border-[#d9d9d9] rounded-[12px] p-[30px] lg:p-[20px] flex xs:flex-col gap-x-[25px] gap-y-[10px] mb-[30px]">
                  <div className="rounded-[6px] overflow-hidden shrink-0">
                    <img
                      src="/assets/img/artist-4.jpg"
                      alt="Artist Image"
                      className="w-[168px] aspect-square"
                    />
                  </div>

                  <div className="grow">
                    <div className="flex flex-wrap items-center justify-between gap-[10px] border-b border-[#d9d9d9] pb-[15px]">
                      <div>
                        <h5 className="font-semibold text-[20px] text-etBlack">
                          <Link href="#" className="hover:text-etBlue">
                            Alice Johnson
                          </Link>
                        </h5>
                        <span className="inline-block text-etGray2 text-[16px]">
                          Lead Vocalist
                        </span>
                      </div>

                      <div className="flex gap-[15px] text-[16px]">
                        <Link
                          href="#"
                          className="text-[#757277] hover:text-etBlue"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="#"
                          className="text-[#757277] hover:text-etBlue"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="#"
                          className="text-[#757277] hover:text-etBlue"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                        <Link
                          href="#"
                          className="text-[#757277] hover:text-etBlue"
                        >
                          <i className="fa-brands fa-youtube"></i>
                        </Link>
                      </div>
                    </div>

                    <p className="font-light text-etGray2 pt-[20px] text-[16px]">
                      Alice Johnson is the lead vocalist of the band, known for
                      her powerful voice and dynamic stage presence. She has
                      performed at numerous international music festivals and
                      has a dedicated fan following.
                    </p>
                  </div>
                </div>

                <div className="border border-[#d9d9d9] rounded-[12px] p-[30px] lg:p-[20px] flex xs:flex-col gap-x-[25px] gap-y-[10px] mb-[30px]">
                  <div className="rounded-[6px] overflow-hidden shrink-0">
                    <img
                      src="/assets/img/artist-5.jpg"
                      alt="Artist Image"
                      className="w-[168px] aspect-square"
                    />
                  </div>

                  <div className="grow">
                    <div className="flex flex-wrap items-center justify-between gap-[10px] border-b border-[#d9d9d9] pb-[15px]">
                      <div>
                        <h5 className="font-semibold text-[20px] text-etBlack">
                          <Link href="#" className="hover:text-etBlue">
                            Bob Smith
                          </Link>
                        </h5>
                        <span className="inline-block text-etGray2 text-[16px]">
                          Guitarist
                        </span>
                      </div>

                      <div className="flex gap-[15px] text-[16px]">
                        <Link
                          href="#"
                          className="text-[#757277] hover:text-etBlue"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="#"
                          className="text-[#757277] hover:text-etBlue"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="#"
                          className="text-[#757277] hover:text-etBlue"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                        <Link
                          href="#"
                          className="text-[#757277] hover:text-etBlue"
                        >
                          <i className="fa-brands fa-youtube"></i>
                        </Link>
                      </div>
                    </div>

                    <p className="font-light text-etGray2 pt-[20px] text-[16px]">
                      Bob Smith is a talented guitarist known for his intricate
                      solos and rhythmic prowess. He has been a part of the
                      music scene for over a decade and has collaborated with
                      various renowned artists.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="right max-w-full w-[370px] lg:w-[360px] shrink-0 space-y-[30px]">
              <div className="et-event-details-ticket-widgget border border-[#e5e5e5] rounded-[16px] overflow-hidden">
                <div className="bg-etBlue p-[16px] xxs:p-[12px]">
                  <h5 className="font-medium text-[20px] text-white text-center">
                    Select Date and Time
                  </h5>
                </div>

                <div className="p-[22px] lg:p-[16px]">
                  <div className="flex justify-between items-center mt-[6px] mb-[16px]">
                    <h6 className="font-medium text-[16px] text-[#232323]">
                      Time Schedule
                    </h6>

                    <div
                      className="flex gap-[20px] items-center text-[16px]"
                      id="et-event-details-ticket-time-slider-nav"
                    >
                      <button className="prev hover:text-etBlue">
                        <i className="fa-solid fa-angle-left"></i>
                      </button>
                      <button className="next hover:text-etBlue">
                        <i className="fa-solid fa-angle-right"></i>
                      </button>
                    </div>
                  </div>

                  <div className="et-event-details-ticket-time-slider swiper overflow-visible mb-[24px]">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide w-max group">
                        <span className="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">
                          19:00
                        </span>
                      </div>
                      <div className="swiper-slide w-max group">
                        <span className="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">
                          19:00
                        </span>
                      </div>
                      <div className="swiper-slide w-max group">
                        <span className="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">
                          19:00
                        </span>
                      </div>
                      <div className="swiper-slide w-max group">
                        <span className="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">
                          19:00
                        </span>
                      </div>
                      <div className="swiper-slide w-max group">
                        <span className="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">
                          19:00
                        </span>
                      </div>
                      <div className="swiper-slide w-max group">
                        <span className="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">
                          19:00
                        </span>
                      </div>
                      <div className="swiper-slide w-max group">
                        <span className="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">
                          19:00
                        </span>
                      </div>
                    </div>
                  </div>

                  <form
                    className="space-y-[10px] mb-[30px]"
                    onChange={(e) => {
                      const target = e.target as HTMLInputElement;
                      setPrice(Number(target.value));
                    }}
                  >
                    <div className="radio-container border border-[#d9d9d9] rounded-[6px] px-[16px] py-[7px]">
                      <label
                        htmlFor="schedule1"
                        className="flex gap-[15px] relative font-normal text-[14px] text-[#232323]"
                      >
                        <span className="w-64">Rock Concert</span>
                        <span className="flex items-center">
                          <input
                            type="radio"
                            id="schedule1"
                            name="options"
                            value="80"
                            className="appearance-none invisible"
                            defaultChecked
                          />
                          <span className="before:content-normal before:absolute before:w-[16px] before:h-[16px] before:border before:border-etBlue before:rounded-full before:bg-white before:right-0 before:top-[50%] before:-translate-y-[50%] before:-z-[1] after:content-normal after:w-[8px] after:h-[8px] after:bg-etBlue after:rounded-full after:mr-[4px] after:opacity-0 after:absolute after:top-[50%] after:-translate-y-[50%] after:right-0 mr-[28px]">
                            80.00 SGD
                          </span>
                        </span>
                      </label>
                    </div>

                    <div className="radio-container border border-[#d9d9d9] rounded-[6px] px-[16px] py-[7px]">
                      <label
                        htmlFor="schedule2"
                        className="flex gap-[15px] relative font-normal text-[14px] text-[#232323]"
                      >
                        <span className="w-64">Jazz Night</span>
                        <span className="flex items-center">
                          <input
                            type="radio"
                            id="schedule2"
                            name="options"
                            value="100"
                            className="appearance-none invisible"
                          />
                          <span className="font-normal text-[14px] text-[#232323] before:content-normal before:absolute before:w-[16px] before:h-[16px] before:border before:border-etBlue before:rounded-full before:bg-white before:right-0 before:top-[50%] before:-translate-y-[50%] before:-z-[1] after:content-normal after:w-[8px] after:h-[8px] after:bg-etBlue after:rounded-full after:mr-[4px] after:opacity-0 after:absolute after:top-[50%] after:-translate-y-[50%] after:right-0 mr-[28px]">
                            100.00 SGD
                          </span>
                        </span>
                      </label>
                    </div>

                    <div className="radio-container border border-[#d9d9d9] rounded-[6px] px-[16px] py-[7px]">
                      <label
                        htmlFor="schedule3"
                        className="flex gap-[15px] relative font-normal text-[14px] text-[#232323]"
                      >
                        <span className="w-64">Classical Music Evening</span>
                        <span className="flex items-center">
                          <input
                            type="radio"
                            id="schedule3"
                            name="options"
                            value="120"
                            className="appearance-none invisible"
                          />
                          <span className="font-normal text-[14px] text-[#232323] before:content-normal before:absolute before:w-[16px] before:h-[16px] before:border before:border-etBlue before:rounded-full before:bg-white before:right-0 before:top-[50%] before:-translate-y-[50%] before:-z-[1] after:content-normal after:w-[8px] after:h-[8px] after:bg-etBlue after:rounded-full after:mr-[4px] after:opacity-0 after:absolute after:top-[50%] after:-translate-y-[50%] after:right-0 mr-[28px]">
                            120.00 SGD
                          </span>
                        </span>
                      </label>
                    </div>
                  </form>

                  <div className="border-[0.5px] border-[#d9d9d9] px-[80px] xxs:px-[30px] rounded-full mb-[30px]">
                    <div className="flex items-center justify-between gap-[15px] py-[17px]">
                      <button
                        type="button"
                        id="decreaseButton"
                        disabled={quantity <= 1}
                        onClick={() => setQuantity((prev) => prev - 1)}
                        className="decrease font-extralight text-[35px] bg-etBlue/10 w-[28px] aspect-square rounded-full inline-flex items-center justify-center hover:bg-etBlue hover:text-white"
                      >
                        <span className="h-[28px] leading-[22px]">&minus;</span>
                      </button>
                      <span className="text-[16px] font-light">
                        <span id="ticketNumber">{quantity}</span> Ticket
                      </span>

                      <button
                        type="button"
                        id="increaseButton"
                        onClick={() => setQuantity((prev) => prev + 1)}
                        className="increase font-extralight text-[35px] bg-etBlue/10 w-[28px] aspect-square rounded-full inline-flex items-center justify-center hover:bg-etBlue hover:text-white"
                      >
                        <span className="h-[28px] leading-[22px]">+</span>
                      </button>
                    </div>
                  </div>

                  {waitTime > 0 && (
                    <p className="text-xl">
                      Your queue number: {Math.trunc(waitTime / 5) + 1}.
                      Estimate wait time: {waitTime - (waitTime % 5) + 10}{" "}
                      seconds
                    </p>
                  )}
                  <button
                    onClick={handleBuyNow}
                    disabled={waitTime > 0}
                    className="bg-etBlue h-[50px] rounded-full px-[15px] flex items-center justify-center gap-x-[10px] w-full text-white text-[15px] hover:bg-[#000D83]"
                  >
                    {isLoading && <Spinner />}
                    <span>
                      <img
                        src="/assets/img/ticket-icon.svg"
                        alt="ticket icon"
                      />
                    </span>
                    <span>{price * quantity}.00 SGD-Buy Now</span>
                  </button>
                </div>
              </div>

              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ntu+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[280px] rounded-[30px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
