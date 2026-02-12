import { TopBar } from "@/components/TopBar";
import { MapLayer } from "@/components/MapLayer";
import { BottomControls } from "@/components/BottomControls";

export default function HomePage() {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden">
      <TopBar />
      <MapLayer />
      <BottomControls />
      <div className="h-4 bg-white dark:bg-background-dark" />
    </div>
  );
}
