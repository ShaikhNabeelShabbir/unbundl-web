import ProgressBar from "@/components/progress-bar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import React, { useEffect, useState } from "react";
import {
  columns,
  ExpandYourNetworkInfo,
} from "@/components/expand-your-network/expand-your-network-columns";
import { ExpandYourNetworkDataTable } from "@/components/expand-your-network/expand-your-network-data-table";
async function fetchData(): Promise<ExpandYourNetworkInfo[]> {
  return [
    {
      nameOrganiztion: "Polychain Capital",
      category: "VC",
      location: "Dubai, UAE",
      mutualConnections: 3,
      levelOfConnection: 3,
    },
    {
      nameOrganiztion: "Sequoia Capital",
      category: "VC",
      location: "San Francisco, USA",
      mutualConnections: 5,
      levelOfConnection: 2,
    },
    {
      nameOrganiztion: "Andreessen Horowitz",
      category: "VC",
      location: "Menlo Park, USA",
      mutualConnections: 4,
      levelOfConnection: 1,
    },
  ];
}

const InvestorDashboard: React.FC = () => {
  const [data, setData] = useState<ExpandYourNetworkInfo[]>([]);

  useEffect(() => {
    // Fetch data on component mount
    const loadData = async () => {
      const investments = await fetchData();
      setData(investments);
    };

    loadData();
  }, []);

  return (
    <div className="flex flex-wrap m-4 md:m-8">
      <div className="flex-1 py-[50px] md:py-[97px]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <p className="font-semibold text-lg md:text-5">My Company</p>
          <Button
            type="button"
            variant="link"
            className="mt-4 md:mt-0 h-[42px] w-full md:w-[178px] text-base mr-0 md:mr-8"
          >
            Open My Company Page
          </Button>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="mt-5 mb-5 font-medium text-base h-auto md:h-64 shrink-0 w-full md:w-fit bg-black/5 pr-5">
            <div className="font-semibold text-[18px] mt-5 ml-5">
              Startup Name
              <Button variant="link" className="text-base font-normal">
                Edit Info
              </Button>
              <div className="font-normal text-base text-black/30">
                startupname.io
              </div>
              <div className="font-medium text-md text-black/30 mt-[12px] flex items-center">
                Public
                <Switch className="ml-3" />
              </div>
              <div className="font-medium text-md text-black/30 mt-4 flex items-center">
                Fundraising
                <Switch className="ml-3" />
              </div>
              <div className="mt-4 space-x-3 flex flex-wrap">
                <Button className="bg-black/25">Round A</Button>
                <Button className="bg-black/25">Hiring</Button>
                <Button className="bg-black/25">Fundraising</Button>
              </div>
            </div>
          </div>
          <div className="mt-5 mb-5 font-medium text-base  w-full h-full border flex flex-col items-center justify-center bg-black/5">
            <ExpandYourNetworkDataTable columns={columns} data={data} />
          </div>
        </div>
        <div className="mt-8 mb-5 font-semibold text-lg p-3">Find people</div>
        <div className="flex flex-col md:flex-row font-semibold text-lg space-y-4 md:space-y-0 md:space-x-5 w-full">
          <div className="border h-auto md:h-25 font-semibold text-md rounded-md bg-black/5 p-4">
            <div className="flex w-full items-center justify-center">
              Investors
            </div>
            <div className="text-sm font-medium flex items-center justify-center text-center p-3">
              52 companies got funding this week on the platform
            </div>
          </div>
          <div className="border h-auto md:h-25 font-semibold text-md rounded-md bg-black/5 p-4">
            <div className="flex w-full items-center justify-center">
              Employees and Advisors
            </div>
            <div className="text-sm font-medium flex items-center justify-center text-center p-3">
              158 candidates got jobs last week on the platform
            </div>
          </div>
          <div className="border h-auto md:h-25 font-semibold text-md rounded-md bg-black/5 p-4">
            <div className="flex w-full items-center justify-center">
              Service Providers
            </div>
            <div className="text-sm font-medium flex items-center justify-center text-center p-3">
              458 Service Providers provided services last week on the platform
            </div>
          </div>
          <div className="border h-auto md:h-25 font-semibold text-md rounded-md bg-black/5 p-4">
            <div className="flex w-full items-center justify-center">
              Network
            </div>
            <div className="text-sm font-medium flex items-center justify-center text-center p-3">
              2152 people made new connections last week on the platform
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-3">
          <div className="mt-8 mb-5 w-full md:w-2/3 mr-0 md:mr-8 font-semibold text-lg">
            Upcoming Meetings
            <div className="w-full border flex flex-col md:flex-row bg-black/5 mt-5">
              <div className="w-full md:w-1/3 h-full border mt-5 ml-5 mr-3 flex flex-col font-bold text-sm items-center p-2">
                <p className="bg-black/10 w-full font-bold text-sm items-center text-center py-3">
                  Today
                </p>
                <div className="w-full h-fit border mt-4 mb-3 font-medium p-2 text-2 bg-black/10">
                  Investor a16z crypto at 6:30 PM view request
                </div>
                <div className="w-full h-fit border mt-4 mb-3 font-medium p-2 text-2 bg-black text-white">
                  Potential Advisor Robert Maclarence at 7:00 PM
                </div>
              </div>
              <div className="w-full md:w-1/3 h-full border mt-5 ml-3 mr-3 flex flex-col font-bold text-sm items-center p-2">
                <p className="bg-black/10 w-full font-bold text-sm items-center text-center py-3">
                  Tomorrow
                </p>
                <div className="w-full h-fit border mt-4 mb-3 font-medium p-2 text-2 bg-black text-white">
                  Potential Advisor Robert Maclarence at 7:00 PM
                </div>
                <div className="w-full h-fit border mt-4 mb-3 font-medium p-2 text-2 bg-black text-white">
                  Potential Advisor Robert Maclarence at 7:00 PM
                </div>
                <div className="w-full h-fit border mt-4 mb-3 font-medium p-2 text-2 bg-black text-white">
                  Potential Advisor Robert Maclarence at 7:00 PM
                </div>
              </div>
              <div className="w-full md:w-1/3 h-full border mt-5 ml-3 mr-3 flex flex-col font-bold text-sm items-center p-2">
                <p className="bg-black/10 w-full font-bold text-sm items-center text-center py-3">
                  Later
                </p>
                <div className="w-full h-fit border mt-4 mb-3 font-medium p-2 text-2 bg-black/10">
                  Investor a16z crypto at 6:30 PM view request
                </div>
                <div className="w-full h-fit border mt-4 mb-3 font-medium p-2 text-2 bg-black/10">
                  Investor a16z crypto at 6:30 PM view request
                </div>
                <div className="w-full h-fit border mt-4 mb-3 font-medium p-2 text-2 bg-black/10">
                  Investor a16z crypto at 6:30 PM view request
                </div>
                <div className="w-full h-fit border mt-4 mb-3 font-medium p-2 text-2 bg-black/10">
                  Investor a16z crypto at 6:30 PM view request
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 mb-5 w-full md:w-1/3 font-semibold text-lg">
            Company profile completion
            <div className="w-full h-fit border font-semibold text-lg p-5 mt-5 bg-black/5 space-y-5">
              Complete your profile to increase your in-platform ranking <br />
              <ProgressBar progress={23} />
              <div className="text-sm text-white my-3 font-normal rounded-1 flex items-center justify-center bg-[#262626] h-[52px]">
                Start Here
              </div>
              <div className="text-sm text-white my-3 font-normal rounded-1 flex items-center justify-center bg-[#262626] h-[52px]">
                Start Here
              </div>
              <div className="text-sm text-white my-3 font-normal rounded-1 flex items-center justify-center bg-[#262626] h-[52px]">
                Start Here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorDashboard;
