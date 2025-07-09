import { ColumnDef } from "@tanstack/react-table";
import { SpecialtyActions } from "@/components/SpecialtyActions";

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
    cell: ({ row }) => <SpecialtyActions specialty={row.original} />,
  },
];
