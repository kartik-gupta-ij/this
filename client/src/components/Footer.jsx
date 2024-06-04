import React from 'react'
import before from '../assets/beforeLogo.png'
import sadhna from '../assets/Sadhana.png'
import navbar from '../assets/navbar.png'
import { Link } from 'react-router-dom'
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
    return (
        <>
            <div className='w-full bg-[#FFA500] mt-5 bg-right-top bg-no-repeat bg-contain rounded-tr-[120px]' style={{ backgroundImage: `url(${navbar})` }}>

                <div className="flex items-center">
                    <Link to="/" className="flex items-center ml-4 mt-5">
                        <img src={before} alt="Logo" loading="lazy" width="100px" className='mr-2' />
                        <img src={sadhna} alt="sadhana" loading="lazy" width="150px" />
                    </Link>
                </div>
                <div class="grid grid-cols-4 mt-4 p-4">
                    <div class="p-4">
                        <p className='text-2xl font-bold'>Contact Us</p>
                        <p className='text-xl text-[#3C3C3C]'>Located -</p>
                        <p className='text-xl text-[#3C3C3C]'>A-5, Maharaja Agrasen Marg, Opposite Opposite NTPC office, Block A, Sector 33, Noida, Uttar Pradesh 201301
                        </p>
                        <p className='text-xl text-[#3C3C3C]'>Email -</p>
                        <p className='text-xl text-[#3C3C3C]'>connect@isconnoida.org
                        </p>
                    </div>
                    <div class=" p-4">
                        <p className='text-2xl font-bold'>Quick Links</p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#' >Fill Sadhna</Link></p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#' >My Challenge</Link></p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#' >Ask Questions</Link></p>
                    </div><div class=" p-4">
                        <p className='text-2xl font-bold'>Navigation</p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#' >Home</Link></p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#' >Sadhna</Link></p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#' >Assets</Link></p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#' >Events</Link></p>
                        <p className='text-xl text-[#3C3C3C] mt-2'>
                            <Link to='#' >Community</Link></p>
                    </div>
                    <div class=" p-4">
                        <p className='text-2xl font-bold'>Social</p>
                        <p className='text-xl  mt-2 flex gap-1 items-center'>
                            <IoLogoFacebook />
                            <Link to='#' className='text-[#3C3C3C]' >Facebook</Link></p>
                        <p className='text-xl  mt-2 flex gap-1 items-center'>
                            <IoLogoTwitter />
                            <Link to='#' className='text-[#3C3C3C]'>twitter</Link></p>
                        <p className='text-xl  mt-2 flex gap-1 items-center'>
                            <FaLinkedin />
                            <Link to='#' className='text-[#3C3C3C]'>LinkedIn</Link></p>
                        <p className='text-xl  mt-2 flex gap-1 items-center'>
                            <FaInstagram />
                            <Link to='#' className='text-[#3C3C3C]'>Instagram</Link></p>
                    </div>

                </div>

                <div className='w-full h-[1px] bg-white'></div>
                <div className='grid grid-cols-3  px-4 py-4 text-center text-white text-lg'>
                    <div>
                        Copyright 2024 All rights reserved
                    </div>
                    <div>
                        Terms & Conditions
                    </div>
                    <div>
                        Privacy Policy
                    </div>
                </div>
            </div>
        </>
    )
}
