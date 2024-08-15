import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
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
                <div className="border border-red-950 w-[520px] h-[250px] mr-[20px] ml-[20px] flex flex-col p-0">
                  <div className="flex flex-row mt-[20px] justify-between p-0">
                    <div className="flex flex-row">
                      <div className="w-[49px] h-[49px] border"></div>
                      <div className="flex flex-col justify-between">
                        <div>
                          <p className="text-lg font-semibold">Startup Name</p>
                          <p className="text-gray-500">startupname.io</p>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex flex-row space-x-[10px]">
                            <div className="w-[30px] h-[30px] bg-black/25"></div>
                            <div className="w-[30px] h-[30px] bg-black/25"></div>
                            <div className="w-[30px] h-[30px] bg-black/25"></div>
                            <div className="w-[30px] h-[30px] bg-black/25"></div>
                            <div className="w-[30px] h-[30px] bg-black/25"></div>
                            <div className="w-[30px] h-[30px] bg-black/25"></div>
                          </div>
                          <div className="flex space-x-[10px] mt-[10px]">
                            <Button className="bg-black/25 w-[80px] h-[30px]">
                              Round A
                            </Button>
                            <Button className="bg-black/25 w-[80px] h-[30px]">
                              Hiring
                            </Button>
                            <Button className="bg-black/25 w-[80px] h-[30px]">
                              Fundraising
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Section */}
                    <div className="">
                      <div className="flex items-center">
                        <div className="text-[18px] font-semibold ">
                          Project Description
                        </div>
                        <Button className="ml-[10px]">Edit</Button>
                      </div>
                      <p className="text-gray-500 mt-[10px]">
                        Lorem ipsum dolor sit amet...
                      </p>
                    </div>
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
