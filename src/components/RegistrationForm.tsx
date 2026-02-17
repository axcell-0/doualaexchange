"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaLongArrowAltRight } from "react-icons/fa";
import { ProfilePhoto } from "./ProfilePhoto";
import { VerificationUpload } from "./VerificationUpload";

type Step1Data = {
  email: string;
  password: string;
  phone: string;
  location: string;
};

export function RegistrationForm() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const [idCardFrontUrl, setIdCardFrontUrl] = useState<string | null>(null);
  const [idCardBackUrl, setIdCardBackUrl] = useState<string | null>(null);

  const [step1Data, setStep1Data] = useState<Step1Data | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Load data from step 1
  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem("exchangerStep1");
    if (!raw) {
      // if user jumped directly to step 2, send back to step 1
      router.push("/exchanger/start");
      return;
    }
    try {
      const parsed = JSON.parse(raw) as Step1Data;
      setStep1Data(parsed);
    } catch {
      router.push("/exchanger/start");
    }
  }, [router]);

  const isFormValid =
    fullName.trim().length > 2 && !!idCardFrontUrl && !!idCardBackUrl;

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMessage(null);

    if (!step1Data) {
      setErrorMessage("Missing basic account info. Please restart registration.");
      router.push("/exchanger/start");
      return;
    }

    if (!isFormValid) {
      setErrorMessage("Please fill all required fields and upload ID images.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/exchangers/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email: step1Data.email,
          password: step1Data.password,
          phone: step1Data.phone,
          location: step1Data.location,
          businessName,
          profileImageUrl: profileImageUrl || "",
          idCardFrontUrl: idCardFrontUrl || "",
          idCardBackUrl: idCardBackUrl || "",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Failed to create exchanger account.");
        setIsSubmitting(false);
        return;
      }

      console.log("Exchanger created:", data.user);
      setIsSubmitting(false);

      // clear step1 data
      if (typeof window !== "undefined") {
        localStorage.removeItem("exchangerStep1");
      }

      router.push("/login/exchanger");
    } catch (err) {
      console.error(err);
      setErrorMessage("Network error. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f5f6f8] min-h-full flex flex-col">
      {/* HEADER */}
      <div className="flex px-5 py-6 items-center gap-6">
        <button onClick={() => router.back()} className="text-[#102216]">
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

        <form className="space-y-10" onSubmit={handleSubmit}>
          <ProfilePhoto
            value={profileImageUrl}
            onChange={setProfileImageUrl}
          />

          <VerificationUpload
            frontValue={idCardFrontUrl}
            backValue={idCardBackUrl}
            onChangeFront={setIdCardFrontUrl}
            onChangeBack={setIdCardBackUrl}
          />

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
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase mb-2 ml-1">
                  Business Name (Optional)
                </label>
                <input
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-sm outline-none shadow-sm"
                  placeholder="Douala FX Exchange"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
              </div>
            </div>
          </section>

          {errorMessage && (
            <p className="text-center text-red-500 text-xs">{errorMessage}</p>
          )}

          <p className="text-[11px] text-center text-gray-400 leading-relaxed">
            By submitting, you agree to our Terms of Service. Your data is
            encrypted and stored securely.
          </p>
        </form>
      </div>

      {/* STICKY BUTTON */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#f5f6f8] px-8 py-6 shadow-inner">
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full py-4 rounded-md shadow-xl hover:bg-green-500 hover:text-white transition duration-150 text-black bg-green-400 flex items-center gap-3 text-lg font-semibold justify-center disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Continue"} <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
}
