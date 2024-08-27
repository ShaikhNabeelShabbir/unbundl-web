import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import AddInvestmentForm from "./AddInvestmentForm";
import { Investment, columns } from "@/investments/columns"; // Ensure correct relative path
import { InvestmentDataTable } from "@/investments/investment-data-table"; // Ensure correct relative path

// Function to fetch the data
async function fetchData(): Promise<Investment[]> {
  return [
    {
      companyName: "Company A",
      status: "Invested",
      dateofInvestment: "2023-01-15",
      amountInvested: "500000",
      investmentRound: "Series A",
    },
    {
      companyName: "Company B",
      status: "Invested",
      dateofInvestment: "2022-05-10",
      amountInvested: "300000",
      investmentRound: "Seed",
    },
  ];
}

const PortfolioForm = () => {
  const [data, setData] = useState<Investment[]>([]);

  useEffect(() => {
    // Fetch data on component mount
    const loadData = async () => {
      const investments = await fetchData();
      setData(investments);
    };

    loadData();
  }, []);

  return (
    <div className="main-div flex flex-col px-20 flex-wrap w-full items-center">
      <div className="py-[40px]">
        <div className="px-[165px]">
          <InvestmentDataTable columns={columns} data={data} />

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
              <AddInvestmentForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default PortfolioForm;
