"use client";

import React, { useState } from "react";
import { ChevronLeft, Copy, Check, X, Shield, Clock } from "lucide-react";

interface VerificationDetailsProps {
  onBack?: () => void;
  onApprove?: () => void;
  onReject?: () => void;
  userInfo?: {
    name: string;
    avatar?: string;
    reviewStatus?: "pending" | "approved" | "rejected";
    appliedAt?: string;
  };
  identityDocument?: {
    type: string;
    imageUrl?: string;
    description?: string;
  };
  personalInfo?: {
    phoneNumber: string;
    email: string;
    registrationDate: string;
    registrationTime: string;
  };
  amlCheck?: {
    status: "passed" | "warning" | "failed";
    message: string;
  };
}

const VerificationDetails: React.FC<VerificationDetailsProps> = ({
  onBack,
  onApprove,
  onReject,
  userInfo = {
    name: "Marco Valente",
    avatar: "",
    reviewStatus: "pending",
    appliedAt: "42 minutes ago",
  },
  identityDocument = {
    type: "National ID Card",
    imageUrl: "",
    description: "Focus on the image, name, age to verify user's identity.",
  },
  personalInfo = {
    phoneNumber: "+39 345 678 9012",
    email: "m.valente@exchange.io",
    registrationDate: "Oct 24, 2023",
    registrationTime: "14:32",
  },
  amlCheck = {
    status: "passed",
    message: "No concerning adverse news matches found in global watchlists.",
  },
}) => {
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const safeCopy = async (text: string, cb: () => void) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      cb();
      setTimeout(() => cb(), 2000);
    }
  };

  const handleApprove = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onApprove?.();
    }, 1500);
  };

  const handleReject = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onReject?.();
    }, 1500);
  };

  // deterministic barcode heights (NO Math.random)
  const BARCODE_HEIGHTS = [
    60, 45, 70, 55, 65, 50, 75, 48, 68, 52,
    60, 45, 70, 55, 65, 50, 75, 48, 68, 52,
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* HEADER */}
      <div className="sticky top-0 bg-white border-b px-4 py-3 z-20">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <h1 className="text-lg font-semibold">Verification Detail</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto pb-24 max-w-2xl mx-auto px-4">
        {/* USER */}
        <div className="py-8 text-center">
          <div className="relative mx-auto w-28 h-28 rounded-full bg-orange-400 flex items-center justify-center text-white text-4xl font-bold">
            {userInfo.name.charAt(0)}
            <span className="absolute bottom-0 right-0 bg-yellow-400 p-2 rounded-full">
              <Clock className="w-4 h-4" />
            </span>
          </div>

          <h2 className="mt-4 text-xl font-bold">{userInfo.name}</h2>
          <p className="text-sm text-gray-500">Applied {userInfo.appliedAt}</p>
        </div>

        {/* ID CARD */}
        <div className="bg-white rounded-xl p-4 border mb-6">
          <p className="text-sm mb-3">{identityDocument.description}</p>

          <div className="relative aspect-[1.6/1] bg-gradient-to-br from-cyan-100 to-teal-200 rounded-xl p-4">
            <div className="absolute bottom-2 left-0 right-0 px-4">
              <div className="h-6 flex gap-0.5">
                {BARCODE_HEIGHTS.map((h, i) => (
                  <div
                    key={i}
                    className="w-1 bg-gray-700/30 rounded"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PERSONAL INFO */}
        <div className="space-y-3">
          <div className="flex justify-between bg-white p-4 rounded-xl border">
            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <p className="font-semibold">{personalInfo.phoneNumber}</p>
            </div>
            <button
              onClick={() =>
                safeCopy(personalInfo.phoneNumber, () =>
                  setPhoneCopied((v) => !v)
                )
              }
            >
              {phoneCopied ? <Check /> : <Copy />}
            </button>
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="sticky bottom-0 bg-white border-t px-4 py-4 flex gap-3">
        <button
          onClick={handleReject}
          disabled={isProcessing}
          className="flex-1 border rounded-xl py-3"
        >
          Reject
        </button>

        <button
          onClick={handleApprove}
          disabled={isProcessing}
          className="flex-1 bg-emerald-500 text-white rounded-xl py-3"
        >
          {isProcessing ? "Processing..." : "Approve Changer"}
        </button>
      </div>
    </div>
  );
};

export default VerificationDetails;
