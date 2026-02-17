"use client";

import { ArrowLeft, Banknote } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter()
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between p-4 pt-6"
    >
      <button className="size-10 flex items-center justify-center rounded-full hover:bg-[#0ff05a]/10">
        <ArrowLeft
        onClick={() => router.push('/pageone')}
        />
      </button>

      <div className="flex items-center gap-2 font-bold text-lg">
        <div className="bg-[#0ff05a] size-8 rounded-lg flex items-center justify-center">
          <Banknote className="text-black" />
        </div>
        NexChange
      </div>

      <div className="size-10" />
    </motion.div>
  );
}
