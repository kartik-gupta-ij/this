import React from 'react'
import book1 from '../assets/book1.png'
import book2 from '../assets/book2.png'
import book3 from '../assets/book3.png'
import book4 from '../assets/book4.png'
import book5 from '../assets/book5.png'
import book6 from '../assets/book6.png'
import book7 from '../assets/book7.png'
import book8 from '../assets/book8.png'
import { Link } from 'react-router-dom'

export default function Assets() {
    return (
        <div className='mt-5'>
            <div className='flex justify-between items-center px-6 py-4 '>
                <div>
                    <p className="text-gray-600 font-normal text-3xl leading-14 tracking-tight  ">Spiritual library</p>
                </div>
                <div>
                    <p className='text-[#008080] font-normal text-xl leading-14 tracking-tight '>
                        View all
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-5 mx-6'>
                <div>
                    <img src={book1} />
                </div>
                <div>
                    <img src={book2} />
                </div>
                <div>
                    <img src={book3} />
                </div>
                <div>
                    <img src={book4} />
                </div>
            </div>
            <div className='flex justify-between items-center px-6 py-4 '>
                <div>
                    <p className="text-gray-600 font-normal text-3xl leading-14 tracking-tight  ">Blogs</p>
                </div>
                <div>
                    <p className='text-[#008080] font-normal text-xl leading-14 tracking-tight '>
                        View all
                    </p>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gird-col-1 gap-5 mx-6'>
                <div className='flex gap-4 bg-[#FFEDCC] p-4'>
                    <div className='p-4'>
                        <img src={book5} />
                    </div>
                    <div className='p-4'>
                        <p className='md:text-xl text-[11px]'>
                            Why is Bhagwad Geeta should be read by every person to get useful insights?
                        </p>
                        <button className="rounded-lg px-2 py-1 bg-[#008080] text-white  mt-2 text-md">
                            <Link to="login">Read more</Link>
                        </button>
                    </div>

                </div>
                <div className='flex gap-4 bg-[#FFEDCC] md:p-4 p-1'>
                    <div className='md:p-4 p-1'>
                        <img src={book6} className='w-[150px] h-[101px]'/>
                    </div>
                    <div className='md:p-4 p-1'>
                        <p className='md:text-xl text-[11px]'>
                            Why is Bhagwad Geeta should be read by every person to get useful insights?
                        </p>
                        <button className="rounded-lg px-2 py-1 bg-[#008080] text-white  mt-2 text-md">
                            <Link to="login">Read more</Link>
                        </button>
                    </div>

                </div>
                <div className='flex gap-4 bg-[#FFEDCC] p-4'>
                    <div className='p-4'>
                        <img src={book7} />
                    </div>
                    <div className='p-4'>
                        <p className='md:text-xl text-[11px]'>
                            Why is Bhagwad Geeta should be read by every person to get useful insights?
                        </p>
                        <button className="rounded-lg px-2 py-1 bg-[#008080] text-white  mt-2 text-md">
                            <Link to="login">Read more</Link>
                        </button>
                    </div>

                </div>
                <div className='flex gap-4 bg-[#FFEDCC] p-4'>
                    <div className='p-4'>
                        <img src={book8} />
                    </div>
                    <div className='p-4'>
                        <p className='md:text-xl text-[11px]'>
                            Why is Bhagwad Geeta should be read by every person to get useful insights?
                        </p>
                        <button className="rounded-lg px-2 py-1 bg-[#008080] text-white  mt-2 text-md">
                            <Link to="login">Read more</Link>
                        </button>
                    </div>

                </div>
            </div>
            <div
                class="bg-orange-500 p-6 rounded-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
                <div class="flex flex-col items-center space-y-2">
                    <div class="bg-white p-4 rounded-lg flex items-center justify-center">
                        <img src="https://placehold.co/50x50" alt="Add Image" class="h-12 w-12" />
                    </div>
                    <span class="text-white">Add Image</span>
                </div>
                <div class="flex flex-col space-y-4 flex-grow">
                    <input
                        type="text"
                        placeholder="Name of event"
                        class="p-2 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
                    />
                    <textarea
                        placeholder="Content of the event like venue, time, date, etc."
                        class="p-2 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
                    ></textarea>
                    <button class="bg-teal-600 text-white p-2 rounded-lg">Upload blog</button>
                </div>
            </div>

        </div>
    )
}
