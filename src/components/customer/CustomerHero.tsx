"use client";

import { Shield } from "lucide-react";

export default function CustomerHero() {
  return (
    <section className="p-4">
      <div className="relative overflow-hidden rounded-xl bg-linear-to-br from-[#0d1c12] to-[#1a3a24] p-6 text-white shadow-xl">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ff05a]/20 border border-[#0ff05a]/30 mb-4">
            <span className="material-symbols-outlined text-[#0ff05a] text-sm">
              <Shield className="size-10" />
            </span>
            <span className="text-xs font-semibold text-[#0ff05a] uppercase tracking-wide">
              Secure &amp; Encrypted
            </span>
          </div>

          <h1 className="text-3xl font-black leading-tight tracking-tight mb-2">
            Exchange Currency with Total Peace of Mind
          </h1>

          <p className="text-gray-300 text-sm mb-6 max-w-[80%]">
            Your funds are protected by industry-leading security protocols.
            Reliable, fast, and transparent.
          </p>

          <button className="w-full bg-[#0ff05a] text-[#0d1c12] py-4 rounded-lg font-extrabold flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(15,240,90,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-transform">
            <span className="material-symbols-outlined">
              logo
            </span>
            New Exchange Request
          </button>
        </div>

        <div className="absolute -right-10 -top-10 size-40 bg-[#0ff05a]/10 rounded-full blur-3xl" />
        <div className="absolute -left-10 -bottom-10 size-40 bg-[#0ff05a]/5 rounded-full blur-2xl" />
      </div>
    </section>
  );
}
