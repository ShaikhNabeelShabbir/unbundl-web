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
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Update from "./update";

const invoices = [
  {
    round: "Seed",
    amountRaising: "$1,250,000",
    alreadyRaised: "$800,000",
    Postmoneyvaluation: "$10,000,000",
    MinimumTicketSize: "$100,000",
  },
];
const investments = [
  {
    Investor: "CFounders + ESOP",
    Invested: "n/a",
    Existing_Shares: "1,000,000",
    Preferred_Shares: "n/a",
    Price_per_share: "n/a",
    Ownership: "80.00%",
  },
];
const teamMembers = [
  {
    name: "John Doe",
    position: "CEO",
    type: "Full-time",
    rights: "Admin",
  },
  {
    name: "Jane Smith",
    position: "CTO",
    type: "Full-time",
    rights: "Managing partner",
  },
];

const MyCompany: React.FC = () => {
  return (
    <div className="flex ml-[30px] mr-[30px] mb-[30px]">
      <div className="flex-1 py-[97px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-row">
            <div className="Overview w-[760px]  ">
              <p className="font-semibold text-[20px]">Overview</p>
              <div className="flex flex-row  w-[760px]">
                <div className="flex flex-row  w-[520px] h-[250px] bg-black/5 border mr-[20px]">
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
                      <div className="w-[30px] h-[30px] bg-black/25"></div>
                      <div className="w-[30px] h-[30px] bg-black/25"></div>
                      <div className="w-[30px] h-[30px] bg-black/25"></div>
                      <div className="w-[30px] h-[30px] bg-black/25"></div>
                      <div className="w-[30px] h-[30px] bg-black/25"></div>
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
                    <div className="mt-[20px] font-semibold text-[18px]">
                      Project Description
                    </div>
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
                  <p className="font-semibold text-[12px] mt-[20px] px-[20px]">
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
              <div className="flex flex-row mt-[20px]">
                <div className="w-[220px] h-[240px] border  bg-black/5">
                  <p className="mt-[20px] ml-[20px] font-semibold text-[18px]">
                    Main Links
                  </p>
                  <br />
                  <div className="flex flex-col w-[180px] ml-[20px] space-y-[10px]">
                    <Button className="h-[32px]">Whitepaper</Button>
                    <Button className="h-[32px]">Tokenomics</Button>
                    <Button className="h-[32px]">Pitch Deck</Button>
                    <Button className="h-[32px]">Calendly</Button>
                  </div>
                </div>
                <div className="ml-[20px] w-[520px] h-[240px] border p-[20px] bg-gray-100 rounded-md">
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
              <br />
              <div className="mt-[30px]">
                {" "}
                <p className="font-semibold text-[20px]">Team</p>
                <br />
                <div className="w-[760px] border">
                  <Button
                    className="p-[20px] font-medium text-[16px]"
                    variant="ghost"
                  >
                    Full Team
                  </Button>
                  <Button
                    className="p-[20px] font-medium text-[16px]"
                    variant="ghost"
                  >
                    Founders
                  </Button>
                  <Button
                    className="p-[20px] font-medium text-[16px]"
                    variant="ghost"
                  >
                    Employees
                  </Button>
                  <Button
                    className="p-[20px] font-medium text-[16px]"
                    variant="ghost"
                  >
                    Advisors
                  </Button>
                  <Button className="p-[20px] font-medium text-[16px]">
                    Add a Member
                  </Button>
                </div>
                <Table className="border">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[1063px]">Name</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead className="text-right">Rights</TableHead>
                      <TableHead></TableHead>{" "}
                      {/* Empty header for the dropdown */}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teamMembers.map((member) => (
                      <TableRow key={member.name}>
                        <TableCell className="font-medium">
                          {member.name}
                        </TableCell>
                        <TableCell>{member.position}</TableCell>
                        <TableCell>{member.type}</TableCell>
                        <TableCell className="text-right">
                          {member.rights}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            className="h-8 w-8 p-0"
                          ></Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="pt-[30px]">
                {" "}
                <p className="font-semibold text-[20px] ">
                  Current Round Information
                </p>
                <br />
                <Table className="border  bg-black/5">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Round</TableHead>
                      <TableHead>Amount Raising</TableHead>
                      <TableHead>Already Raised</TableHead>
                      <TableHead>Post-Money Valuation</TableHead>
                      <TableHead className="text-right">
                        Minimum Ticket Size
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((invoice) => (
                      <TableRow key={invoice.round}>
                        <TableCell className="font-medium">
                          {invoice.round}
                        </TableCell>
                        <TableCell>{invoice.amountRaising}</TableCell>
                        <TableCell>{invoice.alreadyRaised}</TableCell>
                        <TableCell>{invoice.Postmoneyvaluation}</TableCell>
                        <TableCell className="text-right">
                          {invoice.MinimumTicketSize}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-[30px]">
                {" "}
                <p className="font-semibold text-[20px] ">Cap Table</p>
                <br />
                <Table className="border bg-black/5">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Investor</TableHead>
                      <TableHead>Invested</TableHead>
                      <TableHead>Existing_Shares</TableHead>
                      <TableHead className="text-right">
                        Preferred_Shares
                      </TableHead>
                      <TableHead>Price_per_share</TableHead>
                      <TableHead>Ownership</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {investments.map((investment) => (
                      <TableRow key={investment.Investor}>
                        <TableCell className="font-medium">
                          {investment.Investor}
                        </TableCell>
                        <TableCell>{investment.Invested}</TableCell>
                        <TableCell>{investment.Existing_Shares}</TableCell>
                        <TableCell className="text-right">
                          {investment.Preferred_Shares}
                        </TableCell>
                        <TableCell>{investment.Price_per_share}</TableCell>
                        <TableCell>{investment.Ownership}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <br />
              <div>
                <p className="font-semibold text-[20px] ">
                  Product Information
                </p>
                <br />
                <div className="w-[760px] h-[159px] border px-[20px] py-[20px] bg-black/5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit ullam ab fugiat illo sed qui sequi eius! Temporibus
                  consequuntur consequatur doloribus, quam blanditiis, ex odio
                  quibusdam, fuga vero rerum explicabo!
                </div>
                <div className="w-[760px] h-[80px] mt-[20px] border font-semibold text-[16px] px-[30px] py-[20px] bg-black/5">
                  Answer 3 missing questions to increase your chance of getting
                  funded
                </div>{" "}
              </div>
              <br />
              <div>
                <p className="font-semibold text-[20px]">Tech Information</p>
                <br />
                <div className="w-[760px] h-[159px] border px-[20px] py-[20px] bg-black/5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  quibusdam, veniam voluptate molestias placeat ratione aliquam
                  porro labore nemo aspernatur debitis culpa quisquam minus
                  corrupti illo similique voluptas rem voluptatem?
                </div>{" "}
                <div className="w-[760px] h-[80px] mt-[20px] bg-black/5 border font-semibold text-[16px] px-[30px] py-[20px]">
                  Answer 2 missing questions to increase your chance of getting
                  funded
                </div>{" "}
              </div>
              <br />
              <div>
                <p className="font-semibold text-[20px]">Market Information</p>{" "}
                <br />
                <div className="w-[760px] h-[159px] border px-[20px] py-[20px] bg-black/5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis, numquam repellat! Dolore in quidem sunt odit commodi
                  aliquid dicta blanditiis placeat cupiditate explicabo, eos
                  eius nam culpa, harum voluptas aspernatur.
                </div>{" "}
                <div className="w-[760px] h-[80px] mt-[20px] bg-black/5 border font-semibold text-[16px] px-[30px] py-[20px]">
                  Answer 2 missing questions to increase your chance of getting
                  funded
                </div>{" "}
              </div>
              <br />
              <div>
                <p className="font-semibold text-[20px]">
                  Fundraising Information
                </p>
                <br />
                <div className="w-[760px] h-[159px] border px-[20px] py-[20px] bg-black/5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                  doloribus nostrum labore praesentium sit non dignissimos
                  saepe, ipsum totam facere quaerat tenetur maiores error odio
                  laborum minus distinctio nihil mollitia?
                </div>{" "}
                <div className="w-[760px] h-[80px] mt-[20px] border bg-black/5 font-semibold text-[16px] px-[30px] py-[20px]">
                  Answer 3 missing questions to increase your chance of getting
                  funded
                </div>{" "}
              </div>
              {/* {DND} */}
            </div>
            <div className="Company-Updates ml-[20px] w-[370px] flex flex-col space-y-[20px]">
              <div className="flex items-center space-x-[10px]">
                <p className="font-semibold text-[20px]">Company Updates</p>
                <Dialog>
                  <DialogHeader></DialogHeader>
                  <DialogTrigger>
                    <Button variant="link" className="pl-[70px]">
                      Create Update
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <Update />
                  </DialogContent>
                </Dialog>{" "}
              </div>
              <div className="w-[370px] space-y-[20px]">
                <div className="bg-black/5 border w-[370px] h-[122px]">
                  <p className="p-[40px] text-[14px] font-bold text-center">
                    Connect your company Twitter account to your Unbundl Feed
                  </p>
                </div>
                <div>
                  <Card className="bg-black/5">
                    <CardHeader>
                      <CardTitle className="font-medium text-[14px] text-black/50">
                        Nov. 27 2022
                      </CardTitle>
                      <CardDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus aliquid, sunt repudiandae ab obcaecati
                        blanditiis maxime nobis? Repellendus delectus est,
                        asperiores, vel reiciendis dignissimos voluptatum
                        suscipit sit eligendi ipsam explicabo?
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                <div>
                  {" "}
                  <Card className="bg-black/5">
                    <CardHeader>
                      <CardTitle className="font-medium text-[14px] text-black/50">
                        Nov. 27 2022
                      </CardTitle>
                      <CardDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus aliquid, sunt repudiandae ab obcaecati
                        blanditiis maxime nobis? Repellendus delectus est,
                        asperiores, vel reiciendis dignissimos voluptatum
                        suscipit sit eligendi ipsam explicabo?
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                <div>
                  {" "}
                  <Card className="bg-black/5">
                    <CardHeader>
                      <CardTitle className="font-medium text-[14px] text-black/50">
                        Nov. 27 2022
                      </CardTitle>
                      <CardDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus aliquid, sunt repudiandae ab obcaecati
                        blanditiis maxime nobis? Repellendus delectus est,
                        asperiores, vel reiciendis dignissimos voluptatum
                        suscipit sit eligendi ipsam explicabo?
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                <div>
                  {" "}
                  <Card className="bg-black/5">
                    <CardHeader>
                      <CardTitle className="font-medium text-[14px] text-black/50">
                        Nov. 27 2022
                      </CardTitle>
                      <CardDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus aliquid, sunt repudiandae ab obcaecati
                        blanditiis maxime nobis? Repellendus delectus est,
                        asperiores, vel reiciendis dignissimos voluptatum
                        suscipit sit eligendi ipsam explicabo?
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>{" "}
                <div>
                  {" "}
                  <Card className="bg-black/5">
                    <CardHeader>
                      <CardTitle className="font-medium text-[14px] text-black/50">
                        Nov. 27 2022
                      </CardTitle>
                      <CardDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus aliquid, sunt repudiandae ab obcaecati
                        blanditiis maxime nobis? Repellendus delectus est,
                        asperiores, vel reiciendis dignissimos voluptatum
                        suscipit sit eligendi ipsam explicabo?
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                <div>
                  {" "}
                  <Card className="bg-black/5">
                    <CardHeader>
                      <CardTitle className="font-medium text-[14px] text-black/50">
                        Nov. 27 2022
                      </CardTitle>
                      <CardDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus aliquid, sunt repudiandae ab obcaecati
                        blanditiis maxime nobis? Repellendus delectus est,
                        asperiores, vel reiciendis dignissimos voluptatum
                        suscipit sit eligendi ipsam explicabo?
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                <div>
                  <Card className="bg-black/5">
                    <CardHeader>
                      <CardTitle className="font-medium text-[14px] text-black/50">
                        Nov. 27 2022
                      </CardTitle>
                      <CardDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus aliquid, sunt repudiandae ab obcaecati
                        blanditiis maxime nobis? Repellendus delectus est,
                        asperiores, vel reiciendis dignissimos voluptatum
                        suscipit sit eligendi ipsam explicabo?
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                <div>
                  <Card className="bg-black/5">
                    <CardHeader>
                      <CardTitle className="font-medium text-[14px] text-black/50">
                        Nov. 27 2022
                      </CardTitle>
                      <CardDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus aliquid, sunt repudiandae ab obcaecati
                        blanditiis maxime nobis? Repellendus delectus est,
                        asperiores, vel reiciendis dignissimos voluptatum
                        suscipit sit eligendi ipsam explicabo?
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                <div>
                  <Card className="bg-black/5">
                    <CardHeader>
                      <CardTitle className="font-medium text-[14px] text-black/50">
                        Nov. 27 2022
                      </CardTitle>
                      <CardDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus aliquid, sunt repudiandae ab obcaecati
                        blanditiis maxime nobis? Repellendus delectus est,
                        asperiores, vel reiciendis dignissimos voluptatum
                        suscipit sit eligendi ipsam explicabo?
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                <div>
                  <Card className="bg-black/5">
                    <CardHeader>
                      <CardTitle className="font-medium text-[14px] text-black/50">
                        Nov. 27 2022
                      </CardTitle>
                      <CardDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus aliquid, sunt repudiandae ab obcaecati
                        blanditiis maxime nobis? Repellendus delectus est,
                        asperiores, vel reiciendis dignissimos voluptatum
                        suscipit sit eligendi ipsam explicabo?
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                <div>
                  <Card className="bg-black/5">
                    <CardHeader>
                      <CardTitle className="font-medium text-[14px] text-black/50">
                        Nov. 27 2022
                      </CardTitle>
                      <CardDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus aliquid, sunt repudiandae ab obcaecati
                        blanditiis maxime nobis? Repellendus delectus est,
                        asperiores, vel reiciendis dignissimos voluptatum
                        suscipit sit eligendi ipsam explicabo?
                      </CardDescription>
                    </CardHeader>
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

export default MyCompany;
