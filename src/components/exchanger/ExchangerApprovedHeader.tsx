"use client";

export default function ExchangerApprovedHeader() {
  return (
    <header className="flex items-center bg-white dark:bg-background-dark/50 border-b border-[#0ff05a]/10 p-4 sticky top-0 z-10 max-w-md mx-auto w-full">
      <button className="text-[#0d1c12] dark:text-white p-2 hover:bg-[#0ff05a]/10 rounded-full transition-colors">
        <span className="material-symbols-outlined">arrow_back</span>
      </button>
      <h1 className="text-lg font-bold flex-1 text-center pr-10">
        Verification
      </h1>
    </header>
  );
}
