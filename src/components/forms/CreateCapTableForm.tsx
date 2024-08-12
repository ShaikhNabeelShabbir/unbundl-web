import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { MoreHorizontal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import AddInvestmentForm from "./AddInvestmentForm";

const investments = [
  {
    Investor: "CFounders + ESOP",
    Invested: "n/a",
    Existing_Shares: "1,000,000",
    Preferred_Shares: "n/a",
    Price_per_share: "n/a",
    Ownership: "80.00%",
  },
];

const CreateCapTableForm = () => {
  return (
    <div>
      <div className="w-[780px] h-[429px] border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Investor</TableHead>
              <TableHead>Invested</TableHead>
              <TableHead>Existing_Shares</TableHead>
              <TableHead className="text-right">Preferred_Shares</TableHead>
              <TableHead>Price_per_share</TableHead>
              <TableHead>Ownership</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {investments.map((investment) => (
              <TableRow key={investment.Investor}>
                <TableCell className="font-medium">
                  {investment.Investor}
                </TableCell>
                <TableCell>{investment.Invested}</TableCell>
                <TableCell>{investment.Existing_Shares}</TableCell>
                <TableCell className="text-right">
                  {investment.Preferred_Shares}
                </TableCell>
                <TableCell>{investment.Price_per_share}</TableCell>
                <TableCell>{investment.Ownership}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 py-5 flex justify-center gap-[233px]">
        <Button className="flex text-base bg-white text-black">Cancel</Button>
        <Button className="flex text-base">Next Step</Button>
      </div>
    </div>
  );
};

export default CreateCapTableForm;
