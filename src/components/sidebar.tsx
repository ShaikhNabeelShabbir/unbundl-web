import React from "react";

interface SidebarProps {
  setCurrentView: (view: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ setCurrentView }) => {
  return (
    <div className="w-[200px] h-full py-[93px] px-[30px]">
      <div className="mb-[20px]">
        <h1 className="text-lg font-semibold">Startup Name</h1>
      </div>
      <ul className="text-black/50 space-y-[10px]">
        <li className="hover:text-black">
          <button onClick={() => setCurrentView("dashboard")}>Dashboard</button>
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
        <li className="hover:text-black">
          <button onClick={() => setCurrentView("hire")}>Hire</button>
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
  );
};

export default Sidebar;
