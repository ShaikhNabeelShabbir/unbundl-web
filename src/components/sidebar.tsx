import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <div className=" ">
      <div className="p-[30px]">
        <h1 className="text-lg font-semibold">Startup Name</h1>
      </div>
      <ul className="w-[200px] h-[364px] py-[90px] px-[30px] text-black/50 space-y-[10px] ">
        <li className="hover:text-black">
          <p>Dashboard</p>
        </li>
        <li className="gap-y-[10px] hover:text-black">
          <p>My Company</p>
        </li>
        <li className="gap-y-[10px] hover:text-black">
          <p>Raise Funds</p>
        </li>
        <li className="gap-y-[10px] hover:text-black">
          <p>Hire</p>
        </li>
        <li className="gap-y-[10px] hover:text-black">
          <p>Network</p>
        </li>
        <li className="gap-y-[10px] hover:text-black">
          <p>Legal Room</p>
        </li>
        <li className="gap-y-[10px] hover:text-black">
          <p>Software Stash</p>
        </li>
        <li className="gap-y-[10px] hover:text-black">
          <p>Research Library</p>
        </li>
        <li className="gap-y-[10px] hover:text-black">
          <p>Crypto Events</p>
        </li>
        <li className="gap-y-[10px] hover:text-black">
          <p>Events</p>
        </li>
        <li className="gap-y-[10px] hover:text-black">
          <p>Grants</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
