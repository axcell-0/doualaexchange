"use client";

type ActivityItem = {
  title: string;
  datetime: string;
  amount: string;
  status: "completed" | "processing";
};

type Props = {
  items: ActivityItem[];
};

export default function CustomerRecentActivity({ items }: Props) {
  return (
    <section className="mt-2 px-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[#0d1c12] text-lg font-bold">Recent Activity</h3>
        <button className="text-gray-500 text-sm font-medium">History</button>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <ActivityCard key={item.title + item.datetime} item={item} />
        ))}
      </div>
    </section>
  );
}

function ActivityCard({ item }: { item: ActivityItem }) {
  const isCompleted = item.status === "completed";
  const iconBg = isCompleted
    ? "bg-[#0ff05a]/10 text-[#0ff05a]"
    : "bg-orange-100 text-orange-500";
  const statusColor = isCompleted ? "text-gray-400" : "text-orange-400";
  const statusLabel = isCompleted ? "Completed" : "Processing";

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100">
      <div className="flex items-center gap-4">
        <div className={`size-10 rounded-full flex items-center justify-center ${iconBg}`}>
          <span className="material-symbols-outlined">
            {isCompleted ? "swap_horiz" : "hourglass_top"}
          </span>
        </div>
        <div>
          <p className="font-bold text-sm">{item.title}</p>
          <p className="text-xs text-gray-500">{item.datetime}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-black text-sm text-[#0ff05a]">{item.amount}</p>
        <p className={`text-[10px] font-bold uppercase ${statusColor}`}>
          {statusLabel}
        </p>
      </div>
    </div>
  );
}
