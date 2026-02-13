import React from 'react'
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaLocationPin } from "react-icons/fa6";

export default function Profile() {
  return (
    <div className='mt-4 h-38 bg-white  rounded-md p-2'>
        {/* Profile */}

        <div className=' flex items-center gap-7'>
            <div className='w-16 h-16 rounded-full border shadow-xl border-green-400' >
                <img  className=' w-full h-full rounded-full  object-contain' src="gilr.jpg" alt="none" width={'100%'} />
            </div>
            <div>
                <h1 className='font-bold text-xl line-clamp-1'>Douala Fx Hub</h1>
                <div className='flex items-center gap-2'>
                    <p className='flex items-center gap-1'>
                        <FaStar color='yellow' size={16} />
                        <span className='text-md text-gray-300 text-sm'>4.5</span>
                    </p>
                    <GoDotFill color='gray ' size={10} />
                    <p className='flex items-center gap-1 text-sm text-gray-300'> <FaLocationPin color='gray ' size={10} />0.8 km  away</p>
                </div>
            </div>
        </div>
        {/* currency */}

        <div className='flex items-center justify-between mt-3 px-3'>
            <div className='py-2'>
                <h1 className='text-gray-400'>Exchange Rate </h1>
                <p className='font-bold text-xl'>1 USD = 620 XAF</p>
            </div>
            <div>
                <button className='bg-green-400 text-black font-semibold rounded-md py-2 px-3'>select</button>
            </div>
        </div>
    </div>
  )
}
