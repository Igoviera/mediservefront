import { ColumnDef } from "@tanstack/react-table";
import { format, set, getDay, nextDay } from "date-fns";
import { ptBR } from "date-fns/locale";

export type Appointment = {
  id: number;
  patientName: string;
  doctorName: string;
  date: string;
  status: string;
};

// Mapeia os nomes dos dias da semana para os índices de date-fns
const dayMap: { [key: string]: number } = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
};

export const appointmentColumns: ColumnDef<Appointment>[] = [
  // {
  //   accessorKey: "id",
  //   header: "Id",
  //   enableColumnFilter: true,
  // },
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
    accessorKey: "dayOfWeek",
    header: "Data",
    enableColumnFilter: true,
    cell: ({ row }) => {
      const value = row.original.date;

      if (!value) return "Data inválida";

      const parsedDate = new Date(value);

      return format(parsedDate, "EEEE, dd 'de' MMMM 'às' HH:mm", {
        locale: ptBR,
      });
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
        : status === "CANCELA" 
        ? "bg-red-300 text-red-800"
        : "bg-blue-300 text-blue-800";
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
