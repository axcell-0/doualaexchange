"use client";

import ExchangerHero from "@/components/exchanger/ExchangerHero";
import ExchangerPrimaryAction from "@/components/exchanger/ExchangerPrimaryAction";
import ExchangerActiveDeals from "@/components/exchanger/ExchangerActiveDeals";
import ExchangerRecentPayouts from "@/components/exchanger/ExchangerRecentPayouts";
import ExchangerBottomNav from "@/components/exchanger/ExchangerBottomNav";

const activeDeals = [
  {
    pair: "USD → EUR",
    counterparty: "Sarah Jenkins",
    amount: "$1,200.00",
    statusLabel: "In Progress",
    statusColor: "bg-yellow-100 text-yellow-700",
    icon: "currency_exchange",
  },
  {
    pair: "GBP → USD",
    counterparty: "Marcus Vane",
    amount: "£850.00",
    statusLabel: "Awaiting Payout",
    statusColor: "bg-[#0ff05a]/20 text-[#0ff05a]",
    icon: "payments",
  },
];

const recentPayouts = [
  {
    title: "Bank Transfer • **4290",
    datetime: "Oct 24, 2023 • 02:15 PM",
    amount: "+$2,400.00",
    icon: "account_balance",
  },
  {
    title: "Internal Wallet",
    datetime: "Oct 23, 2023 • 11:45 AM",
    amount: "+$950.00",
    icon: "account_balance_wallet",
  },
  {
    title: "Bank Transfer • **4290",
    datetime: "Oct 22, 2023 • 09:00 AM",
    amount: "+$1,120.00",
    icon: "account_balance",
  },
];

export default function ExchangerDashboardPage() {
  const userName = "Alex Sterling"; // later from auth

  return (
    <div className="bg-[#f5f8f6] dark:bg-[#102216] text-slate-900 dark:text-slate-100 min-h-screen pb-24">
      <ExchangerHero userName={userName} />

      <div className="px-5 -mt-6 relative z-20">
        <ExchangerPrimaryAction />

        <ExchangerActiveDeals deals={activeDeals} />

        <ExchangerRecentPayouts payouts={recentPayouts} />
      </div>

      <ExchangerBottomNav />
    </div>
  );
}
