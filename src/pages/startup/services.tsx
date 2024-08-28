import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CreateNewService from "@/components/create-new-service";
import { columns, ServicesProviders } from "@/services/services-column";
import { ServicesDataTable } from "@/services/services-data-table";

async function fetchData(): Promise<ServicesProviders[]> {
  return [
    {
      name: "Company Nabeel",
      impression: 0,
      clicks: 0,
      calls: 0,
    },
  ];
}
const Services: React.FC = () => {
  const [data, setData] = useState<ServicesProviders[]>([]);

  useEffect(() => {
    // Fetch data on component mount
    const loadData = async () => {
      const investments = await fetchData();
      setData(investments);
    };

    loadData();
  }, []);
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
                  Pending Approval
                </Button>
                <Button
                  className="p-5 hover:underline font-medium text-md"
                  variant="ghost"
                >
                  Draft
                </Button>
                <Button
                  className="p-5 hover:underline font-medium text-md"
                  variant="ghost"
                >
                  Paused
                </Button>
              </div>
              <div className="pt-3 ml-auto border ">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      className="h-11 w-22 text-sm mr-25 ml-auto"
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
            <div className="mt-4 ml-5 w-full h-8 font-semibold text-lg flex flex-row">
              <div>Active Services </div>
              <div className="ml-auto mr-5">
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
            <div className="mt-8  w-full h-fit border">
              <ServicesDataTable columns={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
