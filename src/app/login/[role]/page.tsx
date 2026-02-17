"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import HeroBanner from "@/components/HeroBanner";

type UserRole = "customer" | "exchanger";
type KycStatus = "pending" | "approved" | "rejected" | undefined;

type LoginUser = {
  _id: string;
  email: string;
  fullName?: string;
  role: UserRole;
  kycStatus?: KycStatus;
  hasSeenKycApprovedScreen?: boolean;
};

export default function LoginPage() {
  const router = useRouter();
  const params = useParams();

  // /login/customer or /login/exchanger
  const roleParam = (params?.role as string) || "customer";
  const isExchanger = roleParam === "exchanger";
  const roleLabel = isExchanger ? "Money Changer" : "Customer";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email || !password) {
      setErrorMessage("Please enter email and password");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Login failed");
        setIsLoading(false);
        return;
      }

      const user = data.user as LoginUser;

      // 1) Role mismatch guard
      if (isExchanger && user.role !== "exchanger") {
        setErrorMessage(
          "This account is registered as a Customer. Please log in from the customer section."
        );
        setIsLoading(false);
        return;
      }

      if (!isExchanger && user.role !== "customer") {
        setErrorMessage(
          "This account is registered as a Money Changer. Please log in from the exchanger section."
        );
        setIsLoading(false);
        return;
      }

      // 2) Exchanger KYC flow
      if (isExchanger) {
        const status = user.kycStatus;

        if (status === "pending" || !status) {
          setIsLoading(false);
          router.push("/exchanger/pending");
          return;
        }

        if (status === "rejected") {
          setIsLoading(false);
          router.push("/exchanger/rejected");
          return;
        }

        // status === "approved"
        const hasSeen = user.hasSeenKycApprovedScreen ?? false;

        setIsLoading(false);

        if (!hasSeen) {
          // first time after approval → show approved screen
          router.push("/exchanger/approved");
          return;
        }

        // already saw the approved screen → go directly to dashboard
        router.push("/exchanger/dashboard");
        return;
      }

      // 3) Customer success
      setIsLoading(false);
      router.push("/customer/dashboard");
    } catch (err) {
      console.error(err);
      setErrorMessage("Network error, please try again.");
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bg-gray-500 dark:bg-[#102216]"></div>
      <HeroBanner />
      <p
        className="text-[#102216]/70 dark:text-white/70 text-sm font-medium 
        flex flex-col gap-2 mt-4 mb-6 text-center px-4"
      >
        Please enter your registered email account and password to access your{" "}
        {roleLabel.toLowerCase()} dashboard.
      </p>
      <div className="flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-6 rounded-xl shadow-sm"
        >
          <h1 className="text-2xl font-bold mb-4">Login as {roleLabel}</h1>

          <label className="block mb-3">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              type="email"
              className="mt-1 w-full h-11 border rounded-lg px-3 bg-gray-50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="block mb-4">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <input
              type="password"
              className="mt-1 w-full h-11 border rounded-lg px-3 bg-gray-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {errorMessage && (
            <p className="text-sm text-red-500 mb-3">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full h-11 rounded-lg font-semibold text-white ${
              isLoading ? "bg-gray-300" : "bg-[#0ff05a] hover:bg-emerald-600"
            }`}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </>
  );
}
