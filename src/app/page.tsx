"use client"
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BsArrowRepeat } from 'react-icons/bs';
import { MdAttachMoney } from 'react-icons/md';

const LoadingScreen: React.FC<{ onLoadComplete?: () => void }> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          redirect('/pageone')
          // Call the callback when loading is complete
          setTimeout(() => {
            onLoadComplete?.();
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-950 flex flex-col items-center justify-between px-6 py-12 sm:px-8">
      {/* Top spacer */}
      <div className="flex-1" />

      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-md">
        {/* Logo container */}
        <div className="mb-8 sm:mb-10">
          <div className="sm:w-24 sm:h-24 flex items-center justify-center backdrop-blur-sm">
            {/* Dollar sign with circular arrows */}
            <div className="m-10 w-24 h-24 bg-[#0ff05a]/10 flex items-center justify-center rounded-xl border border-[#0ff05a]/40">
              <div className="relative text-[#0ff05a]"><BsArrowRepeat size={75} /> </div>
              <MdAttachMoney size={45} color="#0ff05a" className="absolute top-16 left-17" />
            </div>
          </div>
        </div>

        {/* Brand name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 text-center">
          Douala<span className="text-emerald-400">Exchange</span>
        </h1>

        {/* Tagline */}
        <p className="text-emerald-300/90 text-base sm:text-lg text-center mb-2">
          Currency exchange, finally secured
        </p>
      </div>

      {/* Bottom section with progress */}
      <div className="w-full max-w-md mt-auto">
        {/* Initializing text and percentage */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <span className="text-emerald-300/70 text-xs sm:text-sm uppercase tracking-wider">
            Initializing Security
          </span>
          <span className="text-emerald-400 font-semibold text-sm sm:text-base">
            {progress}%
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-emerald-900/50 rounded-full overflow-hidden mb-4 sm:mb-5">
          <div
            className="h-full bg-emerald-400 transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Security message */}
        <div className="flex items-center justify-center gap-2 text-emerald-300/60 text-xs sm:text-sm">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 1L3 5v6c0 5.25 3.5 8.5 7 10 3.5-1.5 7-4.75 7-10V5l-7-4zm0 2.5L15 6v5c0 3.75-2.5 6.25-5 7.5-2.5-1.25-5-3.75-5-7.5V6l5-2.5z"
            />
          </svg>
          <span>Securing transactions in Douala</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
