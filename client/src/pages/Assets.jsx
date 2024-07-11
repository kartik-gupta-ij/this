import React from "react";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";
import book4 from "../assets/book4.png";
import book5 from "../assets/book5.png";
import book6 from "../assets/book6.png";
import book7 from "../assets/book7.png";
import book8 from "../assets/book8.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Assets() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center px-6 py-4">
        <div>
          <p className="text-gray-600 font-normal text-2xl md:text-3xl leading-tight tracking-tight">
            Spiritual library
          </p>
        </div>
        <div>
          <p className="text-[#008080] font-normal text-lg md:text-xl leading-tight tracking-tight">
            View all
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mx-6">
        <div>
          <img src={book1} alt="Book 1" className="w-full" />
        </div>
        <div>
          <img src={book2} alt="Book 2" className="w-full" />
        </div>
        <div>
          <img src={book3} alt="Book 3" className="w-full" />
        </div>
        <div>
          <img src={book4} alt="Book 4" className="w-full" />
        </div>
      </div>
      <div className="flex justify-between items-center px-6 py-4">
        <div>
          <p className="text-gray-600 font-normal text-2xl md:text-3xl leading-tight tracking-tight">
            Blogs
          </p>
        </div>
        <div>
          <p className="text-[#008080] font-normal text-lg md:text-xl leading-tight tracking-tight">
            View all
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-6">
        <div className="flex gap-4 border border-[#FFA500] rounded-md p-4">
          <div className="flex-shrink-0">
            <img
              src={book6}
              className="w-[150px] h-[101px]"
              alt="Blog Image 1"
            />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-xs md:text-lg">
              Why is Bhagwad Geeta should be read by every person to get useful
              insights?
            </p>
            <button className="rounded-md px-3 py-2 bg-[#008080] text-white mt-2 text-sm md:text-md">
              <Link to="login">Read more</Link>
            </button>
          </div>
        </div>
        <div className="flex gap-4 border border-[#FFA500] rounded-md p-4">
          <div className="flex-shrink-0">
            <img
              src={book6}
              className="w-[150px] h-[101px]"
              alt="Blog Image 2"
            />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-xs md:text-lg">
              Why is Bhagwad Geeta should be read by every person to get useful
              insights?
            </p>
            <button className="rounded-md px-3 py-2 bg-[#008080] text-white mt-2 text-sm md:text-md">
              <Link to="login">Read more</Link>
            </button>
          </div>
        </div>
        <div className="flex gap-4 border border-[#FFA500] rounded-md p-4">
          <div className="flex-shrink-0">
            <img
              src={book7}
              className="w-[150px] h-[101px]"
              alt="Blog Image 3"
            />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-xs md:text-lg">
              Why is Bhagwad Geeta should be read by every person to get useful
              insights?
            </p>
            <button className="rounded-md px-3 py-2 bg-[#008080] text-white mt-2 text-sm md:text-md">
              <Link to="login">Read more</Link>
            </button>
          </div>
        </div>
        <div className="flex gap-4 border border-[#FFA500] rounded-md p-4">
          <div className="flex-shrink-0">
            <img
              src={book8}
              className="w-[150px] h-[101px]"
              alt="Blog Image 4"
            />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-xs md:text-lg">
              Why is Bhagwad Geeta should be read by every person to get useful
              insights?
            </p>
            <button className="rounded-md px-3 py-2 bg-[#008080] text-white mt-2 text-sm md:text-md">
              <Link to="login">Read more</Link>
            </button>
          </div>
        </div>
      </div>
      {currentUser && currentUser?.rest?.role === 'admin' && <div className="bg-[#FFA500] p-8 w-full max-w-3xl rounded-lg flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6 mx-auto mt-10">
          <div className="flex flex-col items-center space-y-3">
            <div className="relative bg-white p-3 flex items-center justify-center shadow-md cursor-pointer">
              <img
                // src={file}
                alt="Add Image"
                className="h-16 w-16 "
              />
              <input
                type="file"
                // onChange={(e) => onUpload(e.target.files[0])}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
            <span className="text-white text-lg font-semibold">Add Image</span>
          </div>
          <div className="flex flex-col space-y-5 flex-grow">
            <input
              // onInput={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Name of event"
              className="p-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <textarea
              // onInput={(e) => setContent(e.target.value)}
              placeholder="Content of the event like venue, time, date, etc."
              className="p-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-600 h-32"
            ></textarea>
            <button
              className="bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition duration-300 ease-in-out"
              // onClick={createEvent}
            >
              Upload Blog
            </button>
          </div>
        </div>
        }
      <div className="w-full h-[80px]"></div>
    </div >
  );
}
