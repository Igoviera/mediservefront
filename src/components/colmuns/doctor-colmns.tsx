import { ColumnDef } from "@tanstack/react-table";

export type Doctor = {
  id: number;
  name: string;
  imgUrl: string;
  crm: string;
  cpf: string;
  phone: string;
  description: string;
  queryValue: number;
  address: {
    cep: string;
    logradouro: string;
    locationNumber: string;
    neighborhood: string;
    city: string;
    uf: string;
  };
  specialties: number[];
  status: string;
  clinicId: number;
  user: {
    id: number;
    username: string;
    email: string;
    role: string;
  };
};

export const medicoColumns: ColumnDef<Doctor>[] = [
  {
    accessorKey: "name",
    header: "Nome",
    enableColumnFilter: true,
  },
  {
    accessorKey: "crm",
    header: "CRM",
    enableColumnFilter: true,
  },
  {
    accessorKey: "cpf",
    header: "CPF",
    enableColumnFilter: true,
  },
  {
    accessorKey: "phone",
    header: "Telefone",
    enableColumnFilter: true,
  },
  {
    accessorKey: "queryValue",
    header: "Valor da Consulta",
    cell: ({ row }) => `R$ ${row.getValue("queryValue")}`,
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
    accessorKey: "user.email",
    header: "Email",
    cell: ({ row }) => row.original.user.email,
  },
  {
    accessorKey: "address.city",
    header: "Cidade",
    cell: ({ row }) => row.original.address.city,
  },
];
