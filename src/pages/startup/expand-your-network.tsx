import { ExpandYourNetworkDataTable } from "@/components/expand-your-network/expand-your-network-data-table";
import { useEffect, useState } from "react";
import {
  columns,
  ExpandYourNetworkInfo,
} from "@/components/expand-your-network/expand-your-network-columns";

async function fetchData(): Promise<ExpandYourNetworkInfo[]> {
  return [
    {
      nameOrganiztion: "Polychain Capital",
      category: "VC",
      location: "Dubai, UAE",
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
    <div className="w-full px-4 sm:px-5 py-4 sm:py-5">
      <div className="flex flex-col space-y-4">
        {/* Add any additional content here */}
        <div className="overflow-x-auto">
          <ExpandYourNetworkDataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default ExpandYourNetwork;
