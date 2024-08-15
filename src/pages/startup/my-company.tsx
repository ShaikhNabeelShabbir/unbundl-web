import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    round: "Seed",
    amountRaising: "$1,250,000",
    alreadyRaised: "$800,000",
    Postmoneyvaluation: "$10,000,000",
    MinimumTicketSize: "$100,000",
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
              <div className="flex flex-row mt-[20px]">
                <div className="w-[220px] h-[240px] border">
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
              <div className="mt-[30px]">
                {" "}
                <p>Team</p>
              </div>
              ----------------------------------------------------------------
              ----------------------------------------------------------------
              <div className="pt-[30px]">
                {" "}
                <p>Current Round Information</p>
                <Table className="border">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((invoice) => (
                      <TableRow key={invoice.round}>
                        <TableCell className="font-medium">
                          {invoice.round}
                        </TableCell>
                        <TableCell>{invoice.amountRaising}</TableCell>
                        <TableCell>{invoice.Postmoneyvaluation}</TableCell>
                        <TableCell className="text-right">
                          {invoice.alreadyRaised}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={3}>Total</TableCell>
                      <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
              ----------------------------------------------------------------
              ----------------------------------------------------------------
              <div>Hello world</div>
              ----------------------------------------------------------------
              {/* {DND} */}
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
