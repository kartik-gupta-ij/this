import React from 'react'
import menuItems from './Logged'
export default function Logged() {
    console.log(menuItems);

    return (
        <>
        <div className='flex justify-center'>
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
