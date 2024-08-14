import { Button } from "@/components/ui/button";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="flex ml-[30px] mr-[30px]">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-[20px]">My Company</p>
          <Button
            type="button"
            variant="link"
            className="h-[42px] w-[178px] text-[14px] mr-[30px]"
          >
            Open My Company Page{" "}
          </Button>
        </div>
        <div className="flex flex-row">
          <div className="mt-[20px] mb-[20px] font-medium text-base w-[370px] h-[250px] bg-red-900"></div>
          <div className="mt-[20px] mb-[20px] font-medium text-base ml-[20px] w-[760px] h-[250px] bg-red-950"></div>
        </div>
        <div className="mt-[30px] mb-[20px] border mr-[30px] font-semibold text-lg">
          Find people
        </div>
        <div className="flex flex-row mr-[30px] font-semibold text-lg space-x-[10px]">
          <div className="border w-[272.5px] h-[100px] font-semibold text-[15px]">
            Investors{" "}
            <div className="text-[12px] font-medium">
              52 companies got funding this week on the platform
            </div>
          </div>
          <div className="border w-[272.5px] h-[100px] font-semibold text-[15px]">
            Employees and Advisors{" "}
            <div className="text-[12px] font-medium">
              158 candidates got jobs last week on the platform
            </div>{" "}
          </div>
          <div className="border w-[272.5px] h-[100px] font-semibold text-[15px] ">
            Service Providers{" "}
            <div className="text-[12px] font-medium">
              458 Service Providers provided services last week on the platform
            </div>
          </div>
          <div className="border w-[272.5px] h-[100px] font-semibold text-[15px]">
            Network{" "}
            <div className="text-[12px] font-medium">
              2152 people maid new connections last week on the platform
            </div>
          </div>
        </div>
        <div className="flex flex-row mb-[10px]">
          <div className="mt-[30px] mb-[20px] w-[760px] h-[24px] border mr-[30px] font-semibold text-lg">
            Upcoming Meetings{" "}
            <div className="w-[760px] h-[250px] border ">upcoming meetings</div>
          </div>
          <div className="mt-[30px] mb-[20px] w-[360px] h-[24px] border mr-[30px] font-semibold text-lg">
            Company profile completion{" "}
            <div className="w-[360px] h-[250px] border ">
              Company profile completion
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
