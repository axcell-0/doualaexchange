"use client";

import React, { useState } from "react";
import { ChevronLeft, MapPin, Copy, Check } from "lucide-react";

/* =======================
   TYPES
======================= */

interface UserInfo {
  name: string;
  avatar: string;
  rating: number;
  exchanges: number;
  location: string;
  verified: boolean;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface MeetingLocation {
  name: string;
  address: string;
  coordinates: Coordinates;
}

interface MeetingDetailsProps {
  onBack?: () => void;
  onComplete?: () => void;
  userInfo?: UserInfo;
  meetingLocation?: MeetingLocation;
  transactionCode?: string;
}

/* =======================
   COMPONENT
======================= */

const MeetingDetails: React.FC<MeetingDetailsProps> = ({
  onBack,
  onComplete,
  userInfo = {
    name: "Jean-Paul N.",
    avatar: "",
    rating: 4.9,
    exchanges: 120,
    location: "Akwa, Douala",
    verified: true,
  },
  meetingLocation = {
    name: "Standard Chartered Bank, Akwa",
    address: "Avenue de la Liberté, Douala",
    coordinates: { lat: 4.0511, lng: 9.7679 },
  },
  transactionCode = "4582",
}) => {
  const [codeCopied, setCodeCopied] = useState<boolean>(false);
  const [isCompleting, setIsCompleting] = useState<boolean>(false);

  const handleCopyCode = async () => {
    if (navigator?.clipboard) {
      await navigator.clipboard.writeText(transactionCode);
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    }
  };

  const handleOpenMaps = () => {
    const { lat, lng } = meetingLocation.coordinates;
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
      "_blank"
    );
  };

  const handleComplete = () => {
    setIsCompleting(true);
    setTimeout(() => {
      setIsCompleting(false);
      onComplete?.();
    }, 1500);
  };

  const codeDigits: string[] = transactionCode.split("");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* HEADER */}
      <div className="sticky top-0 bg-white px-4 py-3 z-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-lg font-semibold">Meeting Details</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto px-4 pb-10">
        <div className="max-w-6xl mx-auto">

          {/* USER INFO */}
          <div className="bg-white mt-6 rounded-2xl p-6 shadow-sm lg:flex lg:items-center lg:gap-6">
            <div className="relative flex-shrink-0 mx-auto lg:mx-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {userInfo.name.charAt(0)}
                </span>
              </div>

              {userInfo.verified && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center border-white">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
              )}
            </div>

            <div className="mt-4 lg:mt-0 text-center lg:text-left">
              <h2 className="text-xl font-semibold">{userInfo.name}</h2>
              <p className="text-sm text-gray-600">
                ⭐ {userInfo.rating} • {userInfo.exchanges}+ exchanges
              </p>
              <p className="text-sm text-gray-500 flex items-center justify-center lg:justify-start gap-1 mt-1">
                <MapPin className="w-4 h-4" />
                {userInfo.location}
              </p>
            </div>
          </div>

          {/* GRID */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 mt-8">
            {/* LEFT */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">Meeting Location</h3>
                <button
                  onClick={handleOpenMaps}
                  className="text-sm text-emerald-600 hover:text-emerald-700"
                >
                  Open in Maps
                </button>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="h-64 bg-gradient-to-br from-blue-100 via-emerald-50 to-blue-50 flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-red-500" />
                </div>

                <div className="p-5 border-t">
                  <h4 className="font-semibold">{meetingLocation.name}</h4>
                  <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4" />
                    {meetingLocation.address}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="mt-8 lg:mt-0">
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full flex flex-col justify-center">
                <h3 className="text-xl font-bold text-center mb-2">
                  Secret Transaction Code
                </h3>
                <p className="text-sm text-gray-600 text-center mb-8">
                  Share this code only after verifying the cash
                </p>

                <div className="flex justify-center gap-4 mb-6">
                  {codeDigits.map((digit, index) => (
                    <div
                      key={index}
                      className="w-20 h-20 rounded-2xl border-2 border-emerald-500 bg-emerald-50 flex items-center justify-center"
                    >
                      <span className="text-4xl font-bold">{digit}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleCopyCode}
                  className="py-3 bg-gray-50 hover:bg-gray-100 rounded-xl flex items-center justify-center gap-2"
                >
                  {codeCopied ? (
                    <>
                      <Check className="w-5 h-5 text-emerald-600" />
                      <span className="text-emerald-600">Code Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="sticky bottom-0 bg-white px-4 py-5">
        <div className="max-w-6xl mx-auto lg:flex lg:justify-end">
          <button
            onClick={handleComplete}
            disabled={isCompleting}
            className={`w-full lg:w-72 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition ${
              isCompleting
                ? "bg-emerald-600 text-white"
                : "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg"
            }`}
          >
            {isCompleting ? "Completing..." : "Transaction Completed"}
            <Check className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetingDetails;
