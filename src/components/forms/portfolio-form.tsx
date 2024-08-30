import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import AddInvestmentForm from "./add-investment-form";
import {
  Investment,
  columns,
} from "@/components/investments/investment-columns"; // Ensure correct relative path
import { InvestmentDataTable } from "@/components/investments/investment-data-table"; // Ensure correct relative path

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
    {
      companyName: "Company Nab",
      status: "Invested",
      dateofInvestment: "2024-05-10",
      amountInvested: "300000",
      investmentRound: "Seed",
    },
    {
      companyName: "Company JU",
      status: "Invested",
      dateofInvestment: "2023-05-10",
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
    <div>
      <div className="main-div flex flex-col px-4 md:px-20 w-full items-center">
        <div className="flex flex-col md:flex-row py-10 md:px-5 flex-grow">
          <div className="justify-center w-full md:w-[560px] py-2">
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
      <br />
    </div>
  );
};

export default PortfolioForm;
