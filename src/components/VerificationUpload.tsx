type UploadCardProps = {
  label: string;
};

function UploadCard({ label }: UploadCardProps) {
  return (
    <div className="group relative flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-4 h-36 bg-slate-50 dark:bg-slate-800/30 hover:border-[#4b9b65] transition-colors cursor-pointer">
      <span className="text-slate-400 group-hover:text-[#4b9b65] mb-2">
        📸
      </span>
      <span className="text-[11px] font-medium text-center">{label}</span>
      <div className="absolute inset-0 bg-[#0ff05a]/5 opacity-0 group-hover:opacity-100 rounded-xl pointer-events-none"></div>
    </div>
  );
}

export function VerificationUpload() {
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-end">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Identity Verification
        </h2>
        <span className="text-[10px] text-[#0ff05a] bg-[#0ff05a]/10 px-2 py-0.5 rounded-full font-bold">
          REQUIRED
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <UploadCard label="Front of ID or Passport" />
        <UploadCard label="Back of ID Card" />
      </div>

      <div className="bg-[#4b9b65]/5 rounded-lg p-3 space-y-2 border border-[#0ff05a]/10">
        <h4 className="text-[11px] font-bold text-[#0ff05a] uppercase flex items-center gap-1">
          ℹ️ Photo Requirements
        </h4>
        <ul className="text-[10px] text-slate-600 dark:text-slate-400 space-y-1">
          <li>• Ensure all 4 corners are visible</li>
          <li>• Text must be clear and readable</li>
          <li>• Avoid direct glare from lights</li>
        </ul>
      </div>
    </section>
  );
}
