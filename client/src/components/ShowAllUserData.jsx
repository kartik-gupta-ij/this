import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/user/getuser')
            .then(response => {
                // Initialize the active status for each user
                const usersWithStatus = response.data.data.map(user => ({
                    ...user,
                    isActive: true
                }));
                setUserData(usersWithStatus);
            })
            .catch(error => {
                console.error('There was an error fetching the user data!', error);
            });
    }, []);

    const toggleStatus = (index) => {
        setUserData(prevUserData => {
            const newUserData = [...prevUserData];
            newUserData[index].isActive = !newUserData[index].isActive;
            return newUserData;
        });
    };

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-2xl mb-4'>User Data</h1>
            <table className='min-w-full bg-white border border-gray-300'>
                <thead>
                    <tr>
                        <th className='py-2 px-4 border text-[#9B9B9D] font-semibold'>Devotees list</th>
                        <th className='py-2 px-4 border text-[#9B9B9D] font-semibold'>Status</th>
                    </tr>
                </thead>
                <tbody className='border'>
                    {userData.map((user, index) => (
                        <tr key={index} className='border'>
                            <td className='py-2 px-4 border text-[18px] text-[#56565b]'>{user.name}</td>
                            <td className='py-2 px-7 border'>
                                <div
                                    onClick={() => toggleStatus(index)}
                                    className={`text-[18px] text-white text-center rounded-xl cursor-pointer ${user.isActive ? 'bg-[#008080]' : 'bg-red-500'}`}
                                >
                                    {user.isActive ? 'Active' : 'Deactive'}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
