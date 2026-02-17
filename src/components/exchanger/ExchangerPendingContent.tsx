"use client";

export default function ExchangerPendingContent() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
      {/* Icon / illustration */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-[#0ff05a]/20 rounded-full blur-3xl scale-125" />
        <div className="relative flex items-center justify-center w-48 h-48 bg-white dark:bg-background-dark rounded-full border-4 border-[#0ff05a] shadow-xl">
          <span
            className="material-symbols-outlined text-[80px] text-[#0ff05a]"
            style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}
          >
            history_toggle_off
          </span>
          <div className="absolute inset-0 rounded-full border-4 border-[#0ff05a] opacity-20 scale-110" />
        </div>
      </div>

      {/* Text */}
      <h1 className="text-background-dark dark:text-white text-3xl font-bold leading-tight mb-4">
        Verification in Progress
      </h1>

      <p className="text-background-dark/70 dark:text-white/70 text-base font-normal leading-relaxed mb-10 max-w-xs">
        Our administrators are currently reviewing your documents to ensure the
        security of your transactions.
        <span className="block mt-4 font-medium text-background-dark dark:text-white">
          This usually takes 15-30 minutes.
        </span>
        You will receive a push notification once your account is ready.
      </p>

      {/* Loading indicator */}
      <div className="flex items-center gap-2 mb-8 bg-[#0ff05a]/10 px-4 py-2 rounded-full">
        <div className="w-2 h-2 bg-[#0ff05a] rounded-full animate-pulse" />
        <span className="text-[#0ff05a] text-sm font-semibold uppercase tracking-wider">
          Checking Server Status
        </span>
      </div>

      {/* Actions */}
      <div className="px-6 pb-12 w-full flex flex-col gap-3">
        <button className="w-full bg-[#0ff05a] hover:bg-[#0ff05a]/90 text-background-dark font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#0ff05a]/20 flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">support_agent</span>
          Contact Support
        </button>
        <a
          href="#"
          className="text-background-dark/50 dark:text-white/50 text-sm font-medium hover:text-[#0ff05a] transition-colors text-center py-2"
        >
          Need help? Visit our FAQ
        </a>
      </div>
    </div>
  );
}
