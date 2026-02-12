"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, Shield } from "lucide-react";
import Link from "next/link";

/* ================= TYPES ================= */

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

/* ================= COMPONENT ================= */

const countries: Country[] = [
  { code: "CM", dial: "+237", flag: "🇨🇲" },
  { code: "US", dial: "+1", flag: "🇺🇸" },
  { code: "FR", dial: "+33", flag: "🇫🇷" },
  { code: "GB", dial: "+44", flag: "🇬🇧" },
  { code: "NG", dial: "+234", flag: "🇳🇬" },
];

const CreateAccount: React.FC<CreateAccountProps> = ({
  onBack,
  onComplete,
}) => {
  const [step, setStep] = useState<"form" | "otp">("form");

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [selectedCountry, setSelectedCountry] = useState<Country>(
    countries[0]
  );

  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(54);
  const [isCountdownActive, setIsCountdownActive] =
    useState<boolean>(false);

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
    //eslint-disable-next-line react-hooks/exhaustive-deps

    }
  }, [countdown, isCountdownActive]);

  /* ================= VALIDATION ================= */

  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid =
    name.length > 2 &&
    isEmailValid(email) &&
    phoneNumber.length >= 8;

  /* ================= SEND OTP ================= */

  const handleSendOTP = () => {
    if (!isFormValid) {
      alert("Please fill all fields correctly");
      return;
    }

    setIsLoading(true);
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
    const pasted = e.clipboardData
      .getData("text")
      .slice(0, 4)
      .split("");

    const newOtp = ["", "", "", ""];
    pasted.forEach((char, i) => (newOtp[i] = char));
    setOtp(newOtp);

    otpRefs[Math.min(pasted.length, 3)].current?.focus();
  };

  /* ================= VERIFY OTP ================= */

  const handleVerifyOTP = () => {
    const code = otp.join("");
    if (code.length !== 4) {
      alert("Please enter the full 4-digit code");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onComplete?.({
        name,
        email,
        phoneNumber: selectedCountry.dial + phoneNumber,
      });
    }, 1500);
  };

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="px-4 py-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <Link href={'/pageone'}>
          
            <ChevronLeft  className="w-6 h-6 text-gray-700" />
          </Link>
        </button>
        <h1 className="text-lg font-semibold">Create Account</h1>
        <div className="w-6" />
      </div>

      <div className="flex-1 px-4 py-6 max-w-2xl mx-auto w-full">

        {step === "form" && (
          <>
            <h2 className="text-2xl font-bold mb-2">
              Verify your identity
            </h2>
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

            {/* PHONE */}
            <div className="flex gap-2 mb-4">
              <select
                value={selectedCountry.dial}
                onChange={(e) =>
                  setSelectedCountry(
                    countries.find(
                      (c) => c.dial === e.target.value
                    ) || countries[0]
                  )
                }
                className="w-32 h-14 border rounded-lg px-3 bg-gray-50"
              >
                {countries.map((country) => (
                  <option
                    key={country.code}
                    value={country.dial}
                  >
                    {country.flag} {country.dial}
                  </option>
                ))}
              </select>

              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) =>
                  setPhoneNumber(
                    e.target.value.replace(/\D/g, "")
                  )
                }
                placeholder="Phone number"
                className="flex-1 h-14 border rounded-lg px-4 bg-gray-50"
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <Shield className="w-4 h-4 text-emerald-600" />
              End-to-end encrypted verification
            </div>

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
            <h2 className="text-2xl font-bold mb-2">
              Enter code
            </h2>

            <p className="text-gray-600 mb-6">
              Code sent to{" "}
              <span className="font-semibold">
                {selectedCountry.dial} {phoneNumber}
              </span>
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
                  onChange={(e) =>
                    handleOtpChange(index, e.target.value)
                  }
                  onKeyDown={(e) =>
                    handleOtpKeyDown(index, e)
                  }
                  onPaste={
                    index === 0
                      ? handleOtpPaste
                      : undefined
                  }
                  className="w-14 h-14 text-center text-2xl font-semibold rounded-xl border-2 border-gray-300 focus:ring-2 focus:ring-emerald-500"
                />
              ))}
            </div>

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
