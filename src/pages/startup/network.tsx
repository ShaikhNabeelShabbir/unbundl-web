import { Button } from "@/components/ui/button";
import React from "react";
import { Search } from "lucide-react";

const Network: React.FC = () => {
  return (
    <div className="flex ml-[30px] mr-[30px]">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-[20px]">My Network</p>
        </div>
        <div className="flex flex-row w-[1150px] h-[300px] space-x-[20px]">
          <div className="w-[760px] border flex items-center justify-center font-medium text-[18px]">
            Network visualisation
          </div>
          <div className="w-[370px] border flex items-center justify-center font-medium text-[18px] text-center">
            <div>
              <p>
                Suggest new people to the platfrom and increase your in-platfrom
                ranking <br />
                <br />
                <u>Invite </u>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[30px] mb-[20px] font-medium text-base">
          Best Pics For your company
        </div>
        <div className="flex items-center justify-between mt-[21px]">
          <div className="flex items-center w-[950px] h-[46px] border rounded-[4px]">
            <Search className="ml-4 text-gray-500" />
            <input
              type="text"
              className="w-full px-4 py-2 outline-none"
              placeholder="Search..."
            />
          </div>
          <Button className="w-[190px] h-[46px] mr-[30px]">
            Advanced Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Network;
