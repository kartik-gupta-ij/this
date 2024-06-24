import React, { useEffect, useState } from 'react'
import question from '../assets/question.png'
import arrow from '../assets/arrow.png'
import { FaArrowCircleUp } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { FaReplyAll } from "react-icons/fa";
import axios from 'axios'
import { formatDistanceToNow } from 'date-fns';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Community() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const { currentUser } = useSelector(state => state.user)
    console.log(currentUser);
    const [activeLink, setActiveLink] = useState('community');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    const [questions, setQuestions] = useState([]);
    const [questionInput, setQuestionInput] = useState("");

    const formatTimeAgo = (timestamp) => {
        try {
            return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
        } catch (error) {
            console.error('Invalid time value', error);
            return 'Invalid date';
        }
    };
    const getQuestionsAndComments = async () => {
        try {
            const res = await axios.get("/api/comment/allquestion");

            setQuestions(res?.data?.data);
            console.log("questions")
            console.log(questions);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getQuestionsAndComments();
    }, [])

    const createQuestion = async () => {
        const formData = { title: questionInput, comments: [] }
        console.log(formData);
        try {
            const res = await axios.post("/api/comment/question", formData, {
                headers: {
                    Authorization: currentUser?.token
                }
            })
            setQuestions(prevQuestions => [...prevQuestions, res?.data?.data]);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(questions);

    return (
        <>
            <div className='w-full flex justify-center items-center'>
                <div className='md:hidden w-[300px] h-[46px] flex justify-between border-2 border-[#008080] mt-2'>
                    <div
                        className={`w-1/2 text-center ${activeLink === 'chatroom' ? 'bg-[#008080]' : ''}`}
                        onClick={() => handleLinkClick('chatroom')}
                    >
                        <Link to='/chatroom'>ChatRoom</Link>
                    </div>
                    <div
                        className={`w-1/2 text-center ${activeLink === 'community' ? 'bg-[#008080]' : ''}`}
                        onClick={() => handleLinkClick('community')}
                    >
                        <Link to='/community'>Q & A</Link>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center mt-15 rounded-sm'>

                <div className='w-4/5'>
                    <div >
                        <div className='bg-[#FFEDCC] m-6 text-center hidden md:flex flex-row justify-around items-center rounded-xl'>
                            <div className='flex w-[120px] h-[120px] bg-white rounded-full justify-center items-center  right-[160px]  border-4 border-[#FFA500]'>
                                <img src={question} width="40px" />
                            </div>
                            <div>
                                <p className='text-gray-600 font-normal text-4xl leading-14 tracking-tight p-10'>Ask Any Questionss</p>
                                <div className='flex justify-center items-center pb-10'>
                                    <div className="relative mb-2  flex items-center ">
                                        <input type="text" onInput={(e) => setQuestionInput(e.target.value)} id="email-address-icon" class="bg-gray-50 border border-gray-300 text-[#FFA500] text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type Something..."></input>
                                    </div>
                                    <div>
                                        <button className=" px-3 py-1.5 bg-[#008080] text-white font-bold  text-2xl">
                                            <img src={arrow} width="35px" onClick={createQuestion} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#FFEDCC] -m-2 mt-[70px] text-center md:hidden flex flex-row justify-around items-center rounded-xl'>
                            <div className='absolute flex w-[100px] h-[100px] bg-white rounded-full justify-center items-centers top-[120px]  border-4 border-[#FFA500]'>
                                <div>
                                    <img src={question} className='mt-6 w-[30px] h-[40px]' />
                                </div>
                            </div>
                            <div>
                                <p className='text-gray-600 font-normal text-2xl leading-14 tracking-tight pt-10 pb-3'>Ask Any Questionss</p>
                                <div className='flex justify-center items-center pb-5'>
                                    <div className="relative   flex items-center ">
                                        <input type="text" onInput={(e) => setQuestionInput(e.target.value)} id="email-address-icon" class="bg-gray-50 border border-gray-300 text-[#FFA500] text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type Something..."></input>
                                    </div>
                                    <div className=''>
                                        <button className=" px-3 py-1.5 bg-[#008080] text-white font-bold  text-2xl">
                                            <img src={arrow} width="30px" onClick={createQuestion} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-5 '>
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
                    {questions?.map((item, key) => (
                        <div key={key} className='w-full border-2 border-[#FFA500] md:mt-5 mt-2 md:p-5 p-2 rounded-xl'>
                            <div className='flex md:m-2 m-0.5 items-center'>
                                <div className='md:w-[45px] md:h-[45px] w-[38px] h-[38px] rounded-full bg-green-500 mx-3'></div>
                                <div>
                                    <p className='md:text-2xl text-lg font-bold -mb-1'>{item?.userId?.name}</p>
                                    <p>{formatTimeAgo(item?.createdAt)}</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-xl mx-6'>{item?.title}</p>
                            </div>
                            <div className='flex mt-3'>
                                <div className='flex ml-6 bg-[#FFEDCC]'>
                                    <FaArrowCircleUp className='flex w-6 h-6' /> <span className='text-xl ml-1'>12</span>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex ml-6 bg-[#db701d] p-2 cursor-pointer' onClick={handleClick}>
                                        <FaRegComments className='flex w-6 h-6' /> <span className='text-xl ml-1'>12</span>
                                    </div>

                                </div>
                                <div className='flex ml-6 bg-[#FFEDCC]'>
                                    <FaReplyAll className='flex w-6 h-6' /> <span className='text-xl ml-1'>12</span>
                                </div>
                            </div>
                            {isOpen && (
                                <form className='ml-6 mt-2' >
                                    <input
                                        type='text'
                                        className='p-2 border rounded w-full'

                                        placeholder='Enter your comment'
                                    />
                                    <button
                                        type='submit'
                                        className='mt-2 p-2 bg-[#db701d] text-white rounded'
                                    >
                                        Submit
                                    </button>
                                </form>
                            )}
                            <div className='bg-[#FFEDCC] h-[1px] w-7/10 mx-auto my-2 '></div>
                            <p className='text-xl font-bold'>Answers</p>
                            {item?.comments?.length === 0 ? (
                                <></>
                            ) : (
                                item?.comments?.map((comment, commentKey) => (
                                    <div key={commentKey} className='w-9/10 bg-[#FFEDCC] mt-5 p-5 rounded-xl'>
                                        <div className='flex m-2'>
                                            <div className='w-[45px] h-[45px] rounded-full bg-green-500 mx-3'></div>
                                            <div>
                                                <p className='text-2xl font-bold -mb-1'>{comment?.userId?.name}</p>
                                                <p>{formatTimeAgo(comment?.createdAt)}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-xl mx-6'>{comment?.text}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className='md:hidden h-[150px]'></div>
        </>
    )
}
export default Community