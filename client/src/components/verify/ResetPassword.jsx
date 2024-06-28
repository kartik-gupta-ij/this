import React from 'react'

import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Herosection from '../Herosection';


export default function ResetPassword() {

    return (
        <>
            <div className='flex justify-center items-center mb-3'>

                <div className='flex justify-center items-center flex-col w-[600px]'>
                    <Herosection heading="Reset password" subheading="As guardians of your spiritual journey, we invite you to forge a new password that will safeguard your sacred space within our community" />
                    <div className='mt-5 w-1/2'>
                        <form >
                            <div className="relative mb-2 mt-2 flex items-center">
                                <RiLockPasswordLine className="absolute left-4 mb-0 mt-auto" />
                                <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" ></input>
                            </div>


                            <div className="relative mb-2 mt-2 flex items-center">
                                <RiLockPasswordLine className=" absolute left-4 mb-0 mt-auto" />
                                <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Confirm Password"></input>
                            </div>
                            <br />
                            <button className="w-full py-2 rounded-md shadow-lg font-medium text-gray-100 block transition duration-300 bg-[#008080] text-xl" >
                                Update
                            </button>
                            <br />
                        </form>

                    </div>

                </div>
            </div>
        </>
    )
}
