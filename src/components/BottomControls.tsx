'client side';

import { FaHistory } from "react-icons/fa";
import { FaHouse, FaLocationCrosshairs } from "react-icons/fa6";
import { IoMdWallet } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
export function BottomControls() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col gap-4">
      <div className="flex flex-col items-end px-5 gap-3">
        <div className="shadow-xl rounded-xl overflow-hidden border border-zinc-100 dark:border-zinc-700">
          <button className="size-12 bg-white dark:bg-zinc-800">+</button>
          <div className="h-px bg-zinc-200" />
          <button className="size-12 bg-white dark:bg-zinc-800">-</button>
        </div>

        <button className="flex justify-center items-center size-12 rounded-xl bg-white dark:bg-zinc-800 shadow-xl border border-zinc-100 dark:border-zinc-700">
          <FaLocationCrosshairs size={24} />
        </button>
      </div>

      <div className="bg-linear-to-t from-white via-white/90 to-transparent dark:from-[#102216] dark:via-[#102216]/90 pb-8 pt-10 px-5">
        <button className="flex justify-center items-center gap-2 w-full h-16 rounded-xl bg-[#0ff05a] text-black font-bold text-lg shadow-lg active:scale-[0.98] mb-6">
          <RiMoneyDollarCircleLine size={24}/>
          New Exchange Request
        </button>

        <div className="flex justify-between text-[10px] font-medium">
          <span className="flex flex-col my-2"><FaHouse className="my-2" size={24} />Home</span>
          <span className="flex flex-col my-2 text-[#0ff05a]"><FaHistory className="my-2" size={24} />History</span>
          <span className="flex flex-col my-2 text-[#0ff05a]"><IoMdWallet className="my-2" size={24} />Wallet</span>
          <span className="flex flex-col my-2 text-[#0ff05a]"><MdOutlineSupportAgent className="my-2" size={24} />Support</span>
        </div>
      </div>
    </div>
  );
}
