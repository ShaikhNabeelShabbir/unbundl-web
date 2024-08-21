import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-wrap m-8">
      <div className="flex-1 py-[97px]">
        <div className="flex  items-center justify-between">
          <p className="font-semibold text-5">My Company</p>
          <Button
            type="button"
            variant="link"
            className="h-[42px] w-[178px] text-base mr-[30px]"
          >
            Open My Company Page{" "}
          </Button>
        </div>
        <div className="flex flex-row">
          <div className="mt-5 mb-5 font-medium text-base h-64 shrink-0 w-fit bg-black/5 pr-5">
            <div className="font-semibold text-[18px] mt-5 ml-5">
              Startup Name
              <Button variant="link" className=" text-base font-normal">
                Edit Info
              </Button>
              <div className="font-normal text-base text-black/30">
                startupname.io
              </div>
              <div className="font-medium text-md text-black/30 mt-[12px]">
                Public
                <Switch className="ml-[10px] " />
              </div>
              <br />
              <div className="font-medium text-md text-black/30">
                Fundraising <Switch className="ml-[10px] " />
              </div>
              <div className="mt-4 space-x-[10px]">
                <Button className="bg-black/25">Round A</Button>
                <Button className="bg-black/25">Hiring</Button>
                <Button className="bg-black/25">Fundaising</Button>
              </div>
            </div>
          </div>
          <div className="mt-5 mb-5 font-medium text-base ml-5 w-full h-64 border flex flex-col items-center justify-center bg-black/5">
            <span className="flex items-center justify-center text-center">
              Analytics:
            </span>
            <span className="text-center">
              How many investors viewed profile, how many sent request in the
              last amount of time
            </span>
          </div>
        </div>
        <div className="mt-[30px] mb-5  mr-8  font-semibold text-lg p-3">
          Find people
        </div>
        <div className="flex flex-row font-semibold text-lg space-x-5 w-full  ">
          <div className="border h-25 font-semibold text-4 rounded-1  bg-black/5 ">
            <div className="flex w-full items-center justify-center p-2">
              Investors{" "}
            </div>
            <div className="text-sm font-medium flex items-center justify-center text-center p-3">
              52 companies got funding this week on the platform
            </div>
          </div>
          <div className="border h-25 font-semibold text-md rounded-1  bg-black/5 ">
            <div className="flex w-full items-center justify-center p-2">
              Employees and Advisors{" "}
            </div>
            <div className="text-sm font-medium flex items-center justify-center text-center p-3">
              158 candidates got jobs last week on the platform
            </div>{" "}
          </div>
          <div className="border h-25 font-semibold text-md rounded-1  bg-black/5 ">
            <div className="flex w-full items-center justify-center p-2">
              Service Providers{" "}
            </div>
            <div className="text-sm font-medium flex items-center justify-center text-center p-3">
              458 Service Providers provided services last week on the platform
            </div>
          </div>
          <div className="border h-25 font-semibold text-md rounded-1  bg-black/5 ">
            <div className="flex w-full items-center justify-center p-2 ">
              Network{" "}
            </div>
            <div className="text-sm font-medium flex items-center justify-center text-center p-3">
              2152 people made new connections last week on the platform
            </div>
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
          <div className="mt-8 mb-5 w-fit h-fit  font-semibold text-lg ">
            Company profile completion{" "}
            <div className="w-full h-fit border font-semibold text-lg p-5 mt-5 bg-black/5 space-y-5">
              Complete your profile to increase your in-platform ranking <br />
              <div className="relative h-8 border rounded-full bg-black/50">
                <div
                  className="absolute top-0 left-0 h-full bg-black/50 rounded-full"
                  style={{ width: "60%" }}
                ></div>
                <span className="absolute inset-0 flex items-center justify-center text-white text-sm w-full font-bold ">
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
      </div>
    </div>
  );
};

export default Dashboard;
