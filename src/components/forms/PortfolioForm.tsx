import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import AddInvestmentForm from "./AddInvestmentForm";
import { useState } from "react";

const PortfolioForm = () => {
  const [investments, setInvestments] = useState<
    Array<{
      company: string;
      status: string;
      investDate: string;
      investedAmount: string;
      round: string;
    }>
  >([
    {
      company: "Company A",
      status: "Invested",
      investDate: "2023-01-15",
      investedAmount: "500000",
      round: "Series A",
    },
    {
      company: "Company B",
      status: "Invested",
      investDate: "2022-05-10",
      investedAmount: "300000",
      round: "Seed",
    },
  ]);

  const handleAddInvestment = (newInvestment: {
    company: string;
    status: string;
    investDate: string;
    investedAmount: string;
    round: string;
  }) => {
    // Update investments state with the new investment
    setInvestments((prevInvestments) => [...prevInvestments, newInvestment]);
  };

  return (
    <div className="main-div flex flex-col px-20 flex-wrap w-full items-center">
      <div className="py-[40px]">
        <div className="px-[165px]">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="grid grid-cols-6 gap-4">
                <TableHead>Company/Fund</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Invest Date</TableHead>
                <TableHead className="text-right">Invested</TableHead>
                <TableHead>Round</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {investments.map((investment) => (
                <TableRow
                  key={investment.company}
                  className="grid grid-cols-6 gap-4"
                >
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
              <Button type="button" className="w-full mt-4">
                Add Investment
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle className="font-semibold text-xl">
                  Add Investment Form
                </DialogTitle>
              </DialogHeader>
              <AddInvestmentForm onAddInvestment={handleAddInvestment} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default PortfolioForm;
