"use client";

export default function ExchangerRejectedContent() {
  return (
    <>
      {/* Illustration */}
      <div className="relative mb-8">
        <div className="w-32 h-32 bg-[#0ff05a]/10 dark:bg-[#0ff05a]/5 rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined text-6xl text-[#0ff05a]/60">
            assignment_late
          </span>
        </div>
        <div className="absolute -bottom-2 -right-2 bg-white dark:bg-background-dark p-2 rounded-full shadow-md border border-[#0ff05a]/20">
          <span className="material-symbols-outlined text-amber-500 font-bold">
            warning
          </span>
        </div>
      </div>

      {/* Headline & text */}
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-2xl font-bold tracking-tight text-[#0d1c12] dark:text-white">
          Verification Unsuccessful
        </h2>
        <p className="text-sm leading-relaxed text-[#0d1c12]/70 dark:text-white/70">
          We were unable to verify your identity with the documents provided.
          This is usually due to blurry photos, glares, or expired
          identification. Please review our requirements and try again.
        </p>
      </div>

      {/* Checklist */}
      <div className="w-full bg-white dark:bg-white/5 border border-[#0ff05a]/10 rounded-xl p-5 mb-10 space-y-3">
        <p className="text-xs font-bold uppercase tracking-wider text-[#0ff05a]/80 mb-2">
          Checklist for Success
        </p>
        <ChecklistItem text="Valid government-issued ID" />
        <ChecklistItem text="Clear, well-lit photo (no glares)" />
        <ChecklistItem text="All corners of the ID are visible" />
      </div>

      {/* Actions */}
      <div className="w-full flex flex-col gap-3">
        <button className="w-full bg-[#0ff05a] hover:bg-[#0ff05a]/90 text-[#0d1c12] font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#0ff05a]/20 flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">upload_file</span>
          Re-submit Documents
        </button>
        <button className="w-full bg-[#0ff05a]/10 hover:bg-[#0ff05a]/20 text-[#0d1c12] dark:text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">support_agent</span>
          Contact Support
        </button>
      </div>

      <p className="mt-8 text-xs text-center text-[#0d1c12]/50 dark:text-white/40 px-4">
        By resubmitting, you agree to our Terms of Service and Privacy Policy
        regarding identity verification.
      </p>
    </>
  );
}

function ChecklistItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 text-sm">
      <span className="material-symbols-outlined text-[#0ff05a] text-lg">
        check_circle
      </span>
      <span className="text-[#0d1c12]/80 dark:text-white/80">{text}</span>
    </div>
  );
}
