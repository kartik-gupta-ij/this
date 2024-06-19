import React from 'react'
import logo from '../assets/Vector.png';
export default function Herosection({ heading, subheading }) {
    return (
        <div>
            <div className='flex justify-center items-center flex-col md:w-[600px] w-[300px]'>
                <img src={logo} alt='logo' width="200px" className='mt-3' />
                <p className=" md:text-4xl text-[32px]  leading-6 tracking-tight mt-3 text-center">"{heading}"</p>
                <p className=" md:text-2xl text-[16px]  tracking-tight mt-10 text-center">{subheading}</p>
            </div>
        </div>
    )
}
