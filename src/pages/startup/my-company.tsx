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

                  <div className="w-45 h-8 mx-5 mt-3 border bg-black text-white font-normal text-3 rounded-[4px] flex items-center justify-center">
                    Add the blockchain
                  </div>
                </div>
              </div>
              <div className="flex flex-row h-65 mt-5">
                <div className="w-fit  shrink-0 border pb-5 px-5  bg-black/5">
                  <p className="mt-5 ml-5 font-semibold text-lg w-full">
                    Main Links
                  </p>
                  <br />
                  <div className="flex flex-col w-[180px] ml-5 space-y-3">
                    <Button className="h-8 ">Whitepaper</Button>
                    <Button className="h-8 ">Tokenomics</Button>
                    <Button className="h-8 ">Pitch Deck</Button>
                    <Button className="h-8 ">Calendly</Button>
                  </div>
                </div>
                <div className="ml-5 w-full border p-5 bg-gray-100 rounded-md flex justify-center">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col">
                      <div className="font-semibold mb-3 w-max">
                        Chains Used
                      </div>
                      <div className="flex space-x-3">
                        <Button className="h-8 bg-black/25">Ethereum</Button>
                        <Button className="h-8 bg-black/25">Polygon</Button>
                        <Button className="h-8 bg-black/25">BSC</Button>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="font-semibold mb-3">Category</div>
                      <Button className="h-8 bg-black/25">De-Fi</Button>
                    </div>

                    <div className="flex flex-col">
                      <div className="font-semibold mb-3">Location</div>
                      <div className="flex space-x-3">
                        <Button className="h-8 bg-black/25">Dubai, UAE</Button>
                        <Button className="h-8 bg-black/25">Singapore</Button>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="font-semibold mb-3">
                        Level of Completion
                      </div>
                      <Button className="h-8 bg-black/25">Mainnet</Button>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="mt-[30px]">
                <div>
                  {" "}
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-5">Team</p>
                    <Button className="text-sm font-medium" variant="link">
                      Edit Privacy
                    </Button>
                  </div>
                  <div className="w-full border flex justify-between">
                    <Button className="p-5 font-medium text-md" variant="ghost">
                      Full Team
                    </Button>
                    <Button className="p-5 font-medium text-md" variant="ghost">
                      Founders
                    </Button>
                    <Button className="p-5 font-medium text-md" variant="ghost">
                      Employees
                    </Button>
                    <Button className="p-5 font-medium text-md" variant="ghost">
                      Advisors
                    </Button>
                    <Button className="p-5 font-medium text-md" variant="link">
                      Add a Member
                    </Button>
                  </div>
                </div>

                <Table className="border">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/5">Name</TableHead>
                      <TableHead className="w-1/5">Position</TableHead>
                      <TableHead className="w-1/5">Type</TableHead>
                      <TableHead className="w-1/5 text-right">Rights</TableHead>
                      <TableHead className="w-1/5"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teamMembers.map((member) => (
                      <TableRow key={member.name}>
                        <TableCell className="font-medium w-1/5">
                          {member.name}
                        </TableCell>
                        <TableCell className="w-1/5">
                          {member.position}
                        </TableCell>
                        <TableCell className="w-1/5">{member.type}</TableCell>
                        <TableCell className="text-right w-1/5">
                          {member.rights}
                        </TableCell>
                        <TableCell className="text-right w-1/5">
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
              <div className="mt-[30px]">
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
                <div className="w-full h-[159px] border px-5 py-5 bg-black/5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit ullam ab fugiat illo sed qui sequi eius! Temporibus
                  consequuntur consequatur doloribus, quam blanditiis, ex odio
                  quibusdam, fuga vero rerum explicabo!
                </div>
                <div className="w-full h-[80px] mt-5 border font-semibold text-md px-[30px] py-5 bg-black/5">
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
                <div className="w-full h-[159px] border px-5 py-5 bg-black/5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  quibusdam, veniam voluptate molestias placeat ratione aliquam
                  porro labore nemo aspernatur debitis culpa quisquam minus
                  corrupti illo similique voluptas rem voluptatem?
                </div>{" "}
                <div className="w-full h-[80px] mt-5 bg-black/5 border font-semibold text-md px-[30px] py-5">
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
                <div className="w-full h-[159px] border px-5 py-5 bg-black/5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis, numquam repellat! Dolore in quidem sunt odit commodi
                  aliquid dicta blanditiis placeat cupiditate explicabo, eos
                  eius nam culpa, harum voluptas aspernatur.
                </div>{" "}
                <div className="w-full h-[80px] mt-5 bg-black/5 border font-semibold text-md px-[30px] py-5">
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
                <br />
                <div className="w-full h-[159px] border px-5 py-5 bg-black/5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                  doloribus nostrum labore praesentium sit non dignissimos
                  saepe, ipsum totam facere quaerat tenetur maiores error odio
                  laborum minus distinctio nihil mollitia?
                </div>{" "}
                <div className="w-full h-[80px] mt-5 border bg-black/5 font-semibold text-md px-[30px] py-5">
                  Answer 3 missing questions to increase your chance of getting
                  funded
                </div>{" "}
              </div>
              {/* {DND} */}
            </div>
            <div className="Company-Updates ml-5 w-[370px] flex flex-col space-y-5">
              <div className="flex items-center space-x-3">
                <p className="font-semibold text-5">Company Updates</p>
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
              <div className="w-[370px] space-y-5">
                <div className="bg-black/5 border w-[370px] h-[122px]">
                  <p className="p-[40px] text-base font-bold text-center">
                    Connect your company Twitter account to your Unbundl Feed
                  </p>
                </div>
                <div>
                  <Card className="bg-black/5">
                    <CardHeader>
                      <CardTitle className="font-medium text-base text-black/50">
                        <div className="flex justify-between items-center">
                          <p className="font-semibold text-5">Nov. 27 2022 </p>
                          <Button className="text-sm font-medium">
                            For Everyone{" "}
                          </Button>
                        </div>{" "}
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
                      <CardTitle className="font-medium text-base text-black/50">
                        <div className="flex justify-between items-center">
                          <p className="font-semibold text-5">Nov. 27 2022 </p>
                          <Button className="text-sm font-medium">
                            For Everyone{" "}
                          </Button>
                        </div>{" "}
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
                      <CardTitle className="font-medium text-base text-black/50">
                        <div className="flex justify-between items-center">
                          <p className="font-semibold text-5">Nov. 27 2022 </p>
                          <Button className="text-sm font-medium">
                            For Everyone{" "}
                          </Button>
                        </div>{" "}
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
                      <CardTitle className="font-medium text-base text-black/50">
                        <div className="flex justify-between items-center">
                          <p className="font-semibold text-5">Nov. 27 2022 </p>
                          <Button className="text-sm font-medium">
                            For Everyone{" "}
                          </Button>
                        </div>{" "}
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
                      <CardTitle className="font-medium text-base text-black/50">
                        <div className="flex justify-between items-center">
                          <p className="font-semibold text-5">Nov. 27 2022 </p>
                          <Button className="text-sm font-medium">
                            For Everyone{" "}
                          </Button>
                        </div>{" "}
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
                      <CardTitle className="font-medium text-base text-black/50">
                        <div className="flex justify-between items-center">
                          <p className="font-semibold text-5">Nov. 27 2022 </p>
                          <Button className="text-sm font-medium">
                            For Everyone{" "}
                          </Button>
                        </div>{" "}
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
                      <CardTitle className="font-medium text-base text-black/50">
                        <div className="flex justify-between items-center">
                          <p className="font-semibold text-5">Nov. 27 2022 </p>
                          <Button className="text-sm font-medium">
                            For Everyone{" "}
                          </Button>
                        </div>{" "}
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
                      <CardTitle className="font-medium text-base text-black/50">
                        <div className="flex justify-between items-center">
                          <p className="font-semibold text-5">Nov. 27 2022 </p>
                          <Button className="text-sm font-medium">
                            For Everyone{" "}
                          </Button>
                        </div>{" "}
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
                      <CardTitle className="font-medium text-base text-black/50">
                        <div className="flex justify-between items-center">
                          <p className="font-semibold text-5">Nov. 27 2022 </p>
                          <Button className="text-sm font-medium">
                            For Everyone{" "}
                          </Button>
                        </div>{" "}
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
                      <CardTitle className="font-medium text-base text-black/50">
                        <div className="flex justify-between items-center">
                          <p className="font-semibold text-5">Nov. 27 2022 </p>
                          <Button className="text-sm font-medium">
                            For Everyone{" "}
                          </Button>
                        </div>{" "}
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
                      <CardTitle className="font-medium text-base text-black/50">
                        <div className="flex justify-between items-center">
                          <p className="font-semibold text-5">Nov. 27 2022 </p>
                          <Button className="text-sm font-medium">
                            For Everyone{" "}
                          </Button>
                        </div>{" "}
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
