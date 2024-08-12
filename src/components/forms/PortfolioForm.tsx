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
    company: "Company A",
    status: "Active",
    investDate: "2023-01-15",
    investedAmount: "$500,000",
    round: "Series A",
  },
  {
    company: "Company B",
    status: "Exited",
    investDate: "2022-05-10",
    investedAmount: "$300,000",
    round: "Seed",
  },
];

const PortfolioForm = () => {
  return (
    <div className="px-[100px] py-[40px]">
      <div className="px-[165px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Company/Fund</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Invest Date</TableHead>
              <TableHead className="text-right">Invested</TableHead>
              <TableHead>Round</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {investments.map((investment) => (
              <TableRow key={investment.company}>
                <TableCell className="font-medium">
                  {investment.company}
                </TableCell>
                <TableCell>{investment.status}</TableCell>
                <TableCell>{investment.investDate}</TableCell>
                <TableCell className="text-right">
                  {investment.investedAmount}
                </TableCell>
                <TableCell>{investment.round}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Dialog>
          <DialogTrigger asChild>
            <Button type="button" className="h-45 w-88 text-sm px-[15px]">
              Add Investment{" "}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="font-semibold text-xl">
                Add Investment Form{" "}
              </DialogTitle>
            </DialogHeader>
            <AddInvestmentForm />
          </DialogContent>
        </Dialog>{" "}
      </div>
    </div>
  );
};

export default PortfolioForm;
