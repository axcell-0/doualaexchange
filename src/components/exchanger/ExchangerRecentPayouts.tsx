"use client";

type Payout = {
  title: string;
  datetime: string;
  amount: string;
  icon: string;
};

type Props = {
  payouts: Payout[];
};

export default function ExchangerRecentPayouts({ payouts }: Props) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-bold text-slate-800 dark:text:white mb-4">
        Recent Payouts
      </h2>

      <div className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-slate-100 dark:border-white/10">
        {payouts.map((payout, idx) => (
          <div
            key={payout.title + payout.datetime}
            className={`p-4 flex items-center justify-between ${
              idx < payouts.length - 1
                ? "border-b border-slate-50 dark:border-white/5"
                : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-500">
                <span className="material-symbols-outlined text-sm">
                  {payout.icon}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold">{payout.title}</p>
                <p className="text-[10px] text-slate-400">{payout.datetime}</p>
              </div>
            </div>
            <p className="text-sm font-bold text-[#0ff05a]">{payout.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
