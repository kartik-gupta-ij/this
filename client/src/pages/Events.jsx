import React from 'react'
import { Link } from 'react-router-dom'
import events1 from '../assets/events1.png';
export default function Events() {
    return (
        <div className='w-full'>
            <p className='text-3xl  leading-6 tracking-tight  font-bold mt-10 ml-10' >Birthday & Anniversary</p>
            <div className='w-8/10 mx-auto'>
                <div className='flex flex-row m-10 justify-around bg-[#FFEDCC] p-6'>
                    <div className='mr-6 mb-6'>
                        <p className='text-xl text-[#FFA500]  leading-6 tracking-tight   '>"Celebrating 35 years"</p>
                        <p className='text-xl  leading-6 tracking-tight  '>Wishing you a joyous birthday filled with love, laughter, and blessings. May this year be your best one yet!</p>
                        <p className='text-xl  leading-6 tracking-tight   '>Anurag Anant</p>
                        <p className='text-lg  leading-6 tracking-tight text-[#008080]  '>Birthday (15 April)</p>
                        <p className='text-lg  leading-6 tracking-tight  '>Chairman of the management community of ISCON
                        </p>
                    </div>
                    <div className='ml-10 flex flex-col justify-center items-center'>
                        <div className='w-[60px] h-[60px] bg-red-400 rounded-full'></div>
                        <div>
                            <button className="rounded-lg px-5 py-3 bg-[#008080] text-white font-bold mt-5 text-xl">
                                <Link to="login">Wish&nbsp;Now</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row m-10 justify-around bg-[#FFEDCC] p-6'>
                    <div className='mr-6 mb-6'>
                        <p className='text-xl text-[#FFA500]  leading-6 tracking-tight   '>"Divine Union: Happy Anniversary, Dear Devotees!" </p>
                        <p className='text-xl  leading-6 tracking-tight  '>"Wishing a blissful anniversary to two souls united in devotion! May your love continue to shine bright, guided by the divine light of Lord Krishna. Here's to many more years of happiness, love, and spiritual growth together. Jai Radha-Krishna!"</p>
                        <p className='text-xl  leading-6 tracking-tight   '>Shiv Kumar Singh</p>
                        <p className='text-lg  leading-6 tracking-tight text-[#008080]  '>Marriage Anniversary (15 April)</p>
                        <p className='text-lg  leading-6 tracking-tight  '>Devotee of community of ISCON
                        </p>
                    </div>
                    <div className='ml-10 flex flex-col justify-center items-center'>
                        <div className='w-[60px] h-[60px] bg-red-400 rounded-full'></div>
                        <div>
                            <button className="rounded-lg px-5 py-3 bg-[#008080] text-white font-bold mt-5 text-xl">
                                <Link to="login">Wish&nbsp;Now</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-3xl  leading-6 tracking-tight  font-bold ml-6' >Upcoming festivals</p>
            <div className='full flex justify-center  flex-col mt-8'>
                <div className="w-8/10 mx-10 bg-gradient-to-b from-[#FFF5E3] via-[#FFF5E3] to-[#FFEDCC]">
                    <div className="text-left p-4 flex relative ">
                        <div className="w-4/5 z-10">
                        <p className='text-xl font-bold'>~JANMASHTAMI~ </p>
                            <p className='text-xl leading-14 tracking-tight'>
                                Join us for a divine celebration of this sacred event will immerse you in the timeless teachings and joyous festivities associated with the divine appearance of Lord Krishna.<br /><br /> Date: 26 Aug <br />Time: 11 PM <br />Venue: ISCON Temple, Noida
                            </p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={events1} className="flex justify-center items-center" width="250px" alt="Event 1" />
                        </div>
                    </div>
                </div>

                <div className="w-8/10 mx-10 bg-gradient-to-b from-[#FFF5E3] via-[#FFF5E3] to-[#FFEDCC] mt-6">
                    <div className="text-left p-4 flex relative ">
                        <div className="w-4/5 z-10">
                        <p className='text-xl font-bold'>~Ratha Yatra Festival~ </p>
                            <p className='text-xl leading-14 tracking-tight'>
                                Join us for a divine celebration of this sacred event will immerse you in the timeless teachings and joyous festivities associated with the divine appearance of Lord Krishna.<br /><br /> Date: 26 Aug <br />Time: 11 PM <br />Venue: ISCON Temple, Noida
                            </p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={events1} className="flex justify-center items-center" width="250px" alt="Event 1" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
