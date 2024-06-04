import React from 'react'
import image from '../assets/heroSection.png'
import { Link } from 'react-router-dom'
import scheduler from '../assets/scheduleDate.png'
import diya from '../assets/diya.png'
import bgDiya from '../assets/bgForDiya.png'
import events from '../assets/events.png'
import resources from '../assets/resources.png'
import news from '../assets/news.png'

export default function Home() {
    return (
        <>
            <div>
                <div className="grid grid-cols-2 mr-4 mt-4">
                    <div>
                        <img src={image} width="600px" />
                    </div>
                    <div className="bg-gradient-to-r from-white via-[#FFFFFF] to-[#FFEDCC] rounded-2xl">
                        <p className="text-gray-600 font-normal text-4xl leading-14 tracking-tight mt-[130px] ">"Discover the profound <br />teachings and timeless <br />wisdom of ISKCON. Explore <br /> our offerings and deepen your <br />spiritual journey."</p>
                        <button className="rounded-lg px-5 py-3 bg-[#008080] text-white font-bold mt-5 text-2xl">
                            <Link to="login">Join Us</Link>
                        </button>
                    </div>

                </div>
            </div>


            <div className='bg-[#FFF5E3] m-4 rounded-2xl pb-8'>
                <div >
                    <p className="pl-20 pt-10 text-5xl  leading-6 tracking-tight">Daily prayers time at ISKCON temple</p>
                    <p className="pl-20 pr-20 text-2xl  tracking-wider mt-10 ">The daily fixed aarti times are typically based on traditional Vedic practices and are designed to align with specific periods of the day that are considered auspicious for offering worship to the Deities.</p>
                </div>
                <div className="flex gap-4 mt-6">
                    <div >
                        <img src={scheduler} className="w-[900px] pl-20 " />
                    </div>
                    <div className='relative'>
                        <img src={diya} className="w-[800px] absolute  bottom-0 -left-20" />
                        <img src={bgDiya} className="w-[500px] h-full overflow-x-hidden" />
                    </div>
                </div>
            </div>
            <div>
                <p className="font-bold pl-20 pt-10 text-3xl  leading-6 tracking-tight text-center text-[#333333] pb-2">Different programs of ISCON</p>
                <div className='flex justify-around mt-6' >
                    <div className="bg-[#008080] w-[200px] flex justify-center items-center h-[200px] rounded-xl flex-col ">
                        <img src={news} width="45px" height="45px" />
                        <p className='text-3xl  leading-6 tracking-tight text-white font-bold pt-4'>News/Blogs</p>
                    </div>
                    <div className="bg-[#008080] w-[200px] flex justify-center items-center h-[200px] rounded-xl flex-col ">
                        <img src={events} width="45px" height="45px" />
                        <p className='text-3xl  leading-6 tracking-tight text-white font-bold pt-4'>Events</p>
                    </div>
                    <div className="bg-[#008080] w-[200px] flex justify-center items-center h-[200px] rounded-xl flex-col ">
                        <img src={resources} width="45px" height="45px" />
                        <p className='text-3xl  leading-6 tracking-tight text-white font-bold pt-4'>Resources</p>
                    </div>


                </div>
            </div>
            


        </>

    )
}
