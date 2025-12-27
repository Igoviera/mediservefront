import { ColumnDef } from "@tanstack/react-table";
import { PersonDetailsButton } from "../personDetailsButton";
import { Dialog } from "@radix-ui/react-dialog";
import { AppointmentDialog, AppointmentRequest } from "../AppointmentDialog";
import { useState } from "react";
import { Button } from "../ui/button";
import { AgendarConsultaButton } from "../AgendarConsultaButton";

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
    cell: ({ row }) => {
      const name = row.original.name;
      // Adiciona 'Dr' na frente do nome
      return `Dr. ${name}`;
    },
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
      return (
        <div className="flex items-center gap-2">
          <PersonDetailsButton person={doctor} type="doctor" />
          <AgendarConsultaButton doctor={doctor} />
        </div>
      );
    },
  },
];
