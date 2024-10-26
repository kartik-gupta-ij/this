import React from "react";
import logo from "../assets/Vector.png";

export default function Herosection({ heading, subheading }) {
  return (
    <div className="flex justify-center items-center flex-col mt-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-screen-lg flex flex-col items-center">
        {/* <img src={logo} alt='logo' className='mt-3' style={{ width: '12.5rem' }} /> */}
        <p className="text-center mt-3 text-[2rem] sm:text-[2.5rem] font-serif md:text-[3rem] lg:text-[4rem] text-[#484848] leading-tight tracking-tight whitespace-nowrap overflow-hidden overflow-ellipsis px-3">
          "{heading}"
        </p>
        <p className="text-center mt-6 text-normal text-[#6c6c6c] sm:text-[1.02rem] md:text-[1.25rem] lg:text-[1.75rem] tracking-tight sm:px-0 px-6">
          {subheading}
        </p>
      </div>
    </div>
  );
}
