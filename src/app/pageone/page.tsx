import Person from '@/components/Person';
import TypedText from '@/components/TypedText';
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';

import { FaChevronLeft } from "react-icons/fa6";

export default function page() {
  return (
    <div  className='bg-[#f5f6f8] pt-7  pb-4 lg:px-7 '>
      {/* one */}
      <div className='flex  px-5 gap-20  py-4 items-center'>
        <FaChevronLeft size={20}  color='#102216'/>
        <h1 className='font-bold text-3xl text-[#102216] '>Profile Choice</h1>
      </div>
      {/* two */}
      <div className='px-8'>
        <p className=' text-xl mt-8'>ONBOARDING STEP 1 OF 3</p>
        <hr  className='bg-green-200 h-2 rounded-full my-4 border-none'/>
        <h1 className="text-[#0d1c12] dark:text-white tracking-tight text-[32px] font-bold leading-tight pb-3"><TypedText/></h1>                         
        <p className="text-[#4b5563] mb-9 text-base font-normal leading-relaxed">Select the profile that best describes your needs for secure trading in Douala.</p> 

        {/* components */}
        <div>
          <Person/>
          <Person/>
        </div> 
        <button className=' py-2 rounded-md my-6 shadow-xl hover:bg-green-500 hover:text-white transition duration-100 w-full text-black bg-green-400 flex items-center gap-3 
        text-xl font-semibold shadow justify-center'>continue <FaLongArrowAltRight />
        </button>

        <p className='text-gray-400 text-[12px] text-center  w-full'>you can swith your profile type later in setting</p> 
      </div>

      
    </div>
    
      
  )
}
