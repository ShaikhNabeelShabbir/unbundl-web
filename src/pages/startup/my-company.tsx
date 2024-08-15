import { Button } from "@/components/ui/button";
import React from "react";

const MyCompany: React.FC = () => {
  return (
    <div className="flex ml-[30px] mr-[30px] mb-[30px]">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-row">
            <div className="Overview w-[760px]  ">
              <p className="font-semibold text-[20px]">Overview</p>
              <div className="flex flex-row border w-[760px]">
                <div className="border w-[520px] h-[250px] mr-[20px] flex flex-col">
                  <div className="flex flex-row mt-[20px] ml-[20px]">
                    <div className="w-[49px] h-[49px] border"></div>
                    <div className="ml-[10px]">
                      <p> Startup Name</p>
                      <p className="mt-[10px]"> startupname.io </p>
                    </div>
                  </div>
                  <div className="ml-[20px]">
                    <Button></Button>
                    <Button></Button>
                    <Button></Button>
                    <Button></Button>
                    <Button></Button>
                  </div>
                </div>
                <div className=" w-[220px] h-[250px] border bg-black/5 rounded-[4px]">
                  <p className="font-semibold text-[12px] mx-[20px] mt-[20px]">
                    Complete your profile to increase your in-platform ranking
                  </p>
                  <div className="progress-bar relative w-[180px] h-[30px] mx-[20px] mt-[11px] border rounded-full bg-black/50 ">
                    <div
                      className="absolute top-0 left-0 h-full bg-black/50 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                    <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold ">
                      75%
                    </span>
                  </div>
                  <div className="w-[180px] h-[30px] mx-[20px] mt-[11px] border bg-black text-white font-normal text-[10px] rounded-[4px] flex items-center justify-center">
                    Add the blockchain
                  </div>

                  <div className="w-[180px] h-[30px] mx-[20px] mt-[11px] border bg-black text-white font-normal text-[10px] rounded-[4px] flex items-center justify-center">
                    Add the blockchain
                  </div>
                </div>
              </div>
            </div>
            <div className="Company-Updates ml-[10px] w-[370px] ">
              <p className="font-semibold text-[20px] border">
                Company Updates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCompany;
