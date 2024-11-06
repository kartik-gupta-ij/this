import React, { useEffect, useState } from 'react';
import menuItems from './Logged';
import ShowAllUserData from '../../components/ShowAllUserData';
import LeaderBoard from '../LeaderBoard';
import { useSelector } from 'react-redux';
// import * as XLSX from 'xlsx';
import Graphofuser from '../../components/Graphofuser';
import { Link, useNavigate } from 'react-router-dom';
import MasterDetails from '../../components/MasterDetails';
import Profile from '../Profile';
import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/user/userSlice';
export default function Logged() {
    const { currentUser } = useSelector((state) => state.user);
    const [currentComponent, setCurrentComponent] = useState(0)
    console.log("Private user:", currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        console.log({ currentComponent })
        const signOutUser = async () => {
            if (currentComponent === 5) {
                try {
                    await fetch("/api/auth/signout");
                    dispatch(signOut());
                    navigate('/');
                } catch (error) {
                    console.log(error);
                }
            }

        };
        signOutUser();

    }, [currentComponent, dispatch]);

    // const downloadExcel = () => {
    //     if (currentUser) {
    //         const worksheetData = [currentUser]; // Wrap currentUser in an array if it's an object
    //         const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    //         const workbook = XLSX.utils.book_new();
    //         XLSX.utils.book_append_sheet(workbook, worksheet, "currentUser");
    //         XLSX.writeFile(workbook, "currentUser.xlsx");
    //     } else {
    //         console.error("No currentUser data to export");
    //     }
    // };

    return (
        <div className='w-full flex justify-around'>
            <div className="flex flex-col items-center">
                {currentComponent === 0 && <ShowAllUserData />}
                {currentComponent === 4 && <LeaderBoard />}
                {currentComponent === 2 && <Profile />}

               { currentUser?.role == "admin"? <MasterDetails/> : ""}

            </div>
            <div className='flex flex-col items-center'>
                <div className='w-[320px] h-[132px] flex justify-around bg-[#FFF5E3] items-center my-4 rounded-xl'>
                    <div className='w-[94px] h-[94px]  rounded-full'>
                        <img src={currentUser?.profilePicture || currentUser?.rest?.profilePicture} alt='profile' className='rounded-full' />
                    </div>
                    <div className='text-center'>
                        <p className='text-[14px]'>
                            {currentUser?.points || currentUser?.rest?.points || 'GracePoints'}
                        </p>
                        <p className='text-[14px]'>{currentUser?.name || currentUser?.rest?.name}</p>
                        <p className='text-[12px]'>{currentUser?.email || currentUser?.rest?.email}</p>
                        <p className='text-[12px]'>{currentUser?.country || currentUser?.rest?.country} </p>
                    </div>
                </div>
                <div className="w-[320px] h-[384px] bg-[#FFF5E3] p-4 rounded-xl">
                    {menuItems.map((item, index) => (
                        <div to={item.link} key={index} className={`${currentComponent === index ? 'bg-[#008080] text-white rounded-2xl' : 'text-[#6A6A6A]'}`}
                        >
                            <div className="w-full h-[64px] flex items-center mb-2  cursor-pointer" onClick={() => { setCurrentComponent(index) }} >
                                <img src={item.img} alt={item.text} className="mx-[20px] w-[17px] h-[17px]" />
                                <p className=" text-[20px]">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
