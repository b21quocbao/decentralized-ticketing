"use client";
import { useState } from "react";

export default function EventOrganizerPage() {
  return (
    <>
      <section className="et-breadcrumb bg-[#000D83] pt-[210px] lg:pt-[190px] sm:pt-[160px] pb-[130px] lg:pb-[110px] sm:pb-[80px] relative z-[1] before:absolute before:inset-0 before:bg-no-repeat before:bg-cover before:bg-center before:-z-[1] before:opacity-30">
        <div className="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full text-center text-white">
          <h1 className="et-breadcrumb-title font-medium text-[56px] md:text-[50px] xs:text-[45px]">
            Contact Us
          </h1>
          <ul className="inline-flex items-center gap-[10px] font-medium text-[16px]">
            <li className="opacity-80">
              <a href="index.html" className="hover:text-etBlue">
                Home
              </a>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <i className="fa-solid fa-angle-right"></i>
            </li>
            <li className="current-page">Contact Us</li>
          </ul>
        </div>
      </section>

      <div className="py-[120px] xl:py-[80px] md:py-[60px]">
        <div className="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-[60px] xl:gap-[40px] items-center">
            <div>
              <div className="bg-etBlue p-[40px] sm:p-[30px] space-y-[24px] text-[16px]">
                <div className="flex flex-wrap items-center gap-[20px] pb-[20px] text-white border-b border-white/30 last:border-0 last:pb-0">
                  <span className="icon shrink-0 border border-dashed border-white rounded-full h-[62px] w-[62px] flex items-center justify-center">
                    <img src="/assets/img/call-msg.svg" alt="icon" />
                  </span>

                  <div className="txt">
                    <span className="font-light">Call Us 24/7</span>
                    <h4 className="font-semibold text-[24px]">
                      <a href="tel:+65-1234-5678">+65-1234-5678</a>
                    </h4>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-[20px] pb-[20px] text-white border-b border-white/30 last:border-0 last:pb-0">
                  <span className="icon shrink-0 border border-dashed border-white rounded-full h-[62px] w-[62px] flex items-center justify-center">
                    <img src="/assets/img/mail.svg" alt="icon" />
                  </span>

                  <div className="txt">
                    <span className="font-light">Make a Quote</span>
                    <h4 className="font-semibold text-[24px]">
                      <a href="mailto:eventdex@gmail.com">eventdex@gmail.com</a>
                    </h4>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-[20px] pb-[20px] text-white border-b border-white/30 last:border-0 last:pb-0">
                  <span className="icon shrink-0 border border-dashed border-white rounded-full h-[62px] w-[62px] flex items-center justify-center">
                    <img src="/assets/img/location-dot-circle.svg" alt="icon" />
                  </span>

                  <div className="txt">
                    <span className="font-light">Location</span>
                    <h4 className="font-semibold text-[24px]">
                      LT-2A NTU, 50 Nanyang Ave
                    </h4>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/assets/img/contact-video-cover.jpg"
                  alt="video cover"
                  className="w-full"
                />
                <a
                  href="https://youtu.be/6KmuL6RcdNA?si=s1RJZZwk6XcqZAwX"
                  data-fslightbox
                  className="video-btn-shadow w-[58px] aspect-square rounded-full bg-white text-[18px] text-etBlue flex items-center justify-center absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]"
                >
                  <i className="fa-solid fa-play"></i>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[40px] md:text-[35px] sm:text-[30px] xxs:text-[28px] font-medium text-etBlack mb-[7px]">
                Ready to Get Started?
              </h2>
              <p className="text-etGray font-light text-[16px] mb-[38px]">
                Nullam varius, erat quis iaculis dictum, eros urna varius eros,
                ut blandit felis odio in turpis. Quisque rhoncus, eros in auctor
                ultrices,
              </p>

              <form
                action="#"
                className="grid grid-cols-2 xxs:grid-cols-1 gap-[30px] xs:gap-[20px] text-[16px]"
              >
                <div>
                  <label
                    htmlFor="et-contact-name"
                    className="font-lato font-semibold text-etBlack block mb-[12px]"
                  >
                    Your Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="et-contact-name"
                    placeholder="Your Name"
                    className="border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="et-contact-email"
                    className="font-lato font-semibold text-etBlack block mb-[12px]"
                  >
                    Your Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="et-contact-email"
                    placeholder="Your Email"
                    className="border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none"
                  />
                </div>
                <div className="col-span-2 xxs:col-span-1">
                  <label
                    htmlFor="et-contact-message"
                    className="font-lato font-semibold text-etBlack block mb-[12px]"
                  >
                    Your Message*
                  </label>
                  <textarea
                    name="message"
                    id="et-contact-message"
                    placeholder="Your Message"
                    className="border border-[#ECECEC] h-[145px] p-[20px] rounded-[4px] w-full focus:outline-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-etBlue h-[55px] px-[24px] rounded-[10px] text-[16px] font-medium text-white hover:bg-etBlack"
                  >
                    Send Message
                    <span className="icon pl-[10px]">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <iframe
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ntu+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[600px] lg:h-[500px] md:h-[400px] sm:h-[350px]"
      ></iframe>
    </>
  );
}
