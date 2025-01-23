"use client";
import FormEvent from "@/app/_components/FormEvent";
import { useUser } from "@/app/_context/UserContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

export type Event = {
  id: string;
  name: string;
  description: string;
  timeMs: number;
  durationMs: number;
  imageUrl: string;
};

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${day}, ${month} - ${year}`;
};

const formatTimeRange = (startTimestamp: number, durationMs: number) => {
  const startDate = new Date(startTimestamp);
  const endDate = new Date(startTimestamp + durationMs);

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM/PM
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  return `${formatTime(startDate)} – ${formatTime(endDate)}`;
};

export default function EventOrganizerPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const { userRole } = useUser();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events", { cache: "no-store" });
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <section className="et-breadcrumb bg-[#000D83] pt-[210px] lg:pt-[190px] sm:pt-[160px] pb-[130px] lg:pb-[110px] sm:pb-[80px] relative z-[1] before:absolute before:inset-0 before:bg-no-repeat before:bg-cover before:bg-center before:-z-[1] before:opacity-30">
        <div className="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full text-center text-white">
          <h1 className="et-breadcrumb-title font-medium text-[56px] md:text-[50px] xs:text-[45px]">
            All Events
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
            <li className="current-page">Events</li>
          </ul>
        </div>
      </section>

      <div className="container mx-auto max-w-[1200px] pt-[120px] lg:pt-[80px] md:pt-[60px] px-[12px] xl:max-w-full">
        <div className="relative">
          <div className="et-events-slider swiper">
            <div className="swiper-wrapper">
              {events &&
                events.map((event) => (
                  <div className="swiper-slide group" key={event.id}>
                    <div
                      className={`et-event bg-cover bg-no-repeat bg-center relative z-[1] rounded-[20px] overflow-hidden before:content-normal before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-black/70 before:-z-[1]`}
                      style={{ backgroundImage: `url('${event.imageUrl}')` }}
                    >
                      <div className="txt h-full flex flex-col justify-between items-start gap-[265px] lg:gap-[215px] xxs:gap-[165px] p-[40px] lg:p-[20px] pb-[50px] md:pb-[80px] text-white">
                        <div>
                          <div className="bg-etBlue rounded-full px-[15px] py-[4px]">
                            <span className="font-light text-[18px]">
                              Upcoming Event
                            </span>
                          </div>
                        </div>

                        <div>
                          <div className="et-schedule-date-time border border-[rgba(217,217,217,0.89)] py-[4.5px] px-[15px] rounded-full inline-flex items-center justify-center xxs:flex-wrap gap-x-[24px] gap-y-[10px] mb-[20px] translate-y-[30px] opacity-0 group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100 transition ease-linear duration-[500ms]">
                            <div className="date flex items-center gap-[10px]">
                              <span className="icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#clip0_2043_1443)">
                                    <path
                                      d="M14.125 1.75H13.375V0.5H12.125V1.75H3.875V0.5H2.625V1.75H1.875C0.841125 1.75 0 2.59113 0 3.625V14.625C0 15.6589 0.841125 16.5 1.875 16.5H14.125C15.1589 16.5 16 15.6589 16 14.625V3.625C16 2.59113 15.1589 1.75 14.125 1.75ZM14.75 14.625C14.75 14.9696 14.4696 15.25 14.125 15.25H1.875C1.53038 15.25 1.25 14.9696 1.25 14.625V6.375H14.75V14.625ZM14.75 5.125H1.25V3.625C1.25 3.28038 1.53038 3 1.875 3H2.625V4.25H3.875V3H12.125V4.25H13.375V3H14.125C14.4696 3 14.75 3.28038 14.75 3.625V5.125Z"
                                      fill="var(--white)"
                                    ></path>
                                    <path
                                      d="M3.625 7.6875H2.375V8.9375H3.625V7.6875Z"
                                      fill="var(--white)"
                                    ></path>
                                    <path
                                      d="M6.125 7.6875H4.875V8.9375H6.125V7.6875Z"
                                      fill="var(--white)"
                                    ></path>
                                    <path
                                      d="M8.625 7.6875H7.375V8.9375H8.625V7.6875Z"
                                      fill="var(--white)"
                                    ></path>
                                    <path
                                      d="M11.125 7.6875H9.875V8.9375H11.125V7.6875Z"
                                      fill="var(--white)"
                                    ></path>
                                    <path
                                      d="M13.625 7.6875H12.375V8.9375H13.625V7.6875Z"
                                      fill="var(--white)"
                                    ></path>
                                    <path
                                      d="M3.625 10.1875H2.375V11.4375H3.625V10.1875Z"
                                      fill="var(--white)"
                                    ></path>
                                    <path
                                      d="M6.125 10.1875H4.875V11.4375H6.125V10.1875Z"
                                      fill="var(--white)"
                                    ></path>
                                    <path
                                      d="M8.625 10.1875H7.375V11.4375H8.625V10.1875Z"
                                      fill="var(--white)"
                                    ></path>
                                    <path
                                      d="M11.125 10.1875H9.875V11.4375H11.125V10.1875Z"
                                      fill="var(--white)"
                                    ></path>
                                    <path
                                      d="M3.625 12.6875H2.375V13.9375H3.625V12.6875Z"
                                      fill="var(--white)"
                                    ></path>
                                    <path
                                      d="M6.125 12.6875H4.875V13.9375H6.125V12.6875Z"
                                      fill="var(--white)"
                                    ></path>
                                    <path
                                      d="M8.625 12.6875H7.375V13.9375H8.625V12.6875Z"
                                      fill="var(--white)"
                                    ></path>
                                    <path
                                      d="M11.125 12.6875H9.875V13.9375H11.125V12.6875Z"
                                      fill="var(--white)"
                                    ></path>
                                    <path
                                      d="M13.625 10.1875H12.375V11.4375H13.625V10.1875Z"
                                      fill="var(--white)"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_2043_1443">
                                      <rect
                                        width="16"
                                        height="16"
                                        fill="white"
                                        transform="translate(0 0.5)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>

                              <span className="font-light text-[16px]">
                                {formatDate(event.timeMs)}
                              </span>
                            </div>
                          </div>

                          <h3 className="et-schedule-title text-[30px] xxs:text-[25px] font-medium leading-[1.4] max-w-[470px] mb-[8px] translate-y-[30px] opacity-0 group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100 transition ease-linear duration-[500ms] delay-[500ms]">
                            <a
                              href={`/events/${event.id}/booking`}
                              className="hover:text-etBlue"
                            >
                              {event.name}
                            </a>
                          </h3>

                          <div className="et-schedule-loaction flex items-center gap-[12px] translate-y-[30px] opacity-0 group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100 transition ease-linear duration-[500ms] delay-[1100ms]">
                            <span className="icon">
                              <svg
                                width="12"
                                height="16"
                                viewBox="0 0 12 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.99998 0C2.80482 0 0.205383 2.59944 0.205383 5.79456C0.205383 9.75981 5.39098 15.581 5.61176 15.8269C5.81913 16.0579 6.1812 16.0575 6.3882 15.8269C6.60898 15.581 11.7946 9.75981 11.7946 5.79456C11.7945 2.59944 9.1951 0 5.99998 0ZM5.99998 8.70997C4.39241 8.70997 3.0846 7.40212 3.0846 5.79456C3.0846 4.187 4.39245 2.87919 5.99998 2.87919C7.60751 2.87919 8.91532 4.18703 8.91532 5.79459C8.91532 7.40216 7.60751 8.70997 5.99998 8.70997Z"
                                  fill="var(--et-blue)"
                                ></path>
                              </svg>
                            </span>
                            <h6 className="font-kanit font-normal text-[16px]">
                              National Stadium, 1 Stadium Dr, Singapore
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="et-events-slider-nav flex gap-[16px] absolute -bottom-[20px] left-[50%] -translate-x-[50%] z-[1]">
            <button className="prev w-[60px] h-[60px] border border-[#d9d9d9] rounded-full text-[18px] hover:bg-etBlue hover:border-etBlue hover:text-white">
              <i className="fa-solid fa-arrow-left-long"></i>
            </button>
            <button className="next w-[60px] h-[60px] border border-[#d9d9d9] rounded-full text-[18px] hover:bg-etBlue hover:border-etBlue hover:text-white">
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="py-[130px] lg:py-[80px] md:py-[60px] overflow-hidden">
        <section className="et-all-events">
          <div className="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full">
            <div className="et-schedules-tab-container">
              <div id="et-event-tab1" className="et-tab active">
                <div className="all-scheduled-events space-y-[30px]">
                  {userRole == "admin" && <FormEvent />}
                  {events.map((event) => (
                    <div
                      className="et-schedule flex md:flex-wrap gap-x-[30px] gap-y-[20px] justify-between"
                      key={event.id}
                    >
                      <div className="w-[270px] h-[226px] shadow-[0_4px_60px_rgba(18,96,254,0.12)] shrink-0 rounded-[20px] overflow-hidden">
                        <Image
                          width={270}
                          height={226}
                          src={event.imageUrl}
                          alt="scehduled-event-cover"
                        />
                      </div>

                      <div className="px-[37px] sm:px-[22px] py-[30px] shadow-[0_4px_60px_rgba(18,96,254,0.12)] w-full rounded-[20px] flex gap-y-[15px] xs:flex-col items-center xs:items-start">
                        <div className="et-schedule__heading pr-[40px] sm:pr-[25px] xs:pr-0 mr-[40px] sm:mr-[25px] xs:mr-0 border-r xs:border-r-0 border-[#d9d9d9]">
                          <div className="et-schedule-date-time border border-[rgba(217,217,217,0.89)] py-[7px] px-[15px] rounded-full inline-flex xxs:w-full items-center justify-center gap-x-[24px] gap-y-[10px] mb-[10px] xxs:border-0 xxs:p-0 xxs:justify-start">
                            <div className="date flex items-center gap-[10px]">
                              <span className="icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#clip0_2043_1443)">
                                    <path
                                      d="M14.125 1.75H13.375V0.5H12.125V1.75H3.875V0.5H2.625V1.75H1.875C0.841125 1.75 0 2.59113 0 3.625V14.625C0 15.6589 0.841125 16.5 1.875 16.5H14.125C15.1589 16.5 16 15.6589 16 14.625V3.625C16 2.59113 15.1589 1.75 14.125 1.75ZM14.75 14.625C14.75 14.9696 14.4696 15.25 14.125 15.25H1.875C1.53038 15.25 1.25 14.9696 1.25 14.625V6.375H14.75V14.625ZM14.75 5.125H1.25V3.625C1.25 3.28038 1.53038 3 1.875 3H2.625V4.25H3.875V3H12.125V4.25H13.375V3H14.125C14.4696 3 14.75 3.28038 14.75 3.625V5.125Z"
                                      fill="var(--et-blue)"
                                    />
                                    <path
                                      d="M3.625 7.6875H2.375V8.9375H3.625V7.6875Z"
                                      fill="var(--et-blue)"
                                    />
                                    <path
                                      d="M6.125 7.6875H4.875V8.9375H6.125V7.6875Z"
                                      fill="var(--et-blue)"
                                    />
                                    <path
                                      d="M8.625 7.6875H7.375V8.9375H8.625V7.6875Z"
                                      fill="var(--et-blue)"
                                    />
                                    <path
                                      d="M11.125 7.6875H9.875V8.9375H11.125V7.6875Z"
                                      fill="var(--et-blue)"
                                    />
                                    <path
                                      d="M13.625 7.6875H12.375V8.9375H13.625V7.6875Z"
                                      fill="var(--et-blue)"
                                    />
                                    <path
                                      d="M3.625 10.1875H2.375V11.4375H3.625V10.1875Z"
                                      fill="var(--et-blue)"
                                    />
                                    <path
                                      d="M6.125 10.1875H4.875V11.4375H6.125V10.1875Z"
                                      fill="var(--et-blue)"
                                    />
                                    <path
                                      d="M8.625 10.1875H7.375V11.4375H8.625V10.1875Z"
                                      fill="var(--et-blue)"
                                    />
                                    <path
                                      d="M11.125 10.1875H9.875V11.4375H11.125V10.1875Z"
                                      fill="var(--et-blue)"
                                    />
                                    <path
                                      d="M3.625 12.6875H2.375V13.9375H3.625V12.6875Z"
                                      fill="var(--et-blue)"
                                    />
                                    <path
                                      d="M6.125 12.6875H4.875V13.9375H6.125V12.6875Z"
                                      fill="var(--et-blue)"
                                    />
                                    <path
                                      d="M8.625 12.6875H7.375V13.9375H8.625V12.6875Z"
                                      fill="var(--et-blue)"
                                    />
                                    <path
                                      d="M11.125 12.6875H9.875V13.9375H11.125V12.6875Z"
                                      fill="var(--et-blue)"
                                    />
                                    <path
                                      d="M13.625 10.1875H12.375V11.4375H13.625V10.1875Z"
                                      fill="var(--et-blue)"
                                    />
                                  </g>
                                </svg>
                              </span>

                              <span className="text-etGray font-normal text-[16px]">
                                {formatDate(event.timeMs)}
                              </span>
                            </div>

                            <div className="time flex items-center gap-[10px] xxs:hidden">
                              <span className="icon">
                                <svg
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.8505 9.91291L8.61967 8.23979V4.8316C8.61967 4.48891 8.34266 4.21191 7.99998 4.21191C7.65729 4.21191 7.38029 4.48891 7.38029 4.8316V8.54966C7.38029 8.74485 7.47201 8.92892 7.62817 9.04541L10.1069 10.9044C10.2138 10.985 10.3441 11.0285 10.478 11.0284C10.667 11.0284 10.8529 10.9435 10.9744 10.7799C11.1802 10.5066 11.1244 10.118 10.8505 9.91291Z"
                                    fill="var(--et-blue)"
                                  />
                                  <path
                                    d="M8 0.5C3.58853 0.5 0 4.08853 0 8.5C0 12.9115 3.58853 16.5 8 16.5C12.4115 16.5 16 12.9115 16 8.5C16 4.08853 12.4115 0.5 8 0.5ZM8 15.2607C4.27266 15.2607 1.23934 12.2273 1.23934 8.5C1.23934 4.77266 4.27266 1.73934 8 1.73934C11.728 1.73934 14.7607 4.77266 14.7607 8.5C14.7607 12.2273 11.7273 15.2607 8 15.2607Z"
                                    fill="var(--et-blue)"
                                  />
                                </svg>
                              </span>

                              <span className="text-etGray font-normal text-[16px]">
                                {formatTimeRange(
                                  event.timeMs,
                                  event.durationMs
                                )}
                              </span>
                            </div>
                          </div>

                          <h3 className="et-schedule-title text-[24px] sm:text-[22px] font-regular text-etBlack leading-[1.25] mb-[16px] anim-text">
                            <Link
                              href={`/events/${event.id}/booking`}
                              className="hover:text-etBlue"
                            >
                              {event.name}
                            </Link>
                          </h3>

                          <div className="et-schedule-loaction flex items-center gap-[12px]">
                            <span className="icon">
                              <svg
                                width="12"
                                height="16"
                                viewBox="0 0 12 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.99998 0C2.80482 0 0.205383 2.59944 0.205383 5.79456C0.205383 9.75981 5.39098 15.581 5.61176 15.8269C5.81913 16.0579 6.1812 16.0575 6.3882 15.8269C6.60898 15.581 11.7946 9.75981 11.7946 5.79456C11.7945 2.59944 9.1951 0 5.99998 0ZM5.99998 8.70997C4.39241 8.70997 3.0846 7.40212 3.0846 5.79456C3.0846 4.187 4.39245 2.87919 5.99998 2.87919C7.60751 2.87919 8.91532 4.18703 8.91532 5.79459C8.91532 7.40216 7.60751 8.70997 5.99998 8.70997Z"
                                  fill="var(--et-blue)"
                                />
                              </svg>
                            </span>
                            <h6 className="text-[16px] text-etGray">
                              National Stadium, 1 Stadium Dr, Singapore
                            </h6>
                          </div>
                        </div>

                        <div className="flex shrink-0 xxl:flex-col flex-wrap items-center xxl:items-start gap-x-[30px] gap-y-[16px]">
                          {userRole == "user" && (
                            <Link
                              href={`/events/${event.id}/booking`}
                              className="et-btn border border-etBlue text-etBlue inline-flex items-center justify-center gap-x-[13px] h-[45px] px-[15px] font-normal text-[17px] rounded-full hover:!bg-etBlue hover:!text-white"
                            >
                              Buy Tickets
                            </Link>
                          )}
                          <div className="flex items-center">
                            <div className="flex *:-ml-[20px]">
                              <img
                                src="/assets/img/reviewer-1.png"
                                alt="Person"
                                className="w-[45px] h-[45px] rounded-full border-[3px] border-white first:ml-0"
                              />
                              <img
                                src="/assets/img/reviewer-2.png"
                                alt="Person"
                                className="w-[45px] h-[45px] rounded-full border-[3px] border-white first:ml-0"
                              />
                              <img
                                src="/assets/img/reviewer-3.png"
                                alt="Person"
                                className="w-[45px] h-[45px] rounded-full border-[3px] border-white first:ml-0"
                              />
                              <div className="w-[45px] h-[45px] rounded-full border-[3px] border-white first:ml-0 text-white bg-etBlue font-semibold flex items-center justify-center text-[16px]"></div>
                            </div>
                            <span className="font-semibold text-etBlue text-[16px] -ml-[29px]">
                              <span className="text-white">Att</span>endees
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
