import React from 'react';
import menuItems from './Logged';
import ShowAllUserData from '../../components/ShowAllUserData';

export default function Logged() {
    console.log(menuItems);

    return (
        <div className=' w-full flex justify-around'>
            <div className="flex flex-col items-center">
                <ShowAllUserData />
                <div className='w-[500px] h-[488px] bg-[#FFF5E3] rounded-xl mt-4 flex'>
                    <div className='w-1/2 flex flex-col justify-center items-center'>
                        <div className='w-[94px] h-[94px] bg-[#D9D9D9] rounded-full mb-4'></div>
                        <div className='text-center'>
                            <p className='text-[14px]'>#3 (950 GracePoints)</p>
                            <p className='text-[14px]'>Kavita Yadav</p>
                            <p className='text-[12px]'>kavita@20gmail.com</p>
                            <p className='text-[12px]'>India</p>
                        </div>
                    </div>
                    <div className='w-1/2 flex flex-col justify-between p-4'>
                        <div className='h-[300px] bg-red-400 mb-4'></div>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded'>Download</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col  items-center'>
                <div className='w-[320px] h-[132px] flex justify-around bg-[#FFF5E3] items-center my-4 rounded-xl'>
                    <div className='w-[94px] h-[94px] bg-[#D9D9D9] rounded-full'></div>
                    <div className='text-center'>
                        <p className='text-[14px]'>#3 (950 GracePoints)</p>
                        <p className='text-[14px]'>Kavita Yadav</p>
                        <p className='text-[12px]'>kavita@20gmail.com</p>
                        <p className='text-[12px]'>India</p>
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
