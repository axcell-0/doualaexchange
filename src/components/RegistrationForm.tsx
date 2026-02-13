import { ProfilePhoto } from "./ProfilePhoto";
import { VerificationUpload } from "./VerificationUpload";

export function RegistrationForm() {
  return (
    <>
      {/* Header */}
      <header className="px-6 pt-4 pb-2">
        <button className="mb-4 text-slate-500 dark:text-slate-400">
          ←
        </button>

        <h1 className="text-2xl font-bold tracking-tight">
          Become a Money Changer
        </h1>

        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Register to start secure peer-to-peer transactions in Douala.
        </p>
      </header>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-6 pb-24">
        <form className="space-y-8 mt-6">
          <ProfilePhoto />

          {/* Business info */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Business Details
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-[#4b9b65] uppercase mb-1 ml-1">
                  Full Name
                </label>
                <input
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:ring-[#4b9b65] focus:border-[#4b9b65]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1 ml-1">
                  Business Name (Optional)
                </label>
                <input
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm"
                  placeholder="Douala FX Exchange"
                />
              </div>
            </div>
          </section>

          <VerificationUpload />

          <p className="text-[10px] text-center text-slate-400 leading-relaxed">
            By submitting, you agree to our Terms of Service. Your data is
            encrypted and stored securely.
          </p>
        </form>
      </div>

      {/* Sticky bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-t border-slate-100 dark:border-slate-800">
        <button className="w-full bg-[#4b9b65] text-zinc-900 font-bold py-4 rounded-xl shadow-lg active:scale-[0.98] flex items-center justify-center gap-2">
          Submit for Verification ✔
        </button>

        <div className="mt-6 flex justify-center">
          <div className="w-32 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
        </div>
      </div>
    </>
  );
}
