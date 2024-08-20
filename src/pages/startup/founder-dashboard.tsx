import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="flex ml-[30px] mr-[30px] mb-[30px]">
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
          <div className="mt-[20px] mb-[20px] font-medium text-base w-[370px] h-[250px]  bg-black/5 ">
            <div className="font-semibold text-[18px] mt-[20px] ml-[20px]">
              Startup Name
              <Button
                variant="link"
                className="pl-[154px] text-[14px] font-normal"
              >
                Edit Info
              </Button>
              <div className="font-normal text-[14px] text-black/30">
                startupname.io
              </div>
              <div className="font-medium text-[16px] text-black/30 mt-[12px]">
                Public
                <Switch className="ml-[10px] " />
              </div>
              <br />
              <div className="font-medium text-[16px] text-black/30">
                Fundraising <Switch className="ml-[10px] " />
              </div>
              <div className="mt-[15px] space-x-[10px]">
                <Button className="bg-black/25">Round A</Button>
                <Button className="bg-black/25">Hiring</Button>
                <Button className="bg-black/25">Fundaising</Button>
              </div>
            </div>
          </div>
          <div className="mt-[20px] mb-[20px] font-medium text-base ml-[20px] w-[760px] h-[250px] border flex flex-col items-center justify-center bg-black/5">
            <span className="flex items-center justify-center text-center">
              Analytics:
            </span>
            <span className="text-center">
              How many investors viewed profile, how many sent request in the
              last amount of time
            </span>
          </div>
        </div>
        <div className="mt-[30px] mb-[20px]  mr-[30px] font-semibold text-lg">
          Find people
        </div>
        <div className="flex flex-row mr-[30px] font-semibold text-lg space-x-[10px]">
          <div className="border w-[272.5px] h-[100px] font-semibold text-[15px] rounded-[4px]  bg-black/5 ">
            <div className="flex items-center justify-center">Investors </div>
            <div className="text-[12px] font-medium flex items-center justify-center text-center">
              52 companies got funding this week on the platform
            </div>
          </div>
          <div className="border w-[272.5px] h-[100px] font-semibold text-[15px] rounded-[4px]  bg-black/5 ">
            <div className="flex items-center justify-center">
              Employees and Advisors{" "}
            </div>
            <div className="text-[12px] font-medium flex items-center justify-center text-center">
              158 candidates got jobs last week on the platform
            </div>{" "}
          </div>
          <div className="border w-[272.5px] h-[100px] font-semibold text-[15px] rounded-[4px]  bg-black/5 ">
            <div className="flex items-center justify-center">
              Service Providers{" "}
            </div>
            <div className="text-[12px] font-medium flex items-center justify-center text-center">
              458 Service Providers provided services last week on the platform
            </div>
          </div>
          <div className="border w-[272.5px] h-[100px] font-semibold text-[15px] rounded-[4px]  bg-black/5 ">
            <div className="flex items-center justify-center ">Network </div>
            <div className="text-[12px] font-medium flex items-center justify-center text-center">
              2152 people maid new connections last week on the platform
            </div>
          </div>
        </div>
        <div className="flex flex-row mb-[10px]">
          <div className="mt-[30px] mb-[20px] w-[760px] h-[24px] mr-[30px] font-semibold text-lg">
            Upcoming Meetings{" "}
            <div className="w-[760px] h-[250px] border flex flex-row bg-black/5 ">
              <div className="w-[233px] h-[32px] border mt-[20px] ml-[20px] mr-[10px] flex flex-col font-bold text-[10px] items-center  bg-black/10">
                Today
                <div className="w-[230px] h-[27px] border mt-[15px] mb-[10px] font-medium text-[6px]  bg-black/10">
                  Investor a16z crypto at 6:30 PM view request
                </div>
                <div className="w-[230px] h-[27px] border mt-[15px] mb-[10px] font-medium text-[6px] bg-black text-white">
                  Potential Advisor Robert Maclarence at 7:00 PM
                </div>
              </div>
              <div className="w-[233px] h-[32px] border mt-[20px] ml-[10px] mr-[10px] flex flex-col font-bold text-[10px] items-center  bg-black/10">
                Tommorrow
                <div className="w-[230px] h-[27px] border mt-[15px] mb-[10px] font-medium text-[6px] bg-black text-white">
                  Potential Advisor Robert Maclarence at 7:00 PM
                </div>
                <div className="w-[230px] h-[27px] border mt-[15px] mb-[10px] font-medium text-[6px] bg-black text-white">
                  Potential Advisor Robert Maclarence at 7:00 PM
                </div>{" "}
                <div className="w-[230px] h-[27px] border mt-[15px] mb-[10px] font-medium text-[6px] bg-black text-white">
                  Potential Advisor Robert Maclarence at 7:00 PM
                </div>
              </div>
              <div className="w-[233px] h-[32px] border mt-[20px] ml-[10px] mr-[10px] flex flex-col font-bold text-[10px] items-center  bg-black/10">
                Later
                <div className="w-[230px] h-[27px] border mt-[15px] mb-[10px] font-medium text-[6px]  bg-black/10">
                  Investor a16z crypto at 6:30 PM view request
                </div>
                <div className="w-[230px] h-[27px] border mt-[15px] mb-[10px] font-medium text-[6px]  bg-black/10">
                  Investor a16z crypto at 6:30 PM view request
                </div>{" "}
                <div className="w-[230px] h-[27px] border mt-[15px] mb-[10px] font-medium text-[6px]  bg-black/10">
                  Investor a16z crypto at 6:30 PM view request
                </div>{" "}
                <div className="w-[230px] h-[27px] border mt-[15px] mb-[10px] font-medium text-[6px]  bg-black/10">
                  Investor a16z crypto at 6:30 PM view request
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[30px] mb-[20px] w-[360px] h-[24px] mr-[30px] font-semibold text-lg ">
            Company profile completion{" "}
            <div className="w-[360px] h-[250px] border font-semibold text-[18px] px-[20px] pt-[20px] bg-black/5">
              Complete your profile to increase your in-platform ranking{" "}
              <div className="relative w-[330px] h-[30px] border rounded-full bg-black/50">
                <div
                  className="absolute top-0 left-0 h-full bg-black/50 rounded-full"
                  style={{ width: "60%" }}
                ></div>
                <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold ">
                  60%
                </span>
              </div>
              <div className="text-[10px] text-white my-[10px] font-normal rounded-[4px] flex items-center justify-center bg-black w-[330px] h-[32]">
                Add Product Demo
              </div>
              <div className="text-[10px] text-white my-[10px] font-normal rounded-[4px] flex items-center justify-center bg-black w-[330px] h-[32]">
                Add the blockchain that you are building on
              </div>
              <div className="text-[10px] text-white my-[10px] font-normal rounded-[4px] flex items-center justify-center bg-black w-[330px] h-[32]">
                Add your Team size
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Dashboard;
