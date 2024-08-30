import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import React, { useEffect, useState } from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddInvestmentForm from "@/components/forms/add-investment-form";
import { InvestmentDataTable } from "@/investments/investment-data-table";
import { columns, Investment } from "@/investments/investment-columns";
import { TeamsDataTable } from "@/teams/teams-data-table";
import { teamscolumns, Teams } from "@/teams/teams-columns";
import { AddATeamMember } from "@/components/forms/add-a-team-member";

const MyPortfolio: React.FC = () => {
  async function fetchData(): Promise<Investment[]> {
    return [
      {
        companyName: "Company A",
        status: "Invested",
        dateofInvestment: "2023-01-15",
        amountInvested: "500000",
        investmentRound: "Series A",
      },
      {
        companyName: "Company B",
        status: "Invested",
        dateofInvestment: "2022-05-10",
        amountInvested: "300000",
        investmentRound: "Seed",
      },
      {
        companyName: "Company Nab",
        status: "Invested",
        dateofInvestment: "2024-05-10",
        amountInvested: "300000",
        investmentRound: "Seed",
      },
      {
        companyName: "Company JU",
        status: "Invested",
        dateofInvestment: "2023-05-10",
        amountInvested: "300000",
        investmentRound: "Seed",
      },
    ];
  }
  async function fetchTeamsData(): Promise<Teams[]> {
    return [
      {
        name: "John Doe",
        position: "CEO",
        types: "Full-time",
        rights: "Admin",
      },
      {
        name: "Nabeel ",
        position: "Developer",
        types: "Full-time",
        rights: "Developer",
      },

      {
        name: "Jane Smith",
        position: "CTO",
        types: "Full-time",
        rights: "Managing partner",
      },
    ];
  }

  const [data, setData] = useState<Investment[]>([]);

  useEffect(() => {
    // Fetch data on component mount
    const loadData = async () => {
      const investments = await fetchData();
      setData(investments);
    };

    loadData();
  }, []);

  const [teamsData, setTeamsData] = useState<Teams[]>([]);

  useEffect(() => {
    // Fetch data on component mount
    const loadData = async () => {
      const teams = await fetchTeamsData();
      setTeamsData(teams);
    };

    loadData();
  }, []);
  return (
    <div className="flex flex-wrap m-8">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-row">
            <div className="Overview w-full  ">
              <p className="font-semibold text-5 mb-5">Overview</p>
              <div className="flex flex-row">
                <div className="flex flex-row  w-full h-63 bg-black/5 border mr-5">
                  <div className=" flex flex-col  w-full pb-5">
                    <div className="flex flex-row mt-5 ml-5">
                      <div className="w-12 h-12 border"></div>
                      <div className="ml-3">
                        <p> Startup Name</p>
                        <p className="mt-3"> startupname.io </p>
                      </div>
                    </div>
                    <br />
                    <div className="ml-5 flex flex-row space-x-3">
                      <div className="w-8 h-8 bg-black/25"></div>
                      <div className="w-8 h-8 bg-black/25"></div>
                      <div className="w-8 h-8 bg-black/25"></div>
                      <div className="w-8 h-8 bg-black/25"></div>
                      <div className="w-8 h-8 bg-black/25"></div>
                    </div>
                    <br />
                    <div className="ml-5">
                      Fund Raising
                      <Switch />
                    </div>
                    <div className="ml-5 flex flex-row space-x-3 pr-5 pt-5">
                      <Button>Round A</Button>
                      <Button>Fund Raising</Button>
                      <Button>Hiring</Button>
                    </div>
                  </div>

                  <div>
                    <div className="mt-5 font-semibold w-fit text-lg">
                      Project Description
                    </div>
                    <br />
                    <div className="font-normal text-sm pr-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni, eos architecto et impedit sed assumenda,
                      voluptates, ipsum a quod quas aliquam nesciunt eligendi
                      quaerat debitis molestiae laborum pariatur accusantium
                      provident?
                    </div>
                  </div>
                </div>
                <div className=" w-fit h-63 border bg-black/5 rounded-1 space-y-5">
                  <p className="font-semibold text-sm mt-5 px-5">
                    Complete your profile to increase your in-platform ranking
                  </p>
                  <div className="progress-bar relative w-45 h-8 mx-5 mt-3 border rounded-full bg-black/50 ">
                    <div
                      className="absolute top-0 left-0 h-full bg-black/50 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                    <span className="absolute inset-0 flex items-center justify-center text-white text-3 font-bold ">
                      75%
                    </span>
                  </div>
                  <div className="w-45 h-8 mx-5 mt-3 border bg-black text-white font-normal text-3 rounded-1 flex items-center justify-center">
                    Add the blockchain
                  </div>

                  <div className="w-45 h-8 mx-5 mt-3 border bg-black text-white font-normal text-3 rounded-1 flex items-center justify-center">
                    Add the blockchain
                  </div>
                </div>
              </div>{" "}
              <div className="mt-5 w-full border p-5 bg-gray-100 h-[240px] rounded-md flex justify-center">
                <div className="grid grid-cols-3 gap-16">
                  <div className="flex flex-col ">
                    <div className="font-semibold mb-3 w-max">Chains Used</div>
                    <div className="flex space-x-3">
                      <Button className="h-8 bg-black/25">Ethereum</Button>
                      <Button className="h-8 bg-black/25">Polygon</Button>
                      <Button className="h-8 bg-black/25">BSC</Button>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="font-semibold mb-3">Category</div>
                    <div className="flex space-x-3">
                      <Button className="h-8 bg-black/25">De-Fi</Button>
                      <Button className="h-8 bg-black/25">De-Fi</Button>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="font-semibold mb-3">Support Programm</div>
                    <div className="flex space-x-3">
                      <Button className="h-8 bg-black/25">Incubator</Button>
                      <Button className="h-8 bg-black/25">Accelerator</Button>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="font-semibold mb-3">Location</div>
                    <div className="flex space-x-3">
                      <Button className="h-8 bg-black/25">Dubai, UAE</Button>
                      <Button className="h-8 bg-black/25">Singapore</Button>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="font-semibold mb-3">Notable Investment</div>
                    <div className="flex space-x-3">
                      <Button className="h-8 bg-black/25">Binance</Button>
                      <Button className="h-8 bg-black/25">Polygon</Button>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold mb-3">Deal Flow</div>
                    <div className="flex space-x-3">
                      <Button className="h-8 bg-black/25">Network</Button>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="mt-8 w-full">
                {" "}
                <p className="font-semibold text-lg">Investments</p>
                <div className="flex items-center justify-between mt-[21px]">
                  <div className="flex items-center w-full h-[46px] border rounded-1">
                    <Search className="ml-4 text-gray-500" />
                    <input
                      type="text"
                      className="w-full px-4 py-2 outline-none"
                      placeholder="Search..."
                    />
                  </div>
                  <Button className="w-[140px] h-[46px] mr-3">Filter </Button>
                  <Button className="w-[140px] h-[46px] mr-3">
                    Export CSV{" "}
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button type="button" className="w-fit h-[46px] mr-3">
                        Add Investment
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle className="font-semibold text-xl">
                          Add Investment Form
                        </DialogTitle>
                      </DialogHeader>
                      <AddInvestmentForm />
                    </DialogContent>
                  </Dialog>
                </div>
                <InvestmentDataTable columns={columns} data={data} />
              </div>
              <div className="pt-8">
                {" "}
                <p className="font-semibold text-lg">Investment Team</p>
                <div className="flex items-center justify-between mt-[21px]">
                  <div className="flex items-center w-full h-[46px] border rounded-1">
                    <Search className="ml-4 text-gray-500" />
                    <input
                      type="text"
                      className="w-full px-4 py-2 outline-none"
                      placeholder="Search..."
                    />
                  </div>
                  <Button className="w-[140px] h-[46px] mr-3">Filter </Button>
                  <Button className="w-[140px] h-[46px] mr-3">
                    Export CSV{" "}
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        type="button"
                        className="h-45 w-fit text-sm px-4 h-[46px] mr-3"
                      >
                        Add a team member
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle className="font-semibold text-xl">
                          Add a team member
                        </DialogTitle>
                      </DialogHeader>
                      <AddATeamMember />
                    </DialogContent>
                  </Dialog>
                </div>
                <TeamsDataTable columns={teamscolumns} data={teamsData} />
              </div>
              {/* {DND} */}
            </div>
            <div className=" ml-5 h-fit w-[370px] flex flex-col space-y-5">
              <div className="w-[370px] space-y-5 mt-8">
                <div className=" border">
                  <p className="font-semibold bg-black/5 text-lg pl-5 pt-5">
                    Investment Thesis
                  </p>
                  <br />
                  <p className="font-normal text-sm p-5 bg-black/5">
                    MENA countries have large, untapped markets that are ripe
                    for disruption by innovative startups. By identifying and
                    investing in companies that are targeting these underserved
                    markets, the VC firm can help drive economic development and
                    create value for its investors.
                  </p>
                </div>
                <div>
                  <Card className="bg-black/5">
                    <CardHeader>Fund Size: $125,000,000</CardHeader>
                  </Card>
                </div>
                <div>
                  <Card className="bg-black/5">
                    <CardHeader>Typical Investment Size: $250,000</CardHeader>
                  </Card>
                </div>
                <div>
                  <Card className="bg-black/5">
                    <CardHeader>36 Deals in the last 12 months</CardHeader>
                  </Card>
                </div>
                <div>
                  <Card className="bg-black/5">
                    <CardHeader>Unique LPs invested: 14</CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
