import React from "react";
import { Bell, Search } from "lucide-react";

interface SidebarProps {
  setCurrentView: (view: string) => void;
}

export const SidebarServiceProvider: React.FC<SidebarProps> = ({
  setCurrentView,
}) => {
  return (
    <div>
      <div className="mb-[30px] mt-[30px] ml-[30px] flex items-center">
        <h1 className="text-lg font-semibold">Service Provider Name</h1>
        <div className="absolute right-0 flex items-center mr-[30px]">
          <u>24 Points</u>
          <Bell className="ml-2" />
          <Search className="ml-2" />
          <div className="bg-black/50 rounded-full w-[30px] h-[30px] ml-2"></div>
        </div>
      </div>
      <div className="w-[200px] h-full px-[30px]">
        <ul className="text-black/50 space-y-[10px]">
          <li className="hover:text-black">
            <button onClick={() => setCurrentView("dashboard")}>
              Dashboard
            </button>
          </li>
          <li className="hover:text-black">
            <button onClick={() => setCurrentView("services")}>Services</button>
          </li>
          <li className="hover:text-black">
            <button onClick={() => setCurrentView("network")}>Network</button>
          </li>
          <li className="hover:text-black">
            <button onClick={() => setCurrentView("legal-room")}>
              Legal Room
            </button>
          </li>
          <li className="hover:text-black">
            <button onClick={() => setCurrentView("software-stash")}>
              Software Stash
            </button>
          </li>
          <li className="hover:text-black">
            <button onClick={() => setCurrentView("research-library")}>
              Research Library
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarServiceProvider;
