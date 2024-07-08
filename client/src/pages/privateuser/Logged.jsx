import React from 'react';
import menuItems from './Logged';
import ShowAllUserData from '../../components/ShowAllUserData';
import LeaderBoard from '../LeaderBoard';
import { useSelector } from 'react-redux';
import * as XLSX from 'xlsx';
import Graphofuser from '../../components/Graphofuser';

export default function Logged() {
    const { currentUser } = useSelector((state) => state.user);

    console.log("Private user:", currentUser);

    const downloadExcel = () => {
        if (currentUser) {
            const worksheetData = [currentUser]; // Wrap currentUser in an array if it's an object
            const worksheet = XLSX.utils.json_to_sheet(worksheetData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "currentUser");
            XLSX.writeFile(workbook, "currentUser.xlsx");
        } else {
            console.error("No currentUser data to export");
        }
    };

    return (
        <div className='w-full flex justify-around'>
            <div className="flex flex-col items-center">
                <ShowAllUserData />
                <LeaderBoard />
                <div className='w-[500px] h-[488px] bg-[#FFF5E3] rounded-xl mt-4 flex'>
                    <div className='w-1/2 flex flex-col justify-center items-center'>
                        <div className='w-[94px] h-[94px] bg-[#D9D9D9] rounded-full mb-4'>

                            <img src={currentUser.profilePicture} alt='profile' className='rounded-full' />
                        </div>
                        <div className='text-center'>
                            <p className='text-[14px]'>({currentUser.points} GracePoints)</p>
                            <p className='text-[14px]'>{currentUser.name}</p>
                            <p className='text-[12px]'>{currentUser.email}</p>
                            <p className='text-[12px]'>{currentUser.country}</p>
                        </div>
                        <div className=' flex justify-around'>
                            <button className='bg-[#008080] text-white p-2  rounded-sm'>Make master</button>
                            <button className='p-2 text-[#008080] border-2 border-[#008080]'> + Add members</button>
                        </div>
                    </div>
                    <div className='w-1/2 flex flex-col justify-between p-4'>
                        <div className='h-[300px]  mb-4'>
                            {/* <Graphofuser/> */}
                        </div>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={downloadExcel}>Download</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-[320px] h-[132px] flex justify-around bg-[#FFF5E3] items-center my-4 rounded-xl'>
                    <div className='w-[94px] h-[94px]  rounded-full'>
                        <img src={currentUser.profilePicture} alt='profile' className='rounded-full' />
                    </div>
                    <div className='text-center'>
                        <p className='text-[14px]'>({currentUser.points} GracePoints)</p>
                        <p className='text-[14px]'>{currentUser.name}</p>
                        <p className='text-[12px]'>{currentUser.email}</p>
                        <p className='text-[12px]'>{currentUser.country}</p>
                    </div>

                </div>
                <div className="w-[320px] h-[384px] bg-[#FFF5E3] p-4 rounded-xl">
                    {menuItems.map((item, index) => (
                        <div key={index} className="w-full h-[64px] flex items-center mb-2">
                            <img src={item.img} alt={item.text} className="mx-[20px] w-[17px] h-[17px]" />
                            <p className="text-[#6A6A6A] text-[20px]">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
