import React from 'react';
import before from '../assets/beforeLogo.png';
import sadhna from '../assets/Sadhana.png';
import navbar from '../assets/navbar.png';
import { Link } from 'react-router-dom';
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import home from '../assets/home.svg'
import sadhana from '../assets/sadhana.svg';
import society from '../assets/sociaty.svg'
import events from '../assets/events.svg'
import assets from '../assets/assets.svg'

export default function Footer() {
    return (
        <>
            <div className='relative hidden md:block w-full bg-[#FFA500] mt-5 bg-right-top bg-no-repeat bg-contain rounded-tr-[120px]' style={{ backgroundImage: `url(${navbar})` }}>
                <div className="flex items-center">
                    <Link to="/" className="flex items-center ml-4 mt-5">
                        <img src={before} alt="Logo" loading="lazy" width="100px" className='mr-2' />
                        <img src={sadhna} alt="sadhana" loading="lazy" width="150px" />
                    </Link>
                </div>
                <div className="grid grid-cols-4 mt-4 p-4">
                    <div className="p-4">
                        <p className='text-2xl font-bold'>Contact Us</p>
                        <p className='text-xl text-[#3C3C3C]'>Located -</p>
                        <p className='text-xl text-[#3C3C3C]'>A-5, Maharaja Agrasen Marg, Opposite NTPC office, Block A, Sector 33, Noida, Uttar Pradesh 201301</p>
                        <p className='text-xl text-[#3C3C3C]'>Email -</p>
                        <p className='text-xl text-[#3C3C3C]'>connect@isconnoida.org</p>
                    </div>
                    <div className="p-4">
                        <p className='text-2xl font-bold'>Quick Links</p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#'>Fill Sadhna</Link>
                        </p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#'>My Challenge</Link>
                        </p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#'>Ask Questions</Link>
                        </p>
                    </div>
                    <div className="p-4">
                        <p className='text-2xl font-bold'>Navigation</p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#'>Home</Link>
                        </p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#'>Sadhna</Link>
                        </p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#'>Assets</Link>
                        </p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#'>Events</Link>
                        </p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#'>Community</Link>
                        </p>
                    </div>
                    <div className="p-4">
                        <p className='text-2xl font-bold'>Social</p>
                        <p className='text-xl mt-2 flex gap-1 items-center'>
                            <IoLogoFacebook />
                            <Link to='#' className='text-[#3C3C3C]'>Facebook</Link>
                        </p>
                        <p className='text-xl mt-2 flex gap-1 items-center'>
                            <IoLogoTwitter />
                            <Link to='#' className='text-[#3C3C3C]'>Twitter</Link>
                        </p>
                        <p className='text-xl mt-2 flex gap-1 items-center'>
                            <FaLinkedin />
                            <Link to='#' className='text-[#3C3C3C]'>LinkedIn</Link>
                        </p>
                        <p className='text-xl mt-2 flex gap-1 items-center'>
                            <FaInstagram />
                            <Link to='#' className='text-[#3C3C3C]'>Instagram</Link>
                        </p>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-white'></div>
                <div className='grid grid-cols-3 px-4 py-4 text-center text-white text-lg'>
                    <div>Copyright 2024 All rights reserved</div>
                    <div>Terms & Conditions</div>
                    <div>Privacy Policy</div>
                </div>
            </div>
            {/* Mobile View */}
            <div className="md:hidden w-auto fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300">
                <div className="flex space-x-6 justify-center items-center py-4">
                    <div className="flex flex-col items-center">
                        <img src={home} alt="home" className="mb-1" />
                        <Link to="/home" className="text-zinc-600 dark:text-zinc-300">Home</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={sadhana} alt="sadhna" className="mb-1" />
                        <Link to="/sadhna" className="text-zinc-600 dark:text-zinc-300">Sadhna</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={society} alt="society" className="mb-1" />
                        <Link to="/community" className="text-zinc-600 dark:text-zinc-300">Society</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={events} alt="events" className="mb-1" />
                        <Link to="/events" className="text-zinc-600 dark:text-zinc-300">Events</Link>
                    </div>
                    <div className="flex flex-col items-center bg-yellow-100 dark:bg-zinc-800 p-2 rounded-md">
                        <img src={assets} alt="assets" className="mb-1" />
                        <Link to="/assets" className="text-yellow-600 dark:text-yellow-400">Assets</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
