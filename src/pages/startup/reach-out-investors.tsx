import { ReachOutToInvestorDataTable } from "@/components/reach-out-to-investors/reach-out-to-investors-data-table";
import {
  columns,
  InvestorInfo,
} from "@/components/reach-out-to-investors/reach-out-to-investors-columns";
import { useEffect, useState } from "react";

async function fetchData(): Promise<InvestorInfo[]> {
  return [
    {
      investorName: "Polychain Capital",
      location: "Dubai,UAE",
      assetsManaged: 3,
      stagedFocus: "Seed",
      priceOfCall: "$10,000.00/15 min",
    },
    {
      investorName: "Sequoia Capital",
      location: "San Francisco, USA",
      assetsManaged: 5,
      stagedFocus: "Seed",
      priceOfCall: "$10,000.00/15 min",
    },
    {
      investorName: "Andreessen Horowitz",
      location: "Menlo Park, USA",
      assetsManaged: 4,
      stagedFocus: "Seed",
      priceOfCall: "$10,000.00/15 min",
    },
  ];
}

const ReachOutToInvestors = () => {
  const [data, setData] = useState<InvestorInfo[]>([]);

  useEffect(() => {
    // Fetch data on component mount
    const loadData = async () => {
      const investments = await fetchData();
      setData(investments);
    };

    loadData();
  }, []);
  return (
    <div className="w-full h-fit px-5">
      <ReachOutToInvestorDataTable columns={columns} data={data} />
    </div>
  );
};

export default ReachOutToInvestors;
