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
    <div className="w-[1150px] h-[650px] px-[20px]">
      <div className="flex flex-row space-x-[10px] mb-4">
        <div className="flex items-center w-[984px] h-[46px] border rounded-[4px] mt-[20px]">
          <Search className=" text-gray-500 mt-[10px]" />
          <input
            type="text"
            className="w-full px-4 py-2 outline-black bg-transparent"
            placeholder="Search... request investor"
          />
        </div>

        <Button className="w-[170px] h-[45px] mt-[20px]">Filters</Button>
      </div>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Investor Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Assets managed</TableHead>
            <TableHead>Staged focus</TableHead>
            <TableHead>Time of Call</TableHead>
            <TableHead>Action button</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expand_you_network.map((organization, index) => (
            <TableRow key={index}>
              <TableCell className="font-semibold text-[14px]">
                {organization.investorName}
              </TableCell>
              <TableCell>{organization.location}</TableCell>
              <TableCell>{organization.assetsManaged}</TableCell>
              <TableCell>{organization.stagedFocus}</TableCell>
              <TableCell>{organization.timeOfCall}</TableCell>
              <TableCell>
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
                        <div className="flex flex-row space-x-[10px]">
                          <Card className="w-[105px] h-[39px] border-none rounded-none">
                            <CardTitle>Type</CardTitle>
                            <CardDescription>Venture Capital </CardDescription>
                          </Card>
                          <Card className="w-[105px] h-[39px] border-none rounded-none">
                            <CardTitle>Type</CardTitle>
                            <CardDescription>Venture Capital </CardDescription>
                          </Card>
                          <Card className="w-[105px] h-[39px] border-none rounded-none">
                            <CardTitle>Type</CardTitle>
                            <CardDescription>Venture Capital </CardDescription>
                          </Card>
                          <Card className="w-[105px] h-[39px] border-none rounded-none">
                            <CardTitle>Type</CardTitle>
                            <CardDescription>Venture Capital </CardDescription>
                          </Card>
                        </div>
                        <div>
                          <p>Message</p>
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
                      <div className="flex flex-row space-x-[300px]">
                        <Button variant="ghost">Cancel</Button>
                        <Dialog>
                          {" "}
                          <DialogTrigger>
                            <Button>Book a call for $10,000</Button>
                          </DialogTrigger>
                          <DialogContent>Call Booked</DialogContent>
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
