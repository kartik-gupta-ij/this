import React, { useState } from 'react'
import Herosection from '../Herosection';
import { Link } from 'react-router-dom'
import OTPInput from 'react-otp-input';
import OtpInput from 'react-otp-input';
export default function VerifyByEmail() {
    const [otp, setOtp] = useState('');
    return (
        <>
            <div className='flex justify-center items-center mb-3'>

                <div className='flex justify-center items-center flex-col w-[600px] '>
                    <Herosection heading="Verify your email" subheading="Thank you for registering with us! To complete your account setup, please verify your email address by adding the OTP sent to your email" />
                    <div className='mt-5 w-full flex flex-col items-center justify-center  '>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            renderSeparator={<span className="mx-2">-</span>}
                            renderInput={(props) => <input {...props} className="px-3 border-2 border-black m-3 w-12 h-12 rounded text-center" />}
                        />
                        <Link to='/verify/resetpassword'>
                            <button className="w-full py-2 px-6 rounded-md shadow-lg font-medium text-gray-100 block transition duration-300 bg-[#008080] text-xl" type="submit">
                                Verify
                            </button>
                        </Link>
                        <div className='mt-3'>
                            <p className='text-xl tracking-tight pl-2 text-center'>
                                Didn’t get the OTP! <Link to="/verify/resetpassword"><span className='text-[#008080]'>Send Again</span></Link>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-full h-[150px]'></div>
        </>
    )
}
