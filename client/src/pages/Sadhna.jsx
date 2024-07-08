import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";

const SadhanaComponent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState("upComingSadhana"); // State to manage active link
  const UpcomingItems = [
    {
      id: 1,
      title: "Sadhana X",
      date: "23 April, 2024",
      day: "Monday",
      count: 15,
    },
    {
      id: 2,
      title: "Sadhana Y",
      date: "23 April, 2024",
      day: "Monday",
      count: 15,
    },
    {
      id: 3,
      title: "Sadhana Z",
      date: "23 April, 2024",
      day: "Monday",
      count: 15,
    },
  ];

  const sadhanaItems = [
    {
      id: 1,
      title: "Sadhana 1",
      date: "23 April, 2024",
      day: "Monday",
      count: 15,
    },
    {
      id: 2,
      title: "Sadhana 2",
      date: "23 April, 2024",
      day: "Monday",
      count: 15,
    },
    {
      id: 3,
      title: "Sadhana 3",
      date: "23 April, 2024",
      day: "Monday",
      count: 15,
    },
    {
      id: 4,
      title: "Sadhana 4",
      date: "23 April, 2024",
      day: "Monday",
      count: 15,
    },
    {
      id: 5,
      title: "Sadhana 5",
      date: "23 April, 2024",
      day: "Monday",
      count: 15,
    },
    {
      id: 6,
      title: "Sadhana 6",
      date: "23 April, 2024",
      day: "Monday",
      count: 15,
    },
    {
      id: 7,
      title: "Sadhana 7",
      date: "23 April, 2024",
      day: "Monday",
      count: 15,
    },
    {
      id: 8,
      title: "Sadhana 8",
      date: "23 April, 2024",
      day: "Monday",
      count: 15,
    },
    {
      id: 9,
      title: "Sadhana 9",
      date: "23 April, 2024",
      day: "Monday",
      count: 15,
    },
    {
      id: 10,
      title: "Sadhana 10",
      date: "23 April, 2024",
      day: "Monday",
      count: 15,
    },
    {
      id: 11,
      title: "Sadhana 11",
      date: "23 April, 2024",
      day: "Monday",
      count: 15,
    },
    {
      id: 12,
      title: "Sadhana 12",
      date: "23 April, 2024",
      day: "Monday",
      count: 15,
    },
  ];

  useEffect(() => {
    // Function to handle resize event
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set 'isMobile' based on window width
    };

    // Initial call to handle resize
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const displayItems =
    activeLink === "upComingSadhana" ? UpcomingItems.slice(0, 6) : sadhanaItems;

  return (
    <div className="mt-5 overflow-x-auto">
      {/* Navigation for mobile */}
      {isMobile && (
        <div className="w-full flex justify-center items-center my-4">
          <div className="md:hidden w-[300px] h-[46px] flex justify-between border-2 border-[#008080] mt-2">
            <div
              className={`w-1/2 flex justify-center items-center text-center ${
                activeLink === "upComingSadhana"
                  ? "bg-[#008080] text-white"
                  : "text-[#008080]"
              }`}
              onClick={() => handleLinkClick("upComingSadhana")}
            >
              Upcoming
            </div>
            <div
              className={`w-1/2 flex justify-center items-center text-center ${
                activeLink === "previousSadhana"
                  ? "bg-[#008080] text-white"
                  : "text-[#008080]"
              }`}
              onClick={() => handleLinkClick("previousSadhana")}
            >
              Previous
            </div>
          </div>
        </div>
      )}

      {/* Sadhana items based on active link */}
      {/* <div className="flex justify-between items-center px-6 py-4">
        <div>
          <p className="text-gray-600 font-normal text-3xl leading-14 tracking-tight">
            {activeLink === "upComingSadhana"
              ? "Upcoming Sadhana"
              : "Previous Sadhana"}
          </p>
        </div>
        {!isMobile && (
          <div>
            <p className="text-[#008080] font-normal text-xl leading-14 tracking-tight">
              View all
            </p>
          </div>
        )}
      </div> */}

      {isMobile ? (
        // <div className={`grid grid-cols-${isMobile ? "1" : "6"} gap-4 mx-5`}>
        <div className={`grid grid-cols-1 gap-4 mx-5`}>
          {displayItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFEDCC] text-center p-6 rounded-lg"
            >
              <p className="font-bold text-lg">{item.title}</p>
              <p>{item.date}</p>
              <p>-{item.day}</p>
              <div className="bg-white p-1 text-[#FFA500] font-bold">
                <p>+{item.count}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center px-6 py-4 mt-5">
            <div>
              <p className="text-gray-600 font-normal text-3xl leading-14 tracking-tight">
                Upcoming Sadhana
              </p>
            </div>
            <div>
              <p className="text-[#008080] font-normal text-xl leading-14 tracking-tight">
                View all
              </p>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4 mx-5">
            {UpcomingItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#FFEDCC] text-center p-6 rounded-lg"
              >
                <p className="font-bold text-lg">{item.title}</p>
                <p>{item.date}</p>
                <p>-{item.day}</p>
                <div className="bg-white p-1 text-[#FFA500] font-bold">
                  <p>+{item.count}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center px-6 py-4 mt-5">
            <div>
              <p className="text-gray-600 font-normal text-3xl leading-14 tracking-tight">
                Previous Sadhana
              </p>
            </div>
            <div>
              <p className="text-[#008080] font-normal text-xl leading-14 tracking-tight">
                View all
              </p>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4 mx-5">
            {sadhanaItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#FFEDCC] text-center p-6 rounded-lg"
              >
                <p className="font-bold text-lg">{item.title}</p>
                <p>{item.date}</p>
                <p>-{item.day}</p>
                <div className="bg-white p-1 text-[#FFA500] font-bold">
                  <p>+{item.count}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* "View More" button for previous Sadhana on small screens */}
      {isMobile && (
        <div className="mx-4 py-4 flex justify-center ">
          <button className="bg-[#008080] text-white px-4 py-2 w-full rounded-lg hover:bg-[#2f8e8e] transition-colors duration-300">
            View More
          </button>
        </div>
      )}

      <div className="h-[100px] relative">
        <Link to="/sadhana/form">
          <div className="bg-[#FFA500] rounded-full absolute bottom-6 right-6 hover:scale-105 transition-transform duration-300">
            <CiCirclePlus className="w-12 h-12 text-white" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SadhanaComponent;
