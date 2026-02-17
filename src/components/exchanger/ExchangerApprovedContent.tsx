"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ExchangerApprovedContent() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleGoToDashboard = async () => {
    try {
      setLoading(true);
      await fetch("/api/exchangers/kyc-approved-screen-seen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body can be empty if you identify user from session/token
      });
    } catch (err) {
      console.error(err);
      // even if the API fails, you might still want to continue
    } finally {
      setLoading(false);
      router.push("/exchanger/dashboard");
    }
  };

  return (
    <>
      {/* ...same content as before... */}
      {/* Big green check */}
      <div className="relative mb-8">
        <div className="w-32 h-32 bg-[#0ff05a]/10 dark:bg-[#0ff05a]/5 rounded-full flex items-center justify-center">
          <span
            className="material-symbols-outlined text-6xl text-[#0ff05a]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
        </div>
      </div>

      {/* Headline & text */}
      <div className="text-center space-y-3 mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-[#0d1c12] dark:text-white">
          Account Approved!
        </h2>
        <p className="text-sm font-medium text-[#0d1c12]/80 dark:text-white/80">
          Welcome to the Platform!
        </p>
        <p className="text-sm leading-relaxed text-[#0d1c12]/70 dark:text-white/70">
          Your profile has been verified successfully. You are all set to start
          accepting exchange requests from customers in real time and grow your
          business.
        </p>
      </div>

      {/* Illustration placeholder */}
      <div className="w-full mb-8">
        <div className="w-full h-40 bg-white dark:bg-white/5 rounded-xl border border-[#0ff05a]/10 flex items-center justify-center">
          <span className="text-xs text-[#0d1c12]/50 dark:text-white/40">
            Analytics preview / illustration
          </span>
        </div>
      </div>

      <button
        onClick={handleGoToDashboard}
        disabled={loading}
        className="w-full bg-[#0ff05a] hover:bg-[#0ff05a]/90 text-[#0d1c12] font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#0ff05a]/30 flex items-center justify-center gap-2 disabled:opacity-60"
      >
        <span className="material-symbols-outlined">dashboard</span>
        {loading ? "Loading..." : "Go to Dashboard"}
      </button>

      {/* ...verification ID text... */}
      <p className="mt-4 text-[11px] text-center text-[#0d1c12]/50 dark:text-white/40">
        VERIFICATION ID: 992-FX-CHG
      </p>
    </>
  );
}
