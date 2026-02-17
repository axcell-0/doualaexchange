"use client";

import ExchangerRejectedHeader from "@/components/exchanger/ExchangerRejectedHeader";
import ExchangerRejectedContent from "@/components/exchanger/ExchangerRejectedContent";

export default function ExchangerRejectedPage() {
  return (
    <div className="bg-[#f5f8f6] dark:bg-[#102216] min-h-screen flex flex-col font-display text-[#0d1c12] dark:text-white">
      <ExchangerRejectedHeader />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 max-w-md mx-auto w-full">
        <ExchangerRejectedContent />
      </main>
    </div>
  );
}
