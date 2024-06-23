import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Test() {

    const [questions, setQuestions] = useState([]);

    const getAllMcq = async () => {
        try {
            const res = await axios.get("/api/mcq");
            // console.log(res?.data);
            setQuestions(res?.data?.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllMcq();
    }, [])



    const arr = Array(10).fill('');
// console.log(arr);
    

    const [selectedOptions, setSelectedOptions] = useState(arr);

    const handleOptionClick = (questionIndex, optionIndex) => {
        console.log(questionIndex, optionIndex, selectedOptions);
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[questionIndex] = optionIndex;
        setSelectedOptions(newSelectedOptions);
    };


    return (
        <>
            <p className='w-full text-[28px] text-center'>Test Paper</p>
            <div className='w-full flex flex-col items-center'>
                <div className='mx-3'>
                    {questions.map((q, questionIndex) => (
                        <div key={questionIndex} className="bg-[#FFEDCC] md:p-4 p-2 md:m-4 m-2 rounded-2xl">
                            <h3 className='bg-white px-5 py-1 rounded-lg m-2 md:text-[20px] text-[16px]'>{q.title}</h3>
                            <ul>
                                {q?.options?.map((option, optionIndex) => (
                                    <div
                                        key={optionIndex}
                                        className={`bg-white px-2 py-1 rounded-lg m-1 flex items-center cursor-pointer ${
                                            selectedOptions[questionIndex] === optionIndex ? 'bg-green-500 border-2 border-green-500' : ''
                                        }`}
                                        onClick={() => handleOptionClick(questionIndex, optionIndex)}
                                    >
                                        <div className={`w-[15px] h-[15px] rounded-full flex justify-center items-center mr-2 ${
                                            selectedOptions[questionIndex] === optionIndex ? 'bg-green-500 border-2 border-green-500' : 'bg-[#FFA500]'
                                        }`}>
                                            <div className='w-[9px] h-[9px] bg-white rounded-full'></div>
                                        </div>
                                        <div className='md:text-[16px] text-[14px]'>
                                            {option}
                                        </div>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div>
                            <button className="rounded-lg md:px-5 md:py-3 px-1 py-1 bg-[#008080] text-white font-bold mt-5 text-xl">
                                Submit
                            </button>
                        </div>
            </div>
            <div className='w-full h-[150px]'></div>
        </>
    );
}
