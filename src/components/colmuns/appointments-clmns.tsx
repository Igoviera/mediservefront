import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export type Appointment = {
  id: number;
  patientName: string;
  doctorName: string;
  data: string;
  status: string;
};

export const appointmentColumns: ColumnDef<Appointment>[] = [
  {
    accessorKey: "id",
    header: "Id",
    enableColumnFilter: true,
  },
  {
    accessorKey: "patientName",
    header: "Paciente",
    enableColumnFilter: true,
  },
  {
    accessorKey: "doctorName",
    header: "Médico",
    enableColumnFilter: true,
  },
  {
    accessorKey: "data",
    header: "Data",
    enableColumnFilter: true,
    cell: ({ row }) => {
    const dateStr = row.getValue("data") as string;
    const date = new Date(dateStr);

    const formatted = format(date, "dd/MM/yyyy 'às' HH:mm", { locale: ptBR });

    return <span>{formatted}</span>;
  },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;

      const statusStyle =
        status === "AGENDADA"
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
];
