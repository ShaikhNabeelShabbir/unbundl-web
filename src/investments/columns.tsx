import { addInvestmentTableSchema } from "@/schemas/investmentTableSchema";
import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Investment = z.infer<typeof addInvestmentTableSchema>;

export const columns: ColumnDef<Investment>[] = [
  {
    accessorKey: "companyName",
    header: "Company Name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "dateofInvestment",
    header: "Invested date",
  },
  {
    accessorKey: "amountInvested",
    header: "Amount Invested",
  },
  {
    accessorKey: "Round",
    header: "investmentRound",
  },
];
