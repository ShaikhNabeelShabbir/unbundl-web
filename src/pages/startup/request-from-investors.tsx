import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const expand_you_network = [
  {
    investorName: "Polychain Capital",
    location: "Dubai,UAE",
    assetsManaged: "3",
    stagedFocus: "Seed",
    timeOfCall: "Fri, Dec 13, 6 PM",
  },
  {
    investorName: "Sequoia Capital",
    location: "San Francisco, USA",
    assetsManaged: "5",
    stagedFocus: "Seed",
    timeOfCall: "Fri, Dec 13, 6 PM",
  },
  {
    investorName: "Andreessen Horowitz",
    location: "Menlo Park, USA",
    assetsManaged: "4",
    stagedFocus: "Seed",
    timeOfCall: "Fri, Dec 13, 6 PM",
  },
];

const RequsetFromInvestors = () => {
  return (
    <div className="w-full h-fit px-5">
      <div className="flex flex-row space-x-3 mb-4">
        <div className="flex items-center w-full h-12 border rounded-1 mt-5">
          <Search className=" text-gray-500 mt-3" />
          <input
            type="text"
            className="w-full px-4 py-2 outline-black bg-transparent"
            placeholder="Search... request investor"
          />
        </div>

        <Button className="w-[170px] h-11 mt-5">Filters</Button>
      </div>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="text-base">Investor Name</TableHead>
            <TableHead className="text-base">Location</TableHead>
            <TableHead className="text-base">Assets managed</TableHead>
            <TableHead className="text-base">Staged focus</TableHead>
            <TableHead className="text-base">Time of Call</TableHead>
            <TableHead className="text-base">Action button</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expand_you_network.map((organization, index) => (
            <TableRow key={index}>
              <TableCell className="font-semibold text-base">
                {organization.investorName}
              </TableCell>
              <TableCell className="text-base">
                {organization.location}
              </TableCell>
              <TableCell className="text-base">
                {organization.assetsManaged}
              </TableCell>
              <TableCell className="text-base">
                {organization.stagedFocus}
              </TableCell>
              <TableCell className="text-base">
                {organization.timeOfCall}
              </TableCell>
              <TableCell className="text-base">
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <u className="cursor-pointer">Book A call</u>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>a16z crypto venture fund</DialogTitle>
                        <p>Investor overview</p>
                        <p>
                          a16z crypto is a $300M venture fund that will invest
                          in crypto companies and protocols. Their fund is
                          designed to include the best features of traditional
                          venture capital, updated to the modern crypto world.
                        </p>
                        <br />
                        <div className="flex flex-row space-x-3">
                          <Card className="w-26 h-10 border-none rounded-none">
                            <CardTitle>Type</CardTitle>
                            <CardDescription>Venture Capital </CardDescription>
                          </Card>
                          <Card className="w-26 h-10 border-none rounded-none">
                            <CardTitle>Type</CardTitle>
                            <CardDescription>Venture Capital </CardDescription>
                          </Card>
                          <Card className="w-26 h-10 border-none rounded-none">
                            <CardTitle>Type</CardTitle>
                            <CardDescription>Venture Capital </CardDescription>
                          </Card>
                          <Card className="w-26 h-10 border-none rounded-none">
                            <CardTitle>Type</CardTitle>
                            <CardDescription>Venture Capital </CardDescription>
                          </Card>
                        </div>
                        <div className="pt-10">
                          <p className="font-bold text-5 pb-4">Message</p>
                          <p>
                            Dear Startup Team, <br />I hope this message finds
                            you well. My name is Alex and I am a Venture
                            Capitalist at a16z crypto. I recently came across
                            your company [startup name] and was very impressed
                            by the progress you have made thus far. <br />{" "}
                            <br /> I would love to have the opportunity to learn
                            more about your business and discuss potential
                            opportunities for collaboration. I believe that a
                            conversation with you and your team could be
                            mutually beneficial and help us both better
                            understand the potential value that we can bring to
                            one another. <br />
                            <br /> Would you be available for a call on Friday
                            at 6 PM next week to discuss further? I understand
                            that your time is valuable, so please let me know if
                            there is a better time for us to connect and we can
                            find a time that works for both of us.
                          </p>
                        </div>
                      </DialogHeader>
                      <div className="flex flex-row space-x-3 pt-3">
                        <Card className="w-26 h-10 border-none rounded-none">
                          <CardTitle>Day</CardTitle>
                          <CardDescription>
                            Friday, December 13{" "}
                          </CardDescription>
                        </Card>
                        <Card className="w-26 h-10 border-none rounded-none">
                          <CardTitle>Time</CardTitle>
                          <CardDescription>6 PM Dubai Time </CardDescription>
                        </Card>{" "}
                      </div>
                      <div className="flex flex-row space-x-[300px]">
                        <Button variant="ghost">Cancel</Button>
                        <Dialog>
                          {" "}
                          <DialogTrigger>
                            <Button>Book a call for $10,000</Button>
                          </DialogTrigger>
                          <DialogContent className="w-full h-full ">
                            <DialogHeader>
                              <DialogTitle className="font-semibold text-xl">
                                Talent profile{" "}
                              </DialogTitle>
                            </DialogHeader>
                            <p className="font-bold text-xl text-center">
                              Call Booked{" "}
                            </p>
                            <p className="text-center text-md font-medium text-black/50">
                              At 5 PM on February 2nd
                            </p>
                            <p className="text-center text-md font-medium">
                              <u>Close </u>
                            </p>
                          </DialogContent>{" "}
                        </Dialog>
                      </div>
                    </DialogContent>
                  </Dialog>{" "}
                </TableCell>{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RequsetFromInvestors;
