import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/user/getuser')
            .then(response => {
                setUserData(response.data.data);
            })
            .catch(error => {
                console.error('There was an error fetching the user data!', error);
            });
    }, []);

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-2xl mb-4'>User Data</h1>
            <table className='min-w-full bg-white border border-gray-300'>
                <thead>
                    <tr>
                        <th className='py-2 px-4 border text-[#9B9B9D] font-semibold '>Devotees list </th>
                        <th className='py-2 px-4 border  text-[#9B9B9D] font-semibold'>Status</th>

                    </tr>
                </thead>
                <tbody className='border'>
                    {userData.map((user, index) => (
                        <tr key={index} className='border'>
                            <td className='py-2 px-4 border text-[18px] text-[#56565b]'>{user.name}</td>
                                <td className='py-2 px-7 border '>
                                    <div className='text-[18px] text-white bg-[#008080] text-center rounded-xl'>Active</div>
                                </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}

export default App;
