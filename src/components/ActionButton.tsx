"use client";

import { motion } from "framer-motion";

export default function ActionButton({
  children,
  primary = false,
}: {
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      className={`w-full h-14 rounded-xl font-bold text-lg transition-all ${
        primary 
          ? "bg-[#0ff05a] text-black shadow-lg shadow-[#0ff05a]/20"
          : "border-2 border-[#0ff05a]/30 hover:border-[#0ff05a]"
      }`}
    >
      {children}
    </motion.button>
  );
}
