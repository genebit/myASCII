"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ascii } from "@/lib/ascii";
import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowDownWideNarrow,
  ArrowUp,
  ArrowUpDown,
  ArrowUpNarrowWide,
  ArrowUpWideNarrow,
  MoreHorizontal,
} from "lucide-react";
import { useState } from "react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
const HeaderSort = ({ column, header }: any) => {
  const isSorted = column.getIsSorted(); // 'asc' | 'desc' | false

  return (
    <Button variant="ghost" onClick={() => column.toggleSorting()}>
      {header}
      {isSorted === "asc" && <ArrowUpNarrowWide className="ml-2 h-4 w-4" />}
      {isSorted === "desc" && <ArrowDownWideNarrow className="ml-2 h-4 w-4" />}
      {!isSorted && <ArrowUpNarrowWide className="ml-2 h-4 w-4 opacity-50" />}
    </Button>
  );
};

const CellPill = ({ value }: any) => {
  return (
    <div className="bg-neutral-200 dark:bg-neutral-900 w-full text-center rounded-sm font-[family-name:var(--font-geist-sans)]">
      <b>{value}</b>
    </div>
  );
};

export const columns: ColumnDef<Ascii>[] = [
  {
    id: "symbol",
    accessorKey: "symbol",
    header: ({ column }) => <HeaderSort column={column} header="Symbol" />,
    cell: ({ row }) => <CellPill value={row.getValue("symbol")} />,
  },
  {
    id: "dec",
    accessorKey: "dec",
    header: ({ column }) => <HeaderSort column={column} header="DEC" />,
  },
  {
    id: "oct",
    accessorKey: "oct",
    header: ({ column }) => <HeaderSort column={column} header="OCT" />,
  },
  {
    id: "hex",
    accessorKey: "hex",
    header: ({ column }) => <HeaderSort column={column} header="HEX" />,
  },
  {
    id: "bin",
    accessorKey: "bin",
    header: ({ column }) => <HeaderSort column={column} header="Binary" />,
  },
  {
    id: "html_num",
    accessorKey: "html_num",
    header: ({ column }) => <HeaderSort column={column} header="HTML Code" />,
  },
  {
    id: "html_name",
    accessorKey: "html_name",
    header: ({ column }) => <HeaderSort column={column} header="HTML Char." />,
  },
  {
    id: "description",
    accessorKey: "description",
    header: ({ column }) => <HeaderSort column={column} header="Description" />,
  },
];
