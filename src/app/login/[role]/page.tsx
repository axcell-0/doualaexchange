"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import HeroBanner from "@/components/HeroBanner";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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

  const roleParam = (params?.role as string) || "customer";
  const isExchanger = roleParam === "exchanger";
  const roleLabel = isExchanger ? "Money Changer" : "Customer";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

        const hasSeen = user.hasSeenKycApprovedScreen ?? false;

        setIsLoading(false);

        if (!hasSeen) {
          router.push("/exchanger/approved");
          return;
        }

        router.push("/exchanger/dashboard");
        return;
      }

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

      <p className="text-[#102216]/70 dark:text-white/70 text-base font-medium flex flex-col gap-2 mt-4 mb-6 text-center px-4">
        Please enter your registered email account and password to access your{" "}
        {roleLabel.toLowerCase()} dashboard.
      </p>

      <div className="flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md"
        >
          <h1 className="text-3xl font-bold text-[#102216] mb-6">
            Login as {roleLabel}
          </h1>

          {/* Email */}
          <label className="block mb-5">
            <span className="text-sm font-semibold text-[#102216]">
              Email
            </span>
            <input
              type="email"
              className="mt-2 w-full h-12 border border-gray-200 rounded-lg px-4 bg-gray-50 text-base outline-none focus:ring-2 focus:ring-emerald-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          {/* Password */}
          <label className="block mb-6 relative">
            <span className="text-sm font-semibold text-[#102216]">
              Password
            </span>

            <input
              type={showPassword ? "text" : "password"}
              className="mt-2 w-full h-12 border border-gray-200 rounded-lg px-4 pr-12 bg-gray-50 text-base outline-none focus:ring-2 focus:ring-emerald-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Eye Icon */}
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-[42px] text-gray-500 hover:text-[#102216]"
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </label>

          {errorMessage && (
            <p className="text-sm text-red-500 mb-4">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full h-12 rounded-lg text-lg font-semibold text-white transition ${
              isLoading
                ? "bg-gray-300"
                : "bg-emerald-500 hover:bg-emerald-600"
            }`}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </>
  );
}
