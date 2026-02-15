import { IoIosSearch } from "react-icons/io";

export function TopBar() {
  return (
    <div className="absolute top-0 left-0 right-0 z-20 px-4 pt-12 pb-4 bg-linear-to-b from-white/80 via-white/40 to-transparent dark:from-[#102216]/80 dark:via-[#102216]/40">
      <div className="flex items-center justify-between gap-3">
        {/* Avatar */}
        <div className="flex size-10 items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-md border border-zinc-100 dark:border-zinc-700">
          <div
            className="bg-center bg-cover rounded-full size-8"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCV_hAhobfxDSdErZXte2I5hyijPhL0diECXfJR6XIf543K7ShdzgxsVAE9bdAyNEl7nlrJ0IRloA29hIHHjikkVkV2eI-WGCr4Brakf2BGAAELpHT7KXqkrvYLqY8E11nhGjctg6cif5ZxDTWo6yuJRPR_I4PQ3KiXYXwPtkf57HF405QYmW09boAOMi3JFIy2egCobatb08p2WfZqpbjJ2wPbsrukUT7Dm1hAcz_z5M29lOIl_c91p3Galeqd3LM9Yynv8jGYbbhh")',
            }}
          />
        </div>

        {/* Search */}
        <div className="flex-1 flex items-stretch rounded-xl h-12 bg-white dark:bg-zinc-800 shadow-lg border border-zinc-100 dark:border-zinc-700">
          <div className="flex items-center pl-4 text-[#4b9b65]"><IoIosSearch size={24}/></div>
          <input
            className="flex-1 bg-transparent px-3 outline-none placeholder:text-zinc-400"
            placeholder="Search secure points in Douala"
          />
        </div>

        {/* Filter */}
        <button className="flex size-10 items-center justify-center rounded-xl bg-white dark:bg-zinc-800 shadow-md border border-zinc-100 dark:border-zinc-700">
          ⚙️
        </button>
      </div>
    </div>
  );
}
