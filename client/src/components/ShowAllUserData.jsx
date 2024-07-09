import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import * as XLSX from 'xlsx';
function App() {
    const [userData, setUserData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showAddMembers, setShowAddMembers] = useState(false);
    const { currentUser } = useSelector((state) => state.user);
    const [selectedUserIds, setSelectedUserIds] = useState([]);

    const handleMemberSelected = (index) => {
        const userId = userData[index]._id;
        setSelectedUserIds(prevSelectedUserIds => {
            if (prevSelectedUserIds.includes(userId)) {
                return prevSelectedUserIds.filter(id => id !== userId);
            } else {
                return [...prevSelectedUserIds, userId];
            }
        });
        console.log("list", selectedUserIds);
    };

    const addSelectedUsersToMaster = async () => {
        try {
            await axios.post(`http://localhost:3000/api/user/addusertomaster/${currentUser.rest._id}`, {
                subuserIds: selectedUserIds,
                selectedIds: selectedUser._id
            });
            console.log('Selected users added to master successfully');
        } catch (error) {
            console.error('Error adding users to master:', error);
        }
    };
    const flattenJSON = (data) => {
        const result = [];

        data.forEach((item) => {
            const flatItem = {};

            const flatten = (obj, parentKey = '') => {
                for (const key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        const newKey = parentKey ? `${parentKey}.${key}` : key;
                        if (typeof obj[key] === 'object' && obj[key] !== null) {
                            flatten(obj[key], newKey);
                        } else {
                            flatItem[newKey] = obj[key];
                        }
                    }
                }
            };

            flatten(item);
            result.push(flatItem);
        });

        return result;
    };

    const excelDataDownload = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/getdata/${userId}`);
            const jsondata = response.data.data; // Assuming the response data is already JSON

            if (jsondata && Array.isArray(jsondata)) {
                const flattenedData = flattenJSON(jsondata);
                const worksheet = XLSX.utils.json_to_sheet(flattenedData);
                const workbook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(workbook, worksheet, "jsondata");
                XLSX.writeFile(workbook, "jsondata.xlsx");
            } else {
                console.error("No jsondata array to export");
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };



    useEffect(() => {
        axios.get('http://localhost:3000/api/user/getuser')
            .then(response => {
                const usersWithStatus = response.data.data.map(user => ({
                    ...user,
                    isSelected: false // Add isSelected property to manage selection
                }));
                setUserData(usersWithStatus);
            })
            .catch(error => {
                console.error('There was an error fetching the user data!', error);
            });
    }, []);

    const toggleStatus = (userId) => {
        axios.post(`http://localhost:3000/api/user/userStatus/${userId}`, {
            userId: userId,
            adminId: currentUser.rest._id
        })
            .then(response => {
                setUserData(prevUserData => {
                    return prevUserData.map(user => {
                        if (user._id === userId) {
                            return { ...user, isActive: !user.isActive };
                        }
                        return user;
                    });
                });
                console.log('User status updated:', response.data);
            })
            .catch(error => {
                console.error('There was an error updating the user status!', error);
            });
    };

    const selectUser = (index) => {
        setSelectedUser(userData[index]);
    };

    const makeMaster = (userId) => {
        axios.post(`http://localhost:3000/api/user/addmaster/${userId}`, {
            adminId: currentUser.rest._id
        })
            .then(response => {
                setUserData(prevUserData => {
                    return prevUserData.map(user => {
                        if (user._id === userId) {
                            return { ...user, role: 'master' };
                        }
                        return user;
                    });
                });
                console.log('User promoted to master:', response.data);
            })
            .catch(error => {
                console.error('There was an error promoting the user to master!', error);
            });
    };

    const toggleAddMembers = () => {
        setShowAddMembers(!showAddMembers);
    };

    const handleMemberSelect = (index) => {
        setUserData(prevUserData => {
            const updatedUsers = [...prevUserData];
            updatedUsers[index].isSelected = !updatedUsers[index].isSelected;
            return updatedUsers;
        });
    };
console.log("selectedUser",selectedUser)
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
                        <tr key={index} className='border cursor-pointer' onClick={() => selectUser(index)}>
                            <td className='py-2 px-4 border text-[18px] text-[#56565b]'>{user.name}</td>
                            <td className='py-2 px-7 border'>
                                <div
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleStatus(user._id);
                                    }}
                                    className={`text-[18px] text-white text-center rounded-xl ${user.isActive ? 'bg-[#008080]' : 'bg-red-500'}`}
                                >
                                    {user.isActive ? 'Active' : 'Deactive'}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedUser && (
                <div className='mt-4 p-4 border border-gray-300 bg-white rounded-lg'>
                    <h2 className='text-xl font-semibold mb-2'>User Details</h2>
                    <p className='mb-2'><strong>Name:</strong> {selectedUser.name}</p>
                    <p className='mb-2'><strong>Image:</strong> <img src={selectedUser.profilePicture} alt={`${selectedUser.profilePicture}`} className='w-[200px] h-[200px] rounded-full' /></p>
                    <p className='mb-2'><strong>Points:</strong> {selectedUser.points}</p>
                    <div>
                        {selectedUser.role === 'user' ? <button
                            className='p-2 bg-[#008080] text-white'
                            onClick={() => makeMaster(selectedUser._id)}
                        >
                            Make master
                        </button> : <button
                            className='p-2 bg-[#008080] text-white'
                            onClick={() => makeMaster(selectedUser._id)}
                        >
                            Master
                        </button>}
                        {selectedUser?.role === 'master'&&  <button
                            className='p-2 border-2 ml-2 border-[#008080] text-[#008080]'
                            onClick={toggleAddMembers}
                        >
                            + Add Members
                        </button>}
                        <button onClick={() => excelDataDownload(selectedUser._id)} className='p-2 bg-[#008080] text-white ml-2'>Download</button>
                    </div>
                    {showAddMembers && (
                        <div className='mt-4 p-4 border border-gray-300 bg-white rounded-lg max-h-48 overflow-y-auto'>
                            <h2 className='text-xl font-semibold mb-2'>Add Members</h2>
                            {userData.filter(user => user.role === 'user').map((user, index) => (
                                <div key={user._id} className='flex items-center'>
                                    <input
                                        type='checkbox'
                                        checked={selectedUserIds.includes(user._id)}
                                        onChange={() => handleMemberSelected(index)}
                                    />
                                    <label className='ml-2'>{user.name}</label>
                                </div>
                            ))}
                            <div
                                className='bg-[#008080] text-white w-full text-center p-1 rounded-xl mt-3 cursor-pointer'
                                onClick={addSelectedUsersToMaster}
                            >
                                Add Selected user to this master
                            </div>
                        </div>
                    )}
                    {/* Add more details as necessary */}
                </div>
            )}
        </div>
    );
}

export default App;
