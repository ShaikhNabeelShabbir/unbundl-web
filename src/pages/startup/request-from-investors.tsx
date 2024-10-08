import { RequestFromInvestorDataTable } from "@/components/request-from-investors/request-from-investors-data-table";
import {
  columns,
  RequestInvestorInfo,
} from "@/components/request-from-investors/request-from-investors-column";
import { useEffect, useState } from "react";

async function fetchData(): Promise<RequestInvestorInfo[]> {
  return [
    {
      investorName: "Polychain Capital",
      location: "Dubai, UAE",
      assetsManaged: 3,
      stagedFocus: "Seed",
      timeOfCall: "Fri, Dec 13, 6 PM",
    },
    {
      investorName: "Sequoia Capital",
      location: "San Francisco, USA",
      assetsManaged: 5,
      stagedFocus: "Seed",
      timeOfCall: "Fri, Dec 13, 6 PM",
    },
    {
      investorName: "Andreessen Horowitz",
      location: "Menlo Park, USA",
      assetsManaged: 4,
      stagedFocus: "Seed",
      timeOfCall: "Fri, Dec 13, 6 PM",
    },
  ];
}

const RequsetFromInvestors = () => {
  const [data, setData] = useState<RequestInvestorInfo[]>([]);

  useEffect(() => {
    // Fetch data on component mount
    const loadData = async () => {
      const investments = await fetchData();
      setData(investments);
    };

    loadData();
  }, []);

  return (
    <div className="w-full h-fit px-4 py-4">
      <div className="overflow-x-auto">
        <RequestFromInvestorDataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default RequsetFromInvestors;
