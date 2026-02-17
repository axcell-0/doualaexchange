"use client";

import ExchangerPendingHeader from "@/components/exchanger/ExchangerPendingHeader";
import ExchangerPendingContent from "@/components/exchanger/ExchangerPendingContent";

export default function ExchangerPendingPage() {
  return (
    <div className="bg-[#f5f8f6] dark:bg-[#102216] font-display antialiased">
      <div className="relative flex h-screen w-full flex-col overflow-hidden max-w-md mx-auto border-x border-[#0ff05a]/10 shadow-2xl bg-[#f5f8f6] dark:bg-[#102216]">
        <ExchangerPendingHeader />
        <ExchangerPendingContent />
      </div>
    </div>
  );
}
