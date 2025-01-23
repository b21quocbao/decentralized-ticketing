"use client";
import { useState } from "react";
import NewEventModal from "../../_components/NewEventModal";
import EventList from "../../_components/EventList";
import Link from "next/link";

export default function EventOrganizerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="et-breadcrumb bg-[#000D83] pt-[210px] lg:pt-[190px] sm:pt-[160px] pb-[130px] lg:pb-[110px] sm:pb-[80px] relative z-[1] before:absolute before:inset-0 before:bg-no-repeat before:bg-cover before:bg-center before:-z-[1] before:opacity-30">
        <div className="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full text-center text-white">
          <h1 className="et-breadcrumb-title font-medium text-[56px] md:text-[50px] xs:text-[45px]">
            About us
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
            <li className="current-page">About us</li>
          </ul>
        </div>
      </section>

      <section className="et-about py-[130px] xl:py-[80px] md:py-[60px] overflow-hidden relative">
        <div className="container mx-auto max-w-[calc(100%-39.1vw)] xxxl:max-w-[calc(100%-350px)] xl:max-w-[calc(100%-170px)] px-[12px] lg:max-w-full">
          <div className="flex items-center md:flex-wrap gap-x-[60px] xxl:gap-x-[40px] lg:gap-x-[30px] gap-y-[40px] sm:gap-y-[40px] lg:justify-center">
            <div className="et-about-img relative z-[1] md:w-auto shrink-0 max-w-full mr-[70px] md:mr-0 ml-[28px] xxxl:ml-[47px] md:ml-0 xs:w-[70%] xxs:w-[90%] xxs:ml-[47px]">
              <img
                src="/assets/img/about-img.jpg"
                alt="image"
                className="shrink-0 rounded-[10px]"
              />
              <img
                src="/assets/img/about-img-3.jpg"
                alt="image"
                className="et-about-floating-img absolute top-[45px] -right-[70px] shrink-0 rounded-[20px] border-white border-[10px] xs:hidden"
              />

              <div className="et-about-vectors xs:hidden">
                <img
                  src="/assets/img/about-img-vector-1.png"
                  alt="vector"
                  className="et-about-vector-1 absolute -left-[47px] top-[20px] -z-[1]"
                />
                <img
                  src="/assets/img/about-img-vector-2.png"
                  alt="vector"
                  className="et-about-vector-2 absolute -left-[27px] top-[41px] -z-[1]"
                />
                <img
                  src="/assets/img/about-img-vector-3.png"
                  alt="vector"
                  className="et-about-vector absolute -right-[24px] bottom-[34px] -z-[1]"
                />
              </div>

              <div className="absolute bottom-[50px] -left-[47px] lg:-left-[27px] md:-left-[47px] w-[180px] lg:w-[160px] aspect-square bg-[url('/assets/img/about-video-btn-bg.jpg')] text-center text-[22px] text-white z-[1] flex items-center justify-center before:absolute before:bg-etBlue/80 before:-z-[1] before:inset-0 after:bg-etBlack after:w-[47px] after:h-[30px] after:absolute after:top-[100%] after:left-0 after:-z-[2] after:skew-y-[30deg] after:-translate-y-[17px]">
                <Link
                  href="https://www.youtube.com/watch?v=AQleI8oFqZo&amp;t=1s"
                  data-fslightbox="about-video"
                  className="w-[107px] aspect-square rounded-full border border-white/20 flex justify-center items-center text-etBlue relative z-[1] text-[18px] before:absolute before:w-[56px] before:h-[56px] before:bg-white before:rounded-full before:-z-[1] hover:text-black"
                >
                  <i className="fa-solid fa-play"></i>
                </Link>
              </div>
            </div>

            <div className="et-about__txt">
              <h6 className="et-section-sub-title anim-text">About EventDex</h6>
              <h2 className="et-section-title mb-[24px] md:mb-[19px] anim-text">
                Know More About The EventDex
              </h2>

              <p className="mb-[30px] text-[16px] font-light text-etGray md:mb-[30px] rev-slide-up">
                EventDex is a revolutionary platform that transforms the way you
                experience events. Our mission is to provide seamless and secure
                ticketing solutions, ensuring every event is memorable and
                accessible to all.
              </p>

              <div className="flex xxs:flex-wrap items-center gap-[20px] pt-[30px] border-t border-[#D9D9D9] mb-[50px] xxs:mb-[30px] rev-slide-up">
                <div className="shrink-0 h-[80px] w-[80px] rounded-[6px] shadow-[0_4px_50px_10px_rgba(18,96,254,0.10)] flex items-center justify-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_6038_295)">
                      <path
                        d="M35.4168 33.3346H28.4501C27.7601 33.3346 27.2001 32.7746 27.2001 32.0846C27.2001 31.3946 27.7601 30.8346 28.4501 30.8346H34.5401L36.9651 24.168H3.03343L5.45843 30.8346H11.5501C12.2401 30.8346 12.8001 31.3946 12.8001 32.0846C12.8001 32.7746 12.2401 33.3346 11.5501 33.3346H4.58343C4.05843 33.3346 3.58843 33.0063 3.40843 32.5113L0.0751012 23.3446C-0.0632322 22.9613 -0.00823216 22.5346 0.226768 22.1996C0.460101 21.8663 0.841768 21.668 1.2501 21.668H38.7501C39.1584 21.668 39.5401 21.8663 39.7734 22.2013C40.0084 22.5346 40.0634 22.963 39.9251 23.3463L36.5918 32.513C36.4118 33.0063 35.9418 33.3346 35.4168 33.3346Z"
                        fill="#1260FE"
                      />
                      <path
                        d="M27.0849 40.0013C27.0216 40.0013 26.9583 39.9963 26.8933 39.9863C26.2116 39.8813 25.7433 39.243 25.8483 38.5613L27.2933 29.168H12.7066L14.1516 38.5613C14.2566 39.2446 13.7883 39.8813 13.1066 39.9863C12.4249 40.098 11.7849 39.6246 11.6816 38.9413L10.0149 28.108C9.95994 27.748 10.0633 27.3796 10.3016 27.103C10.5399 26.8263 10.8849 26.668 11.2499 26.668H28.7499C29.1149 26.668 29.4616 26.828 29.6983 27.1046C29.9349 27.3813 30.0399 27.748 29.9849 28.1096L28.3183 38.943C28.2249 39.5596 27.6916 40.0013 27.0849 40.0013Z"
                        fill="#1260FE"
                      />
                      <path
                        d="M37.5 23.7498C36.81 23.7498 36.25 23.1898 36.25 22.4998C36.25 19.2015 34.4866 16.0798 31.6483 14.3515C31.0583 13.9915 30.8716 13.2232 31.2316 12.6332C31.5916 12.0432 32.36 11.8565 32.95 12.2165C36.5266 14.3965 38.7483 18.3365 38.7483 22.4998C38.75 23.1898 38.19 23.7498 37.5 23.7498Z"
                        fill="#1260FE"
                      />
                      <path
                        d="M30.8333 15C32.214 15 33.3333 13.8807 33.3333 12.5C33.3333 11.1193 32.214 10 30.8333 10C29.4525 10 28.3333 11.1193 28.3333 12.5C28.3333 13.8807 29.4525 15 30.8333 15Z"
                        fill="#1260FE"
                      />
                      <path
                        d="M19.9999 13.3333C16.3233 13.3333 13.3333 10.3433 13.3333 6.66667C13.3333 2.99 16.3233 0 19.9999 0C23.6766 0 26.6666 2.99 26.6666 6.66667C26.6666 10.3433 23.6766 13.3333 19.9999 13.3333ZM19.9999 2.5C17.7016 2.5 15.8333 4.37 15.8333 6.66667C15.8333 8.96333 17.7016 10.8333 19.9999 10.8333C22.2983 10.8333 24.1666 8.96333 24.1666 6.66667C24.1666 4.37 22.2983 2.5 19.9999 2.5Z"
                        fill="#1260FE"
                      />
                      <path
                        d="M32.5 24.1667C31.81 24.1667 31.25 23.6067 31.25 22.9167C31.25 19.93 28.82 17.5 25.8333 17.5H14.1667C11.18 17.5 8.75 19.93 8.75 22.9167C8.75 23.6067 8.19 24.1667 7.5 24.1667C6.81 24.1667 6.25 23.6067 6.25 22.9167C6.25 18.5517 9.80167 15 14.1667 15H25.8333C30.1983 15 33.75 18.5517 33.75 22.9167C33.75 23.6067 33.19 24.1667 32.5 24.1667Z"
                        fill="#1260FE"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6038_295">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div>
                  <h6 className="font-medium text-[18px] text-black mb-[8px]">
                    Join Our Conferences
                  </h6>
                  <p className="text-[16px] font-light text-etGray">
                    Discover insights from industry leaders and network with
                    peers at our exclusive events. Elevate your knowledge and
                    connections.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-[30px] gap-y-[16px] rev-slide-up">
                <Link
                  href="/contact"
                  className="et-btn bg-etBlue inline-flex items-center justify-center gap-x-[13px] h-[45px] px-[15px] text-white font-normal text-[17px] rounded-full hover:!bg-black hover:!text-white"
                >
                  Register Now
                </Link>

                <div className="flex items-center gap-[10px]">
                  <div className="flex *:-ml-[20px]">
                    <img
                      src="/assets/img/reviewer-1.png"
                      alt="Person"
                      className="w-[60px] h-[60px] rounded-full border-[3px] border-white first:ml-0"
                    />
                    <img
                      src="/assets/img/reviewer-2.png"
                      alt="Person"
                      className="w-[60px] h-[60px] rounded-full border-[3px] border-white first:ml-0"
                    />
                    <img
                      src="/assets/img/reviewer-3.png"
                      alt="Person"
                      className="w-[60px] h-[60px] rounded-full border-[3px] border-white first:ml-0"
                    />
                    <div className="w-[60px] h-[60px] rounded-full border-[3px] border-white first:ml-0 text-white bg-etBlue font-semibold flex items-center justify-center text-[16px]">
                      25+
                    </div>
                  </div>
                  <span className="uppercase font-semibold text-etBlue text-[16px]">
                    Speakers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xs:hidden">
          <img
            src="/assets/img/about-vector-1.png"
            alt="vector"
            className="pointer-events-none absolute top-[340px] left-[90px] -z-[1]"
          />
          <img
            src="/assets/img/about-vector-2.png"
            alt="vector"
            className="pointer-events-none absolute top-[153px] right-0 -z-[1]"
          />
        </div>
      </section>

      <section className="bg-[#001B52] relative z-[1] before:absolute before:inset-0 before:-z-[1] before:bg-no-repeat before:bg-cover before:bg-center before:mix-blend-screen before:opacity-25 py-[130px] lg:py-[80px] md:py-[60px]">
        <div className="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full">
          <div className="et-upcoming-events-heading text-center max-w-[60%] mx-auto mb-[52px] xl:mb-[42px] lg:mb-[32px] md:max-w-[70%] sm:max-w-[80%] xs:max-w-full">
            <h6 className="et-section-sub-title !text-white">
              Company History
            </h6>
            <h2 className="et-section-title !text-white">
              Our EventDex Internasal Design Conferences History
            </h2>
          </div>

          <div className="et-history-slider swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="grid grid-cols-2 md:grid-cols-1 gap-[30px]">
                  <div className="rounded-[20px] overflow-hidden">
                    <img
                      src="/assets/img/history-img.jpg"
                      alt="History image"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="bg-white rounded-[20px] px-[30px] py-[20px] xxs:px-[20px]">
                    <h5 className="text-[24px] font-normal mb-[13px]">
                      Welcome to EventDex
                    </h5>

                    <div className="txt mb-[40px]">
                      <p className="font-light text-[16px] text-etGray mb-[12px]">
                        Dive into the world of Harmonia, where music knows no
                        bounds. Experience captivating performances that set the
                        stage ablaze. Awaken your musical senses and embrace the
                        rhythm of bliss.
                      </p>
                      <p className="font-light text-[16px] text-etGray">
                        Join us at Harmonia, where melodies break barriers. Be
                        part of performances that light up the stage. Let your
                        musical journey begin and feel the harmony.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-x-[40px] lg:gap-x-[20px] gap-y-[15px] items-center xxs:justify-center">
                      <div className="flex items-center gap-x-[15px] border-r xxs:border-r-0 xxs:border-b border-[#d9d9d9] pr-[40px] lg:pr-[20px] xxs:pr-0 xxs:pb-[15px]">
                        <div className="img rounded-full overflow-hidden w-[65px] h-[65px] shrink-0">
                          <img src="/assets/img/user.jpg" alt="founder image" />
                        </div>

                        <div className="txt">
                          <h5 className="font-semibold text-[20px] text-etBlack mb-[2px]">
                            Alexsia Jorgina
                          </h5>
                          <span className="text-[15px] font-normal text-etGray">
                            Co. Founder
                          </span>
                        </div>
                      </div>

                      <div>
                        <img src="/assets/img/signature.png" alt="signature" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="grid grid-cols-2 md:grid-cols-1 gap-[30px]">
                  <div className="rounded-[20px] overflow-hidden">
                    <img
                      src="/assets/img/history-img.jpg"
                      alt="History image"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="bg-white rounded-[20px] px-[30px] py-[20px] xxs:px-[20px]">
                    <h5 className="text-[24px] font-normal mb-[13px]">
                      Welcome to EventDex
                    </h5>

                    <div className="txt mb-[40px]">
                      <p className="font-light text-[16px] text-etGray mb-[12px]">
                        Dive into the world of Harmonia, where music knows no
                        bounds. Experience captivating performances that set the
                        stage ablaze. Awaken your musical senses and embrace the
                        rhythm of bliss.
                      </p>
                      <p className="font-light text-[16px] text-etGray">
                        Join us at Harmonia, where melodies break barriers. Be
                        part of performances that light up the stage. Let your
                        musical journey begin and feel the harmony.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-x-[40px] lg:gap-x-[20px] gap-y-[15px] items-center xxs:justify-center">
                      <div className="flex items-center gap-x-[15px] border-r xxs:border-r-0 xxs:border-b border-[#d9d9d9] pr-[40px] lg:pr-[20px] xxs:pr-0 xxs:pb-[15px]">
                        <div className="img rounded-full overflow-hidden w-[65px] h-[65px] shrink-0">
                          <img src="/assets/img/user.jpg" alt="founder image" />
                        </div>

                        <div className="txt">
                          <h5 className="font-semibold text-[20px] text-etBlack mb-[2px]">
                            Alexsia Jorgina
                          </h5>
                          <span className="text-[15px] font-normal text-etGray">
                            Co. Founder
                          </span>
                        </div>
                      </div>

                      <div>
                        <img src="/assets/img/signature.png" alt="signature" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="grid grid-cols-2 md:grid-cols-1 gap-[30px]">
                  <div className="rounded-[20px] overflow-hidden">
                    <img
                      src="/assets/img/history-img.jpg"
                      alt="History image"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="bg-white rounded-[20px] px-[30px] py-[20px] xxs:px-[20px]">
                    <h5 className="text-[24px] font-normal mb-[13px]">
                      Welcome to EventDex
                    </h5>

                    <div className="txt mb-[40px]">
                      <p className="font-light text-[16px] text-etGray mb-[12px]">
                        Dive into the world of Harmonia, where music knows no
                        bounds. Experience captivating performances that set the
                        stage ablaze. Awaken your musical senses and embrace the
                        rhythm of bliss.
                      </p>
                      <p className="font-light text-[16px] text-etGray">
                        Join us at Harmonia, where melodies break barriers. Be
                        part of performances that light up the stage. Let your
                        musical journey begin and feel the harmony.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-x-[40px] lg:gap-x-[20px] gap-y-[15px] items-center xxs:justify-center">
                      <div className="flex items-center gap-x-[15px] border-r xxs:border-r-0 xxs:border-b border-[#d9d9d9] pr-[40px] lg:pr-[20px] xxs:pr-0 xxs:pb-[15px]">
                        <div className="img rounded-full overflow-hidden w-[65px] h-[65px] shrink-0">
                          <img src="/assets/img/user.jpg" alt="founder image" />
                        </div>

                        <div className="txt">
                          <h5 className="font-semibold text-[20px] text-etBlack mb-[2px]">
                            Alexsia Jorgina
                          </h5>
                          <span className="text-[15px] font-normal text-etGray">
                            Co. Founder
                          </span>
                        </div>
                      </div>

                      <div>
                        <img src="/assets/img/signature.png" alt="signature" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="grid grid-cols-2 md:grid-cols-1 gap-[30px]">
                  <div className="rounded-[20px] overflow-hidden">
                    <img
                      src="/assets/img/history-img.jpg"
                      alt="History image"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="bg-white rounded-[20px] px-[30px] py-[20px] xxs:px-[20px]">
                    <h5 className="text-[24px] font-normal mb-[13px]">
                      Welcome to EventDex
                    </h5>

                    <div className="txt mb-[40px]">
                      <p className="font-light text-[16px] text-etGray mb-[12px]">
                        Dive into the world of Harmonia, where music knows no
                        bounds. Experience captivating performances that set the
                        stage ablaze. Awaken your musical senses and embrace the
                        rhythm of bliss.
                      </p>
                      <p className="font-light text-[16px] text-etGray">
                        Join us at Harmonia, where melodies break barriers. Be
                        part of performances that light up the stage. Let your
                        musical journey begin and feel the harmony.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-x-[40px] lg:gap-x-[20px] gap-y-[15px] items-center xxs:justify-center">
                      <div className="flex items-center gap-x-[15px] border-r xxs:border-r-0 xxs:border-b border-[#d9d9d9] pr-[40px] lg:pr-[20px] xxs:pr-0 xxs:pb-[15px]">
                        <div className="img rounded-full overflow-hidden w-[65px] h-[65px] shrink-0">
                          <img src="/assets/img/user.jpg" alt="founder image" />
                        </div>

                        <div className="txt">
                          <h5 className="font-semibold text-[20px] text-etBlack mb-[2px]">
                            Alexsia Jorgina
                          </h5>
                          <span className="text-[15px] font-normal text-etGray">
                            Co. Founder
                          </span>
                        </div>
                      </div>

                      <div>
                        <img src="/assets/img/signature.png" alt="signature" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="grid grid-cols-2 md:grid-cols-1 gap-[30px]">
                  <div className="rounded-[20px] overflow-hidden">
                    <img
                      src="/assets/img/history-img.jpg"
                      alt="History image"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="bg-white rounded-[20px] px-[30px] py-[20px] xxs:px-[20px]">
                    <h5 className="text-[24px] font-normal mb-[13px]">
                      Welcome to EventDex
                    </h5>

                    <div className="txt mb-[40px]">
                      <p className="font-light text-[16px] text-etGray mb-[12px]">
                        Dive into the world of Harmonia, where music knows no
                        bounds. Experience captivating performances that set the
                        stage ablaze. Awaken your musical senses and embrace the
                        rhythm of bliss.
                      </p>
                      <p className="font-light text-[16px] text-etGray">
                        Join us at Harmonia, where melodies break barriers. Be
                        part of performances that light up the stage. Let your
                        musical journey begin and feel the harmony.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-x-[40px] lg:gap-x-[20px] gap-y-[15px] items-center xxs:justify-center">
                      <div className="flex items-center gap-x-[15px] border-r xxs:border-r-0 xxs:border-b border-[#d9d9d9] pr-[40px] lg:pr-[20px] xxs:pr-0 xxs:pb-[15px]">
                        <div className="img rounded-full overflow-hidden w-[65px] h-[65px] shrink-0">
                          <img src="/assets/img/user.jpg" alt="founder image" />
                        </div>

                        <div className="txt">
                          <h5 className="font-semibold text-[20px] text-etBlack mb-[2px]">
                            Alexsia Jorgina
                          </h5>
                          <span className="text-[15px] font-normal text-etGray">
                            Co. Founder
                          </span>
                        </div>
                      </div>

                      <div>
                        <img src="/assets/img/signature.png" alt="signature" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="grid grid-cols-2 md:grid-cols-1 gap-[30px]">
                  <div className="rounded-[20px] overflow-hidden">
                    <img
                      src="/assets/img/history-img.jpg"
                      alt="History image"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="bg-white rounded-[20px] px-[30px] py-[20px] xxs:px-[20px]">
                    <h5 className="text-[24px] font-normal mb-[13px]">
                      Welcome to EventDex
                    </h5>

                    <div className="txt mb-[40px]">
                      <p className="font-light text-[16px] text-etGray mb-[12px]">
                        Dive into the world of Harmonia, where music knows no
                        bounds. Experience captivating performances that set the
                        stage ablaze. Awaken your musical senses and embrace the
                        rhythm of bliss.
                      </p>
                      <p className="font-light text-[16px] text-etGray">
                        Join us at Harmonia, where melodies break barriers. Be
                        part of performances that light up the stage. Let your
                        musical journey begin and feel the harmony.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-x-[40px] lg:gap-x-[20px] gap-y-[15px] items-center xxs:justify-center">
                      <div className="flex items-center gap-x-[15px] border-r xxs:border-r-0 xxs:border-b border-[#d9d9d9] pr-[40px] lg:pr-[20px] xxs:pr-0 xxs:pb-[15px]">
                        <div className="img rounded-full overflow-hidden w-[65px] h-[65px] shrink-0">
                          <img src="/assets/img/user.jpg" alt="founder image" />
                        </div>

                        <div className="txt">
                          <h5 className="font-semibold text-[20px] text-etBlack mb-[2px]">
                            Alexsia Jorgina
                          </h5>
                          <span className="text-[15px] font-normal text-etGray">
                            Co. Founder
                          </span>
                        </div>
                      </div>

                      <div>
                        <img src="/assets/img/signature.png" alt="signature" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="grid grid-cols-2 md:grid-cols-1 gap-[30px]">
                  <div className="rounded-[20px] overflow-hidden">
                    <img
                      src="/assets/img/history-img.jpg"
                      alt="History image"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="bg-white rounded-[20px] px-[30px] py-[20px] xxs:px-[20px]">
                    <h5 className="text-[24px] font-normal mb-[13px]">
                      Welcome to EventDex
                    </h5>

                    <div className="txt mb-[40px]">
                      <p className="font-light text-[16px] text-etGray mb-[12px]">
                        Dive into the world of Harmonia, where music knows no
                        bounds. Experience captivating performances that set the
                        stage ablaze. Awaken your musical senses and embrace the
                        rhythm of bliss.
                      </p>
                      <p className="font-light text-[16px] text-etGray">
                        Join us at Harmonia, where melodies break barriers. Be
                        part of performances that light up the stage. Let your
                        musical journey begin and feel the harmony.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-x-[40px] lg:gap-x-[20px] gap-y-[15px] items-center xxs:justify-center">
                      <div className="flex items-center gap-x-[15px] border-r xxs:border-r-0 xxs:border-b border-[#d9d9d9] pr-[40px] lg:pr-[20px] xxs:pr-0 xxs:pb-[15px]">
                        <div className="img rounded-full overflow-hidden w-[65px] h-[65px] shrink-0">
                          <img src="/assets/img/user.jpg" alt="founder image" />
                        </div>

                        <div className="txt">
                          <h5 className="font-semibold text-[20px] text-etBlack mb-[2px]">
                            Alexsia Jorgina
                          </h5>
                          <span className="text-[15px] font-normal text-etGray">
                            Co. Founder
                          </span>
                        </div>
                      </div>

                      <div>
                        <img src="/assets/img/signature.png" alt="signature" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="et-history-timeline-slider swiper mt-[30px] lg:mt-[25px] border-t border-[rgba(217,217,217,0.2)]">
            <div className="swiper-wrapper">
              <div className="et-history-timeline swiper-slide pt-[54px] lg:pt-[34px] relative cursor-pointer">
                <div>
                  <h3 className="font-semibold text-[70px] md:text-[60px] sm:text-[50px] leading-[0.8] text-transparent">
                    1985
                  </h3>
                </div>
              </div>
              <div className="et-history-timeline swiper-slide pt-[54px] lg:pt-[34px] relative cursor-pointer">
                <div>
                  <h3 className="font-semibold text-[70px] md:text-[60px] sm:text-[50px] leading-[0.8] text-transparent">
                    1995
                  </h3>
                </div>
              </div>
              <div className="et-history-timeline swiper-slide pt-[54px] lg:pt-[34px] relative cursor-pointer">
                <div>
                  <h3 className="font-semibold text-[70px] md:text-[60px] sm:text-[50px] leading-[0.8] text-transparent">
                    2005
                  </h3>
                </div>
              </div>
              <div className="et-history-timeline swiper-slide pt-[54px] lg:pt-[34px] relative cursor-pointer">
                <div>
                  <h3 className="font-semibold text-[70px] md:text-[60px] sm:text-[50px] leading-[0.8] text-transparent">
                    2015
                  </h3>
                </div>
              </div>
              <div className="et-history-timeline swiper-slide pt-[54px] lg:pt-[34px] relative cursor-pointer">
                <div>
                  <h3 className="font-semibold text-[70px] md:text-[60px] sm:text-[50px] leading-[0.8] text-transparent">
                    2020
                  </h3>
                </div>
              </div>
              <div className="et-history-timeline swiper-slide pt-[54px] lg:pt-[34px] relative cursor-pointer">
                <div>
                  <h3 className="font-semibold text-[70px] md:text-[60px] sm:text-[50px] leading-[0.8] text-transparent">
                    2023
                  </h3>
                </div>
              </div>
              <div className="et-history-timeline swiper-slide pt-[54px] lg:pt-[34px] relative cursor-pointer">
                <div>
                  <h3 className="font-semibold text-[70px] md:text-[60px] sm:text-[50px] leading-[0.8] text-transparent">
                    2024
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="et-speakers py-[130px] lg:py-[80px] md:py-[60px] overflow-hidden relative z-[1]">
        <div className="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full">
          <div className="et-speakers-heading text-center mb-[46px] xl:mb-[26px] lg:mb-[16px] gap-[15px]">
            <h6 className="et-section-sub-title anim-text">Event Speakers</h6>
            <h2 className="et-section-title anim-text">
              Meet Our Creative Speakers
            </h2>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xxs:grid-cols-1 justify-center gap-[30px] lg:gap-[20px]">
            <div className="et-member group">
              <div className="et-member__img rounded-[16px] overflow-hidden">
                <img
                  src="/assets/img/team-member-1.jpg"
                  alt="Team Member Image"
                  className="w-full duration-[400ms] group-hover:scale-110"
                />
              </div>

              <div className="et-member__txt bg-white relative z-[1] mx-[25px] md:mx-[15px] xs:mx-[5px] -mt-[44px] md:-mt-[15px] xs:mt-0 rounded-[16px] shadow-[0_4px_60px_rgba(18,96,254,0.12)] px-[25px] md:px-[15px] pb-[30px] md:pb-[20px] before:w-full before:absolute before:-z-[1] before:h-full before:bg-white before:left-0 before:rounded-[16px] before:-top-[33px] before:skew-y-[4deg]">
                <div className="et-member-socials absolute right-[20px] -top-[43px]">
                  <div className="et-speaker__socials flex flex-col gap-[8px] absolute -z-[2] text-[14px] opacity-0 transition duration-[400ms] bottom-[calc(100%+8px)] translate-y-[100%] group-hover:translate-y-0 group-hover:opacity-100">
                    <Link
                      href="#"
                      className="border border-white text-white w-[36px] h-[36px] flex items-center justify-center rounded-full hover:border-etBlue hover:bg-etBlue"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link
                      href="#"
                      className="border border-white text-white w-[36px] h-[36px] flex items-center justify-center rounded-full hover:border-etBlue hover:bg-etBlue"
                    >
                      <i className="fa-brands fa-x-twitter"></i>
                    </Link>
                    <Link
                      href="#"
                      className="border border-white text-white w-[36px] h-[36px] flex items-center justify-center rounded-full hover:border-etBlue hover:bg-etBlue"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link
                      href="#"
                      className="border border-white text-white w-[36px] h-[36px] flex items-center justify-center rounded-full hover:border-etBlue hover:bg-etBlue"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                  <div className="et-member-socials__icon w-[36px] aspect-square rounded-full bg-etBlue flex items-center justify-center">
                    <svg
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.89361 9.41703C9.22284 9.41703 8.61849 9.70668 8.19906 10.1675L4.42637 7.83088C4.52995 7.56611 4.58305 7.28429 4.58294 6.99999C4.58307 6.71568 4.52997 6.43386 4.42637 6.16909L8.19906 3.83238C8.61851 4.29318 9.22284 4.58297 9.89361 4.58297C11.1572 4.58297 12.1851 3.55501 12.1851 2.29143C12.1851 1.02785 11.1572 0 9.89361 0C8.63005 0 7.60209 1.02796 7.60209 2.29154C7.60204 2.57583 7.65514 2.85763 7.75866 3.1224L3.98608 5.45903C3.56663 4.99824 2.96231 4.70845 2.29154 4.70845C1.02796 4.70845 0 5.73652 0 6.99999C0 8.26354 1.02796 9.29152 2.29154 9.29152C2.96228 9.29152 3.56666 9.00185 3.98608 8.54094L7.75869 10.8776C7.65515 11.1424 7.60204 11.4242 7.60209 11.7085C7.60209 12.972 8.63003 14 9.89361 14C11.1572 14 12.1851 12.972 12.1851 11.7086C12.1851 10.445 11.1572 9.41703 9.89361 9.41703ZM8.43766 2.29154C8.43766 1.48873 9.09082 0.835596 9.89361 0.835596C10.6964 0.835596 11.3495 1.48873 11.3495 2.29154C11.3495 3.09435 10.6964 3.74748 9.89361 3.74748C9.09079 3.74748 8.43766 3.09432 8.43766 2.29154ZM2.29154 8.45593C1.48862 8.45593 0.835487 7.80277 0.835487 6.99999C0.835487 6.1972 1.48862 5.54404 2.29154 5.54404C3.09435 5.54404 3.74737 6.1972 3.74737 6.99999C3.74737 7.80277 3.09432 8.45593 2.29154 8.45593ZM8.43766 11.7085C8.43766 10.9057 9.09082 10.2525 9.89361 10.2525C10.6964 10.2525 11.3495 10.9057 11.3495 11.7084C11.3495 12.5112 10.6964 13.1644 9.89361 13.1644C9.09079 13.1644 8.43766 12.5112 8.43766 11.7084V11.7085Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <h5 className="font-semibold text-[22px] md:text-[20px] text-etBlack mb-[4px]">
                  <Link
                    href="/team-member-details"
                    className="hover:text-etBlue"
                  >
                    Yik Shan
                  </Link>
                </h5>
                <span className="text-etGray text-[16px]">Product Owner</span>
              </div>
            </div>

            <div className="et-member group">
              <div className="et-member__img rounded-[16px] overflow-hidden">
                <img
                  src="/assets/img/team-member-2.jpg"
                  alt="Team Member Image"
                  className="w-full duration-[400ms] group-hover:scale-110"
                />
              </div>

              <div className="et-member__txt bg-white relative z-[1] mx-[25px] md:mx-[15px] xs:mx-[5px] -mt-[44px] md:-mt-[15px] xs:mt-0 rounded-[16px] shadow-[0_4px_60px_rgba(18,96,254,0.12)] px-[25px] md:px-[15px] pb-[30px] md:pb-[20px] before:w-full before:absolute before:-z-[1] before:h-full before:bg-white before:left-0 before:rounded-[16px] before:-top-[33px] before:skew-y-[4deg]">
                <div className="et-member-socials absolute right-[20px] -top-[43px]">
                  <div className="et-speaker__socials flex flex-col gap-[8px] absolute -z-[2] text-[14px] opacity-0 transition duration-[400ms] bottom-[calc(100%+8px)] translate-y-[100%] group-hover:translate-y-0 group-hover:opacity-100">
                    <Link
                      href="#"
                      className="border border-white text-white w-[36px] h-[36px] flex items-center justify-center rounded-full hover:border-etBlue hover:bg-etBlue"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link
                      href="#"
                      className="border border-white text-white w-[36px] h-[36px] flex items-center justify-center rounded-full hover:border-etBlue hover:bg-etBlue"
                    >
                      <i className="fa-brands fa-x-twitter"></i>
                    </Link>
                    <Link
                      href="#"
                      className="border border-white text-white w-[36px] h-[36px] flex items-center justify-center rounded-full hover:border-etBlue hover:bg-etBlue"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link
                      href="#"
                      className="border border-white text-white w-[36px] h-[36px] flex items-center justify-center rounded-full hover:border-etBlue hover:bg-etBlue"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                  <div className="et-member-socials__icon w-[36px] aspect-square rounded-full bg-etBlue flex items-center justify-center">
                    <svg
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.89361 9.41703C9.22284 9.41703 8.61849 9.70668 8.19906 10.1675L4.42637 7.83088C4.52995 7.56611 4.58305 7.28429 4.58294 6.99999C4.58307 6.71568 4.52997 6.43386 4.42637 6.16909L8.19906 3.83238C8.61851 4.29318 9.22284 4.58297 9.89361 4.58297C11.1572 4.58297 12.1851 3.55501 12.1851 2.29143C12.1851 1.02785 11.1572 0 9.89361 0C8.63005 0 7.60209 1.02796 7.60209 2.29154C7.60204 2.57583 7.65514 2.85763 7.75866 3.1224L3.98608 5.45903C3.56663 4.99824 2.96231 4.70845 2.29154 4.70845C1.02796 4.70845 0 5.73652 0 6.99999C0 8.26354 1.02796 9.29152 2.29154 9.29152C2.96228 9.29152 3.56666 9.00185 3.98608 8.54094L7.75869 10.8776C7.65515 11.1424 7.60204 11.4242 7.60209 11.7085C7.60209 12.972 8.63003 14 9.89361 14C11.1572 14 12.1851 12.972 12.1851 11.7086C12.1851 10.445 11.1572 9.41703 9.89361 9.41703ZM8.43766 2.29154C8.43766 1.48873 9.09082 0.835596 9.89361 0.835596C10.6964 0.835596 11.3495 1.48873 11.3495 2.29154C11.3495 3.09435 10.6964 3.74748 9.89361 3.74748C9.09079 3.74748 8.43766 3.09432 8.43766 2.29154ZM2.29154 8.45593C1.48862 8.45593 0.835487 7.80277 0.835487 6.99999C0.835487 6.1972 1.48862 5.54404 2.29154 5.54404C3.09435 5.54404 3.74737 6.1972 3.74737 6.99999C3.74737 7.80277 3.09432 8.45593 2.29154 8.45593ZM8.43766 11.7085C8.43766 10.9057 9.09082 10.2525 9.89361 10.2525C10.6964 10.2525 11.3495 10.9057 11.3495 11.7084C11.3495 12.5112 10.6964 13.1644 9.89361 13.1644C9.09079 13.1644 8.43766 12.5112 8.43766 11.7084V11.7085Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <h5 className="font-semibold text-[22px] md:text-[20px] text-etBlack mb-[4px]">
                  <Link
                    href="/team-member-details"
                    className="hover:text-etBlue"
                  >
                    VINOTHKUMAR MOHANRAJ
                  </Link>
                </h5>
                <span className="text-etGray text-[16px]">
                  Web Developer
                </span>
              </div>
            </div>

            <div className="et-member group">
              <div className="et-member__img rounded-[16px] overflow-hidden">
                <img
                  src="/assets/img/team-member-3.jpg"
                  alt="Team Member Image"
                  className="w-full duration-[400ms] group-hover:scale-110"
                />
              </div>

              <div className="et-member__txt bg-white relative z-[1] mx-[25px] md:mx-[15px] xs:mx-[5px] -mt-[44px] md:-mt-[15px] xs:mt-0 rounded-[16px] shadow-[0_4px_60px_rgba(18,96,254,0.12)] px-[25px] md:px-[15px] pb-[30px] md:pb-[20px] before:w-full before:absolute before:-z-[1] before:h-full before:bg-white before:left-0 before:rounded-[16px] before:-top-[33px] before:skew-y-[4deg]">
                <div className="et-member-socials absolute right-[20px] -top-[43px]">
                  <div className="et-speaker__socials flex flex-col gap-[8px] absolute -z-[2] text-[14px] opacity-0 transition duration-[400ms] bottom-[calc(100%+8px)] translate-y-[100%] group-hover:translate-y-0 group-hover:opacity-100">
                    <Link
                      href="#"
                      className="border border-white text-white w-[36px] h-[36px] flex items-center justify-center rounded-full hover:border-etBlue hover:bg-etBlue"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link
                      href="#"
                      className="border border-white text-white w-[36px] h-[36px] flex items-center justify-center rounded-full hover:border-etBlue hover:bg-etBlue"
                    >
                      <i className="fa-brands fa-x-twitter"></i>
                    </Link>
                    <Link
                      href="#"
                      className="border border-white text-white w-[36px] h-[36px] flex items-center justify-center rounded-full hover:border-etBlue hover:bg-etBlue"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link
                      href="#"
                      className="border border-white text-white w-[36px] h-[36px] flex items-center justify-center rounded-full hover:border-etBlue hover:bg-etBlue"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                  <div className="et-member-socials__icon w-[36px] aspect-square rounded-full bg-etBlue flex items-center justify-center">
                    <svg
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.89361 9.41703C9.22284 9.41703 8.61849 9.70668 8.19906 10.1675L4.42637 7.83088C4.52995 7.56611 4.58305 7.28429 4.58294 6.99999C4.58307 6.71568 4.52997 6.43386 4.42637 6.16909L8.19906 3.83238C8.61851 4.29318 9.22284 4.58297 9.89361 4.58297C11.1572 4.58297 12.1851 3.55501 12.1851 2.29143C12.1851 1.02785 11.1572 0 9.89361 0C8.63005 0 7.60209 1.02796 7.60209 2.29154C7.60204 2.57583 7.65514 2.85763 7.75866 3.1224L3.98608 5.45903C3.56663 4.99824 2.96231 4.70845 2.29154 4.70845C1.02796 4.70845 0 5.73652 0 6.99999C0 8.26354 1.02796 9.29152 2.29154 9.29152C2.96228 9.29152 3.56666 9.00185 3.98608 8.54094L7.75869 10.8776C7.65515 11.1424 7.60204 11.4242 7.60209 11.7085C7.60209 12.972 8.63003 14 9.89361 14C11.1572 14 12.1851 12.972 12.1851 11.7086C12.1851 10.445 11.1572 9.41703 9.89361 9.41703ZM8.43766 2.29154C8.43766 1.48873 9.09082 0.835596 9.89361 0.835596C10.6964 0.835596 11.3495 1.48873 11.3495 2.29154C11.3495 3.09435 10.6964 3.74748 9.89361 3.74748C9.09079 3.74748 8.43766 3.09432 8.43766 2.29154ZM2.29154 8.45593C1.48862 8.45593 0.835487 7.80277 0.835487 6.99999C0.835487 6.1972 1.48862 5.54404 2.29154 5.54404C3.09435 5.54404 3.74737 6.1972 3.74737 6.99999C3.74737 7.80277 3.09432 8.45593 2.29154 8.45593ZM8.43766 11.7085C8.43766 10.9057 9.09082 10.2525 9.89361 10.2525C10.6964 10.2525 11.3495 10.9057 11.3495 11.7084C11.3495 12.5112 10.6964 13.1644 9.89361 13.1644C9.09079 13.1644 8.43766 12.5112 8.43766 11.7084V11.7085Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <h5 className="font-semibold text-[22px] md:text-[20px] text-etBlack mb-[4px]">
                  <Link
                    href="/team-member-details"
                    className="hover:text-etBlue"
                  >
                    LI XUANZI
                  </Link>
                </h5>
                <span className="text-etGray text-[16px]">
                  Web Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-[130px] xl:py-[80px] md:py-[60px] bg-no-repeat bg-cover relative z-[1] before:absolute before:inset-0 before:bg-etBlue/85 before:-z-[1]">
        <div className="container mx-auto max-w-[calc(100%-37.1vw)] xxxl:max-w-[calc(100%-350px)] xl:max-w-[calc(100%-170px)] px-[12px] lg:max-w-full rev-slide-up">
          <div className="flex xs:flex-col gap-x-[77px] sm:gap-x-[57px] gap-y-[15px] justify-center border-b border-white/20 pb-[35px]">
            <div className="et-single-stat text-white">
              <h5 className="number font-semibold text-[55px]">50+</h5>
              <h6 className="font-medium text-[16px]">Workshop We Offer</h6>
            </div>
            <div className="et-single-stat text-white">
              <h5 className="number font-semibold text-[55px]">25+</h5>
              <h6 className="font-medium text-[16px]">Visionary Speaker</h6>
            </div>
            <div className="et-single-stat text-white">
              <h5 className="number font-semibold text-[55px]">70k+</h5>
              <h6 className="font-medium text-[16px]">Event Participants</h6>
            </div>
          </div>

          <h2 className="et-section-title anim-text !text-white text-center max-w-[55%] md:max-w-[65%] sm:max-w-full mx-auto mt-[30px] mb-[40px]">
            Never Miss Another Speaker Announcement
          </h2>

          <Link
            href="#"
            className="bg-white inline-flex items-center gap-[12px] rounded-full text-etBlue h-[54px] px-[15px] text-[17px] group hover:bg-etBlue hover:text-white"
          >
            <span className="icon">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1023 17.6473C13.0496 17.6473 12.9979 17.6511 12.9471 17.6578C12.4966 16.1361 11.1883 14.9794 9.5848 14.7503V13.6641H8.41524V14.7503C6.81011 14.9796 5.50077 16.1384 5.05156 17.6624C4.99031 17.6526 4.92753 17.6473 4.86351 17.6473C4.21347 17.6473 3.68652 18.1742 3.68652 18.8242C3.68652 19.4742 4.21347 20.0012 4.86351 20.0012C5.4544 20.0012 5.94345 19.5657 6.0276 18.9982C6.04471 18.9433 6.05393 18.8848 6.05393 18.8242C6.05393 17.3999 7.06993 16.2086 8.41524 15.9366V17.791C8.04998 17.9908 7.80223 18.3786 7.80223 18.8242C7.80223 19.4742 8.32918 20.0012 8.97918 20.0012C9.62922 20.0012 10.1562 19.4742 10.1562 18.8242C10.1562 18.3957 9.92708 18.0208 9.5848 17.815V15.9366C10.8716 16.1968 11.8565 17.2982 11.9398 18.6401C11.9303 18.7001 11.9253 18.7616 11.9253 18.8243C11.9253 19.4743 12.4523 20.0012 13.1023 20.0012C13.7523 20.0012 14.2793 19.4743 14.2793 18.8243C14.2793 18.1743 13.7523 17.6473 13.1023 17.6473Z"
                  className="fill-etBlue group-hover:fill-white transition duration-[0.4s]"
                />
                <path
                  d="M17.2036 6.2168H15.6151C15.2921 6.2168 15.0303 6.47861 15.0303 6.8016V8.5676C15.0303 9.11044 14.5882 9.55211 14.0447 9.55211H13.9074C13.9062 9.55211 13.9051 9.55227 13.904 9.55227V9.55211H4.09592V9.55227C4.09478 9.55227 4.09365 9.55211 4.09252 9.55211H4.07443C3.53096 9.55211 3.08883 9.11044 3.08883 8.5676V6.8016C3.08883 6.47861 2.82701 6.2168 2.50403 6.2168H0.796348C0.47336 6.2168 0.211548 6.47861 0.211548 6.8016C0.211548 7.12458 0.47336 7.3864 0.796348 7.3864H1.91927V8.5676C1.91927 9.75536 2.88608 10.7217 4.07443 10.7217H4.09252C4.09369 10.7217 4.09478 10.7216 4.09592 10.7216V10.9282C4.09592 11.7911 4.79553 12.4908 5.65851 12.4908H12.3414C13.2044 12.4908 13.904 11.7911 13.904 10.9282V10.7216C13.9051 10.7216 13.9063 10.7217 13.9074 10.7217H14.0447C15.2331 10.7217 16.1999 9.7554 16.1999 8.5676V7.3864H17.2036C17.5265 7.3864 17.7884 7.12458 17.7884 6.8016C17.7884 6.47865 17.5265 6.2168 17.2036 6.2168Z"
                  className="fill-etBlue group-hover:fill-white transition duration-[0.4s]"
                />
                <path
                  d="M13.1157 2.14739C13.1157 0.963338 12.1524 0 10.9683 0H7.03167C5.84758 0 4.88428 0.963299 4.88428 2.14739V8.38037H13.1157V2.14739Z"
                  className="fill-etBlue group-hover:fill-white transition duration-[0.4s]"
                />
              </svg>
            </span>
            <span>Register Now</span>
          </Link>
        </div>

        <div>
          <img
            src="/assets/img/stats-vector-1.png"
            alt="vector"
            className="pointer-events-none absolute top-[150px] left-[105px] -z-[1] md:hidden"
          />
          <img
            src="/assets/img/stats-vector-2.png"
            alt="vector"
            className="pointer-events-none absolute bottom-[63px] left-[63px] -z-[1] w-[80px] aspect-square opacity-10"
          />
          <img
            src="/assets/img/stats-vector-2.png"
            alt="vector"
            className="pointer-events-none absolute top-[80px] right-[70px] -z-[1] opacity-10"
          />
          <img
            src="/assets/img/stats-vector-3.png"
            alt="vector"
            className="pointer-events-none absolute bottom-[112px] right-[80px] -z-[1]"
          />
        </div>
      </section>

      <section className="et-testimonial overflow-hidden py-[130px] xl:py-[80px] md:py-[60px]">
        <div className="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full">
          <div className="et-testimonial-heading text-center mb-[46px] xl:mb-[26px] lg:mb-[16px] gap-[15px]">
            <h6 className="et-section-sub-title anim-text">Testimonials</h6>
            <h2 className="et-section-title anim-text">
              See Our Clients Feedback
            </h2>
          </div>

          <div className="et-2-testimonial-slider swiper overflow-visible">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="et-testimony relative p-[40px] lg:p-[30px] md:p-[20px] border border-[#D4DCED] rounded-[16px] mt-[60px]">
                  <div className="et-testimony__heading flex items-end justify-center mb-[17px] lg:mb-[12px] -mt-[100px] md:-mt-[80px]">
                    <div className="et-testimony__img rounded-full overflow-hidden border border-etBlue p-[7px] w-max max-w-full">
                      <img
                        src="/assets/img/reviewer-1.png"
                        alt="reviewer image"
                        className="w-[100px] sm:w-[80px] h-[100px] sm:h-[80px] rounded-full"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <h5 className="text-black font-medium text-[20px] mb-[3px]">
                      Esther Howard
                    </h5>
                    <h6 className="text-[16px] text-etGray font-normal mb-[20px]">
                      Web Developer
                    </h6>
                    <p className="text-[16px] text-etGray font-normal mb-[20px]">
                      EventDex has revolutionized the way I attend events. The
                      decentralized ticketing system ensures transparency and
                      security, making the entire process seamless.
                    </p>
                  </div>

                  <div className="absolute top-[40px] sm:top-[20px] left-[40px] sm:left-[20px]">
                    <img
                      src="/assets/img/quotation-blue.svg"
                      alt="quotation mark"
                    />
                  </div>

                  <div className="absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] flex gap-[6px] bg-white shadow-[0_4px_25px_rgba(56,75,255,0.15)] p-[12px] rounded-full">
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img
                      src="/assets/img/star-blue.svg"
                      alt="star"
                      className="opacity-25"
                    />
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="et-testimony relative p-[40px] lg:p-[30px] md:p-[20px] border border-[#D4DCED] rounded-[16px] mt-[60px]">
                  <div className="et-testimony__heading flex items-end justify-center mb-[17px] lg:mb-[12px] -mt-[100px] md:-mt-[80px]">
                    <div className="et-testimony__img rounded-full overflow-hidden border border-etBlue p-[7px] w-max max-w-full">
                      <img
                        src="/assets/img/reviewer-2.png"
                        alt="reviewer image"
                        className="w-[100px] sm:w-[80px] h-[100px] sm:h-[80px] rounded-full"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <h5 className="text-black font-medium text-[20px] mb-[3px]">
                      VINOTHKUMAR MOHANRAJ
                    </h5>
                    <h6 className="text-[16px] text-etGray font-normal mb-[20px]">
                      Graphic designer
                    </h6>
                    <p className="text-[16px] text-etGray font-normal mb-[20px]">
                      I love how EventDex eliminates the middleman. The direct
                      interaction with event organizers gives me confidence in
                      my ticket purchases.
                    </p>
                  </div>

                  <div className="absolute top-[40px] sm:top-[20px] left-[40px] sm:left-[20px]">
                    <img
                      src="/assets/img/quotation-blue.svg"
                      alt="quotation mark"
                    />
                  </div>

                  <div className="absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] flex gap-[6px] bg-white shadow-[0_4px_25px_rgba(56,75,255,0.15)] p-[12px] rounded-full">
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img
                      src="/assets/img/star-blue.svg"
                      alt="star"
                      className="opacity-25"
                    />
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="et-testimony relative p-[40px] lg:p-[30px] md:p-[20px] border border-[#D4DCED] rounded-[16px] mt-[60px]">
                  <div className="et-testimony__heading flex items-end justify-center mb-[17px] lg:mb-[12px] -mt-[100px] md:-mt-[80px]">
                    <div className="et-testimony__img rounded-full overflow-hidden border border-etBlue p-[7px] w-max max-w-full">
                      <img
                        src="/assets/img/reviewer-3.png"
                        alt="reviewer image"
                        className="w-[100px] sm:w-[80px] h-[100px] sm:h-[80px] rounded-full"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <h5 className="text-black font-medium text-[20px] mb-[3px]">
                      Ronald Richards
                    </h5>
                    <h6 className="text-[16px] text-etGray font-normal mb-[20px]">
                      Web Developer
                    </h6>
                    <p className="text-[16px] text-etGray font-normal mb-[20px]">
                      The user-friendly interface of EventDex makes it easy to
                      browse and purchase tickets. It's a game-changer for event
                      enthusiasts like me.
                    </p>
                  </div>

                  <div className="absolute top-[40px] sm:top-[20px] left-[40px] sm:left-[20px]">
                    <img
                      src="/assets/img/quotation-blue.svg"
                      alt="quotation mark"
                    />
                  </div>

                  <div className="absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] flex gap-[6px] bg-white shadow-[0_4px_25px_rgba(56,75,255,0.15)] p-[12px] rounded-full">
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img
                      src="/assets/img/star-blue.svg"
                      alt="star"
                      className="opacity-25"
                    />
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="et-testimony relative p-[40px] lg:p-[30px] md:p-[20px] border border-[#D4DCED] rounded-[16px] mt-[60px]">
                  <div className="et-testimony__heading flex items-end justify-center mb-[17px] lg:mb-[12px] -mt-[100px] md:-mt-[80px]">
                    <div className="et-testimony__img rounded-full overflow-hidden border border-etBlue p-[7px] w-max max-w-full">
                      <img
                        src="/assets/img/reviewer-1.png"
                        alt="reviewer image"
                        className="w-[100px] sm:w-[80px] h-[100px] sm:h-[80px] rounded-full"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <h5 className="text-black font-medium text-[20px] mb-[3px]">
                      Esther Howard
                    </h5>
                    <h6 className="text-[16px] text-etGray font-normal mb-[20px]">
                      Web Developer
                    </h6>
                    <p className="text-[16px] text-etGray font-normal mb-[20px]">
                      With EventDex, I no longer worry about ticket fraud. The
                      blockchain technology provides a secure and reliable
                      platform for all my event needs.
                    </p>
                  </div>

                  <div className="absolute top-[40px] sm:top-[20px] left-[40px] sm:left-[20px]">
                    <img
                      src="/assets/img/quotation-blue.svg"
                      alt="quotation mark"
                    />
                  </div>

                  <div className="absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] flex gap-[6px] bg-white shadow-[0_4px_25px_rgba(56,75,255,0.15)] p-[12px] rounded-full">
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img
                      src="/assets/img/star-blue.svg"
                      alt="star"
                      className="opacity-25"
                    />
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="et-testimony relative p-[40px] lg:p-[30px] md:p-[20px] border border-[#D4DCED] rounded-[16px] mt-[60px]">
                  <div className="et-testimony__heading flex items-end justify-center mb-[17px] lg:mb-[12px] -mt-[100px] md:-mt-[80px]">
                    <div className="et-testimony__img rounded-full overflow-hidden border border-etBlue p-[7px] w-max max-w-full">
                      <img
                        src="/assets/img/reviewer-1.png"
                        alt="reviewer image"
                        className="w-[100px] sm:w-[80px] h-[100px] sm:h-[80px] rounded-full"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <h5 className="text-black font-medium text-[20px] mb-[3px]">
                      Esther Howard
                    </h5>
                    <h6 className="text-[16px] text-etGray font-normal mb-[20px]">
                      Web Developer
                    </h6>
                    <p className="text-[16px] text-etGray font-normal mb-[20px]">
                      EventDex's decentralized approach to ticketing is a breath
                      of fresh air. It offers a level of trust and transparency
                      that traditional systems lack.
                    </p>
                  </div>

                  <div className="absolute top-[40px] sm:top-[20px] left-[40px] sm:left-[20px]">
                    <img
                      src="/assets/img/quotation-blue.svg"
                      alt="quotation mark"
                    />
                  </div>

                  <div className="absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] flex gap-[6px] bg-white shadow-[0_4px_25px_rgba(56,75,255,0.15)] p-[12px] rounded-full">
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img
                      src="/assets/img/star-blue.svg"
                      alt="star"
                      className="opacity-25"
                    />
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="et-testimony relative p-[40px] lg:p-[30px] md:p-[20px] border border-[#D4DCED] rounded-[16px] mt-[60px]">
                  <div className="et-testimony__heading flex items-end justify-center mb-[17px] lg:mb-[12px] -mt-[100px] md:-mt-[80px]">
                    <div className="et-testimony__img rounded-full overflow-hidden border border-etBlue p-[7px] w-max max-w-full">
                      <img
                        src="/assets/img/reviewer-1.png"
                        alt="reviewer image"
                        className="w-[100px] sm:w-[80px] h-[100px] sm:h-[80px] rounded-full"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <h5 className="text-black font-medium text-[20px] mb-[3px]">
                      Esther Howard
                    </h5>
                    <h6 className="text-[16px] text-etGray font-normal mb-[20px]">
                      Web Developer
                    </h6>
                    <p className="text-[16px] text-etGray font-normal mb-[20px]">
                      The seamless integration of blockchain technology in
                      EventDex ensures that my ticketing experience is both
                      secure and efficient. Highly recommended!
                    </p>
                  </div>

                  <div className="absolute top-[40px] sm:top-[20px] left-[40px] sm:left-[20px]">
                    <img
                      src="/assets/img/quotation-blue.svg"
                      alt="quotation mark"
                    />
                  </div>

                  <div className="absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] flex gap-[6px] bg-white shadow-[0_4px_25px_rgba(56,75,255,0.15)] p-[12px] rounded-full">
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img src="/assets/img/star-blue.svg" alt="star" />
                    <img
                      src="/assets/img/star-blue.svg"
                      alt="star"
                      className="opacity-25"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
