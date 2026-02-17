"use client";

import CustomerHeader from "@/components/customer/CustomerHeader";
import CustomerHero from "@/components/customer/CustomerHero";
import CustomerRecentActivity from "@/components/customer/CustomerRecentActivity";
import CustomerTrustSecurity from "@/components/customer/CustomerTrustSecurity";
import CustomerBottomNav from "@/components/customer/CustomerBottomNav";


const recentActivity = [
  {
    title: "USD to XAF Exchange",
    datetime: "Oct 24, 2023 • 14:30",
    amount: "+$450.00",
    status: "completed" as const,
  },
  {
    title: "EUR to XAF Exchange",
    datetime: "Oct 24, 2023 • 09:15",
    amount: "€1,200.00",
    status: "processing" as const,
  },
];

export default function CustomerDashboardPage() {
  const userName = "Alex Danforth"; // later: from auth

  return (
    <div className="bg-[#f5f8f6] dark:bg-[#102216] text-[#0d1c12] min-h-screen flex flex-col">
      <CustomerHeader userName={userName} />

      <main className="flex-1 overflow-y-auto pb-24">
        <CustomerHero />
        <CustomerRecentActivity items={recentActivity} />
        <CustomerTrustSecurity />
      </main>

      <CustomerBottomNav />
    </div>
  );
}
