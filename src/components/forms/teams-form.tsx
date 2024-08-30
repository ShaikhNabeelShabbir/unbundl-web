import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import AddATeamMember from "./add-a-team-member";

import { useEffect, useState } from "react";
import { TeamsDataTable } from "@/components/teams/teams-data-table";
import { Teams, teamscolumns } from "../teams/teams-columns";
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
      const teams = await fetchData();
      setData(teams);
    };

    loadData();
  }, []);
  return (
    <div>
      <div className="main-div flex flex-col px-4 md:px-20 w-full items-center">
        <div className="flex flex-col md:flex-row py-10 md:px-5 flex-grow">
          <div className="justify-center w-full md:w-[560px] py-2">
            {" "}
            <TeamsDataTable columns={teamscolumns} data={data} />
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
          <br />
        </div>
      </div>{" "}
    </div>
  );
};

export default TeamsForm;
