type PhoneFrameProps = {
  children: React.ReactNode;
};

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="w-full max-w-107.5 h-full sm:h-233 bg-white dark:bg-zinc-900 relative overflow-hidden sm:rounded-[3rem] sm:border-8 border-slate-900 shadow-2xl flex flex-col">
      {/* iOS status bar */}
      <div className="h-12 w-full flex items-center justify-between px-8 shrink-0 text-xs font-semibold">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <span>📶</span>
          <span>📡</span>
          <span>🔋</span>
        </div>
      </div>

      {children}
    </div>
  );
}
