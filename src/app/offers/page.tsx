import React from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { MdCurrencyExchange } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import Profile from '@/components/Profile';

export default function page() {
  return (
    <div className='bg-[#edf0ed] py-4'>
        <div className='shadow'>
            <div className='flex  px-5 gap-14 items-center'>
             <FaChevronLeft size={20}  color='#102216'/>
             <h1 className='font-semibold text-3xl text-[#102216] '>Offers Received </h1>
            </div>
            <div className='space-y-2'>
                <p className='text-[12px] text-[#6d6e71] text-center'>SEARCHING FOR</p>
                <h1 className='font-bold text-2xl text-[#102216]   text-center'>500  USD</h1>
            </div>

            <div className='flex items-center justify-around px-2 py-4'>
                <div className='flex items-center gap-2 py-2 text-[12px] px-3 justify-center rounded-full border border-green-400 bg-green-200  font-bold'>Best Rate <IoChevronDown /></div>
                <div className='flex items-center gap-2 py-2 text-[12px] px-3 bg-gray-100 justify-center rounded-full hover:border border-green-400 hover:bg-green-200  font-bold'>Closest <IoChevronDown /></div>
                <div className='flex items-center gap-2 py-2 text-[12px] px-3 bg-gray-100 justify-center rounded-full hover:border border-green-400 hover:bg-green-200  font-bold'>Rating <IoChevronDown /></div>
            </div>
        </div>

        {/* composant */}
            <div className='px-5'>
                <Profile/>
                <Profile/>
                <Profile/>
            </div>
        {/* footer */}
        <div className='flex w-full border-t pt-4 border-gray-300 items-center justify-between px-5'>
            <div className='space-y-0.5 flex flex-col items-center justify-center cursor-pointer'>
                <MdCurrencyExchange  size={20}  color='#0ff05a'/>
                <h1 className='text-[#0ff05a]'>Exchanges</h1>
            </div>

             <div className='space-y-0.5 flex flex-col items-center justify-center cursor-pointer'>
                <MdHistory  size={20}  color='gray'/>
                <h1 className='hover:text-[#0ff05a] text-gray-300'>History</h1>
            </div>
             <div className='group space-y-0.5 flex flex-col items-center justify-center cursor-pointer'>
                <FaMessage  size={20}  color='gray'/>
                <h1 className='group-hover:text-[#0ff05a] text-gray-300'>Messages</h1>
            </div>
             <div className='space-y-0.5 group flex flex-col items-center justify-center cursor-pointer'>
                <FaUser size={20}  color='gray'/>
                <h1 className='group-hover:text-[#0ff05a] text-gray-300'>Profile</h1>
            </div>

            
             
             
            
        </div>
    </div>
  )
}
