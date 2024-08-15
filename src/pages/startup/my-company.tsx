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
              <div className="flex flex-row  w-[760px]">
                <div className="flex flex-row  w-[520px] h-[250px] border mr-[20px]">
                  <div className=" flex flex-col">
                    <div className="flex flex-row mt-[20px] ml-[20px]">
                      <div className="w-[49px] h-[49px] border"></div>
                      <div className="ml-[10px]">
                        <p> Startup Name</p>
                        <p className="mt-[10px]"> startupname.io </p>
                      </div>
                    </div>
                    <br />
                    <div className="ml-[20px] flex flex-row space-x-[10px]">
                      <div className="w-[30px] h-[30px] bg-black/25">2</div>
                      <div className="w-[30px] h-[30px] bg-black/25">2</div>
                      <div className="w-[30px] h-[30px] bg-black/25">2</div>
                      <div className="w-[30px] h-[30px] bg-black/25">2</div>
                      <div className="w-[30px] h-[30px] bg-black/25">2</div>
                    </div>
                    <br />
                    <div className="ml-[20px]">
                      Fund Raising
                      <Switch />
                    </div>
                    <div className="ml-[20px] flex flex-row space-x-[10px]">
                      <Button>Round A</Button>
                      <Button>Fund Raising</Button>
                      <Button>Hiring</Button>
                    </div>
                  </div>
                  <div className=" ml-[25px] ">
                    Project Description
                    <br />
                    <br />
                    <div className="font-normal text-[12px]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni, eos architecto et impedit sed assumenda,
                      voluptates, ipsum a quod quas aliquam nesciunt eligendi
                      quaerat debitis molestiae laborum pariatur accusantium
                      provident?
                    </div>
                  </div>
                </div>
                <div className=" w-[220px] h-[250px] border bg-black/5 rounded-[4px]">
                  <p className="font-semibold text-[12px] mt-[20px]">
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
              <div>Hello world</div> <div>Hello world</div>
              <div>Hello world</div>
            </div>
            <div className="Company-Updates ml-[20px] w-[370px] flex flex-col space-y-[20px]">
              <p className="font-semibold text-[20px] border">
                Company Updates
              </p>
              <div className="w-[370px] space-y-[20px]">
                <div className="bg-black/25">
                  Connect your company Twitter account to your Unbundl Feed
                </div>
                <div className="bg-black/25">hello 1</div>
                <div className="bg-black/25">hello 1</div>
                <div className="bg-black/25">hello 1</div>
                <div className="bg-black/25">hello 1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCompany;
