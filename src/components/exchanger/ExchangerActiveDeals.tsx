"use client";

type Deal = {
  pair: string;
  counterparty: string;
  amount: string;
  statusLabel: string;
  statusColor: string; // tailwind classes
  icon: string;
};

type Props = {
  deals: Deal[];
};

export default function ExchangerActiveDeals({ deals }: Props) {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-slate-800 dark:text-white">
          Active Deals
        </h2>
        <a className="text-[#0ff05a] text-sm font-semibold" href="#">
          See All
        </a>
      </div>

      <div className="space-y-3">
        {deals.map((deal) => (
          <DealCard key={deal.pair + deal.counterparty} deal={deal} />
        ))}
      </div>
    </div>
  );
}

function DealCard({ deal }: { deal: Deal }) {
  return (
    <div className="bg-white dark:bg-white/5 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-white/10 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-[#0ff05a]/20 flex items-center justify-center text-[#0ff05a]">
          <span className="material-symbols-outlined">{deal.icon}</span>
        </div>
        <div>
          <p className="font-bold text-slate-800 dark:text-white">{deal.pair}</p>
          <p className="text-xs text-slate-500">
            Counterparty: {deal.counterparty}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-slate-800 dark:text-white">{deal.amount}</p>
        <span
          className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider ${deal.statusColor}`}
        >
          {deal.statusLabel}
        </span>
      </div>
    </div>
  );
}
