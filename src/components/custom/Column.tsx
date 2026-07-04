"use client";

import type { ColumnDef } from "@tanstack/react-table";

export type Commits = {
  id: string;
  name: string;
};

export const columns: ColumnDef<Commits>[] = [
  {
    accessorKey: "c",
  },
];
