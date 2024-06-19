import React, { useEffect } from 'react';
import home from '../assets/home.png';
import { Link } from 'react-router-dom';
import arrow from '../assets/arrow.png';
import hand from '../assets/hand-drawn.png';
import events1 from '../assets/events1.png';
import flat from '../assets/flat.png';


function LoginHome() {  

    return (
        <>
            <div>
                <div className="bg-gradient-to-b from-white via-[#FFFFFF] to-[#FFEDCC] rounded-2xl">
                    <div className="grid grid-cols-2 mr-4 mt-4">
                        <div>
                            <img src={home} className='md:w-[600px] w-[186px]' alt="Home" />
                        </div>
                        <div className='md:-m-[60px]'>
                            <p className="text-gray-600 font-normal text-4xl leading-6 tracking-tight md:mt-[130px] mt-[20px] text-[14px] ">Namaskar Kavita! "Begin your Sadhana journey here"</p>
                            <div className='flex mt-5'>
                                <div className="relative mb-2  flex items-center ">
                                    <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-[#FFA500] text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  md:p-2.5  p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Fill Sadhana"></input>
                                </div>
                                <div>
                                    <button className="px-3 py-1.5 bg-[#008080] text-white font-bold  text-2xl">
                                        <img src={arrow} width="35px" alt="Arrow" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center px-6 py-4'>
                    <div>
                        <p className="text-gray-600  md:text-3xl leading-14 tracking-tight text-[18px] font-bold  ">News/Blogs</p>
                    </div>
                    <div>
                        <p className='text-[#008080] font-normal text-xl leading-14 tracking-tight '>
                            View all
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <div className="text-center p-4 flex">
                            <div className="w-3/5">
                                <p className='md:text-2xl text-[12px] leading-14 tracking-tight mt-5 text-[#000000]'>
                                    Dive into a treasure trove of articles, videos, and stories that illuminate the path of devotion, wisdom, and community. Stay informed, enlightened, and connected as we embark on a journey of discovery together.
                                </p>
                            </div>
                            <div className="w-2/5 flex justify-center items-center">
                                <img src={hand} className='md:w-[250px] w-[150px]' alt="Hand-drawn" />
                            </div>
                        </div>
                        <div>
                            <p className='bg-[#FFA500] text-[12px] w-full py-2 px-1 text-white text-center'>|| Hare Krishna Hare Krishna Krishna Krishna Hare Hare ||</p>
                        </div>
                    </div>
                    <div className="text-center p-4">
                        <div className='flex justify-between items-center px-6'>
                            <div>
                                <p className="text-gray-600 font-normal text-3xl leading-14 tracking-tight">Events</p>
                            </div>
                            <div>
                                <p className='text-[#008080] font-normal text-lg leading-14 tracking-tight'>
                                    View all
                                </p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-b from-white via-[#FFF5E3] to-[#FFEDCC]">
                            <div className="text-left p-2 flex relative">
                                <div className="w-3/5 z-10 p-1">
                                    <p className='md:text-xl md:leading-10 text-[12px] tracking-tight'>
                                        Join us for a divine celebration of this sacred event will immerse you in the timeless teachings and joyous festivities associated with the divine appearance of Lord Krishna.<br /><br /> Date: 26 Aug <br />Time: 11 PM <br />Venue: ISCON Temple, Noida
                                    </p>
                                </div>
                                <div>
                                    <img src={events1} className="flex justify-center items-center md:w-[250px] w-[150px]" alt="Event 1" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center p-4">
                        <div>
                            <div className="text-left p-4 flex relative border-2 border-[#008080] rounded-2xl">
                                <div className="w-3/5 z-10">
                                    <p className='md:text-xl md:leading-14 text-[12px] tracking-tight'>
                                        "Join our ever-expanding community, a sanctuary where devotees from all walks of life come together to seek, learn, and grow on their spiritual journey, fostering deep connections and lifelong bonds."
                                    </p>
                                    <button className="rounded-lg px-4 py-2 bg-[#008080] text-white font-bold mt-5 text-2xl">
                                        <Link to="login">Join Us</Link>
                                    </button>
                                </div>
                                <div>
                                    <img src={flat} className="flex md:w-[250px] w-[160px] justify-center items-center absolute bottom-2 right-3" width="250px" alt="Flat" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[150px]'></div>
        </>
    );
}

export default LoginHome;
