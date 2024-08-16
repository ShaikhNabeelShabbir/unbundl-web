import { Button } from "@/components/ui/button";
import React from "react";

const SeeviceProviderDashboard: React.FC = () => {
  return (
    <div className="flex ml-[30px] mr-[30px] mb-[30px]">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-[20px]">Analytics</p>
          <Button
            type="button"
            variant="link"
            className="h-[42px] w-[178px] text-[14px] mr-[30px]"
          >
            Open Profile Setting{" "}
          </Button>
        </div>
        <div className="flex flex-row">
          <div className="mt-[20px] mb-[20px] font-medium text-base w-[370px] h-[250px]  bg-black/5 ">
            <div className="font-semibold text-[18px] mt-[20px] ml-[20px]">
              Bob Alice{" "}
              <Button
                variant="link"
                className="pl-[154px] text-[14px] font-normal"
              >
                Edit Info
              </Button>
              <div className="font-normal text-[14px] text-black/30">
                5 stars (26){" "}
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className=" mb-[20px] space-x-[10px]">
                <Button className="bg-black/25 w-[97px] h-[35px]">
                  UI/UX Design
                </Button>
                <Button className="bg-black/25 w-[89px] h-[35px] ">
                  Web Design
                </Button>
                <Button className="bg-black/25 w-[128px] h-[35px]">
                  Mobile App Design
                </Button>
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
      </div>
    </div>
  );
};

export default SeeviceProviderDashboard;
