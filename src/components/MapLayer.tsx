type Marker = {
  label: string;
  top: string;
  left: string;
  pulse?: boolean;
};

const markers: Marker[] = [
  { label: "Bonapriso Center", top: "35%", left: "45%", pulse: true },
  { label: "Akwa Trust Point", top: "55%", left: "60%" },
  { label: "Deido Secure", top: "20%", left: "25%" },
];

export function MapLayer() {
  return (
    <div className="absolute inset-0 z-0">
      <div
        className="h-full w-full bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcedcyTnO8rkMMvN9dx2vlc1xc2fonO0KRZbSjSYNugiXcCNScqhHw44OzYHnfnujvEFBpATDUW1_R8bsz3NV0Yb34tBaqMOF27K-9XVhCgZxHIhHn3HZYazZyU1ty4i1kXxxiUTngYxKp_5ZQOmRgOpUtufaJ1glMTiKFvL5TEZCjE4KUaDYw9m5LqgPYw4ObcwsEE4dst1ANW_kHRAhKv56H-Oab7jRsexl1zbDKr8JMh1cjMqkVHn4Vd3kqD67zhNi44HcW5t6z")',
        }}
      >
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />

        {markers.map((m) => (
          <div
            key={m.label}
            className="absolute group cursor-pointer"
            style={{ top: m.top, left: m.left }}
          >
            <div className="flex flex-col items-center">
              <div
                className={`bg-[#0ff05a] p-2 rounded-full shadow-lg border-2 border-white ${
                  m.pulse ? "animate-pulse" : ""
                }`}
              >
                ✔
              </div>
              <div className="mt-1 px-2 py-1 bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700">
                <p className="text-[10px] font-bold">{m.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
