import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Test() {
    const [questions, setQuestions] = useState([]);
    const { currentUser } = useSelector(state => state.user);
    const [isTestGiven, setIsTestGiven] = useState(currentUser.isTestGiven || false);
    const [points, setPoints] = useState(currentUser.points);
    const [selectedOptions, setSelectedOptions] = useState(Array(10).fill(''));
    const [isEditMode, setIsEditMode] = useState(false);

    const optionLetters = ['a', 'b', 'c', 'd'];

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
    }, []);

    const handleOptionClick = (questionIndex, optionIndex) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[questionIndex] = optionIndex;
        setSelectedOptions(newSelectedOptions);
        console.log(`Question ${questionIndex + 1}: Option ${optionIndex + 1} selected`);
    };

    const handleQuestionChange = (e, questionIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].title = e.target.value;
        setQuestions(newQuestions);
    };

    const handleOptionChange = (e, questionIndex, optionIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].options[optionIndex] = e.target.value;
        setQuestions(newQuestions);
    };

    const handleAnswerChange = (e, questionIndex) => {
        const answer = e.target.value.toLowerCase();
        if (optionLetters.includes(answer)) {
            const newQuestions = [...questions];
            newQuestions[questionIndex].answer = answer;
            setQuestions(newQuestions);
        }
    };

    const submitHandler = async () => {
        let calculatedPoints = 0;
        for (let i = 0; i < questions.length; i++) {
            const correctAnswerIndex = optionLetters.indexOf(questions[i].answer);
            if (correctAnswerIndex === selectedOptions[i]) calculatedPoints++;
        }
        setPoints(calculatedPoints);
        const pointData = { points: calculatedPoints };
        try {
            const res = await axios.post("/api/mcq/submit", pointData, {
                headers: {
                    Authorization: currentUser?.token
                }
            });
            console.log(res);

            setIsTestGiven(true);
            setIsEditMode(false);
        } catch (error) {
            console.log(error);
        }
    };

    const editHandler = () => {
        setIsEditMode(true);
    };

    const saveHandler = async () => {
        console.log("Savehandler", questions);
        try {
            const res = await axios.post("/api/mcq/update", { questions }, {
                headers: {
                    Authorization: currentUser?.token
                }
            });
            console.log(res);
            setQuestions(res)
            setIsEditMode(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <p className='w-full text-[28px] text-center'>Test Paper</p>

            {isTestGiven && !isEditMode ? (
                <div className="w-full flex flex-col items-center justify-center mt-10">
                    <div className="bg-[#FFEDCC] p-6 rounded-xl shadow-md text-center">
                        <h2 className="text-2xl font-bold text-[#008080] mb-4">Test Completed!</h2>
                        <p className="text-xl font-semibold text-gray-800">Your marks are:</p>
                        <p className="text-3xl font-bold text-[#db701d]">{points}</p>
                    </div>
                </div>
            ) : (
                <div className='w-full flex flex-col items-center'>
                    {!isEditMode && currentUser.rest.role === 'admin' && (
                        <button
                            onClick={editHandler}
                            className="rounded-lg md:px-5 md:py-3 px-1 py-1 bg-[#008080] text-white font-bold mt-5 text-xl"
                        >
                            Edit
                        </button>
                    )}
                    <div className='mx-3'>
                        {Array.isArray(questions) && questions.map((q, questionIndex) => (
                            <div key={questionIndex} className="w-[600px] bg-[#FFEDCC] md:p-4 p-2 md:m-4 m-2 rounded-2xl">
                                {isEditMode ? (
                                    <div>
                                        <input
                                            type="text"
                                            value={q.title}
                                            onChange={(e) => handleQuestionChange(e, questionIndex)}
                                            className='bg-white px-5 py-1 rounded-lg m-2 md:text-[16px] text-[12px] w-full'
                                        />
                                    </div>
                                ) : (
                                    <h3 className='bg-white px-5 py-1 rounded-lg m-2 md:text-[20px] text-[16px]'>{q.title}</h3>
                                )}
                                <ul>
                                    {q?.options?.map((option, optionIndex) => (
                                        <div
                                            key={optionIndex}
                                            className={`bg-white px-2 py-1 rounded-lg m-1 flex items-center cursor-pointer ${selectedOptions[questionIndex] === optionIndex ? 'bg-green-500 border-2 border-green-500' : ''}`}
                                            onClick={() => handleOptionClick(questionIndex, optionIndex)}
                                        >
                                            <div className={`w-[15px] h-[15px] rounded-full flex justify-center items-center mr-2 ${selectedOptions[questionIndex] === optionIndex ? 'bg-green-500 border-2 border-green-500' : 'bg-[#FFA500]'}`}>
                                                <div className='w-[9px] h-[9px] bg-white rounded-full'></div>
                                            </div>
                                            {isEditMode ? (
                                                <input
                                                    type="text"
                                                    value={option}
                                                    onChange={(e) => handleOptionChange(e, questionIndex, optionIndex)}
                                                    className='md:text-[16px] text-[14px] w-full'
                                                />
                                            ) : (
                                                <div className='md:text-[16px] text-[14px]'>
                                                    {option}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    {isEditMode && (
                                        <div className='mt-3'>
                                            <label className='mr-3'>Your answer:</label>
                                            <input
                                                type='text'
                                                value={q.answer || ''}
                                                onChange={(e) => handleAnswerChange(e, questionIndex)}
                                                className='py-1 rounded-sm w-[450px] h-[30px]'
                                            />
                                        </div>
                                    )}
                                </ul>
                            </div>
                        ))}

                    </div>
                    <div>
                        <button onClick={submitHandler} className="rounded-lg md:px-5 md:py-3 px-1 py-1 bg-[#008080] text-white font-bold mt-5 text-xl mx-6">
                            Submit
                        </button>
                        {isEditMode && (
                            <button onClick={saveHandler} className="rounded-lg md:px-5 md:py-3 px-1 py-1 bg-[#FFA500] text-white font-bold mt-5 text-xl">
                                Save
                            </button>
                        )}
                    </div>
                </div>
            )}

            <div className='w-full md:hidden h-[150px]'></div>
        </>
    );
}
