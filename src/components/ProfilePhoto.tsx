export function ProfilePhoto() {
  return (
    <section className="flex flex-col items-center">
      <div className="relative group">
        <div className="w-28 h-28 rounded-full bg-slate-100 dark:bg-slate-800 border-4 border-[#0ff05a]/20 flex items-center justify-center overflow-hidden">
          <span className="text-slate-300 text-5xl">👤</span>
        </div>

        <button
          type="button"
          className="absolute bottom-0 right-0 bg-[#0ff05a] p-2 rounded-full shadow-lg border-2 border-white dark:border-zinc-900"
        >
          📷
        </button>
      </div>

      <div className="text-center mt-3">
        <h3 className="font-medium">Profile Photo</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Build trust with your future clients
        </p>
      </div>
    </section>
  );
}
