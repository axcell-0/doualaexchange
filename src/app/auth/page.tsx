"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import ActionButton from "@/components/ActionButton";
import {  UserSearch, UserPlus, LogIn, } from "lucide-react";

export default function AuthPage() {
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
            < UserSearch className="text-[#0ff05a] w-16 h-16" />
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
            Continuing as <span className="font-bold">Money Changer</span>
          </div>
        </motion.div>

        {/* Buttons */}
        <div className="w-full space-y-4">
          <ActionButton primary>
            <a href="/login">
              <div className="flex gap-2 items-center justify-center">
                <LogIn size={18} />
                Log In to My Account
              </div>
            </a>
          </ActionButton>

          <ActionButton>
            <a href="/pagethree">
              <div className="flex gap-2 items-center justify-center">
                <UserPlus size={18} />
                Create New Account
              </div>
            </a>
          </ActionButton>
        </div>

        {/* Helper */}
        <p className="mt-8 text-sm opacity-60 text-center">
          Not a Money Changer?{" "}
          <span className="text-[#0ff05a] cursor-pointer">Change Role</span>
        </p>
      </div>
    </div>
  );
}
