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
                <div className="grid grid-cols-2 mr-4 mt-4 font-inria">
                    <div>
                        <img src={image} width="600px" />
                    </div>
                    <div className="md:bg-gradient-to-r from-white via-[#FFFFFF] to-[#FFEDCC] rounded-2xl">
                        <p className="text-[#6A6A6A] -ml-3 font-normal md:text-4xl leading-14  md:mt-[130px] text-[14px] mt-6 leading-6 tracking-wide text-left">Discover the profound teachings and timeless wisdom of ISKCON. Explore our offerings and deepen your spiritual journey.</p>
                        <button className="rounded-lg md:px-5 md:py-3 px-3 py-2 bg-[#008080] text-white font-bold mt-5 md:text-2xl text-[16px]">
                            <Link to="login">Join Us</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className='bg-[#FFF5E3] m-4 rounded-2xl pb-8'>
                <div className=''>
                    <p className="md:pl-20 pl-8 pt-10 md:text-5xl text-[16px] leading-6 tracking-tight  font-bold">Daily prayers time at ISKCON temple</p>
                    <p className="md:pl-20 pl-8 md:pr-20 pr-8 md:text-2xl text-[10px]  md:mt-10 mt-4 text-[#6A6A6A] leading-4 tracking-tight text-left">The daily fixed aarti times are typically based on traditional Vedic practices and are designed to align with specific periods of the day that are considered auspicious for offering worship to the Deities.</p>
                </div>
                <div className="flex gap-4 mt-6">
                    <div >
                        <img src={scheduler} className="w-[900px] md:pl-20 pl-10 " />
                    </div>
                    <div className='relative'>
                        <img src={diya} className="w-[800px] absolute  bottom-0 md:-left-20 -left-10" />
                        <img src={bgDiya} className="w-[500px] h-full overflow-x-hidden" />
                    </div>
                </div>
            </div>
            <div className='mb-[150px] md:mb-0'>
                <p className="font-bold  pt-10 md:text-3xl text-[16px] leading-6 tracking-tight text-center text-[#333333] pb-2">Different programs of ISCON</p>
                <div className='flex justify-around mt-6' >
                    <div className="bg-[#008080] md:w-[200px] w-[80px] md:h-[200px] h-[72px] flex justify-center items-center  rounded-xl flex-col ">
                        <img src={news} className='w-[24px] h-[24px]' />
                        <p className='md:text-3xl text-[12px]  leading-6 tracking-tight text-white font-bold '>News/Blogs</p>
                    </div>
                    <div className="bg-[#008080] md:w-[200px] w-[80px] md:h-[200px] h-[72px] flex justify-center items-center rounded-xl flex-col ">
                        <img src={events} className='w-[24px] h-[24px]' />
                        <p className='md:text-3xl text-[12px]  leading-6 tracking-tight text-white font-bold '>Events</p>
                    </div>
                    <div className="bg-[#008080] md:w-[200px] w-[80px] md:h-[200px] h-[72px] flex justify-center items-center rounded-xl flex-col ">
                        <img src={resources} className='w-[24px] h-[24px]' />
                        <p className='md:text-3xl text-[12px]  leading-6 tracking-tight text-white font-bold '>Resources</p>
                    </div>
                </div>
            </div>
            


        </>

    )
}
