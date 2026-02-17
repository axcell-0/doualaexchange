"use client";

type NavItem = {
  label: string;
  icon: string;
  href: string;
  active?: boolean;
};

const items: NavItem[] = [
  { label: "Requests", icon: "dynamic_feed", href: "/exchanger/dashboard", active: true },
  { label: "Deals", icon: "handshake", href: "/exchanger/deals" },
  { label: "Wallet", icon: "account_balance_wallet", href: "/exchanger/wallet" },
  { label: "Profile", icon: "person", href: "/exchanger/profile" },
];

export default function ExchangerBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#0a150e] border-t border-slate-100 dark:border-white/5 px-6 py-3 pb-6 flex justify-between items-center z-50">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`flex flex-col items-center gap-1 ${
            item.active
              ? "text-[#0ff05a]"
              : "text-slate-400 dark:text-slate-500"
          }`}
        >
          <span className="material-symbols-outlined text-[24px]">
            {item.icon}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
