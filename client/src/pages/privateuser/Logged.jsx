import React from 'react'
import menuItems from './Logged'
export default function Logged() {
    console.log(menuItems);

    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[320px] h-[132px] flex justify-around bg-[#FFF5E3] items-center my-4 rounded-xl'>
                    <div className='w-[94px] h-[94px] bg-[#D9D9D9] rounded-full'>

                    </div>
                    <div className='w-[137px] h-[74px]'>
                        <p className='text-[14px]'>#3 (950 GracePoints)</p>
                        <p className='text-[14px]'>Kavita Yadav</p>
                        <p className='text-[12px]'>kavita@20gmail.com</p>
                        <p className='text-[12px]'>India</p>
                        
                    </div>
                </div>
                <div className="w-[320px] h-[384px]">
                    {menuItems.map((item, index) => (
                        <div key={index} className="w-full h-[64px] flex items-center ">
                            <img src={item.img} alt={item.text} className="mx-[20px] w-[17px] h-[17px]" />
                            <p className="text-[#6A6A6A] text-[20px]">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full h-[150px]'></div>
        </>

    );


}
