"use client";

import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-107.5 h-50 bg-cover bg-center relative overflow-hidden"
    >
      <div
        className="rounded-xl min-h-50 bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4ZN0nZ_GMwuC3WEPwM2MbUzheZBexaDAjK1ZcpIcbfMFyp0kZukoy4T2S7gQfZFD0Oa_KUooa9kWoqQ8mftButs3EJImNK0tcCi2-ngJLxxOLY-RA8JVLiKDjcqADz91KpGrMGGg2OqJXC52S_JySugSllFO-LANCu5B_ynnPNlkGk5UO0FLFdKmJDHcPSMxLEYD0lOaQcWlyvP0SCnI0PZzMJHgw8A7bTZ4gGeLdCkDF-IdWZJbxmAR8WCbOvMw8-AhhcgocuX1e')",
        }}
      >
        <div className="flex justify-center items-center text-center absolute inset-0 bg-black/60" />
        <div className="relative p-6 text-white">
          <h2 className="text-3xl font-bold">Welcome Back, Partner</h2>
          <p className="text-sm opacity-80">Business Account Access</p>
        </div>
      </div>
    </motion.div>
  );
}
