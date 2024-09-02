import React, { useState } from "react";
// import { Bell, Search, ChevronDown } from "lucide-react";
import { ChevronDown } from "lucide-react";

interface SidebarProps {
  setCurrentView: (view: string) => void;
}

export const SidebarTalent: React.FC<SidebarProps> = ({ setCurrentView }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="lg:relative lg:w-fit lg:block">
      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden p-4">
        <button onClick={toggleSidebar} className="text-black/50">
          <ChevronDown
            className={`transform ${isSidebarOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Sidebar Content */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transition-transform transform lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:flex lg:flex-col`}
      >
        <div className="mb-8 mt-8 ml-8 flex items-center">
          <h1 className="text-lg font-semibold flex items-center">
            Startup Name
            <ChevronDown className="ml-2" />
          </h1>
          <div className="absolute right-0 flex items-center mr-8 space-x-3">
            {/* <u>24 Points</u>
            <Bell className="ml-2" />
            <Search className="ml-2" />
            <div className="bg-black/50 rounded-full w-8 h-8 ml-2"></div> */}
          </div>
        </div>

        <div className="w-full h-full px-8">
          <ul className="text-black/50 space-y-3">
            <li className="hover:text-black">
              <button onClick={() => setCurrentView("dashboard")}>
                Dashboard
              </button>
            </li>
            <li className="hover:text-black">
              <button onClick={() => setCurrentView("my-cvs")}>My CVs</button>
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

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default SidebarTalent;
