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
            <h1 className='text-2xl mb-4'>leaderboard</h1>
            <table className='min-w-full bg-white border border-gray-300'>
                <thead>
                    <tr>
                        <th className='py-2 px-4 border-b'>Devotees list </th>
                        <th className='py-2 px-4 border-b'>Points</th>

                    </tr>
                </thead>
                <tbody className='border'>
                    {userData
                        .sort((a, b) => b.points - a.points) // Sort the data in descending order based on points
                        .map((user, index) => (
                            <tr key={index} className='border'>
                                <td className='py-2 px-4 border'>{user.name}</td>
                                <td className='py-2 px-4 border'>{user.points}</td>
                            </tr>
                        ))}
                </tbody>

            </table>
        </div>
    );
}

export default LeaderBoard;
