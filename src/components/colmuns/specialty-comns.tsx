import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { SpecialtyActions } from "@/components/SpecialtyActions"; // ajuste o caminho se necessário
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Pencil, Trash2 } from "lucide-react";
import { Input } from "../ui/input";

export type Specialty = {
  id?: number;
  name: string;
};

export const specialtyColumns: ColumnDef<Specialty>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => <SpecialtyActions specialty={row.original}/>
  },
];
