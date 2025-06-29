import { ColumnDef } from "@tanstack/react-table";
import { PersonDetailsButton } from "../personDetailsButton";
import { EditPatientDialog } from "../EditPatientDialog";

export type Patient = {
  id: number;
  name: string;
  cpf: string;
  phone: string;
  address: {
    cep: string;
    logradouro: string;
    locationNumber: string;
    neighborhood: string;
    city: string;
    uf: string;
  };
  status: string;
  clinicId: number;
  user: {
    id: number;
    username: string;
    email: string;
    role: string;
  };
};

export const pacienteColumns: ColumnDef<Patient>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "cpf",
    header: "CPF",
  },
  {
    accessorKey: "phone",
    header: "Telefone",
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
  {
    id: "action",
    header: "Ações",
    cell: ({ row }) => {
      const patient = row.original;
      return (
        <div className="flex gap-8">
          <PersonDetailsButton person={patient} type="patient" />
          <EditPatientDialog patient={patient} />
        </div>
      );
    },
  },
];
