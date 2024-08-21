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
  },
  {
    nameOrganiztion: "Sequoia Capital",
    category: "VC",
    location: "San Francisco, USA",
    mutualConnections: "5",
  },
  {
    nameOrganiztion: "Andreessen Horowitz",
    category: "VC",
    location: "Menlo Park, USA",
    mutualConnections: "4",
  },
];

const RequestForNewConnections = () => {
  return (
    <div className="w-[1150px] h-[650px] px-5">
      <div className="flex flex-row space-x-[10px] mb-4">
        <div className="flex items-center w-[770px] h-[46px] border rounded-[4px] ml-[10px]">
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
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead>Organization Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Mutual Connections</TableHead>
            <TableHead>Action button</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expand_you_network.map((organization, index) => (
            <TableRow key={index}>
              <TableCell className="font-semibold text-base">
                {organization.nameOrganiztion}
              </TableCell>
              <TableCell>{organization.category}</TableCell>
              <TableCell>{organization.location}</TableCell>
              <TableCell>{organization.mutualConnections}</TableCell>
              <TableCell>
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

export default RequestForNewConnections;
