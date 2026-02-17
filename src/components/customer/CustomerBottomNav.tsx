"use client";

type BottomNavItem = {
  label: string;
  icon: string;
  href: string;
  active?: boolean;
};

const items: BottomNavItem[] = [
  { label: "Home", icon: "home", href: "/customer/dashboard", active: true },
  { label: "Wallet", icon: "account_balance_wallet", href: "/customer/wallet" },
  { label: "History", icon: "history", href: "/customer/history" },
  { label: "Profile", icon: "account_circle", href: "/customer/profile" },
];

export default function CustomerBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-gray-100 flex justify-around items-center px-4 py-3 z-50">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`flex flex-col items-center gap-1 transition-colors ${
            item.active ? "text-[#0ff05a]" : "text-gray-400 hover:text-[#0ff05a]"
          }`}
        >
          <span className="material-symbols-outlined text-[28px] leading-none">
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
