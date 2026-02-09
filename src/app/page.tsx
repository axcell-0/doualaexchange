'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, Shield } from 'lucide-react';

interface CreateAccountProps {
  onBack?: () => void;
  onComplete?: (phoneNumber: string) => void;
}

const CreateAccount: React.FC<CreateAccountProps> = ({ onBack, onComplete }) => {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+237');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(54);
  const [isCountdownActive, setIsCountdownActive] = useState(false);

  const otpRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  /* Countdown timer */
  useEffect(() => {
    if (isCountdownActive && countdown > 0) {
      const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setIsCountdownActive(false);
    }
  }, [countdown, isCountdownActive]);

  /* Send OTP */
  const handleSendOTP = () => {
    if (phoneNumber.length < 8) {
      alert('Please enter a valid phone number');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('otp');
      setCountdown(54);
      setIsCountdownActive(true);
    }, 1500);
  };

  /* OTP logic */
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
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs[index - 1].current?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').slice(0, 4).split('');
    const newOtp = ['', '', '', ''];

    pasted.forEach((char, i) => (newOtp[i] = char));
    setOtp(newOtp);
    otpRefs[Math.min(pasted.length, 3)].current?.focus();
  };

  /* Verify OTP */
  const handleVerifyOTP = () => {
    const code = otp.join('');
    if (code.length !== 4) {
      alert('Please enter the full 4-digit code');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onComplete?.(countryCode + phoneNumber);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Header */}
      <div className=" px-4 py-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-lg font-semibold">Create Account</h1>
        <div className="w-6" />
      </div>

      {/* Contents */}
      <div className="flex-1 px-4 py-6 max-w-2xl mx-auto w-full">

        {step === 'phone' && (
          <>
            {/* ===== VERIFY IDENTITY ===== */}
            <h2 className="text-2xl font-bold mb-2">
              Verify your identity
            </h2>
            <p className="text-gray-600 mb-6">
              Enter your phone number to receive a secure 4-digit code.
            </p>

            {/* Phone Input */}
            <label className="block text-sm font-medium mb-2">
              Phone number
            </label>

            <div className="flex gap-2 mb-4">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="w-24 h-14 border rounded-lg px-3 bg-gray-50"
              >
                <option value="+237">🇨🇲 +237</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+33">🇫🇷 +33</option>
              </select>

              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) =>
                  setPhoneNumber(e.target.value.replace(/\D/g, ''))
                }
                placeholder="6xx xxx xxx"
                maxLength={9}
                className="flex-1 h-14 border rounded-lg px-4 bg-gray-50"
              />
            </div>

            {/* Security note */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <Shield className="w-4 h-4 text-emerald-600" />
              End-to-end encrypted verification
            </div>

            {/* Send OTP */}
            <button
              onClick={handleSendOTP}
              disabled={isLoading || phoneNumber.length < 8}
              className={`w-full h-14 rounded-xl font-semibold text-lg transition
                ${
                  isLoading || phoneNumber.length < 8
                    ? 'bg-gray-200 text-gray-400'
                    : 'bg-emerald-500 hover:bg-emerald-600 text-white'
                }`}
            >
              {isLoading ? 'Sending…' : 'Send OTP'}
            </button>
          </>
        )}

        {step === 'otp' && (
          <>
            {/* ===== ENTER CODE ===== */}
            <h2 className="text-2xl font-bold mb-2">
              Enter code
            </h2>
            <p className="text-gray-600 mb-6">
              We&apos;ve sent a 4-digit code to{' '}
              <span className="font-semibold">
                {countryCode} {phoneNumber}
              </span>
            </p>

            {/* OTP INPUTS */}
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
                  onPaste={index === 0 ? handleOtpPaste : undefined}
                  className={`w-14 h-14 text-center text-2xl font-semibold rounded-xl border-2
                    ${
                      digit
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-300'
                    }
                    focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                />
              ))}
            </div>

            {/* Resend */}
            <p className="text-center text-sm text-gray-600 mb-6">
              Didn&apos;t receive the code?{' '}
              {isCountdownActive ? (
                <span className="text-emerald-600 font-medium">
                  Resend in 0:{countdown.toString().padStart(2, '0')}
                </span>
              ) : (
                <button
                  onClick={() => {
                    setCountdown(54);
                    setIsCountdownActive(true);
                  }}
                  className="text-emerald-600 font-medium hover:underline"
                >
                  Resend code
                </button>
              )}
            </p>

            {/* Verify */}
            <button
              onClick={handleVerifyOTP}
              disabled={isLoading || otp.some((d) => !d)}
              className={`w-full h-14 rounded-xl font-semibold text-lg transition
                ${
                  isLoading || otp.some((d) => !d)
                    ? 'bg-gray-200 text-gray-400'
                    : 'bg-emerald-500 hover:bg-emerald-600 text-white'
                }`}
            >
              {isLoading ? 'Verifying…' : 'Verify OTP'}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateAccount;
