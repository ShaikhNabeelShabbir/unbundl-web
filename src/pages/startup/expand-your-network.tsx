import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import RequestIntroduction from "./request-introduction";

const expand_you_network = [
  {
    nameOrganiztion: "Polychain Capital",
    category: "VC",
    location: "Dubai,UAE",
    mutualConnections: "3",
    levelOfConnection: "3",
  },
  {
    nameOrganiztion: "Sequoia Capital",
    category: "VC",
    location: "San Francisco, USA",
    mutualConnections: "5",
    levelOfConnection: "2",
  },
  {
    nameOrganiztion: "Andreessen Horowitz",
    category: "VC",
    location: "Menlo Park, USA",
    mutualConnections: "4",
    levelOfConnection: "1",
  },
];

const ExpandYourNetwork = () => {
  return (
    <div className="w-full h-fit px-5">
      <div className="flex flex-row space-x-3 mb-4">
        <div className="flex items-center w-full h-[46px] border rounded-1 ml-3">
          <Search className="ml-4 text-gray-500" />
          <input
            type="text"
            className="w-full px-4 py-2 outline-black bg-transparent"
            placeholder="Search..."
          />
        </div>
        <Select>
          <SelectTrigger className="w-[170px] h-[45px] bg-transparent">
            <SelectValue placeholder="Choose Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Founder">Founder</SelectItem>
            <SelectItem value="CEO">CEO</SelectItem>
            <SelectItem value="CTO">CTO</SelectItem>
            <SelectItem value="COO">COO</SelectItem>
          </SelectContent>
        </Select>
        <Button className="w-[170px] h-[45px]">Filters</Button>
      </div>
      <Table className="border w-full h-fit">
        <TableHeader>
          <TableRow>
            <TableHead>Organization Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Mutual Connections</TableHead>
            <TableHead>Level of Connection</TableHead>
            <TableHead>Action button</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expand_you_network.map((organization, index) => (
            <TableRow key={index}>
              <TableCell className="font-semibold text-md">
                {organization.nameOrganiztion}
              </TableCell>
              <TableCell className="font-semibold text-base">
                {organization.category}
              </TableCell>
              <TableCell className="font-semibold text-base">
                {organization.location}
              </TableCell>
              <TableCell className="font-semibold text-base">
                {organization.mutualConnections}
              </TableCell>
              <TableCell className="font-semibold text-base">
                {organization.levelOfConnection}
              </TableCell>
              <TableCell className="font-semibold text-base">
                <Dialog>
                  <DialogTrigger asChild>
                    <u className="cursor-pointer">Request Introduction</u>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <RequestIntroduction />
                  </DialogContent>
                </Dialog>{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ExpandYourNetwork;
