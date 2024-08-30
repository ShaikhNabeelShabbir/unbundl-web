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
      location: "Dubai,UAE",
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
    <div className="w-full h-fit px-5">
      <div className="flex flex-row space-x-3 mb-4"></div>
      <RequestNewConnectionDataTable columns={columns} data={data} />
    </div>
  );
};

export default RequestForNewConnections;
