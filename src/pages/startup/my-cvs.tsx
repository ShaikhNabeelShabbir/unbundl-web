import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { MoreHorizontal } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateCV } from "@/components/create-cv";

const investments = [
  {
    name: "Company A",
    impression: "0",
    clicks: "0",
    calls: "0",
  },
];
const MyCvs: React.FC = () => {
  return (
    <div className="flex flex-wrap m-8">
      <div className="flex-1 py-[97px]">
        <div className="flex flex-row">
          <div className="mt-5 mb-5 font-medium text-base w-full h-full  bg-black/5 ">
            <div className="w-full h-15 border flex flex-row">
              <div className="ml-5 mt-5">
                <Button
                  className="p-5 hover:underline font-medium text-md"
                  variant="ghost"
                >
                  Active
                </Button>
                <Button
                  className="p-5 hover:underline font-medium text-md"
                  variant="ghost"
                >
                  Paused
                </Button>
              </div>
              <div className="pt-3 ml-auto">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button type="button" className="h-45 w-88 text-sm ml-auto">
                      Create New CV
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <CreateCV />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="mt-4 ml-5 w-full h-8  font-semibold text-lg flex flex-row">
              <div>Active Services </div>
              <div className="ml-auto mr-5">
                <Select>
                  <SelectTrigger className="w-[200px] h-8 bg-transparent">
                    <SelectValue placeholder="Dubai" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dubai">Dubai</SelectItem>
                    <SelectItem value="Mumbai">Mumbai</SelectItem>
                    <SelectItem value="USA">USA</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-8 w-full h-fit border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[110px]">Name</TableHead>
                    <TableHead>Impression</TableHead>
                    <TableHead>Clicks</TableHead>
                    <TableHead className="text-right">Calls</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {investments.map((investment) => (
                    <TableRow key={investment.name}>
                      <TableCell className="font-medium">
                        {investment.name}
                      </TableCell>
                      <TableCell>{investment.impression}</TableCell>
                      <TableCell>{investment.clicks}</TableCell>
                      <TableCell className="text-right">
                        {investment.calls}
                      </TableCell>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCvs;
