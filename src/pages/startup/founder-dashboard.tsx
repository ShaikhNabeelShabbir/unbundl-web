import Sidebar from "@/components/sidebar";
import React from "react";
import ResearchLibrary from "./research-library";

const Founderdashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <ResearchLibrary />
      </div>
    </div>
  );
};

export default Founderdashboard;
