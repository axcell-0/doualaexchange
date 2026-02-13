type RateLayoutProps = {
  children: React.ReactNode;
};

export function RateLayout({ children }: RateLayoutProps) {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col font-display">
      {children}

      {/* iOS bottom indicator */}
      <div className="h-8 flex items-center justify-center">
        <div className="w-32 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full" />
      </div>
    </main>
  );
}
