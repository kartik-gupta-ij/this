import React, { useEffect, useState } from 'react';
import question from '../assets/question.png';
import arrow from '../assets/arrow.png';
import { FaArrowCircleUp, FaRegComments, FaReplyAll } from "react-icons/fa";
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Community() {
    const [openQuestionId, setOpenQuestionId] = useState(null);
    const [activeLink, setActiveLink] = useState('community');
    const [questions, setQuestions] = useState([]);
    const [questionInput, setQuestionInput] = useState("");
    const [commentInput, setCommentInput] = useState("");
    const { currentUser } = useSelector(state => state.user);

    useEffect(() => {
        getQuestionsAndComments();
    }, []);

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
        } catch (error) {
            console.log(error);
        }
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const toggleCommentInput = (questionId) => {
        setOpenQuestionId(prevId => prevId === questionId ? null : questionId);
    };

    const createQuestion = async () => {
        const formData = { title: questionInput, comments: [] };
        try {
            const res = await axios.post("/api/comment/question", formData, {
                headers: {
                    Authorization: currentUser?.token
                }
            });
            setQuestions(prevQuestions => [...prevQuestions, res?.data?.data]);
            setQuestionInput("");
        } catch (error) {
            console.log(error);
        }
    };

    const createComment = async (questionId, e) => {
        e.preventDefault();
        const comment = { text: commentInput };

        try {
            const res = await axios.post(`/api/comment/comment/${questionId}`, comment, {
                headers: {
                    Authorization: currentUser?.token
                }
            });

            setQuestions(prevQuestions =>
                prevQuestions?.map(q =>
                    q._id === questionId ? { ...q, comments: [...q.comments, res.data.comment] } : q
                )
            );

            setCommentInput("");
            setOpenQuestionId(null); // Close the comment input after submission
        } catch (error) {
            console.log(error);
        }
    };

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
                    <div>
                        <div className='bg-[#FFEDCC] m-6 text-center flex flex-row justify-around items-center rounded-xl'>
                            <div className='flex w-[120px] h-[120px] bg-white rounded-full justify-center items-center border-4 border-[#FFA500]'>
                                <img src={question} width="40px" alt="question icon" />
                            </div>
                            <div>
                                <p className='text-gray-600 font-normal text-4xl leading-14 tracking-tight p-10'>Ask Any Questions</p>
                                <div className='flex justify-center items-center pb-10'>
                                    <div className="relative mb-2 flex items-center">
                                        <input
                                            type="text"
                                            value={questionInput}
                                            onChange={(e) => setQuestionInput(e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-[#FFA500] text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="Type Something..."
                                        />
                                    </div>
                                    <button className="px-3 py-1.5 bg-[#008080] text-white font-bold text-2xl" onClick={createQuestion}>
                                        <img src={arrow} width="35px" alt="arrow icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-5'>
                        <div className="relative flex items-center w-full ml-6">
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-[#FFA500] text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Search Any Questions..."
                            />
                        </div>
                        <button className="px-3 py-2.5 bg-[#008080] text-white font-bold text-2xl mr-6">
                            <img src={arrow} width="35px" alt="arrow icon" />
                        </button>
                    </div>
                    <div className='w-full hidden md:flex flex-row justify-around mt-3 md:text-xl text-[12px]'>
                        <div className='bg-[#FFEDCC] py-1 md:px-3 px-1'>All Questions</div>
                        <div className='bg-[#FFEDCC] py-1 px-3'>My Questions</div>
                        <div className='bg-[#FFEDCC] py-1 px-3'>Unanswered Questions</div>
                        <div className='bg-[#FFEDCC] py-1 px-3'>My Answers</div>
                    </div>
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
                                    <div className='flex ml-6 bg-[#db701d] p-2 cursor-pointer' onClick={() => toggleCommentInput(item._id)}>
                                        <FaRegComments className='flex w-6 h-6' /> <span className='text-xl ml-1'>{item?.comments?.length}</span>
                                    </div>
                                </div>
                                <div className='flex ml-6 bg-[#FFEDCC]'>
                                    <FaReplyAll className='flex w-6 h-6' /> <span className='text-xl ml-1'>12</span>
                                </div>
                            </div>
                            {openQuestionId === item._id && (
                                <form className='ml-6 mt-2' onSubmit={(e) => createComment(item._id, e)}>
                                    <textarea
                                        value={commentInput}
                                        onChange={(e) => setCommentInput(e.target.value)}
                                        className='w-full h-[100px] p-2 border rounded'
                                        placeholder='Type your comment...'
                                    ></textarea>
                                    <button
                                        type='submit'
                                        className='px-3 py-1.5 bg-[#008080] text-white font-bold text-xl mt-2'
                                    >
                                        Post Comment
                                    </button>
                                </form>
                            )}
                            {item?.comments?.map((comment, index) => (
                                <div key={index} className='ml-10 mt-2'>
                                    <div className='flex items-center'>
                                        <div className='md:w-[35px] md:h-[35px] w-[30px] h-[30px] rounded-full bg-gray-300 mx-3'></div>
                                        <div>
                                            <p className='text-lg font-semibold -mb-1'>{comment?.user?.name}</p>
                                            <p>{formatTimeAgo(comment?.createdAt)}</p>
                                        </div>
                                    </div>
                                    <div className='ml-6'>
                                        <p>{comment?.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Community;
