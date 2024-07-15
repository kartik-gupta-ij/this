import React, { useEffect } from "react";
import home from "../assets/home.png";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.png";
import hand from "../assets/hand-drawn.png";
import events1 from "../assets/events1.png";
import flat from "../assets/flat.png";
import { useSelector } from "react-redux";

function LoginHome() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <div>
        <div className="bg-gradient-to-b from-white via-[#FFFFFF] to-[#FFEDCC] rounded-2xl">
          <div className="grid grid-cols-2 mr-4 py-8">
            <div>
              <img src={home} className="w-[30rem]" alt="Home" />
            </div>
            <div className="flex flex-col justify-center mt-2">
              <p className="text-gray-600 font-normal text-[1rem] sm:text-[1.5rem] md:text-3xl lg:text-4xl leading-6 tracking-tight text-left">
                {`Namaskar ${currentUser?.name || currentUser?.rest?.name || ""}!`}
              </p>

              <p className="text-gray-600 font-normal text-[1rem] sm:text-[1.5rem] md:text-3xl lg:text-4xl leading-6 tracking-tight  text-left">
                "Begin your Sadhana journey here"
              </p>
              <div className="flex mt-5">
                <div className="relative mb-2 flex items-center">
                  <div className="relative bg-gray-50 border border-[#FFA500] rounded-md focus-within:border-blue-500 focus-within:ring-blue-500">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FFA500] pointer-events-none">
                      Fill Sadhana
                    </span>
                    <input
                      type="text"
                      id="email-address-icon"
                      className="block w-full py-2.5 pl-10 pr-4 text-gray-900 text-md rounded-md bg-transparent"
                      placeholder=""
                    />
                  </div>

                  <button className="absolute right-0 top-0 px-3 bottom-0 bg-[#008080] rounded-r-md text-white font-bold text-xl flex items-center justify-center">
                    <img
                      src={arrow}
                      width="20px"
                      alt="Arrow"
                      className="mr-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center px-8 m-4">
          <div>
            <p className="text-[2rem] md:text-[3rem]  text-[#383636] font-semibold leading-14 tracking-tight">
              News/Vlogs
            </p>
          </div>
          <div>
            <p className="text-[#008080] font-normal text-xl leading-14 tracking-tight relative">
              View all
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 px-8 m-4">
          <div>
            <div className="text-center flex">
              <div className="w-3/5">
                <p className="md:text-2xl text-[12px] text-justify leading-14 tracking-tight font-semibold mt-5 text-[#504d4d]">
                  Dive into a treasure trove of articles, videos, and stories
                  that illuminate the path of devotion, wisdom, and community.
                  Stay informed, enlightened, and connected as we embark on a
                  journey of discovery together.
                </p>
              </div>
              <div className="w-2/5 flex justify-center items-center mt-[-2rem]">
                <img
                  src={hand}
                  className="md:w-[250px] w-[150px]"
                  alt="Hand-drawn"
                />
              </div>
            </div>
            <div>
              <p className="bg-[#FFA500] text-[12px] w-full py-2 px-1 text-white text-center">
                || Hare Krishna Hare Krishna Krishna Krishna Hare Hare ||
              </p>
            </div>
          </div>
          <div className="text-center p-2">
            <div className="flex justify-between items-center ">
              <p className="text-[2rem] md:text-[3rem]  text-[#383636] font-semibold leading-14 tracking-tight">
                Events
              </p>
              <div>
                <p className="text-[#008080] font-normal text-xl leading-14 tracking-tight relative">
                  View all
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-b from-white via-[#FFF5E3] to-[#FFEDCC] relative">
              <div className="text-left mt-4 md:px-6">
                <h2 className="text-2xl md:text-3xl text-[#4f4e4e] font-semibold">
                  ~JANMASHTAMI~
                </h2>
                <div className="relative">
                  <div className="absolute bottom-0 right-0 mb-4 mr-4 md:mb-0 md:mr-6 w-3/5 sm:w-2/5 flex justify-end sm:justify-center items-center">
                    <img
                      src={events1}
                      className="w-[150px] md:w-[250px]"
                      alt="Event 1"
                    />
                  </div>
                  <p className="md:text-lg text-base font-semibold text-[#6A6A6A] tracking-tight w-3/5 sm:w-3/5">
                    Join us for a divine celebration of this sacred event will
                    immerse you in the timeless teachings and joyous festivities
                    associated with the divine appearance of Lord Krishna.
                    <br />
                    <br />
                    Date: 26 Aug <br />
                    Time: 11 PM <br />
                    Venue: ISCON Temple, Noida
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center p-4">
            <div>
              <div className="text-left p-4 flex relative border-2 border-[#008080] rounded-2xl bg-white">
                <div className="w-full md:w-3/5 z-10 relative">
                  <p className="md:text-xl md:leading-7 sm:text-base text-[12px] font-semibold text-[#6A6A6A] tracking-tight">
                    "Join our ever-expanding community, a sanctuary where
                    devotees from all walks of life come together to seek,
                    learn, and grow on their spiritual journey, fostering deep
                    connections and lifelong bonds."
                  </p>
                  <button className="rounded-lg px-4 py-2 bg-[#008080] text-white font-bold mt-5 text-lg">
                    <Link to="login">Join Us</Link>
                  </button>
                </div>
                <div className="w-full md:w-2/5 relative flex justify-end">
                  <img
                    src={flat}
                    className="md:w-[250px] sm:w-[200px] w-[160px] absolute bottom-2 right-2  md:relative md:bottom-auto md:right-auto"
                    alt="Flat"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[100px]"></div>
    </>
  );
}

export default LoginHome;
