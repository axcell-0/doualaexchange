"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { CiLock } from "react-icons/ci";

interface CreateAccountProps {
  onBack?: () => void;
  onComplete?: (data: {
    name: string;
    email: string;
    phoneNumber: string;
  }) => void;
}

interface Country {
  code: string;
  dial: string;
  flag: string;
}

const countries: Country[] = [
  { code: "CM", dial: "+237", flag: "🇨🇲" },
  { code: "US", dial: "+1", flag: "🇺🇸" },
  { code: "FR", dial: "+33", flag: "🇫🇷" },
  { code: "GB", dial: "+44", flag: "🇬🇧" },
  { code: "NG", dial: "+234", flag: "🇳🇬" },
];

const CreateAccount: React.FC<CreateAccountProps> = ({ onBack, onComplete }) => {
  const router = useRouter();

  const [step, setStep] = useState<"form" | "otp">("form");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(54);
  const [isCountdownActive, setIsCountdownActive] = useState(false);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const otpRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  /* ================= COUNTDOWN ================= */

  useEffect(() => {
    if (isCountdownActive && countdown > 0) {
      const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setIsCountdownActive(false);
    }
  }, [countdown, isCountdownActive]);

  /* ================= VALIDATION ================= */

  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid =
    name.length > 2 &&
    isEmailValid(email) &&
    phoneNumber.length >= 8 &&
    password.length >= 6; // simple rule: 6+ chars

  /* ================= SEND OTP (simulated) ================= */

  const handleSendOTP = () => {
    setErrorMessage(null);

    if (!isFormValid) {
      alert("Please fill all fields correctly");
      return;
    }

    setIsLoading(true);
    // TODO: later you can call an API to send real SMS
    setTimeout(() => {
      setIsLoading(false);
      setStep("otp");
      setCountdown(54);
      setIsCountdownActive(true);
    }, 1500);
  };

  /* ================= OTP LOGIC ================= */

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      otpRefs[index + 1].current?.focus();
    }
  };

  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs[index - 1].current?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").slice(0, 4).split("");

    const newOtp = ["", "", "", ""];
    pasted.forEach((char, i) => (newOtp[i] = char));
    setOtp(newOtp);

    otpRefs[Math.min(pasted.length, 3)].current?.focus();
  };

  /* ================= VERIFY OTP + CREATE USER ================= */

  const handleVerifyOTP = async () => {
    setErrorMessage(null);

    const code = otp.join("");
    if (code.length !== 4) {
      alert("Please enter the full 4-digit code");
      return;
    }

    setIsLoading(true);
    try {
      const fullPhone = selectedCountry.dial + phoneNumber;

      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password, // backend will hash this
          role: "customer",
          phone: fullPhone,
          location: "Douala", // or capture from a field later
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data.error || "Failed to create account");
        setIsLoading(false);
        return;
      }

      const user = await res.json();

      onComplete?.({
        name: user.name,
        email: user.email,
        phoneNumber: fullPhone,
      });

      setIsLoading(false);
      router.push("/customer/dashboard");
    } catch (err) {
      console.error(err);
      setErrorMessage("Network error. Please try again.");
      setIsLoading(false);
    }
  };

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="px-4 py-4 flex items-center justify-between">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg">
          <Link href="/pageone">
            <IoIosArrowBack className="w-6 h-6 text-gray-700" />
          </Link>
        </button>
        <h1 className="text-lg font-semibold">Create Account</h1>
        <div className="w-6" />
      </div>

      <div className="flex-1 px-4 py-6 max-w-2xl mx-auto w-full">
        {step === "form" && (
          <>
            <h2 className="text-2xl font-bold mb-2">Verify your identity</h2>
            <p className="text-gray-600 mb-6">
              Enter your details to receive a secure 4-digit code.
            </p>

            {/* NAME */}
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-14 border rounded-lg px-4 mb-4 bg-gray-50"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-14 border rounded-lg px-4 mb-4 bg-gray-50"
            />

            {/* PASSWORD */}
            <input
              type="password"
              placeholder="Password (min 6 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-14 border rounded-lg px-4 mb-4 bg-gray-50"
            />

            {/* PHONE */}
            <div className="flex gap-2 mb-4">
              <select
                value={selectedCountry.dial}
                onChange={(e) =>
                  setSelectedCountry(
                    countries.find((c) => c.dial === e.target.value) ||
                      countries[0]
                  )
                }
                className="w-32 h-14 border rounded-lg px-3 bg-gray-50"
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.dial}>
                    {country.flag} {country.dial}
                  </option>
                ))}
              </select>

              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) =>
                  setPhoneNumber(e.target.value.replace(/\D/g, ""))
                }
                placeholder="Phone number"
                className="flex-1 h-14 border rounded-lg px-4 bg-gray-50"
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <CiLock className="w-4 h-4 text-emerald-600" />
              End-to-end encrypted verification
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
            )}

            <button
              onClick={handleSendOTP}
              disabled={!isFormValid || isLoading}
              className={`w-full h-14 rounded-xl font-semibold text-lg transition ${
                !isFormValid || isLoading
                  ? "bg-gray-200 text-gray-400"
                  : "bg-emerald-500 hover:bg-emerald-600 text-white"
              }`}
            >
              {isLoading ? "Sending…" : "Send OTP"}
            </button>
          </>
        )}

        {step === "otp" && (
          <>
            <h2 className="text-2xl font-bold mb-2">Enter code</h2>

            <p className="text-gray-600 mb-2">
              Code sent to{" "}
              <span className="font-semibold">
                {selectedCountry.dial} {phoneNumber}
              </span>
            </p>

            <p className="text-gray-500 text-sm mb-4">
              {isCountdownActive
                ? `Resend code in ${countdown}s`
                : "You can resend the code now."}
            </p>

            <div className="flex gap-4 justify-center mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={otpRefs[index]}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                  onPaste={index === 0 ? handleOtpPaste : undefined}
                  className="w-14 h-14 text-center text-2xl font-semibold rounded-xl border-2 border-gray-300 focus:ring-2 focus:ring-emerald-500"
                />
              ))}
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
            )}

            <button
              onClick={handleVerifyOTP}
              disabled={otp.some((d) => !d) || isLoading}
              className="w-full h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold"
            >
              {isLoading ? "Verifying…" : "Verify OTP"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateAccount;
