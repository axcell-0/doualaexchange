"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaStar, FaShieldAlt, FaCopy, FaCheck } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

interface UserInfo {
  name: string;
  avatar?: string;
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
  userInfo?: UserInfo;
  meetingLocation?: MeetingLocation;
  transactionCode?: string;
  onBack?: () => void;
  onComplete?: () => void;
}

export default function MeetingDetails({
  userInfo = {
    name: "Jean-Paul N.",
    avatar: "",
    rating: 4.9,
    exchanges: 120,
    location: "Akwa, Douala",
    verified: true,
  },
  meetingLocation,
  transactionCode = "0000",
  onBack = () => window.history.back(),
  onComplete,
}: MeetingDetailsProps) {
  const [confirmed, setConfirmed] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);
    setTimeout(() => setConfirmed(false), 2000);
    onComplete?.();
  };

  const handleCopyCode = async () => {
    if (navigator?.clipboard && transactionCode) {
      await navigator.clipboard.writeText(transactionCode);
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    }
  };

  // Build Google Maps embed URL from coordinates or address
  const mapEmbedUrl = meetingLocation
    ? `https://maps.google.com/maps?q=${meetingLocation.coordinates.lat},${meetingLocation.coordinates.lng}&z=16&output=embed`
    : null;

  return (
    <div className="min-h-screen bg-[#f2f4f2] pb-28 font-sans">
      {/* Header */}
      <div className="bg-white px-4 pt-12 pb-4 flex items-center gap-3 shadow-sm sticky top-0 z-10">
        <button
          onClick={onBack}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
          aria-label="Go back"
        >
          <FaChevronLeft size={14} />
        </button>
        <h1 className="text-[17px] font-semibold tracking-tight">Meeting Details</h1>
      </div>

      <div className="px-4 pt-5 space-y-4">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xl font-bold shrink-0 overflow-hidden">
              {userInfo.avatar ? (
                <img
                  src={userInfo.avatar}
                  alt={userInfo.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                userInfo.name.charAt(0)
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base font-semibold truncate">{userInfo.name}</h2>
                {userInfo.verified && (
                  <span className="text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-medium">
                    ✓ Verified
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <FaStar size={12} className="text-amber-400" />
                <span className="text-sm font-medium">{userInfo.rating}</span>
                <span className="text-gray-400 text-sm">·</span>
                <span className="text-sm text-gray-500">{userInfo.exchanges} exchanges</span>
              </div>
              <div className="flex items-center gap-1 mt-0.5 text-gray-500 text-sm">
                <FaLocationDot size={11} className="text-gray-400" />
                {userInfo.location}
              </div>
            </div>
          </div>
        </div>

        {/* Meeting Location Card */}
        {meetingLocation && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Map embed */}
            {mapEmbedUrl && (
              <div className="w-full h-44 bg-gray-100 relative">
                <iframe
                  src={mapEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Meeting location map"
                  allowFullScreen
                />
              </div>
            )}

            <div className="p-5 space-y-4">
              {/* Location details */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                  <FaLocationDot size={14} className="text-emerald-600" />
                </div>
                <div>
                  <p className="text-[13px] text-gray-400 font-medium uppercase tracking-wide">
                    Meeting Point
                  </p>
                  <p className="font-semibold text-[15px] mt-0.5">{meetingLocation.name}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{meetingLocation.address}</p>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Transaction code */}
              {transactionCode && (
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[13px] text-gray-400 font-medium uppercase tracking-wide">
                      Transaction Code
                    </p>
                    <p className="text-2xl font-bold tracking-widest mt-1 text-gray-800">
                      {transactionCode}
                    </p>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                      codeCopied
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {codeCopied ? <FaCheck size={12} /> : <FaCopy size={12} />}
                    {codeCopied ? "Copied!" : "Copy"}
                  </button>
                </div>
              )}

              <hr className="border-gray-100" />

              {/* Safety tip */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                  <FaShieldAlt size={13} className="text-amber-500" />
                </div>
                <div>
                  <p className="text-[13px] text-gray-400 font-medium uppercase tracking-wide">
                    Safety Tip
                  </p>
                  <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">
                    Always meet in a public place and verify the transaction before leaving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Confirm Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-4 shadow-lg">
        <button
          onClick={handleConfirm}
          disabled={confirmed}
          className={`w-full py-3.5 rounded-xl font-semibold text-[15px] transition-all duration-200 ${
            confirmed
              ? "bg-emerald-500 text-white scale-[0.98]"
              : "bg-black text-white hover:bg-gray-800 active:scale-[0.98]"
          }`}
        >
          {confirmed ? "✓ Confirmed!" : "Confirm Meeting"}
        </button>
      </div>
    </div>
  );
}