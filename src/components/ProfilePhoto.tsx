"use client";

import { useEffect, useState } from "react";

type ProfilePhotoProps = {
  value: string | null;                    // current URL from parent
  onChange: (url: string | null) => void;  // setter in parent
};

export function ProfilePhoto({ value, onChange }: ProfilePhotoProps) {
  const [preview, setPreview] = useState<string | null>(value);

  // Keep local preview synced with parent value
  useEffect(() => {
    setPreview(value);
  }, [value]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create temporary URL for preview
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    // Send URL back to parent (later you’ll send real uploaded URL)
    onChange(objectUrl);
  };

  const handleRemove = () => {
    setPreview(null);
    onChange(null);
  };

  return (
    <section className="flex flex-col items-center space-y-3">
      <div className="relative group">
        <div className="w-28 h-28 rounded-full bg-slate-100 dark:bg-slate-800 border-4 border-[#0ff05a]/20 flex items-center justify-center overflow-hidden">
          {preview ? (
            <img
              src={preview}
              alt="Profile preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-slate-300 text-5xl">👤</span>
          )}
        </div>

        <label className="absolute bottom-0 right-0 bg-[#0ff05a] p-2 rounded-full shadow-lg border-2 border-white dark:border-zinc-900 cursor-pointer">
          📷
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      <div className="text-center mt-1">
        <h3 className="font-medium">Profile Photo</h3>
        <p className="text-xs text-[#102216] dark:text-slate-400">
          Build trust with your future clients
        </p>
        {preview && (
          <button
            type="button"
            onClick={handleRemove}
            className="text-[11px] text-red-500 underline mt-1"
          >
            Remove photo
          </button>
        )}
      </div>
    </section>
  );
}
