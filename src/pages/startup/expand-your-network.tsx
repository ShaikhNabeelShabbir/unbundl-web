import { ExpandYourNetworkDataTable } from "@/components/expandyournetwork/expand-your-network-data-table";
import { useEffect, useState } from "react";
import {
  columns,
  ExpandYourNetworkInfo,
} from "@/components/expandyournetwork/expand-your-network-columns";

async function fetchData(): Promise<ExpandYourNetworkInfo[]> {
  return [
    {
      nameOrganiztion: "Polychain Capital",
      category: "VC",
      location: "Dubai,UAE",
      mutualConnections: 3,
      levelOfConnection: 3,
    },
    {
      nameOrganiztion: "Sequoia Capital",
      category: "VC",
      location: "San Francisco, USA",
      mutualConnections: 5,
      levelOfConnection: 2,
    },
    {
      nameOrganiztion: "Andreessen Horowitz",
      category: "VC",
      location: "Menlo Park, USA",
      mutualConnections: 4,
      levelOfConnection: 1,
    },
  ];
}

const ExpandYourNetwork = () => {
  const [data, setData] = useState<ExpandYourNetworkInfo[]>([]);

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
      <div className="flex flex-row space-x-3 mb-4"></div>
      <ExpandYourNetworkDataTable columns={columns} data={data} />
    </div>
  );
};

export default ExpandYourNetwork;
