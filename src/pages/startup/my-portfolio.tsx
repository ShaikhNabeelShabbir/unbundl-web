import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import React, { useEffect, useState } from "react";
import { Table } from "@/components/ui/table";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Update from "./update";
import TeamNavbar from "@/components/team-navbar";
import ProgressBar from "@/components/progress-bar";
import { Teams, teamscolumns } from "@/components/teams/teams-columns";
import { InvestmentDataTable } from "@/components/investments/investment-data-table";
import {
  columns,
  Investment,
} from "@/components/investments/investment-columns";
import { TeamsDataTable } from "@/components/teams/teams-data-table";

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
    { name: "John Doe", position: "CEO", types: "Full-time", rights: "Admin" },
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
const MyPortfolio: React.FC = () => {
  const [updates, setUpdates] = useState([
    {
      date: "Nov. 27 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquid, sunt repudiandae ab obcaecati blanditiis maxime nobis? Repellendus delectus est, asperiores, vel reiciendis dignissimos voluptatum suscipit sit eligendi ipsam explicabo?",
      visibility: "For Everyone",
    },
  ]);

  const handleAddUpdate = (newUpdate: {
    date: string;
    description: string;
    visibility: string;
  }) => {
    setUpdates([...updates, newUpdate]);
  };
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
    <div className="flex flex-col-reverse md:flex-row m-8">
      <div className="flex-1 py-8 sm:py-[97px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col md:flex-row">
            <div className="Overview w-full">
              <p className="font-semibold text-lg mb-5 md:text-5">Overview</p>
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col md:flex-row w-full h-63 bg-black/5 border mb-5 md:mb-0 md:mr-5">
                  <div className="flex flex-col w-full pb-5">
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
                    <div className="mt-5 font-semibold w-fit text-lg ml-5">
                      Project Description
                    </div>
                    <br />
                    <div className="font-normal text-sm pr-5 ml-5 mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni, eos architecto et impedit sed assumenda,
                      voluptates, ipsum a quod quas aliquam nesciunt eligendi
                      quaerat debitis molestiae laborum pariatur accusantium
                      provident?
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-fit h-63 border bg-black/5 rounded-1 space-y-5 mb-5 md:mb-0">
                  <p className="font-semibold text-sm mt-5 px-5">
                    Complete your profile to increase your in-platform ranking
                  </p>
                  <ProgressBar progress={50} />
                  <div className="w-45 h-8 mx-5 mt-3 border bg-black text-white font-normal text-3 rounded-1 flex items-center justify-center">
                    Add the blockchain
                  </div>

                  <div className="w-45 h-8 mx-5 mt-3 border bg-black text-white font-normal text-3 rounded-1 flex items-center justify-center">
                    Add the blockchain
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:h-65 mt-5">
                <div className="w-full md:w-full border p-5 bg-gray-100 rounded-md flex ">
                  <div className="grid grid-cols-2 gap-x-11 gap-y-6 w-full">
                    <div className="flex flex-col w-full">
                      <div className="font-semibold mb-3 w-max">
                        Chains Used
                      </div>
                      <div className="flex space-x-3">
                        <Button className="h-8 bg-black/25 rounded-none">
                          Ethereum
                        </Button>
                        <Button className="h-8 bg-black/25 rounded-none">
                          Polygon
                        </Button>
                        <Button className="h-8 bg-black/25 rounded-none">
                          BSC
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-col w-fit">
                      <div className="font-semibold mb-3">Category</div>
                      <Button className="h-8 bg-black/25 rounded-none">
                        De-Fi
                      </Button>
                    </div>

                    <div className="flex flex-col mr-auto">
                      <div className="font-semibold mb-3">Location</div>
                      <div className="flex space-x-3">
                        <Button className="h-8 bg-black/25 rounded-none">
                          Dubai, UAE
                        </Button>
                        <Button className="h-8 bg-black/25 rounded-none">
                          Singapore, Singapore
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-col w-fit">
                      <div className="font-semibold mb-3">
                        Level of Completion
                      </div>
                      <Button className="h-8 bg-black/25 rounded-none w-fit">
                        Mainnet
                      </Button>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-3">Notable Investment</div>
                    <div className="flex space-x-3">
                      <Button className="h-8 bg-black/25">Binance</Button>
                      <Button className="h-8 bg-black/25">Polygon</Button>
                    </div>
                    <div className="font-semibold mb-3">Deal Flow</div>
                    <div className="flex space-x-3">
                      <Button className="h-8 bg-black/25">Network</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div>
                  <p className="font-semibold text-5">Investments</p>

                  <div className="flex justify-between items-center">
                    <TeamNavbar />
                  </div>
                  <br />
                  <InvestmentDataTable columns={columns} data={data} />
                </div>
              </div>
              <div className="pt-8">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-5">
                    Current Round Information
                  </p>
                  <Button className="text-sm font-medium" variant="link">
                    Edit Privacy
                  </Button>
                </div>
                <Table className="border  bg-black/5">
                  <TeamsDataTable columns={teamscolumns} data={teamsData} />
                </Table>
              </div>
            </div>

            <div className="md:w-80 md:ml-6 w-full">
              <div className="flex flex-row mb-5 mt-5">
                <p>Investment Thesis</p>
                <Dialog>
                  <DialogTrigger>
                    <Button variant="link" className=" mr-0 border ml-14">
                      Create Update
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <Update onAddUpdate={handleAddUpdate} />
                  </DialogContent>
                </Dialog>{" "}
              </div>
              <Card className="h-fit">
                <CardDescription className="p-5">
                  MENA countries have large, untapped markets that are ripe for
                  disruption by innovative startups. By identifying and
                  investing in companies that are targeting these underserved
                  markets, the VC firm can help drive economic development and
                  create value for its investors.
                </CardDescription>
              </Card>
              <Card className="bg-black/5 mt-5">
                <CardHeader>Fund Size: $125,000,000</CardHeader>
              </Card>
              <Card className="bg-black/5 mt-5">
                <CardHeader>Typical Investment Size: $250,000</CardHeader>
              </Card>

              <Card className="bg-black/5 mt-5">
                <CardHeader>36 Deals in the last 12 months</CardHeader>
              </Card>

              <Card className="bg-black/5 mt-5">
                <CardHeader>Unique LPs invested: 14</CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
