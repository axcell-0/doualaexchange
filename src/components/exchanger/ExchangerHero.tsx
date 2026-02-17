"use client";

type Props = {
  userName: string;
};

export default function ExchangerHero({ userName }: Props) {
  return (
    <div className="bg-background-dark text-white p-6 pt-12 pb-10 rounded-b-4xl shadow-2xl relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0ff05a]/10 rounded-full blur-[100px] -mr-32 -mt-32" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-2 border-[#0ff05a] p-0.5">
                <img
                  alt="Partner Profile"
                  className="w-full h-full rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPUGSPuiraG-pbA_zlNry9dFxmVIYextRyAm4Bp9GKfGLyBIQ55CZWmmG8dzpl5CmV5rsBI-UACCm9dvpJ12oIZ-f-a8_5pODbOtlkgU0jx7yrqrQgM7e3YYZ20yntBWawazHhvg6RPbI_2MsxiF_0u8be-VPHiJUDjg2as3vvzN1njPoOKCNBshz10Yuc6-0FC8WrdyjuG4e67NfAcgl7it51E5r6U6i9rP0FdfXpl9UDhMUEGckrJ2s-syAzhL6nzrmPiwdb3LzU"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#0ff05a] rounded-full border-2 border-background-dark" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">{userName}</h1>
              <p className="text-[#0ff05a] text-sm font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">verified</span>
                Verified Elite Partner
              </p>
            </div>
          </div>

          <button className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>

        <StatusCard />
      </div>
    </div>
  );
}

function StatusCard() {
  return (
    <div className="glass-card rounded-2xl p-5 flex flex-col gap-4">
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xs text-white/60 uppercase tracking-widest font-semibold">
            Current Status
          </span>
          <span className="text-lg font-bold text-[#0ff05a]">Accepting Requests</span>
        </div>

        <label className="relative inline-flex items-center cursor-pointer">
          <input defaultChecked className="sr-only peer" type="checkbox" />
          <div className="w-14 h-7 bg-white/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:start-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0ff05a]" />
        </label>
      </div>

      <div className="h-px bg-white/10 w-full" />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-white/50 mb-1">Daily Earnings</p>
          <p className="text-2xl font-bold">$4,250.00</p>
          <p className="text-xs text-[#0ff05a] flex items-center gap-1 mt-1">
            <span className="material-symbols-outlined text-xs">trending_up</span>
            +12.5%
          </p>
        </div>
        <div>
          <p className="text-xs text-white/50 mb-1">Total Trades</p>
          <p className="text-2xl font-bold">156</p>
          <p className="text-xs text-[#0ff05a] flex items-center gap-1 mt-1">
            <span className="material-symbols-outlined text-xs">check_circle</span>
            99% Success
          </p>
        </div>
      </div>
    </div>
  );
}
