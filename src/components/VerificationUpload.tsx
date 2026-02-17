"use client";

import { useEffect, useState } from "react";

type VerificationUploadProps = {
  frontValue: string | null;
  backValue: string | null;
  onChangeFront: (url: string | null) => void;
  onChangeBack: (url: string | null) => void;
};

export function VerificationUpload({
  frontValue,
  backValue,
  onChangeFront,
  onChangeBack,
}: VerificationUploadProps) {
  const [frontPreview, setFrontPreview] = useState<string | null>(frontValue);
  const [backPreview, setBackPreview] = useState<string | null>(backValue);

  useEffect(() => {
    setFrontPreview(frontValue);
  }, [frontValue]);

  useEffect(() => {
    setBackPreview(backValue);
  }, [backValue]);

  const handleFrontChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setFrontPreview(objectUrl);
    onChangeFront(objectUrl);
  };

  const handleBackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setBackPreview(objectUrl);
    onChangeBack(objectUrl);
  };

  const clearFront = () => {
    setFrontPreview(null);
    onChangeFront(null);
  };

  const clearBack = () => {
    setBackPreview(null);
    onChangeBack(null);
  };

  return (
    <section className="space-y-4">
      <h2 className="text-xs font-bold uppercase tracking-widest text-[#102216]">
        Identity Verification
      </h2>

      <p className="text-xs text-[#102216]">
        Upload a clear photo of the <span className="font-semibold">front</span>{" "}
        and <span className="font-semibold">back</span> of your ID card.
      </p>

      {/* Front side */}
      <div className="space-y-2">
        <label className="block text-[11px] font-bold text-green-500 uppercase mb-1">
          Front of ID
        </label>

        <div className="flex items-center gap-4">
          <div className="w-32 h-20 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
            {frontPreview ? (
              <img
                src={frontPreview}
                alt="ID front preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-[10px] text-gray-500 text-center px-2">
                No image
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="file"
              accept="image/*"
              onChange={handleFrontChange}
              className="text-xs"
            />
            {frontPreview && (
              <button
                type="button"
                onClick={clearFront}
                className="text-xs text-red-500 underline"
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Back side */}
      <div className="space-y-2">
        <label className="block text-[11px] font-bold text-green-500 uppercase mb-1">
          Back of ID
        </label>

        <div className="flex items-center gap-4">
          <div className="w-32 h-20 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
            {backPreview ? (
              <img
                src={backPreview}
                alt="ID back preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-[10px] text-gray-500 text-center px-2">
                No image
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="file"
              accept="image/*"
              onChange={handleBackChange}
              className="text-xs"
            />
            {backPreview && (
              <button
                type="button"
                onClick={clearBack}
                className="text-xs text-red-500 underline"
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
