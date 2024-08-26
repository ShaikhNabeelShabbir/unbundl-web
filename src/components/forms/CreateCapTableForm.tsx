import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import investments from "@/data/investments.json";

const CreateCapTableForm = () => {
  return (
    <div>
      <div className="w-full h-fit">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Investor</TableHead>
              <TableHead>Invested</TableHead>
              <TableHead>Existing_Shares</TableHead>
              <TableHead className="text-right">Preferred_Shares</TableHead>
              <TableHead>Price_per_share</TableHead>
              <TableHead>Ownership</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {investments.map((investment) => (
              <TableRow key={investment.Investor}>
                <TableCell className="font-medium">
                  {investment.Investor}
                </TableCell>
                <TableCell>{investment.Invested}</TableCell>
                <TableCell>{investment.Existing_Shares}</TableCell>
                <TableCell className="text-right">
                  {investment.Preferred_Shares}
                </TableCell>
                <TableCell>{investment.Price_per_share}</TableCell>
                <TableCell>{investment.Ownership}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button className="w-full">Add investor</Button>
      </div>
      <br />
      <br />
      <div className="fixed bottom-0 left-0 right-0 z-50 py-5 flex justify-center gap-[550px]">
        <Button className="flex text-base bg-white text-black" variant="link">
          Cancel
        </Button>
        <Button className="flex text-base">Save</Button>
      </div>
    </div>
  );
};

export default CreateCapTableForm;
