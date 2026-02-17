"use client";

import { Bell, Shield } from "lucide-react";

type Props = {
  userName: string;
};

export default function CustomerHeader({ userName }: Props) {
  return (
    <header className="flex items-center bg-white dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-50 p-4 justify-between border-b border-[#0ff05a]/10">
      <div className="flex items-center gap-3">
        <div className="size-10 overflow-hidden rounded-full border-2 border-[#0ff05a]/20">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_6yjY4vlJhiG07g-zcp5SiBSe25GXdRu1Z1VIph9Up1uvpub0GEHmRzbP_y6jsLzu9jwuIw7tkNQdP6s8PZxNUYLSdRn1owsm_TW-_0IDZ4pNywMTFXjrj2t7X5sOODxPybhqh2SHS7YKRIHmgc35PsNPtGdskfeV0ftlQklA3xz1rpJzclQvpNmn8V3AKFpl54YqDCXLrO8y9Qr8I9PNjlDbaUW-mFxGYJ8Jdcpkni_wmG2CgYgIIkCGp602LyIkYPX6X7IZ_ChS"
            alt="Profile avatar"
          />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider font-bold text-gray-500">
            Welcome back
          </p>
          <h2 className="text-[#0d1c12] dark:text-white text-lg font-bold leading-tight">
            {userName}
          </h2>
        </div>
      </div>
      <div className="flex  gap-2">
        <Bell className="size-10 bg-gray-100 rounded-full p-2 text-[#0ff05a]" />
        <Shield className="size-10 bg-gray-100 rounded-full p-2 text-[#0ff05a]" />
      </div>
    </header>
  );
}

function IconButton({ icon }: { icon: string }) {
  return (
    <button className="flex size-10 items-center justify-center rounded-full bg-[#0ff05a]/10 text-[#0ff05a]">
      <span className="material-symbols-outlined">{icon}</span>
    </button>
  );
}
