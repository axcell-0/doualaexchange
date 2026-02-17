"use client";

export default function ExchangerPendingHeader() {
  return (
    <div className="flex items-center px-4 py-6 justify-between">
      <button className="text-background-dark dark:text-white flex size-10 items-center justify-center rounded-full hover:bg-[#0ff05a]/10 transition-colors">
        <span className="material-symbols-outlined">arrow_back</span>
      </button>
      <h2 className="text-background-dark dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
        Verification Status
      </h2>
    </div>
  );
}
