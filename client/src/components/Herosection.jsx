import React from 'react'
import logo from '../assets/Vector.png';
export default function Herosection({ heading, subheading }) {
    return (
        <div>
            <div className='flex justify-center items-center flex-col w-[600px]'>
                <img src={logo} alt='logo' width="200px" className='mt-3' />
                <p className=" text-4xl  leading-6 tracking-tight mt-3">"{heading}"</p>
                <p className=" text-2xl  tracking-tight mt-10 text-center">{subheading}</p>
            </div>
        </div>
    )
}
