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
import CreateNewService from "@/components/create-new-service";

const investments = [
  {
    name: "Company A",
    impression: "0",
    clicks: "0",
    calls: "0",
  },
];
const Services: React.FC = () => {
  return (
    <div className="flex ml-[30px] mr-[30px] mb-[30px]">
      <div className="flex-1 py-[97px]">
        <div className="flex flex-row">
          <div className="mt-[20px] mb-[20px] font-medium text-base w-[1150px] h-[296px]  bg-black/5 ">
            <div className="w-[1150px] h-[60px] border flex flex-row">
              <div className="ml-[20px] mt-[20px]">
                <Button
                  className="p-[20px] hover:underline font-medium text-[16px]"
                  variant="ghost"
                >
                  Active
                </Button>
                <Button
                  className="p-[20px] hover:underline font-medium text-[16px]"
                  variant="ghost"
                >
                  Pending Approval
                </Button>
                <Button
                  className="p-[20px] hover:underline font-medium text-[16px]"
                  variant="ghost"
                >
                  Draft
                </Button>
                <Button
                  className="p-[20px] hover:underline font-medium text-[16px]"
                  variant="ghost"
                >
                  Paused
                </Button>
              </div>
              <div className="pt-[13px] ml-[452px] border ">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      className="h-45 w-88 text-sm mr-[100px] ml-auto"
                    >
                      Add your service
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <CreateNewService />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="mt-[15px] mx-[20px] w-[1110px] h-[32px]  font-semibold text-[18px] flex flex-row">
              <div>Active Services </div>
              <div className="ml-[770px]">
                <Select>
                  <SelectTrigger className="w-[200px] h-[32px] bg-transparent">
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
            <div className="mt-[30px] mx-[20px] w-[1110px] h-[130px] border">
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

export default Services;
