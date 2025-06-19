import { ColumnDef } from "@tanstack/react-table";

export type User = {
  id: number;
  username: string;
  email: string;
  status: string;
  role: string;
};

export const usuarioColumns: ColumnDef<User>[] = [
  {
    accessorKey: "username",
    header: "Username",
    enableColumnFilter: true,
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;

      const statusStyle =
        status === "ATIVO"
          ? "bg-green-300 text-green-800"
          : "bg-red-300 text-red-800";

      return (
        <span
          className={`px-4 py-1 text-xs font-medium rounded-full ${statusStyle}`}
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Perfil",
  },
];
