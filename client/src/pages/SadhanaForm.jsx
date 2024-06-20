import React, { useState } from 'react';
import sadhanaForm from '../assets/sadhanaForm.png';

export default function SadhanaForm() {
    const [date, setDate] = useState('');
    const [topic, setTopic] = useState('');
    const [rounds, setRounds] = useState('');
    const [interval, setInterval] = useState('');
    const [chanting, setChanting] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            date,
            topic,
            rounds,
            interval,
            chanting,
        };
        console.log(formData);
        setDate('');
        setTopic('');
        setRounds('');
        setInterval('');
        setChanting('');
    };

    const options = {
        rounds: ['Above 60 min', '45 min to 60 min', '45 min to 30 min', '30 min to 15 min', '10 min to 15 min', 'Less than 10 min', 'No reading today'],
        interval: ['Before 6 AM', '6 AM to 9 AM', '9 AM to 5 PM', 'After 5 PM'],
        chanting: ['25-20 Rounds', '20-15 Rounds', '15-10 Rounds', '10-5 Rounds', '5-1 Rounds']
    };

    const renderOptions = (options, selected, setSelected) => (
        options.map(option => (
            <div
                key={option}
                className={`p-1 cursor-pointer ${selected === option ? 'bg-[#008080]' : 'bg-[#FFEDCC]'}`}
                onClick={() => setSelected(option)}
            >
                {option}
            </div>
        ))
    );

    return (
        <div>
            <div className="hidden md:grid grid-cols-2 mr-4 mt-4">
                <div>
                    <img src={sadhanaForm} width="600px" alt="Home" />
                </div>
                <div>
                    <p className="text-gray-600 font-normal text-6xl leading-14 tracking-tight mt-[130px] ml-10">
                        Deeper your Sadhana,<br /> lesser you are affected<br /> by the world
                    </p>
                </div>
            </div>

            <h2 className='mx-3'>Schedule Sadhana</h2>

            <form onSubmit={handleSubmit}>
                <div className='flex justify-around'>
                    <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
                    <input type='text' placeholder='Topic of Sadhana you want to practice...' value={topic} onChange={(e) => setTopic(e.target.value)} />
                </div>
                <div className='mx-3'>
                    <p>Select the number of rounds for chanting</p>
                    <div className='grid md:grid-cols-7 grid-cols-3 gap-3 text-center md:mx-9 mx-3 text-[12px]'>
                        {renderOptions(options.rounds, rounds, setRounds)}
                    </div>
                </div>
                <div>
                    <p className='mx-3'>Select the time interval for chanting</p>
                    <div className='grid md:grid-cols-7 grid-cols-3 gap-3 text-center md:mx-9 mx-3 text-[12px]'>
                        {renderOptions(options.interval, interval, setInterval)}
                    </div>
                </div>
                <div>
                    <p className='mx-3'>Select the number of chanting rounds</p>
                    <div className='grid md:grid-cols-7 grid-cols-3 gap-3 text-center md:mx-9 mx-3 text-[12px]'>
                        {renderOptions(options.chanting, chanting, setChanting)}
                    </div>
                </div>
                <div className='w-full flex justify-center mt-5'>
                    <button className=" py-2 px-10 rounded-md shadow-lg font-medium text-gray-100 block transition duration-300 bg-[#008080] text-xl" type="submit">
                        Submit
                    </button>
                </div>
            </form>
            <div className='h-[150px]'></div>
        </div>
    );
}
