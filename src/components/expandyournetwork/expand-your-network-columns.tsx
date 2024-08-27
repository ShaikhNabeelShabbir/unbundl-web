import { ColumnDef } from "@tanstack/react-table";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import RequestIntroduction from "@/pages/startup/request-introduction";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ExpandYourNetworkInfo = {
  nameOrganiztion: string;
  category: string;
  location: string;
  mutualConnections: number;
  levelOfConnection: number;
};

export const columns: ColumnDef<ExpandYourNetworkInfo>[] = [
  {
    accessorKey: "nameOrganiztion",
    header: "Organization Name",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "mutualConnections",
    header: "Mutable Connections",
  },
  {
    accessorKey: "levelOfConnection",
    header: "Level of Connection",
  },
  {
    // This column is for the actions dropdown menu
    id: "actions",
    cell: () => (
      <Dialog>
        <DialogTrigger asChild>
          <u className="cursor-pointer">Request Introduction</u>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <RequestIntroduction />
        </DialogContent>
      </Dialog>
    ),
  },
];
