"use client";

import { motion } from "framer-motion";
import { useRouter, useParams } from "next/navigation";
import Header from "@/components/Header";
import ActionButton from "@/components/ActionButton";
import { UserSearch, UserPlus, LogIn } from "lucide-react";

export default function AuthPage() {
  const router = useRouter();
  const params = useParams();

  const roleParam = (params?.role as string) || "customer"; // "customer" or "exchanger"

  const isExchanger = roleParam === "exchanger";

  const roleLabel = isExchanger ? "Money Changer" : "Customer";

  // Where the buttons should go:
  const loginHref = isExchanger ? "/login/exchanger" : "/login/customer";
  const signupHref = isExchanger ? "/exchanger/start" : "/pagethree";

  const toggleRole = () => {
    const nextRole = isExchanger ? "customer" : "exchanger";
    router.push(`/auth/${nextRole}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <Header />

      <div className="flex-1 flex flex-col items-center justify-center px-6 max-w-md mx-auto w-full">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-12 relative"
        >
          <div className="absolute inset-0 bg-[#0ff05a]/20 blur-3xl rounded-full"></div>
          <div className="relative bg-white dark:bg-background-dark/50 border border-[#0ff05a]/20 p-8 rounded-full shadow-xl">
            <UserSearch className="text-[#0ff05a] w-16 h-16" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-12"
        >
          <h1 className="text-3xl font-bold leading-tight">
            Do you already have <br /> an account?
          </h1>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0ff05a]/10 rounded-full text-sm">
            Continuing as <span className="font-bold">{roleLabel}</span>
          </div>
        </motion.div>

        {/* Buttons */}
        <div className="w-full space-y-4">
          <ActionButton primary>
            <a href={loginHref}>
              <div className="flex gap-2 items-center justify-center">
                <LogIn size={18} />
                Log In to My Account
              </div>
            </a>
          </ActionButton>

          <ActionButton>
            <a href={signupHref}>
              <div className="flex gap-2 items-center justify-center">
                <UserPlus size={18} />
                Create New Account
              </div>
            </a>
          </ActionButton>
        </div>

        {/* Helper */}
        <p className="mt-8 text-sm opacity-60 text-center">
          Not a {roleLabel}?{" "}
          <button
            type="button"
            onClick={toggleRole}
            className="text-[#0ff05a] cursor-pointer underline"
          >
            Change Role
          </button>
        </p>
      </div>
    </div>
  );
}
