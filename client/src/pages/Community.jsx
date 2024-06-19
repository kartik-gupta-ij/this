import React from 'react'
import question from '../assets/question.png'
import arrow from '../assets/arrow.png'
import { FaArrowCircleUp } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { FaReplyAll } from "react-icons/fa";
function Community() {
    return (
        <>
            <div className='w-full flex justify-center items-center mt-15 rounded-sm'>
                <div className='w-4/5 '>
                    <div >
                        <div className='bg-[#FFEDCC] m-6 text-center flex flex-row justify-around items-center rounded-xl'>
                            <div className='flex w-[120px] h-[120px] bg-white rounded-full justify-center items-center  right-[160px]  border-4 border-[#FFA500]'>
                                <img src={question} width="40px" />
                            </div>
                            <div>
                                <p className='text-gray-600 font-normal text-4xl leading-14 tracking-tight p-10'>Ask Any Questionss</p>
                                <div className='flex justify-center items-center pb-10'>
                                    <div className="relative mb-2  flex items-center ">
                                        <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-[#FFA500] text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type Something..."></input>
                                    </div>
                                    <div>
                                        <button className=" px-3 py-1.5 bg-[#008080] text-white font-bold  text-2xl">
                                            <img src={arrow} width="35px" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center '>
                        <div className="relative  flex items-center w-full ml-6">
                            <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-[#FFA500] text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Any Questions..."></input>
                        </div>
                        <div className='mr-6'>
                            <button className=" px-3 py-2.5 bg-[#008080] text-white font-bold  text-2xl">
                                <img src={arrow} width="35px" />
                            </button>
                        </div>
                    </div>
                    <div className='w-full hidden md:flex flex-row justify-around mt-3 md:text-xl text-[12px]'>
                        <div className='bg-[#FFEDCC] py-1 md:px-3 px-1'>All Questions</div>
                        <div className='bg-[#FFEDCC] py-1 px-3'>My Questions</div>
                        <div className='bg-[#FFEDCC] py-1 px-3'>Unanswered Question’s</div>
                        <div className='bg-[#FFEDCC] py-1 px-3'>My Answers</div>
                    </div>
                    {/* Mobile view */}
                    <div className='w-full flex md:hidden flex-row justify-between gap-2 mt-3 md:text-xl text-[12px]'>
                        <div className='bg-[#FFEDCC] py-1 md:px-3 px-1'>All Q's</div>
                        <div className='bg-[#FFEDCC] py-1 px-1'>My Q's</div>
                        <div className='bg-[#FFEDCC] py-1 px-1'>Unanswered Q’s</div>
                        <div className='bg-[#FFEDCC] py-1 px-1'>My Answers</div>
                    </div>
                    <div className='w-full   border-2 border-[#FFA500] mt-5 p-5 rounded-xl'>
                        <div className='flex m-2'>
                            <div className='w-[45px] h-[45px] rounded-full bg-green-500 mx-3'>
                            </div>
                            <div>
                                <p className='text-2xl font-bold -mb-1'>Shivam</p>
                                <p>2 day ago</p>
                            </div>
                        </div>
                        <div className=''>
                            <p className='text-xl mx-6'> Can you recommend some devotional practices for building a stronger relationship with Lord Krishna?
                                Can you recommend some devotional practices for building a stronger relationship with Lord Krishna?
                            </p>
                        </div>
                        <div className='flex mt-3'>
                            <div className='flex ml-6 bg-[#FFEDCC]'>
                                <FaArrowCircleUp className='flex w-6 h-6' /> <span className='text-xl ml-1'>12</span>
                            </div>
                            <div className='flex ml-6 bg-[#FFEDCC]'>
                                <FaRegComments className='flex w-6 h-6' /> <span className='text-xl m1-1'>12</span>
                            </div>
                            <div className='flex ml-6 bg-[#FFEDCC]'>
                                <FaReplyAll className='flex w-6 h-6' /> <span className='text-xl ml-1'>12</span>
                            </div>
                        </div>
                    </div>

                    <div className='w-full   border-2 border-[#FFA500] mt-5 p-5 rounded-xl'>
                        <div className='flex m-2'>
                            <div className='w-[45px] h-[45px] rounded-full bg-green-500 mx-3'>
                            </div>
                            <div>
                                <p className='text-2xl font-bold -mb-1'>Shivam</p>
                                <p>2 day ago</p>
                            </div>
                        </div>
                        <div className=''>
                            <p className='text-xl mx-6'> Can you recommend some devotional practices for building a stronger relationship with Lord Krishna?
                                Can you recommend some devotional practices for building a stronger relationship with Lord Krishna?
                            </p>
                        </div>
                        <div className='flex mt-3'>
                            <div className='flex ml-6 bg-[#FFEDCC]'>
                                <FaArrowCircleUp className='flex w-6 h-6' /> <span className='text-xl ml-1'>12</span>
                            </div>
                            <div className='flex ml-6 bg-[#db701d]'>
                                <FaRegComments className='flex w-6 h-6' /> <span className='text-xl m1-1'>12</span>
                            </div>
                            <div className='flex ml-6 bg-[#FFEDCC]'>
                                <FaReplyAll className='flex w-6 h-6' /> <span className='text-xl ml-1'>12</span>
                            </div>
                        </div>
                        <div className='bg-[#FFEDCC] h-[1px] w-7/10 mx-auto my-2 '></div>
                        <p className='text-xl font-bold'>Answers</p>
                        <div className='w-9/10 bg-[#FFEDCC] mt-5 p-5 rounded-xl'>
                            <div className='flex m-2'>
                                <div className='w-[45px] h-[45px] rounded-full bg-green-500 mx-3'>
                                </div>
                                <div>
                                    <p className='text-2xl font-bold -mb-1'>Shivam</p>
                                    <p>2 day ago</p>
                                </div>
                            </div>
                            <div className=''>
                                <p className='text-xl mx-6'> Can you recommend some devotional practices for building a stronger relationship with Lord Krishna?
                                    Can you recommend some devotional practices for building a stronger relationship with Lord Krishna?
                                </p>
                            </div>
                        </div>
                        <div className='w-9/10 bg-[#FFEDCC] mt-5 p-5 rounded-xl'>
                            <div className='flex m-2'>
                                <div className='w-[45px] h-[45px] rounded-full bg-green-500 mx-3'>
                                </div>
                                <div>
                                    <p className='text-2xl font-bold -mb-1'>Shivam</p>
                                    <p>2 day ago</p>
                                </div>
                            </div>
                            <div className=''>
                                <p className='text-xl mx-6'> Can you recommend some devotional practices for building a stronger relationship with Lord Krishna?
                                    Can you recommend some devotional practices for building a stronger relationship with Lord Krishna?
                                </p>
                            </div>
                        </div>
                        <div className='w-9/10 bg-[#FFEDCC] mt-5 p-5 rounded-xl'>
                            <div className='flex m-2'>
                                <div className='w-[45px] h-[45px] rounded-full bg-green-500 mx-3'>
                                </div>
                                <div>
                                    <p className='text-2xl font-bold -mb-1'>Shivam</p>
                                    <p>2 day ago</p>
                                </div>
                            </div>
                            <div className=''>
                                <p className='text-xl mx-6'> Can you recommend some devotional practices for building a stronger relationship with Lord Krishna?
                                    Can you recommend some devotional practices for building a stronger relationship with Lord Krishna?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full   border-2 border-[#FFA500] mt-5 p-5 rounded-xl'>
                        <div className='flex m-2'>
                            <div className='w-[45px] h-[45px] rounded-full bg-green-500 mx-3'>
                            </div>
                            <div>
                                <p className='text-2xl font-bold -mb-1'>Shivam</p>
                                <p>2 day ago</p>
                            </div>
                        </div>
                        <div className=''>
                            <p className='text-xl mx-6'> Can you recommend some devotional practices for building a stronger relationship with Lord Krishna?
                                Can you recommend some devotional practices for building a stronger relationship with Lord Krishna?
                            </p>
                        </div>
                        <div className='flex mt-3'>
                            <div className='flex ml-6 bg-[#FFEDCC]'>
                                <FaArrowCircleUp className='flex w-6 h-6' /> <span className='text-xl ml-1'>12</span>
                            </div>
                            <div className='flex ml-6 bg-[#FFEDCC]'>
                                <FaRegComments className='flex w-6 h-6' /> <span className='text-xl m1-1'>12</span>
                            </div>
                            <div className='flex ml-6 bg-[#FFEDCC]'>
                                <FaReplyAll className='flex w-6 h-6' /> <span className='text-xl ml-1'>12</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Community
