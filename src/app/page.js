import Image from "next/image";
import Landing from "@/components/landing";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar with fixed width */}
      <div className="w-28 border-r border-gray-200">
        <Sidebar />
      </div>

      {/* Main content area with landing page */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Landing />
      </div>
    </div>
  );
}
