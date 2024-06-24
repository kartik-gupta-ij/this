import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Test() {

    const [questions, setQuestions] = useState([]);
    const {currentUser} = useSelector(state => state.user)

    const getAllMcq = async () => {
        try {
            const res = await axios.get("/api/mcq");
            setQuestions(res?.data?.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllMcq();
    }, [])

    const arr = Array(10).fill('');

    const [selectedOptions, setSelectedOptions] = useState(arr);

    const handleOptionClick = (questionIndex, optionIndex) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[questionIndex] = optionIndex;
        setSelectedOptions(newSelectedOptions);
        console.log(`Question ${questionIndex + 1}: Option ${optionIndex + 1} selected`);
    };
    console.log('Updated selected options:', selectedOptions, currentUser?.token);

    var points = 0;

    const submitHandler = async () => {
        for(let i=0; i<10; i++){
            if(questions[i].answer === questions[i].options[selectedOptions[i]]) points++;
        }
        const pointData = {points: points};
        try {
            
            const res = await axios.post("/api/mcq/submit", pointData, {
                headers: {
                    Authorization: currentUser?.token
                }
            })
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    console.log(currentUser);



    return (
        <>
            <p className='w-full text-[28px] text-center'>Test Paper</p>

            {!currentUser.rest.isTestGiven ? 
            <div className='w-full flex flex-col items-center'>
                <div className='mx-3'>
                    {questions.map((q, questionIndex) => (
                        <div key={questionIndex} className="bg-[#FFEDCC] md:p-4 p-2 md:m-4 m-2 rounded-2xl">
                            <h3 className='bg-white px-5 py-1 rounded-lg m-2 md:text-[20px] text-[16px]'>{q.title}</h3>
                            <ul>
                                {q?.options?.map((option, optionIndex) => (
                                    <div
                                        key={optionIndex}
                                        className={`bg-white px-2 py-1 rounded-lg m-1 flex items-center cursor-pointer ${selectedOptions[questionIndex] === optionIndex ? 'bg-green-500 border-2 border-green-500' : ''
                                            }`}
                                        onClick={() => handleOptionClick(questionIndex, optionIndex)}
                                    >
                                        <div className={`w-[15px] h-[15px] rounded-full flex justify-center items-center mr-2 ${selectedOptions[questionIndex] === optionIndex ? 'bg-green-500 border-2 border-green-500' : 'bg-[#FFA500]'
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
                    <button  onClick={submitHandler} className="rounded-lg md:px-5 md:py-3 px-1 py-1 bg-[#008080] text-white font-bold mt-5 text-xl">
                        Submit
                    </button>
                </div>
            </div> :
             <div className="w-full flex flex-col items-center justify-center mt-10">
             <div className="bg-[#FFEDCC] p-6 rounded-xl shadow-md text-center">
                 <h2 className="text-2xl font-bold text-[#008080] mb-4">Test Completed!</h2>
                 <p className="text-xl font-semibold text-gray-800">Your marks are:</p>
                 <p className="text-3xl font-bold text-[#db701d]">{currentUser.rest.points}</p>
             </div>
         </div>
            }
            <div className='w-full h-[150px]'></div>
                    <button className="rounded-lg md:px-5 md:py-3 px-1 py-1 bg-[#008080] text-white font-bold mt-5 text-xl">
                        Submit
                    </button>
                </div>
            </div>
            <div className='w-full md:hidden h-[150px]'></div>

        </>
    );
}
