import { Button } from "@/components/ui/button";
import React from "react";

const SeeviceProviderDashboard: React.FC = () => {
  return (
    <div className="flex flex-wrap m-8">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-5">Analytics</p>
          <Button
            type="button"
            variant="link"
            className="h-11 w-[178px] text-base"
          >
            Open Profile Setting{" "}
          </Button>
        </div>
        <div className="flex flex-row w-full">
          <div className="mt-5 mb-5 font-medium text-base w-fit shrink-0 h-[250px]  bg-black/5 ">
            <div className="font-semibold text-lg mt-5 ml-5">
              Bob Alice{" "}
              <Button
                variant="link"
                className="pl-[154px] text-base font-normal"
              >
                Edit Info
              </Button>
              <div className="font-normal text-base text-black/30">
                5 stars (26){" "}
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className=" mb-5 space-x-[10px]">
                <Button className="bg-black/25 w-[97px] h-9">
                  UI/UX Design
                </Button>
                <Button className="bg-black/25 w-[89px] h-9 ">
                  Web Design
                </Button>
                <Button className="bg-black/25 w-[128px] h-9">
                  Mobile App Design
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-5 mb-5 font-medium text-base ml-5 w-full h-[250px] border flex flex-col items-center justify-center bg-black/5">
            <span className="flex items-center justify-center text-center">
              Analytics:
            </span>
            <span className="text-center">
              How many investors viewed profile, how many sent request in the
              last amount of time
            </span>
          </div>
        </div>
        <div className="flex flex-row mb-3">
          <div className="mt-[30px] mb-5 w-full h-6 mr-8 font-semibold text-lg">
            Upcoming Meetings{" "}
            <div className="w-full  border flex flex-row bg-black/5 mt-5">
              <div className="w-full h-full border mt-5 ml-5 mr-3 flex flex-col font-bold text-sm items-center p-2">
                <p className="bg-black/10 w-full font-bold text-sm items-center text-center py-3">
                  Today{" "}
                </p>
                <div className="w-full h-fit border mt-4 mb-3 font-medium p-2 text-2  bg-black/10">
                  Investor a16z crypto at 6:30 PM view request
                </div>
                <div className="w-full h-fit border mt-4 mb-3 font-medium p-2 text-2 bg-black text-white">
                  Potential Advisor Robert Maclarence at 7:00 PM
                </div>
              </div>
              <div className="w-full h-fit border mt-5 ml-[10px] mr-[10px] flex flex-col font-bold text-sm items-center p-2">
                <p className="bg-black/10 w-full font-bold text-sm items-center text-center py-3">
                  Tommorrow{" "}
                </p>
                <div className="w-full h-fit border mt-4 mb-3 font-medium p-2 text-2 bg-black text-white">
                  Potential Advisor Robert Maclarence at 7:00 PM
                </div>
                <div className="w-full h-fit border mt-4 mb-3 font-medium p-2 text-2 bg-black text-white">
                  Potential Advisor Robert Maclarence at 7:00 PM
                </div>{" "}
                <div className="w-full h-fit border mt-4 mb-3 font-medium p-2 text-2 bg-black text-white">
                  Potential Advisor Robert Maclarence at 7:00 PM
                </div>
              </div>
              <div className="w-full h-fit border mt-5 ml-[10px] mr-[10px] flex flex-col font-bold text-sm items-center p-2">
                <p className="bg-black/10 w-full font-bold text-sm items-center text-center py-3">
                  Later
                </p>
                <div className="w-full h-fit border mt-4 mb-3 font-medium p-2 text-2  bg-black/10">
                  Investor a16z crypto at 6:30 PM view request
                </div>
                <div className="w-full h-fit border mt-4 mb-3 font-medium p-2 text-2  bg-black/10">
                  Investor a16z crypto at 6:30 PM view request
                </div>{" "}
                <div className="w-full h-fit border mt-4 mb-3 font-medium p-2 text-2  bg-black/10">
                  Investor a16z crypto at 6:30 PM view request
                </div>{" "}
                <div className="w-full h-fit border mt-4 mb-3 font-medium p-2 text-2  bg-black/10">
                  Investor a16z crypto at 6:30 PM view request
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 mb-5 w-fit h-fit font-semibold text-lg ">
            Company profile completion{" "}
            <div className="w-full h-fit border font-semibold text-lg p-5 mt-5 bg-black/5 space-y-5">
              Complete your profile to increase your in-platform ranking <br />
              <div className="relative h-8 border rounded-full bg-black/50">
                <div
                  className="absolute top-0 left-0 h-full bg-black/50 rounded-full"
                  style={{ width: "60%" }}
                ></div>
                <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold ">
                  60%
                </span>
              </div>
              <div className="text-sm text-white my-3 font-normal rounded-1 flex items-center justify-center bg-black w-full h-8 p-2">
                Add Product Demo
              </div>
              <div className="text-sm text-white my-3 font-normal rounded-1 flex items-center justify-center bg-black w-full h-8 p-2">
                Add the blockchain that you are building on
              </div>
              <div className="text-sm text-white my-3 font-normal rounded-1 flex items-center justify-center bg-black w-full h-8 p-2">
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

export default SeeviceProviderDashboard;
