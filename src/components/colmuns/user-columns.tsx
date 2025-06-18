import { ColumnDef } from "@tanstack/react-table"

export type User = {
    id: number
    username: string
    email: string
    role: string
}

export const usuarioColumns: ColumnDef<User>[] = [
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
    {
    accessorKey: "role",
    header: "Perfil",
  },
]
