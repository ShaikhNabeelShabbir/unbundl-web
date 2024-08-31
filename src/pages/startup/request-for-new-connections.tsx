import { useEffect, useState } from "react";
import { RequestNewConnectionDataTable } from "@/components/request-for-new-connections/request-for-new-connections-data-table";
import {
  columns,
  RequestNewConnectionInfo,
} from "@/components/request-for-new-connections/request-for-new-connections-columns";

async function fetchData(): Promise<RequestNewConnectionInfo[]> {
  return [
    {
      nameOrganiztion: "Polychain Capital",
      category: "VC",
      location: "Dubai, UAE",
      mutualConnections: 3,
    },
    {
      nameOrganiztion: "Sequoia Capital",
      category: "VC",
      location: "San Francisco, USA",
      mutualConnections: 5,
    },
    {
      nameOrganiztion: "Andreessen Horowitz",
      category: "VC",
      location: "Menlo Park, USA",
      mutualConnections: 4,
    },
  ];
}

const RequestForNewConnections = () => {
  const [data, setData] = useState<RequestNewConnectionInfo[]>([]);

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
      <div className="overflow-x-auto">
        <RequestNewConnectionDataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default RequestForNewConnections;
