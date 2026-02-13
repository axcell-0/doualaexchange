"use client";

import { useState } from "react";

type StarRatingProps = {
  onChange?: (value: number) => void;
};

export function StarRating({ onChange }: StarRatingProps) {
  const [rating, setRating] = useState(4);

  function handleClick(value: number) {
    setRating(value);
    onChange?.(value);
  }

  return (
    <div className="flex justify-center gap-2 mb-10">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => handleClick(star)}
          className={`text-5xl transition ${
            star <= rating
              ? "text-[#0ff05a]"
              : "text-slate-300 dark:text-slate-700"
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );
}