import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader } from "@/components/ui/card";
import { MoreHorizontal, Search } from "lucide-react";

const investmentTeam = [
  {
    name: "Rick Wright",
    position: "CEO",
    type: "Managing Partner",
    right: "Managing Partner",
  },
  {
    name: "Sarah Jones",
    position: "CFO",
    type: "Partner",
    right: "Partner",
  },
  {
    name: "John Doe",
    position: "CTO",
    type: "Senior Partner",
    right: "Senior Partner",
  },
  {
    name: "Jane Smith",
    position: "COO",
    type: "Junior Partner",
    right: "Junior Partner",
  },
];

const investments = [
  {
    company: "Company A",
    status: "Active",
    investDate: "2023-01-15",
    investedAmount: "$500,000",
    round: "Series A",
  },
  {
    company: "Company B",
    status: "Exited",
    investDate: "2022-05-10",
    investedAmount: "$300,000",
    round: "Seed",
  },
];

const MyPortfolio: React.FC = () => {
  return (
    <div className="flex ml-[30px] mr-[30px] mb-[30px]">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-row">
            <div className="Overview w-[760px]  ">
              <p className="font-semibold text-5">Overview</p>
              <div className="flex flex-row  w-[760px]">
                <div className="flex flex-row  w-[520px] h-[250px] border mr-5">
                  <div className=" flex flex-col">
                    <div className="flex flex-row mt-5 ml-5">
                      <div className="w-[49px] h-[49px] border"></div>
                      <div className="ml-[10px]">
                        <p> Startup Name</p>
                        <p className="mt-[10px]"> startupname.io </p>
                      </div>
                    </div>
                    <br />
                    <div className="ml-5 flex flex-row space-x-[10px]">
                      <div className="w-[30px] h-[30px] bg-black/5">2</div>
                      <div className="w-[30px] h-[30px] bg-black/5">2</div>
                      <div className="w-[30px] h-[30px] bg-black/5">2</div>
                      <div className="w-[30px] h-[30px] bg-black/5">2</div>
                      <div className="w-[30px] h-[30px] bg-black/5">2</div>
                    </div>
                    <br />
                    <div className="ml-5">
                      Fund Raising
                      <Switch />
                    </div>
                    <div className="ml-5 flex flex-row space-x-[10px]">
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
                  <p className="font-semibold text-[12px] mt-5">
                    Complete your profile to increase your in-platform ranking
                  </p>
                  <div className="progress-bar relative w-[180px] h-[30px] mx-5 mt-[11px] border rounded-full bg-black/50 ">
                    <div
                      className="absolute top-0 left-0 h-full bg-black/50 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                    <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold ">
                      75%
                    </span>
                  </div>
                  <div className="w-[180px] h-[30px] mx-5 mt-[11px] border bg-black text-white font-normal text-[10px] rounded-[4px] flex items-center justify-center">
                    Add the blockchain
                  </div>

                  <div className="w-[180px] h-[30px] mx-5 mt-[11px] border bg-black text-white font-normal text-[10px] rounded-[4px] flex items-center justify-center">
                    Add the blockchain
                  </div>
                </div>
              </div>
              <div className="flex flex-row mt-5">
                <div className="ml-5 w-[760px] h-[240px] border p-5 bg-gray-100 rounded-md">
                  <div className="flex flex-wrap justify-between">
                    <div className="flex flex-col">
                      <div className="font-semibold mb-[10px]">Chains Used</div>
                      <div className="flex space-x-[10px]">
                        <Button className="h-[32px]">Ethereum</Button>
                        <Button className="h-[32px]">Polygon</Button>
                        <Button className="h-[32px]">BSC</Button>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="font-semibold mb-[10px]">Category</div>
                      <Button className="h-[32px]">De-Fi</Button>
                    </div>

                    <div className="flex flex-col">
                      <div className="font-semibold mb-[10px]">Location</div>
                      <div className="flex space-x-[10px]">
                        <Button className="h-[32px]">Dubai, UAE</Button>
                        <Button className="h-[32px]">
                          Singapore, Singapore
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="font-semibold mb-[10px]">
                        Level of Completion
                      </div>
                      <Button className="h-[32px]">Mainnet</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[30px]">
                {" "}
                <p>Investments</p>
                <div className="flex items-center justify-between mt-[21px]">
                  <div className="flex items-center w-[650px] h-[46px] border rounded-[4px]">
                    <Search className="ml-4 text-gray-500" />
                    <input
                      type="text"
                      className="w-full px-4 py-2 outline-none"
                      placeholder="Search..."
                    />
                  </div>
                  <Button className="w-[140px] h-[46px] mr-[10px]">
                    Advanced Search
                  </Button>
                  <Button className="w-[140px] h-[46px] mr-[10px]">
                    Advanced Search
                  </Button>
                  <Button className="w-[140px] h-[46px] mr-[10px]">
                    Advanced Search
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[110px]">Company/Fund</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Invest Date</TableHead>
                      <TableHead className="text-right">Invested</TableHead>
                      <TableHead>Round</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {investments.map((investment) => (
                      <TableRow key={investment.company}>
                        <TableCell className="font-medium">
                          {investment.company}
                        </TableCell>
                        <TableCell>{investment.status}</TableCell>
                        <TableCell>{investment.investDate}</TableCell>
                        <TableCell className="text-right">
                          {investment.investedAmount}
                        </TableCell>
                        <TableCell>{investment.round}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-5 w-5" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="pt-[30px]">
                {" "}
                <p>Investment Team</p>
                <div className="flex items-center justify-between mt-[21px]">
                  <div className="flex items-center w-[650px] h-[46px] border rounded-[4px]">
                    <Search className="ml-4 text-gray-500" />
                    <input
                      type="text"
                      className="w-full px-4 py-2 outline-none"
                      placeholder="Search..."
                    />
                  </div>
                  <Button className="w-[140px] h-[46px] mr-[10px]">
                    Advanced Search
                  </Button>
                  <Button className="w-[140px] h-[46px] mr-[10px]">
                    Advanced Search
                  </Button>
                  <Button className="w-[140px] h-[46px] mr-[10px]">
                    Advanced Search
                  </Button>
                </div>
                <Table className="border">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Name</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Right</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {investmentTeam.map((investmentTeam) => (
                      <TableRow key={investmentTeam.name}>
                        <TableCell className="font-medium">
                          {investmentTeam.name}
                        </TableCell>
                        <TableCell>{investmentTeam.position}</TableCell>
                        <TableCell>{investmentTeam.type}</TableCell>
                        <TableCell>{investmentTeam.right}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              {/* {DND} */}
            </div>
            <div className="Company-Updates ml-5 w-[370px] flex flex-col space-y-5">
              <div className="w-[370px] space-y-5 mt-[30px]">
                <div className="bg-black/5 border">
                  <p>Investment Thesis</p>
                  <br />
                  <p className="font-normal text-[12px]">
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
