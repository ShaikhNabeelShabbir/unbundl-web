import { Button } from "@/components/ui/button";
import React from "react";

const ResearchLibrary: React.FC = () => {
  return (
    <div className="flex-1 p-[87px]">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-[20px]">Research Library</p>
        <Button className="w-[178px] h-[42px]">Publish</Button>
      </div>
      <div className="flex items-center justify-between mt-[21px]">
        <div className="flex w-[950px] h-[46px] border border-red-900 rounded-[4px]">
          <input
            type="text"
            className="w-full px-4 py-2 outline-none"
            placeholder="Search..."
          />
        </div>
        <Button className="w-[190px] h-[46px]">Advanced Search</Button>
      </div>
    </div>
  );
};

export default ResearchLibrary;
