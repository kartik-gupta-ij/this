import React from "react";
import image from "../assets/heroSection.png";
import { Link } from "react-router-dom";
import scheduler from "../assets/scheduleDate.png";
import diya from "../assets/diya.png";
import bgDiya from "../assets/bgForDiya.png";
import events from "../assets/events.png";
import resources from "../assets/resources.png";
import news from "../assets/news.png";

export default function Home() {
  return (
    <>
      <div>
        <div className="grid grid-cols-2 mr-4  font-inria">
          <div className="overflow-hidden">
            <img src={image} width="600px" />
          </div>

          <div className="md:bg-gradient-to-r from-white via-[#FFFFFF] to-[#FFEDCC] rounded-2xl flex flex-col justify-center items-center h-full">
            <p className="text-[#6A6A6A] mt-4 font-normal text-[1rem] sm:text-[1.5rem] md:text-3xl lg:text-4xl leading-14 leading-6 tracking-wide text-left mx-[1rem] sm:mx-[3rem]">
            Discover the profound teachings and timeless wisdom. Explore our offerings and deepen your spiritual journey.
            </p>

            <button className="rounded-lg md:px-5 md:py-3 px-3 py-2 bg-[#008080] text-white font-bold mt-5 md:text-2xl text-[16px]">
              <Link to="login">Join Us</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF5E3] m-4 rounded-2xl pb-8">
        <div className="">
          <p className="md:pl-20 pl-8 pt-10 text-2xl md:text-4xl  leading-6 tracking-tight  font-bold">
          Daily prayers time at the temple
          </p>
          <p className="md:pl-20 pl-8 md:pr-20 pr-8 text-[1rem] sm:text-[1.5rem] md:text-3xl lg:text-4xl leading-14 md:mt-10 mt-4 text-[#6A6A6A] leading-6 tracking-tight text-left">
            The daily fixed aarti times are typically based on traditional Vedic
            practices and are designed to align with specific periods of the day
            that are considered auspicious for offering worship to the Deities.
          </p>
        </div>
        <div className="flex gap-4 mt-6">
          <div>
            <img src={scheduler} className="w-[900px] md:pl-20 pl-10 " />
          </div>
          <div className="relative">
            <img
              src={diya}
              className="w-[800px] absolute  bottom-0 md:-left-20 -left-10"
            />
            <img src={bgDiya} className="w-[500px] h-full overflow-x-hidden" />
          </div>
        </div>
      </div>
      <div className="mb-[3rem] md:mb-0">
        <p className="font-bold  pt-10  text-2xl md:text-4xl leading-6 tracking-tight text-center text-[#333333] pb-2">
        Different programs
        </p>
        <div className="flex justify-around mt-6">
          <div className="bg-[#008080] md:w-[12.5rem] sm:w-[10rem] w-[5rem] md:h-[12.5rem] sm:h-[8rem] h-[4.5rem] flex justify-center items-center rounded-xl flex-col transform transition-transform duration-300 hover:scale-110">
            <img src={news} className="w-[1.5rem] h-[1.5rem]" />
            <p className="md:text-3xl sm:text-xl text-[0.75rem] leading-6 tracking-tight text-white font-semibold">
              News/Blogs
            </p>
          </div>
          <div className="bg-[#008080] md:w-[12.5rem] sm:w-[10rem] w-[5rem] md:h-[12.5rem] sm:h-[8rem] h-[4.5rem] flex justify-center items-center rounded-xl flex-col transform transition-transform duration-300 hover:scale-110">
            <img src={events} className="w-[1.5rem] h-[1.5rem]" />
            <p className="md:text-3xl sm:text-xl text-[0.75rem] leading-6 tracking-tight text-white font-semibold">
              Events
            </p>
          </div>
          <div className="bg-[#008080] md:w-[12.5rem] sm:w-[10rem] w-[5rem] md:h-[12.5rem] sm:h-[8rem] h-[4.5rem] flex justify-center items-center rounded-xl flex-col transform transition-transform duration-300 hover:scale-110">
            <img src={resources} className="w-[1.5rem] h-[1.5rem]" />
            <p className="md:text-3xl sm:text-xl text-[0.75rem] leading-6 tracking-tight text-white font-semibold">
              Resources
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
