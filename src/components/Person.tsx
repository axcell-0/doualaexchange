
import { FaUser } from "react-icons/fa";
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function Person() {
  return (
    
    <div className='bg-white rounded-2xl mb-4 shadow-lg transition duration-300 hover:scale-105 h-48 p-3 ring ring-[#e8e5e5] '>
       <div className='flex gap-6'>
            <div className=' space-y-2'>
                <div className='flex items-center gap-2'>
                    <FaUser color='green' />
                    <p className="text-[#0d1c12] dark:text-white text-lg font-bold leading-tight">I want to <br /> exchange</p>
                </div>
                <p className="text-[#4b5563] dark:text-gray-400 text-[12px] font-normal leading-4">I need to buy or sell currency <br /> for personal use <br /> quickly and <br /> securely.</p>  
                <button className=' text-green-400 flex items-center gap-3 
                     justify-center text-[12px]'> select profile  <FaLongArrowAltRight  color='green'/>
                </button>
            </div>
            <div className=" h-40 w-full bg-center bg-no-repeat  rounded-lg">
                <img className='h-full w-full object-contain' src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq198WF2Hbrm9Z-YvelBfzGpTmCUxRN-M0Bw3vkaCtZQkUEMlGZSecUGn9BTCMQHKHkyzvZWoWgCmoEKNYKXRbNFGwgUDxMFcPTprSVnjbHxy2KSN27IfvDhM5lKRelwDLGTtq7QHlVtT-d3B8ioiI-7Kc59dr2kuDcpaapiyNnH7WIpFuhXVFrjyWbpxl7eUXxjA0chW7ngvX-01jxrFnFEHRGNysYmj2_K4hm_7sGEN9HB64BRntQ9Dw5xllgON3HF26PEJfL4Kx" alt=" none"  width={'100%'}/>
            </div>
       </div>

    </div>
  )
}
