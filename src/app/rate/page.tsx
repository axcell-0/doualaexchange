
import { RateLayout } from "@/components/RateLayout";
import { StarRating } from "@/components/StarRating";
import { RatingBreakdown } from "@/components/RatingBreakdown";

export default function RatePage() {
  return (
    <RateLayout>
      {/* Top nav */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10">
        <button className="size-12 flex items-center">✕</button>

        <h2 className="text-lg font-bold flex-1 text-center">
          Rate Experience
        </h2>

        <button className="text-[#0ff05a] font-bold hover:opacity-80">
          Skip
        </button>
      </div>

      <div className="flex-1 flex flex-col px-4 pt-8 pb-10 max-w-md mx-auto w-full">
        {/* Success icon */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full bg-[#0ff05a]/20 flex items-center justify-center mb-4 text-[#0ff05a] text-5xl">
            ✔
          </div>

          <h1 className="text-[28px] font-bold text-center">
            How was your experience?
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-base mt-2 text-center">
            Your feedback helps keep the Douala peer-to-peer community safe.
          </p>
        </div>

        <StarRating />

        <RatingBreakdown />

        {/* Comment */}
        <div className="flex flex-col gap-2 mb-8">
          <label>
            <p className="text-base font-medium pb-2">
              Comments (Optional)
            </p>
            <textarea
              className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 min-h-30 placeholder:text-slate-400 p-4 focus:ring-2 focus:ring-[#0ff05a]/50"
              placeholder="Tell us about your transaction in Douala..."
            />
          </label>
        </div>

        <div className="flex-1" />

        {/* Submit */}
        <button className="w-full bg-[#0ff05a] text-background-dark font-bold text-lg py-4 rounded-xl shadow-lg shadow-[#0ff05a]/20 active:scale-[0.98] transition-all">
          Submit Rating
        </button>

        <p className="text-slate-400 text-xs text-center mt-4">
          Safe & Secure Transactions
        </p>
      </div>
    </RateLayout>
  );
}