import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardDescription } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Update from "./update";
import TeamNavbar from "@/components/team-navbar";
import ProgressBar from "@/components/progress-bar";
import { TeamsDataTable } from "@/components/teams/teams-data-table";
import { AddATeamMember } from "@/components/forms/add-a-team-member";
import { Teams, teamscolumns } from "@/components/teams/teams-columns";

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
async function fetchData(): Promise<Teams[]> {
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
const MyCompany: React.FC = () => {
  const [data, setData] = useState<Teams[]>([]);

  useEffect(() => {
    // Fetch data on component mount
    const loadData = async () => {
      const investments = await fetchData();
      setData(investments);
    };

    loadData();
  }, []);
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

  return (
    <div className="flex flex-col-reverse md:flex-row m-8">
      <div className="flex-1 py-[97px]">
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
                <div className="w-full md:w-1/3 shrink-0 border pb-5 md:mr-5 bg-black/5">
                  <p className="mt-5 ml-5 font-semibold text-lg w-full">
                    Main Links
                  </p>
                  <br />
                  <div className="flex flex-col w-4/5 ml-5 space-y-3">
                    <Button className="h-8 ">Whitepaper</Button>
                    <Button className="h-8 ">Tokenomics</Button>
                    <Button className="h-8 ">Pitch Deck</Button>
                    <Button className="h-8 ">Calendly</Button>
                  </div>
                </div>
                <div className="w-full md:w-2/3 border p-5 bg-gray-100 rounded-md flex md:ml-5">
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
                </div>
              </div>
              <div className="mt-8">
                <div>
                  <p className="font-semibold text-5">Team</p>

                  <div className="flex justify-between items-center">
                    <TeamNavbar />
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-black text-white">
                          Add Team Member
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add Team Member</DialogTitle>
                        </DialogHeader>
                        <AddATeamMember />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <br />
                  <TeamsDataTable columns={teamscolumns} data={data} />
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
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-5">Cap Table</p>
                  <Button className="text-sm font-medium" variant="link">
                    Edit Privacy
                  </Button>
                </div>
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
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-5">Product Information</p>
                  <Button className="text-sm font-medium" variant="link">
                    Edit Privacy
                  </Button>
                </div>{" "}
                <div className="w-full h-fit border px-5 py-5 bg-black/5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit ullam ab fugiat illo sed qui sequi eius! Temporibus
                  consequuntur consequatur doloribus, quam blanditiis, ex odio
                  quibusdam, fuga vero rerum explicabo!
                </div>
                <div className="w-full h-fit mt-5 border font-semibold text-md px-8 py-5 bg-black/5">
                  Answer 3 missing questions to increase your chance of getting
                  funded
                </div>{" "}
              </div>
              <br />
              <div>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-5">Tech Information</p>
                  <Button className="text-sm font-medium" variant="link">
                    Edit Privacy
                  </Button>
                </div>{" "}
                <div className="w-full h-fit border px-5 py-5 bg-black/5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  quibusdam, veniam voluptate molestias placeat ratione aliquam
                  porro labore nemo aspernatur debitis culpa quisquam minus
                  corrupti illo similique voluptas rem voluptatem?
                </div>{" "}
                <div className="w-full h-fit mt-5 bg-black/5 border font-semibold text-md px-8 py-5">
                  Answer 2 missing questions to increase your chance of getting
                  funded
                </div>{" "}
              </div>
              <br />
              <div>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-5">Market Information</p>
                  <Button className="text-sm font-medium" variant="link">
                    Edit Privacy
                  </Button>
                </div>{" "}
                <div className="w-full h-fit border px-5 py-5 bg-black/5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis, numquam repellat! Dolore in quidem sunt odit commodi
                  aliquid dicta blanditiis placeat cupiditate explicabo, eos
                  eius nam culpa, harum voluptas aspernatur.
                </div>{" "}
                <div className="w-full h-fit mt-5 bg-black/5 border font-semibold text-md px-8 py-5">
                  Answer 2 missing questions to increase your chance of getting
                  funded
                </div>{" "}
              </div>
              <br />
              <div>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-5">
                    Fund Raising Information
                  </p>
                  <Button className="text-sm font-medium" variant="link">
                    Edit Privacy
                  </Button>
                </div>{" "}
                <div className="w-full h-fit border px-5 py-5 bg-black/5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                  doloribus nostrum labore praesentium sit non dignissimos
                  saepe, ipsum totam facere quaerat tenetur maiores error odio
                  laborum minus distinctio nihil mollitia?
                </div>{" "}
                <div className="w-full h-fit mt-5 border bg-black/5 font-semibold text-md px-8 py-5">
                  Answer 3 missing questions to increase your chance of getting
                  funded
                </div>{" "}
              </div>
            </div>

            <div className="md:w-80 md:ml-6 w-full">
              <div className="flex flex-row mb-5 mt-5">
                <p>Company Updates</p>
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
                <CardDescription>
                  <div className="space-y-4">
                    {updates.map((update, index) => (
                      <div key={index} className="p-4 border-b">
                        <div className="font-semibold">{update.date}</div>
                        <p>{update.description}</p>
                        <p className="text-sm text-gray-500">
                          {update.visibility}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardDescription>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCompany;
