import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const expand_you_network = [
  {
    investorName: "Polychain Capital",
    location: "Dubai,UAE",
    Tags: ["De-fi", "MVP", "Dubai"],
    stagedFocus: "Seed",
    timeOfCall: "Fri, Dec 13, 6 PM",
  },
  {
    investorName: "Sequoia Capital",
    location: "San Francisco, USA",
    Tags: ["De-fi", "MVP", "Dubai"],
    stagedFocus: "Seed",
    timeOfCall: "Fri, Dec 13, 6 PM",
  },
  {
    investorName: "Andreessen Horowitz",
    location: "Menlo Park, USA",
    Tags: ["De-fi", "MVP", "Dubai"],
    stagedFocus: "Seed",
    timeOfCall: "Fri, Dec 13, 6 PM",
  },
];
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

const ViewRequest = () => {
  return (
    <div>
      <div className="flex items-center justify-between mt-[21px]">
        <div className="flex items-center w-[770px] h-[46px] border rounded-[4px]">
          <Search className="ml-4 text-gray-500" />
          <input
            type="text"
            className="w-full px-4 py-2 outline-none"
            placeholder="Search..."
          />
        </div>
        <div className="w-[170px] h-[45px] ml-5">
          <Select>
            <SelectTrigger className="w-[170px] h-[45px]">
              <SelectValue placeholder="Dubai" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Dubai">Dubai</SelectItem>
              <SelectItem value="Mumbai">Mumbai</SelectItem>
              <SelectItem value="USA">USA</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-[190px] h-[46px] mr-[30px] ml-5">
          Advanced Search
        </Button>
      </div>
      <div>
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead>Investor Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Staged focus</TableHead>
              <TableHead>Time of Call</TableHead>
              <TableHead>Action button</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expand_you_network.map((organization, index) => (
              <TableRow key={index}>
                <TableCell className="font-semibold text-base">
                  {organization.investorName}
                </TableCell>
                <TableCell>{organization.location}</TableCell>
                <TableCell>{organization.Tags}</TableCell>
                <TableCell>{organization.stagedFocus}</TableCell>
                <TableCell>{organization.timeOfCall}</TableCell>
                <TableCell>
                  <Button variant="link">Request Connection</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ViewRequest;
