type BarProps = {
  label: string;
  percent: number;
};

function Bar({ label, percent }: BarProps) {
  return (
    <>
      <p className="text-slate-500 dark:text-slate-400 text-sm">{label}</p>
      <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#0ff05a]/10 mx-2">
        <div
          className="rounded-full bg-[#0ff05a]"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="text-slate-500 dark:text-slate-400 text-sm text-right">
        {percent}%
      </p>
    </>
  );
}

export function RatingBreakdown() {
  return (
    <div className="bg-white dark:bg-slate-800/50 rounded-xl p-4 mb-6 border border-slate-100 dark:border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <p className="text-slate-900 dark:text-white text-sm font-semibold uppercase tracking-wider">
          User Profile Rating
        </p>
        <p className="text-[#0ff05a] text-sm font-bold">4.0 Average</p>
      </div>

      <div className="grid grid-cols-[20px_1fr_40px] items-center gap-y-3">
        <Bar label="5" percent={75} />
        <Bar label="4" percent={15} />
        <Bar label="3" percent={5} />
      </div>
    </div>
  );
}