"use client";

import { useRouter } from "next/navigation";
import { FaChevronLeft, FaLongArrowAltRight } from "react-icons/fa";
import { ProfilePhoto } from "./ProfilePhoto";
import { VerificationUpload } from "./VerificationUpload";

export function RegistrationForm() {
  const router = useRouter();

  return (
    <div className="bg-[#f5f6f8] min-h-full flex flex-col">
      {/* HEADER */}
      <div className="flex px-5 py-6 items-center gap-6">
        <button
          onClick={() => router.back()}
          className="text-[#102216]"
        >
          <FaChevronLeft size={20} />
        </button>

        <h1 className="font-bold text-2xl text-[#102216]">
          Become a Money Changer
        </h1>
      </div>

      {/* BODY */}
      <div className="flex-1 px-8 pb-28">
        <p className="text-lg mt-2">ONBOARDING STEP 2 OF 3</p>

        <hr className="bg-green-200 h-2 rounded-full my-4 border-none" />

        <p className="text-[#4b5563] mb-8 text-base leading-relaxed">
          Register to start secure peer-to-peer transactions in Douala.
        </p>

        <form className="space-y-10">
          <ProfilePhoto />

          {/* BUSINESS DETAILS */}
          <section className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Business Details
            </h2>

            <div className="space-y-5">
              <div>
                <label className="block text-[11px] font-bold text-green-500 uppercase mb-2 ml-1">
                  Full Name
                </label>
                <input
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-sm focus:ring-green-400 focus:border-green-400 outline-none shadow-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase mb-2 ml-1">
                  Business Name (Optional)
                </label>
                <input
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-sm outline-none shadow-sm"
                  placeholder="Douala FX Exchange"
                />
              </div>
            </div>
          </section>

          <VerificationUpload />

          <p className="text-[11px] text-center text-gray-400 leading-relaxed">
            By submitting, you agree to our Terms of Service. Your data is
            encrypted and stored securely.
          </p>
        </form>
      </div>

      {/* STICKY BUTTON */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#f5f6f8] px-8 py-6 shadow-inner">
        <button className="w-full py-4 rounded-md shadow-xl hover:bg-green-500 hover:text-white transition duration-150 text-black bg-green-400 flex items-center gap-3 text-lg font-semibold justify-center">
          Continue <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
}
