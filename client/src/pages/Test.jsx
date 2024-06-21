import React, { useState } from 'react';

export default function Test() {
    const questions = [
        {
            "question": "What is the main teaching of Bhagavad Gita?",
            "option1": "Karma Yoga",
            "option2": "Hatha Yoga",
            "option3": "Bhakti Yoga",
            "option4": "Jnana Yoga"
        },
        {
            "question": "Who wrote the national anthem of India?",
            "option1": "Rabindranath Tagore",
            "option2": "Bankim Chandra Chatterjee",
            "option3": "Sarojini Naidu",
            "option4": "Mahatma Gandhi"
        },
        {
            "question": "What is the capital of France?",
            "option1": "Paris",
            "option2": "London",
            "option3": "Berlin",
            "option4": "Madrid"
        },
        {
            "question": "Which planet is known as the Red Planet?",
            "option1": "Mars",
            "option2": "Jupiter",
            "option3": "Saturn",
            "option4": "Venus"
        },
        {
            "question": "Who discovered penicillin?",
            "option1": "Alexander Fleming",
            "option2": "Marie Curie",
            "option3": "Albert Einstein",
            "option4": "Isaac Newton"
        },
        {
            "question": "What is the largest mammal in the world?",
            "option1": "Blue Whale",
            "option2": "Elephant",
            "option3": "Giraffe",
            "option4": "Shark"
        },
        {
            "question": "Which element has the chemical symbol O?",
            "option1": "Oxygen",
            "option2": "Gold",
            "option3": "Osmium",
            "option4": "Oganesson"
        },
        {
            "question": "In which year did the Titanic sink?",
            "option1": "1912",
            "option2": "1910",
            "option3": "1905",
            "option4": "1915"
        },
        {
            "question": "Who is known as the father of computers?",
            "option1": "Charles Babbage",
            "option2": "Alan Turing",
            "option3": "Tim Berners-Lee",
            "option4": "Steve Jobs"
        },
        {
            "question": "Which country is known as the Land of the Rising Sun?",
            "option1": "Japan",
            "option2": "China",
            "option3": "India",
            "option4": "South Korea"
        },
        {
            "question": "What is the smallest unit of life?",
            "option1": "Cell",
            "option2": "Atom",
            "option3": "Molecule",
            "option4": "Organ"
        }
    ];

    const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));

    const handleOptionClick = (questionIndex, optionIndex) => {
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
                            <h3 className='bg-white px-5 py-1 rounded-lg m-2 md:text-[20px] text-[16px]'>{q.question}</h3>
                            <ul>
                                {[q.option1, q.option2, q.option3, q.option4].map((option, optionIndex) => (
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
            </div>
            <div className='w-full h-[150px]'></div>
        </>
    );
}
