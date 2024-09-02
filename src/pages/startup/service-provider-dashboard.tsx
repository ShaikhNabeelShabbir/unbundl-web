import { Button } from "@/components/ui/button";
import React from "react";

const SeeviceProviderDashboard: React.FC = () => {
  return (
    <div className="flex flex-wrap m-4 sm:m-8">
      <div className="w-full py-8 sm:py-[97px]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <p className="font-semibold text-lg sm:text-2xl">Analytics</p>
          <Button
            type="button"
            variant="link"
            className="mt-2 sm:mt-0 h-10 sm:h-11 w-full sm:w-[178px] text-base"
          >
            Open Profile Setting
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row w-full mt-5">
          <div className="mb-5 font-medium text-base w-full sm:w-fit shrink-0 h-auto sm:h-[250px] bg-black/5 p-4">
            <div className="font-semibold text-lg mb-2">
              Bob Alice
              <Button
                variant="link"
                className="block sm:inline-block sm:pl-[154px] text-base font-normal mt-2 sm:mt-0"
              >
                Edit Info
              </Button>
            </div>
            <div className="font-normal text-base text-black/30">
              5 stars (26)
            </div>
            <div className="mt-4 space-x-0 space-y-3 sm:space-y-0 sm:space-x-3">
              <Button className="bg-black/25 w-full sm:w-[97px] h-9">
                UI/UX Design
              </Button>
              <Button className="bg-black/25 w-full sm:w-[89px] h-9">
                Web Design
              </Button>
              <Button className="bg-black/25 w-full sm:w-[128px] h-9">
                Mobile App Design
              </Button>
            </div>
          </div>
          <div className="font-medium text-base sm:ml-5 w-full h-auto sm:h-[250px] border flex flex-col items-center justify-center bg-black/5 p-4">
            <span className="text-center">Analytics:</span>
            <span className="text-center">
              How many investors viewed profile, how many sent request in the
              last amount of time
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mb-3 mt-8 space-y-5 sm:space-y-0 sm:space-x-5">
          <div className="w-full sm:w-2/3">
            <p className="font-semibold text-lg mb-3">Upcoming Meetings</p>
            <div className="border bg-black/5 p-4 space-y-4">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-full h-full border p-4">
                  <p className="bg-black/10 w-full text-center py-3">Today</p>
                  <div className="mt-4 bg-black/10 p-2">
                    Investor a16z crypto at 6:30 PM view request
                  </div>
                  <div className="mt-4 bg-black text-white p-2">
                    Potential Advisor Robert Maclarence at 7:00 PM
                  </div>
                </div>
                <div className="w-full h-full border p-4">
                  <p className="bg-black/10 w-full text-center py-3">
                    Tomorrow
                  </p>
                  <div className="mt-4 bg-black text-white p-2">
                    Potential Advisor Robert Maclarence at 7:00 PM
                  </div>
                  <div className="mt-4 bg-black text-white p-2">
                    Potential Advisor Robert Maclarence at 7:00 PM
                  </div>
                </div>
                <div className="w-full h-full border p-4">
                  <p className="bg-black/10 w-full text-center py-3">Later</p>
                  <div className="mt-4 bg-black/10 p-2">
                    Investor a16z crypto at 6:30 PM view request
                  </div>
                  <div className="mt-4 bg-black/10 p-2">
                    Investor a16z crypto at 6:30 PM view request
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/3">
            <p className="font-semibold text-lg mb-3">
              Company profile completion
            </p>
            <div className="border bg-black/5 p-4 space-y-4">
              <p>Complete your profile to increase your in-platform ranking</p>
              <div className="relative h-8 border rounded-full bg-black/50">
                <div
                  className="absolute top-0 left-0 h-full bg-black/50 rounded-full"
                  style={{ width: "60%" }}
                ></div>
                <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">
                  60%
                </span>
              </div>
              <Button className="text-sm text-white bg-black w-full h-8 p-2">
                Add Product Demo
              </Button>
              <Button className="text-sm text-white bg-black w-full h-8 p-2">
                Add the blockchain that you are building on
              </Button>
              <Button className="text-sm text-white bg-black w-full h-8 p-2">
                Add your Team size
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeviceProviderDashboard;
