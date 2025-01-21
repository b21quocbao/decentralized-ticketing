import React from "react";
import ConnectWalletButton from "../_components/ConnectWalletButton";
import Link from "next/link";
import ConnectWorldIDButton from "../_components/ConnectWorldIDButton";

const Headbar: React.FC = () => {
  return (
    <header className="et-header to-be-fixed py-[30px] xxs:py-[20px] fixed top-0 w-full px-[155px] xxxl:px-[100px] xxl:px-[40px] xs:px-[20px] z-50">
      <div className="flex justify-between items-center">
        <div className="logo shrink-0"></div>

        <div className="et-header-right flex items-center gap-[60px] xl:gap-[30px]">
          <div className="to-go-to-sidebar-in-mobile flex md:flex-col md:items-start items-center gap-[100px] xl:gap-[30px] md:gap-y-[15px]">
            <ul className="et-header-nav flex md:flex-col gap-x-[43px] xl:gap-x-[33px] font-kanit text-[17px] font-normal">
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li className="has-sub-menu relative">
                <Link href="#" role="button">
                  News
                </Link>

                <ul className="et-header-submenu">
                  <li>
                    <Link href="/news">All News</Link>
                  </li>
                  <li>
                    <Link href="/news-details">News Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>

            <button className="px-5 bg-white flex items-center justify-center gap-x-[15px] h-[50px] px-[25px] font-medium text-[17px] rounded-full group">
              <ul className="et-header-nav flex md:flex-col gap-x-[43px] xl:gap-x-[33px] font-kanit text-[17px] font-normal">
                <li className="has-sub-menu relative">
                  <Link
                    href="#"
                    role="button"
                    style={{
                      color: "rgb(18, 96, 254)",
                    }}
                  >
                    Login
                  </Link>

                  <ul className="et-header-submenu">
                    <li>
                      <ConnectWorldIDButton />
                    </li>
                    <li>
                      <ConnectWalletButton />
                    </li>
                  </ul>
                </li>
              </ul>
            </button>
          </div>

          <button
            type="button"
            className="et-mobile-menu-open-btn hidden md:inline-block bg-etBlue rounded-full w-[50px] aspect-square text-white text-[18px] hover:bg-etBlue"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Headbar;
