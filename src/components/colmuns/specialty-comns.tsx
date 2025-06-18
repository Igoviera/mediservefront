import { ColumnDef } from "@tanstack/react-table"

export type Specialty = {
    id?: number
    name: string
}

export const specialtyColumns: ColumnDef<Specialty>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
]
