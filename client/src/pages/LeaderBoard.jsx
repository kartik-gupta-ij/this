import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LeaderBoard() {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/api/user/getuser')
            .then(response => {
                setUserData(response.data.data);
                console.log("userData", userData)
            })
            .catch(error => {
                console.error('There was an error fetching the user data!', error);
            });
    }, []);

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-[28px] mb-2 ml-3 font-inria'>leaderboard</h1>
            <div className='min-w-full bg-white  border-gray-300'>
                <div>
                    <div className='flex bg-[#008080] text-white'>
                        <div className='w-[100px] flex justify-center items-center text-[20px] font-semibold'>Ranks</div>
                        <div className='w-[200px] py-2 px-4 border-b flex justify-center items-center text-[20px] font-semibold'>Devotees list </div>
                        <div className='w-[100px] py-2 px-4 flex justify-center items-center text-[20px] font-semibold'>Points</div>

                    </div>
                </div>
                <div className=''>
                    {userData
                        .sort((a, b) => b.points - a.points) // Sort the data in descending order based on points
                        .map((user, index) => (
                            <div key={index} className='bg-[#FFEDCC] my-2 flex'>
                                <div className='w-[100px] py-2 px-4  text-[20px] font-bold flex justify-center items-center'>{index + 1}</div>
                                <div className='w-[200px] py-2 px-4  text-[20px] font-semibold flex justify-center items-center'>{user.name}</div>
                                <div className='w-[100px] py-2 px-4  text-[20px] font-bold  text-[#008080]  text-center flex justify-center items-center'>{user.points}</div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default LeaderBoard;
