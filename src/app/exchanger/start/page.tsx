"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ExchangerStartPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("Douala");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEmailValid = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const isFormValid =
    isEmailValid(email) && password.length >= 6 && phone.length >= 8;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!isFormValid) {
      setErrorMessage("Please fill all fields correctly.");
      return;
    }

    // Save basic data for step 2 (simple approach)
    const data = { email, password, phone, location };
    if (typeof window !== "undefined") {
      localStorage.setItem("exchangerStep1", JSON.stringify(data));
    }

    setIsSubmitting(true);
    router.push("/exchanger/register"); // Step 2 page
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background-light dark:bg-[#102216] px-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 space-y-6">
        <h1 className="text-2xl font-bold mb-2 text-[#102216] dark:text-white">
          Become a Money Changer
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Step 1 of 3 – Account details
        </p>

        <form className="space-y-4" onSubmit={handleNext}>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full h-11 rounded-lg border px-3 bg-gray-50"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full h-11 rounded-lg border px-3 bg-gray-50"
              placeholder="Minimum 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              Phone
            </label>
            <input
              type="tel"
              className="w-full h-11 rounded-lg border px-3 bg-gray-50"
              placeholder="+237 6xx xxx xxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              Location (city)
            </label>
            <input
              type="text"
              className="w-full h-11 rounded-lg border px-3 bg-gray-50"
              placeholder="Douala"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {errorMessage && (
            <p className="text-xs text-red-500">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`w-full h-11 rounded-lg font-semibold text-white ${
              !isFormValid || isSubmitting
                ? "bg-gray-300"
                : "bg-emerald-500 hover:bg-emerald-600"
            }`}
          >
            {isSubmitting ? "Continuing..." : "Continue to Step 2"}
          </button>
        </form>
      </div>
    </main>
  );
}
