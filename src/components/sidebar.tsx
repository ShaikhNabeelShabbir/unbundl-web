import React, { useState } from "react";
import { Bell, Search, ChevronDown } from "lucide-react";

interface SidebarProps {
  setCurrentView: (view: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ setCurrentView }) => {
  const [isHireDropdownOpen, setIsHireDropdownOpen] = useState(false);

  return (
    <div>
      <div className="mb-[30px] mt-[30px] ml-[30px] flex items-center">
        <h1 className="text-lg font-semibold flex items-center">
          Startup Name
          <ChevronDown className="ml-2" />
        </h1>{" "}
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
            <button onClick={() => setCurrentView("my-company")}>
              My Company
            </button>
          </li>
          <li className="hover:text-black">
            <button onClick={() => setCurrentView("raise-funds")}>
              Raise Funds
            </button>
          </li>
          <li
            className="hover:text-black flex items-center justify-between"
            onClick={() => setIsHireDropdownOpen(!isHireDropdownOpen)}
          >
            <button>Hire</button>
            <ChevronDown
              className={`ml-2 transform ${isHireDropdownOpen ? "rotate-180" : ""}`}
            />
          </li>
          {isHireDropdownOpen && (
            <ul className="ml-4 mt-2 space-y-[8px]">
              <li className="hover:text-black">
                <button onClick={() => setCurrentView("HireTalent")}>
                  Talent
                </button>
              </li>
              <li className="hover:text-black">
                <button onClick={() => setCurrentView("HireServiceProviders")}>
                  Service Providers
                </button>
              </li>
            </ul>
          )}
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
          <li className="hover:text-black">
            <button onClick={() => setCurrentView("crypto-events")}>
              Crypto Events
            </button>
          </li>
          <li className="hover:text-black">
            <button onClick={() => setCurrentView("events")}>Events</button>
          </li>
          <li className="hover:text-black">
            <button onClick={() => setCurrentView("grants")}>Grants</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
