import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import AddATeamMember from "./AddATeamMember";

import { useEffect, useState } from "react";
import { TeamsDataTable } from "@/teams/teams-data-table";
import { columns, Teams } from "@/teams/teams-columns";
async function fetchData(): Promise<Teams[]> {
  return [
    { name: "John Doe", position: "CEO", types: "Full-time", rights: "Admin" },
    {
      name: "Nabeel ",
      position: "Developer",
      types: "Full-time",
      rights: "Developer",
    },

    {
      name: "Jane Smith",
      position: "CTO",
      types: "Full-time",
      rights: "Managing partner",
    },
  ];
}

export const TeamsForm = () => {
  const [data, setData] = useState<Teams[]>([]);

  useEffect(() => {
    // Fetch data on component mount
    const loadData = async () => {
      const investments = await fetchData();
      setData(investments);
    };

    loadData();
  }, []);
  return (
    <div className="main-div flex flex-col px-20 flex-wrap w-full items-center ">
      <div className="py-16">
        {" "}
        <TeamsDataTable columns={columns} data={data} />
        <br />
        <Dialog>
          <DialogTrigger asChild>
            <Button type="button" className="h-45 w-full text-sm px-4">
              Add a team member
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="font-semibold text-xl">
                Add a team member
              </DialogTitle>
            </DialogHeader>
            <AddATeamMember />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default TeamsForm;
