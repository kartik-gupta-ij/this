import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LeaderBoard() {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/user/getuser')
            .then(response => {
                setUserData(response.data.data || []); // Ensure userData is an array
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch(error => {
                console.error('There was an error fetching the user data!', error);
                setLoading(false); // Set loading to false in case of an error
            });
    }, []);

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-[28px] mb-2 ml-3 font-inria'>leaderboard</h1>
            {loading ? (
                <div className='flex justify-center items-center h-64'>
                    <svg className="animate-spin h-8 w-8 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                </div>
            ) : (
                <div className='min-w-full bg-white border-gray-300'>
                    <div>
                        <div className='flex bg-[#008080] text-white'>
                            <div className='w-[100px] flex justify-center items-center text-[20px] font-semibold'>Ranks</div>
                            <div className='w-[200px] py-2 px-4 border-b flex justify-center items-center text-[20px] font-semibold'>Devotees list</div>
                            <div className='w-[100px] py-2 px-4 flex justify-center items-center text-[20px] font-semibold'>Points</div>
                        </div>
                    </div>
                    <div className=''>
                        {userData.length > 0 && userData
                            .sort((a, b) => b.points - a.points) // Sort the data in descending order based on points
                            .map((user, index) => (
                                <div key={index} className='bg-[#FFEDCC] my-2 flex'>
                                    <div className='w-[100px] py-2 px-4 text-[20px] font-bold flex justify-center items-center'>{index + 1}</div>
                                    <div className='w-[200px] py-2 px-4 text-[20px] font-semibold flex justify-center items-center'>{user.name}</div>
                                    <div className='w-[100px] py-2 px-4 text-[20px] font-bold text-[#008080] text-center flex justify-center items-center'>{user.points}</div>
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default LeaderBoard;
