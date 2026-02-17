"use client";

import ExchangerApprovedHeader from "@/components/exchanger/ExchangerApprovedHeader";
import ExchangerApprovedContent from "@/components/exchanger/ExchangerApprovedContent";

export default function ExchangerApprovedPage() {
  return (
    <div className="bg-[#f5f8f6] dark:bg-[#102216] min-h-screen flex flex-col font-display text-[#0d1c12] dark:text-white">
      <ExchangerApprovedHeader />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 max-w-md mx-auto w-full">
        <ExchangerApprovedContent />
      </main>
    </div>
  );
}
