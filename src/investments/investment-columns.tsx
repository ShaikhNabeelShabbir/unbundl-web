import { addInvestmentTableSchema } from "@/schemas/investmentTableSchema";
import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

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
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "amountInvested",
    header: "Amount Invested",
  },
  {
    accessorKey: "investmentRound",
    header: "Investment Round",
  },
  {
    // This column is for the actions dropdown menu
    id: "actions",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() =>
              navigator.clipboard.writeText(row.original.companyName)
            }
          >
            Copy company name
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>View details</DropdownMenuItem>
          <DropdownMenuItem>Delete investment</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
