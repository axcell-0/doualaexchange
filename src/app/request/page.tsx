"use client";

import { useEffect, useState } from "react";
import { fetchRate } from "@/lib/api";
import { convert } from "@/lib/currency";
import MapSelector from "@/components/MapSelector";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  amount: z.number().min(1, "Amount required"),
});

type FormData = z.infer<typeof schema>;

export default function RequestPage() {
  const [rate, setRate] = useState(0);
  const [from, setFrom] = useState("XAF");
  const [to, setTo] = useState("USD");
  const [result, setResult] = useState(0);

  const {
    register,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const amount = watch("amount");

  useEffect(() => {
    fetchRate(from, to).then(setRate);
  }, [from, to]);

  useEffect(() => {
    if (amount && rate) {
      setResult(convert(amount, rate));
    }
  }, [amount, rate]);

  return (
    <main className="max-w-md mx-auto p-4 space-y-4">

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-bold"
      >
        New Request
      </motion.h1>

      {/* Currency selection */}
      <motion.div layout className="bg-white p-4 rounded-xl border space-y-2">
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="input"
        >
          <option>XAF</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="input"
        >
          <option>USD</option>
          <option>XAF</option>
          <option>EUR</option>
        </select>
      </motion.div>

      {/* Amount */}
      <motion.div layout className="bg-white p-4 rounded-xl border">
        <input
          type="number"
          placeholder="Amount"
          {...register("amount", { valueAsNumber: true })}
          className="input text-2xl font-bold"
        />
        {errors.amount && (
          <p className="text-red-500 text-sm">{errors.amount.message}</p>
        )}
      </motion.div>

      {/* Result */}
      <motion.div
        layout
        className="bg-green-50 p-4 rounded-xl font-bold text-lg"
      >
        Estimated: {result.toFixed(2)} {to}
      </motion.div>

      {/* Map */}
      <MapSelector />

      {/* Submit */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        className="w-full bg-green-400 font-bold py-4 rounded-xl"
      >
        Publish Request
      </motion.button>

    </main>
  );
}
