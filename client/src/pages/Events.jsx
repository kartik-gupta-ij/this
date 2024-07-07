import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import events1 from "../assets/events1.png";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Events() {
  const { currentUser } = useSelector((state) => state.user);
  const [eventData, setEventData] = useState([]);
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onUpload = async (element) => {
    if (element.type === "image/jpeg" || element.type === "image/png") {
      const data = new FormData();
      data.append("file", element);
      data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);
      data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

      try {
        const response = await fetch(import.meta.env.VITE_CLOUDINARY_BASE_URL, {
          method: "POST",
          body: data,
        });
        const result = await response.json();
        setFile(result.url.toString());
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      console.log("error");
      // toast.error("Please select an image in jpeg or png format");
    }
  };

  const createEvent = async () => {
    const formData = {
      title: title,
      image: file,
      content: content,
    };
    console.log(formData);
    try {
      const res = await axios.post("/api/event", formData, {
        headers: {
          Authorization: currentUser?.token,
        },
      });
      setEventData([...eventData, res.data?.newEvent]);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(import.meta.env.VITE_CLOUDINARY_BASE_URL, "woking", file);

  const getEvent = async () => {
    try {
      const { data } = await axios.get("/api/event", {
        headers: {
          Authorization: currentUser?.token,
        },
      });

      setEventData(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);
  return (
    <div className="w-full">
      <p className="text-3xl  leading-6 tracking-tight  font-bold mt-10 ml-10">
        Birthday & Anniversary
      </p>
      <div className="w-8/10 mx-auto">
        <div className="flex flex-row m-10 justify-around bg-[#FFEDCC] md:p-6 p-2">
          <div className="md:mr-6 md:mb-6">
            <p className="md:text-xl text-[20px] text-[#FFA500]  leading-6 tracking-tight   ">
              "Celebrating 35 years"
            </p>
            <p className="md:text-xl text-[12px] md:leading-6 tracking-tight  ">
              Wishing you a joyous birthday filled with love, laughter, and
              blessings. May this year be your best one yet!
            </p>
            <p className="md:text-xl text-[18px]  md:leading-6 tracking-tight   ">
              Anurag Anant
            </p>
            <p className="md:text-lg text-[18px]  md:leading-6 tracking-tight text-[#008080]  ">
              Birthday (15 April)
            </p>
            <p className="md:text-lg text-[12px]  md:leading-6 tracking-tight  ">
              Chairman of the management community of ISCON
            </p>
          </div>
          <div className="md:ml-10 ml-2 flex flex-col justify-center items-center">
            <div className="md:w-[60px] md:h-[60px] w-[50px] h-[50px] bg-red-400 rounded-full"></div>
            <div>
              <button className="rounded-lg md:px-5 md:py-3 px-3 py-2 bg-[#008080] text-white  mt-5 text-lg">
                <Link to="login">Wish&nbsp;Now</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row m-10 justify-around bg-[#FFEDCC] md:p-6 p-2">
          <div className="md:mr-6 md:mb-6">
            <p className="md:text-xl text-[20px] text-[#FFA500]  leading-6 tracking-tight   ">
              "Celebrating 35 years"
            </p>
            <p className="md:text-xl text-[12px] md:leading-6 tracking-tight  ">
              Wishing you a joyous birthday filled with love, laughter, and
              blessings. May this year be your best one yet!
            </p>
            <p className="md:text-xl text-[18px]   md:leading-6 tracking-tight   ">
              Anurag Anant
            </p>
            <p className="md:text-lg text-[18px]   md:leading-6 tracking-tight text-[#008080]  ">
              Birthday (15 April)
            </p>
            <p className="md:text-lg text-[12px]  md:leading-6 tracking-tight  ">
              Chairman of the management community of ISCON
            </p>
          </div>
          <div className="md:ml-10 ml-2 flex flex-col justify-center items-center">
            <div className="md:w-[60px] md:h-[60px] w-[50px] h-[50px] bg-red-400 rounded-full"></div>
            <div>
              <button className="rounded-lg md:px-5 md:py-3 px-3 py-2 bg-[#008080] text-white mt-5 text-lg ">
                <Link to="login">Wish&nbsp;Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-8/10 mx-auto">
        <p className="text-3xl  leading-6 tracking-tight  font-bold ml-6 m-4">
          Upcoming festivals
        </p>

        {eventData?.map((item, key) => (
          <div key={key} className="full flex justify-center  flex-col mt-8">
            <div className="w-8/10 mx-10 bg-gradient-to-b from-[#FFF5E3] via-[#FFF5E3] to-[#FFEDCC]">
              <div className="text-left p-4 flex relative ">
                <div className="w-4/5 z-10">
                  <p className="text-xl font-bold">{item?.title} </p>
                  <p className="text-xl leading-14 tracking-tight">
                    {item?.content}
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={item?.image}
                    className="flex justify-center items-center"
                    width="250px"
                    alt="Event 1"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-[#FFA500] p-6 w-8/10 rounded-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex flex-col items-center space-y-2">
            <div
              className="bg-white p-4 rounded-lg flex items-center justify-center cursor-pointer"
              // onClick={handleImageClick}
            >
              <img
                src="https://placehold.co/50x50"
                alt="Add Image"
                className="h-12 w-12"
              />
              <input
                type="file"
                onChange={(e) => onUpload(e.target.files[0])}
                // ref={fileInputRef}
                // style={{ display: 'none' }}
              />
            </div>
            <span className="text-white text-2xl">Add Image</span>
          </div>
          <div className="flex flex-col space-y-4 flex-grow">
            <input
              onInput={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Name of event"
              className="p-2 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <textarea
              onInput={(e) => setContent(e.target.value)}
              placeholder="Content of the event like venue, time, date, etc."
              className="p-2 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
            ></textarea>
            <button
              className="bg-teal-600 text-white p-2 rounded-lg"
              onClick={createEvent}
            >
              Upload blog
            </button>
          </div>
        </div>
      </div>
      <div className="h-[80px]"></div>
    </div>
  );
}
