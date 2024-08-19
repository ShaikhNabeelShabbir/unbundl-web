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
const teamMembers = [
  {
    name: "John Doe",
    position: "CEO",
    type: "Full-time",
    rights: "Admin",
  },
  {
    name: "Jane Smith",
    position: "CTO",
    type: "Full-time",
    rights: "Managing partner",
  },
];
export const TeamsForm = () => {
  return (
    <div className="py-[40px] ">
      <div className="mx-[360px]">
        <Table className="w-[720px]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[1063px]">Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Rights</TableHead>
              <TableHead></TableHead> {/* Empty header for the dropdown */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {teamMembers.map((member) => (
              <TableRow key={member.name}>
                <TableCell className="font-medium">{member.name}</TableCell>
                <TableCell>{member.position}</TableCell>
                <TableCell>{member.type}</TableCell>
                <TableCell className="text-right">{member.rights}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" className="h-8 w-8 p-0"></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <br />
        <Dialog>
          <DialogTrigger asChild>
            <Button type="button" className="h-45 w-[720px] text-sm px-[15px]">
              Add a team member{" "}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="font-semibold text-xl">
                Add a team member{" "}
              </DialogTitle>
            </DialogHeader>
            <AddATeamMember />
          </DialogContent>
        </Dialog>{" "}
      </div>
    </div>
  );
};

export default TeamsForm;
