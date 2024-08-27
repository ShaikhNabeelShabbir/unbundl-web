import { ColumnDef } from "@tanstack/react-table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type InvestorInfo = {
  investorName: string;
  location: string;
  assetsManaged: number;
  stagedFocus: string;
  priceOfCall: string;
};

export const columns: ColumnDef<InvestorInfo>[] = [
  {
    accessorKey: "investorName",
    header: "Investor Name",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "assetsManaged",
    header: "Asset Managed",
  },
  {
    accessorKey: "stagedFocus",
    header: "Staged Focus",
  },
  {
    accessorKey: "priceOfCall",
    header: "Price Of Call",
  },
  {
    // This column is for the actions dropdown menu
    id: "actions",
    cell: () => (
      <Dialog>
        <DialogTrigger asChild>
          <u className="cursor-pointer text-base">Book A call</u>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>a16z crypto venture fund</DialogTitle>
            <p>Investor overview</p>
            <p>
              a16z crypto is a $300M venture fund that will invest in crypto
              companies and protocols. Their fund is designed to include the
              best features of traditional venture capital, updated to the
              modern crypto world.
            </p>
            <br />
            <div className="flex flex-row space-x-3">
              <Card className="w-[105px] h-[39px] border-none rounded-none">
                <CardTitle>Type</CardTitle>
                <CardDescription>Venture Capital </CardDescription>
              </Card>
              <Card className="w-[105px] h-[39px] border-none rounded-none">
                <CardTitle>Type</CardTitle>
                <CardDescription>Venture Capital </CardDescription>
              </Card>
              <Card className="w-[105px] h-[39px] border-none rounded-none">
                <CardTitle>Type</CardTitle>
                <CardDescription>Venture Capital </CardDescription>
              </Card>
              <Card className="w-[105px] h-[39px] border-none rounded-none">
                <CardTitle>Type</CardTitle>
                <CardDescription>Venture Capital </CardDescription>
              </Card>
            </div>
          </DialogHeader>
          <div className="flex flex-row space-x-[300px]">
            <Button variant="ghost">Cancel</Button>
            <Dialog>
              <DialogTrigger>
                <Button>Book a call for $10,000</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>a16z crypto venture fund</DialogHeader>{" "}
                <DialogContent className="w-[600px] h-[366px] ">
                  <DialogHeader>
                    <DialogTitle className="font-semibold text-xl">
                      Talent profile{" "}
                    </DialogTitle>
                  </DialogHeader>
                  <p className="font-bold text-[24px] text-center">
                    Call Booked{" "}
                  </p>
                  <p className="text-center text-md font-medium text-black/50">
                    At 5 PM on February 2nd
                  </p>
                  <p className="text-center text-md font-medium">
                    <u>Close </u>
                  </p>
                </DialogContent>{" "}
              </DialogContent>
            </Dialog>{" "}
          </div>
        </DialogContent>
      </Dialog>
    ),
  },
];
