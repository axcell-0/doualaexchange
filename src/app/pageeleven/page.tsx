"use client";

import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

/* =======================
   TYPE DEFINITIONS
======================= */

interface UserInfo {
  name: string;
  avatar: string;
  reviewStatus: string;
  appliedAt: string;
}

interface IdentityDocument {
  type: string;
  imageUrl: string;
  description: string;
}

interface PersonalInfo {
  phoneNumber: string;
  email: string;
  registrationDate: string;
  registrationTime: string;
}

interface AmlCheck {
  status: string;
  message: string;
}

interface VerificationDetailsProps {
  onBack?: () => void;
  onApprove?: () => void;
  onReject?: () => void;
  userInfo?: UserInfo;
  identityDocument?: IdentityDocument;
  personalInfo?: PersonalInfo;
  amlCheck?: AmlCheck;
}

/* =======================
   COMPONENT
======================= */

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
  const [phoneCopied, setPhoneCopied] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const safeCopy = async (text: string, cb: () => void) => {
    if (navigator?.clipboard) {
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

  const BARCODE_HEIGHTS: number[] = [
    60, 45, 70, 55, 65, 50, 75, 48, 68, 52,
    60, 45, 70, 55, 65, 50, 75, 48, 68, 52,
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* HEADER */}
      <div className="sticky top-0 bg-white px-4 py-3 z-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg">
            <IoIosArrowBack className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold">Verification Detail</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* USER SECTION */}
          <div className="py-8 text-center lg:text-left lg:flex lg:items-center lg:gap-8">
            <div className="relative mx-auto lg:mx-0 w-28 h-28 rounded-full bg-orange-400 flex items-center justify-center text-white text-4xl font-bold">
              {userInfo.name.charAt(0)}
              <span className="absolute bottom-0 right-0 bg-yellow-400 p-2 rounded-full">
                <CiClock2 className="w-4 h-4" />
              </span>
            </div>

            <div className="mt-4 lg:mt-0">
              <h2 className="text-xl font-bold">{userInfo.name}</h2>
              <p className="text-sm text-gray-500">
                Applied {userInfo.appliedAt}
              </p>
            </div>
          </div>

          {/* GRID */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* LEFT */}
            <div>
              <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
                <p className="text-sm mb-4">
                  {identityDocument.description}
                </p>

                <div className="relative aspect-[1.6/1] bg-linear-to-br from-cyan-100 to-teal-200 rounded-xl p-4">
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
            </div>

            {/* RIGHT */}
            <div className="space-y-4">
              <div className="flex justify-between bg-white p-6 rounded-xl shadow-sm">
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="font-semibold">
                    {personalInfo.phoneNumber}
                  </p>
                </div>

                <button
                  onClick={() =>
                    safeCopy(personalInfo.phoneNumber, () =>
                      setPhoneCopied((v) => !v)
                    )
                  }
                >
                  {phoneCopied ? <FaRegCheckCircle /> : <MdContentCopy />}
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-xs text-gray-500">AML Check</p>
                <p className="font-semibold text-emerald-600">
                  {amlCheck.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="sticky bottom-0 bg-white px-4 py-4">
        <div className="max-w-6xl mx-auto flex gap-4 lg:justify-end">
          <button
            onClick={handleReject}
            disabled={isProcessing}
            className="flex-1 lg:flex-none lg:w-40 border rounded-xl py-3"
          >
            Reject
          </button>

          <button
            onClick={handleApprove}
            disabled={isProcessing}
            className="flex-1 lg:flex-none lg:w-48 bg-[#0ff05a] text-white rounded-xl py-3"
          >
            {isProcessing ? "Processing..." : "Approve Changer"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationDetails;
