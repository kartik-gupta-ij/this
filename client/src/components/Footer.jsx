import React from "react";
import before from "../assets/beforeLogo.png";
import sadhna from "../assets/Sadhana.png";
import navbar from "../assets/navbar.png";
import { Link, useLocation } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import home from "../assets/home.svg";
import sadhana from "../assets/sadhana.svg";
import society from "../assets/sociaty.svg";
import events from "../assets/events.svg";
import assets from "../assets/assets.svg";
import { SiBookstack } from "react-icons/si";
import { useSelector } from "react-redux";
export default function Footer() {
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser)
  return (
    <>
      <div
        className="relative hidden md:block w-full bg-[#FFA500] mt-5 bg-right-top bg-no-repeat bg-contain rounded-tr-[120px]"
        style={{ backgroundImage: `url(${navbar})` }}
      >
        <div className="flex items-center">
          <Link to="/" className="flex items-center ml-4 mt-5">
            {/* <img src={before} alt="Logo" loading="lazy" width="100px" className='mr-2' /> */}
            <img src={sadhna} alt="sadhana" loading="lazy" width="150px" />
          </Link>
        </div>
        <div className="grid grid-cols-4 mt-4 p-4">
          <div className="p-4">
            <p className="text-2xl font-bold">Contact Us</p>
            <p className="text-xl text-[#3C3C3C]">Located -</p>
            <p className="text-xl text-[#3C3C3C]">
              A-5, Maharaja Agrasen Marg, Opposite NTPC office, Block A, Sector
              33, Noida, Uttar Pradesh 201301
            </p>
            <p className="text-xl text-[#3C3C3C]">Email -</p>
            <p className="text-xl text-[#3C3C3C]">connect@sadhana.org</p>
          </div>
          <div className="p-4">
            <p className="text-2xl font-bold">Quick Links</p>
            <p className="text-xl text-[#3C3C3C] mt-2">
              <Link to="/sadhana/form">Fill Sadhna</Link>
            </p>
            <p className="text-xl text-[#3C3C3C] mt-2">
              <Link to="/events">Events</Link>
            </p>
            <p className="text-xl text-[#3C3C3C] mt-2">
              <Link to="/community">Ask Questions</Link>
            </p>
            <p className="text-xl text-[#3C3C3C] mt-2">
              <Link to="/testpaper">Today Test </Link>
            </p>
          </div>
          <div className="p-4">
            <p className="text-2xl font-bold">Navigation</p>
            <p className="text-xl text-[#3C3C3C] mt-2">
              <Link to="/home">Home</Link>
            </p>
            <p className="text-xl text-[#3C3C3C] mt-2">
              <Link to="/sadhana/form">Sadhna</Link>
            </p>
            <p className="text-xl text-[#3C3C3C] mt-2">
              <Link to="/assets">Assets</Link>
            </p>
            <p className="text-xl text-[#3C3C3C] mt-2">
              <Link to="/events">Events</Link>
            </p>
            <p className="text-xl text-[#3C3C3C] mt-2">
              <Link to="/community">Community</Link>
            </p>
          </div>
          <div className="p-4">
            <p className="text-2xl font-bold">Social</p>
            <p className="text-xl mt-2 flex gap-1 items-center">
              <IoLogoFacebook />
              <Link to="#" className="text-[#3C3C3C]">
                Facebook
              </Link>
            </p>
            <p className="text-xl mt-2 flex gap-1 items-center">
              <IoLogoTwitter />
              <Link to="#" className="text-[#3C3C3C]">
                Twitter
              </Link>
            </p>
            <p className="text-xl mt-2 flex gap-1 items-center">
              <FaLinkedin />
              <Link to="#" className="text-[#3C3C3C]">
                LinkedIn
              </Link>
            </p>
            <p className="text-xl mt-2 flex gap-1 items-center">
              <FaInstagram />
              <Link to="#" className="text-[#3C3C3C]">
                Instagram
              </Link>
            </p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white"></div>
        <div className="grid grid-cols-3 px-4 py-4 text-center text-white text-lg">
          <div>Copyright 2024 All rights reserved</div>
          <div>Terms & Conditions</div>
          <div>Privacy Policy</div>
        </div>
      </div>
      {/* Mobile View */}
      {currentUser!==null&&<div className="md:hidden w-full bottom-0 left-0 right-0 bg-white border-t border-gray-300 z-20 fixed">
        <div className="flex space-x-6 sm:space-x-8 justify-center items-center py-4">
          <div
            className={`flex flex-col items-center ${
              location.pathname === "/home"
                ? "bg-yellow-200 border-2 border-[#FFA500] text-[#FFA500] p-1 rounded-xl"
                : ""
            }`}
          >
            <img src={home} alt="home" className="mb-1" />
            <Link to="/home" className="text-zinc-800 dark:text-zinc-400">
              Home
            </Link>
          </div>
          <div
            className={`flex flex-col items-center ${
              location.pathname === "/sadhana/form"
                ? "bg-yellow-200 border-2 border-[#FFA500] text-[#FFA500] p-1 rounded-xl"
                : ""
            }`}
          >
            <img src={sadhana} alt="sadhna" className="mb-1" />
            <Link
              to="/sadhana/form"
              className="text-zinc-800 dark:text-zinc-400"
            >
              Sadhna
            </Link>
          </div>
          <div
            className={`flex flex-col items-center ${
              location.pathname === "/community"
                ? "bg-yellow-200 border-2 border-[#FFA500] text-[#FFA500] p-1 rounded-xl"
                : ""
            }`}
          >
            <img src={society} alt="society" className="mb-1" />
            <Link to="/community" className="text-zinc-800 dark:text-zinc-400">
              Society
            </Link>
          </div>
          <div
            className={`flex flex-col items-center ${
              location.pathname === "/events"
                ? "bg-yellow-200 border-2 border-[#FFA500] text-[#FFA500] p-1 rounded-xl"
                : ""
            }`}
          >
            <img src={events} alt="events" className="mb-1" />
            <Link to="/events" className="text-zinc-800 dark:text-zinc-400">
              Events
            </Link>
          </div>
          <div
            className={`flex flex-col items-center ${
              location.pathname === "/assets"
                ? "bg-yellow-200 border-2 border-[#FFA500] text-[#FFA500] p-1 rounded-xl"
                : ""
            }`}
          >
            <SiBookstack className="w-[20px] h-[20px]" />
            <Link to="/assets" className="text-zinc-800 dark:text-zinc-400">
              Assets
            </Link>
          </div>
        </div>
      </div>}
    </>
  );
}
