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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import AddATeamMember from "./AddATeamMember";
import { MoreHorizontal } from "lucide-react";

// Import the team members data from the JSON file
import { useState } from "react";

export const TeamsForm = () => {
  const [teamMembers, setTeamMembers] = useState<
    Array<{ name: string; position: string; type: string; rights: string }>
  >([
    { name: "John Doe", position: "CEO", type: "Full-time", rights: "Admin" },
    {
      name: "Jane Smith",
      position: "CTO",
      type: "Full-time",
      rights: "Managing partner",
    },
  ]);
  const handleAddMember = (newMember: {
    name: string;
    position: string;
    type: string;
    rights: string;
  }) => {
    // Update teamMembers state with the new member
    setTeamMembers((prevMembers) => [...prevMembers, newMember]);
  };
  return (
    <div className="main-div flex flex-col px-20 flex-wrap w-full items-center ">
      <div className="py-16">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="grid grid-cols-6 gap-4">
              <TableHead>Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Rights</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teamMembers.map((member) => (
              <TableRow key={member.name} className="grid grid-cols-6 gap-4">
                <TableCell className="font-medium">{member.name}</TableCell>
                <TableCell>{member.position}</TableCell>
                <TableCell>{member.type}</TableCell>
                <TableCell className="text-right">{member.rights}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" className="h-8 w-8 p-0"></Button>
                </TableCell>
                <TableCell className="text-right">
                  <MoreHorizontal className="h-4 w-4" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

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
            <AddATeamMember data={teamMembers} onAddMember={handleAddMember} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default TeamsForm;
