import { ColumnDef } from "@tanstack/react-table";
import { DoctorDetailsButton } from "../doctorDetailsButton";

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
  specialties: string[];
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
    accessorKey: "specialties",
    accessorFn: (row) => row.specialties?.join(", "),
    header: "Especialidade",
    enableColumnFilter: true,
    cell: ({ getValue }) => {
      const value = getValue<string>();
      return <span>{value}</span>;
    },
  },
  {
    accessorKey: "crm",
    header: "CRM",
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
    id: "action",
    header: "Ações",
    cell: ({ row }) => {
      const doctor = row.original;
      return <DoctorDetailsButton doctor={doctor} />;
    },
  },
];
