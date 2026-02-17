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

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem("exchangerStep1");
    if (!raw) {
      router.push("/exchanger/start");
      return;
    }
    try {
      const parsed = JSON.parse(raw) as Step1Data;
      setStep1Data(parsed);
      //eslint-disable-next-line react-hooks/exhaustive-deps
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
          <FaChevronLeft 
          onClick={() => router.push('auth/exchanger')}
          size={20} />
        </button>

        <h1 className="font-bold text-3xl text-[#102216]">
          Become a Money Changer
        </h1>
      </div>

      {/* BODY */}
      <div className="flex-1 px-8 pb-28">
        <p className="text-xl text-[#102216] mt-2 font-medium">
          ONBOARDING STEP 2 OF 3
        </p>

        {/* beginning of replacement place holder */}
        <div className="w-full bg-green-200 h-2 rounded-full my-4 overflow-hidden">
          <div
            className="h-full bg-green-400 rounded-full transition-all duration-500"
            style={{ width: "66.6%" }}
          ></div>
        </div>
        {/* end of replacement */}

        <p className="text-base text-[#102216] mb-8 leading-relaxed">
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
            <h2 className="text-sm font-semibold text-[#102216]">
              Business Details
            </h2>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-[#102216] mb-2">
                  Full Name
                </label>
                <input
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-base outline-none shadow-sm"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#102216] mb-2">
                  Business Name (Optional)
                </label>
                <input
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-base outline-none shadow-sm"
                  placeholder="Douala FX Exchange"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
              </div>
            </div>
          </section>

          {errorMessage && (
            <p className="text-center text-red-500 text-sm">
              {errorMessage}
            </p>
          )}

          <p className="text-[12px] text-center text-gray-400 leading-relaxed">
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
          className="w-full py-4 rounded-md shadow-xl hover:bg-green-500 hover:text-white transition duration-150 bg-green-400 text-white flex items-center gap-3 text-xl font-semibold justify-center disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Continue"}
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
}
