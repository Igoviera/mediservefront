import { ColumnDef } from "@tanstack/react-table";
import { format, set, nextMonday, nextTuesday, nextWednesday, nextThursday, nextFriday, nextSaturday, nextSunday } from "date-fns";
import { ptBR } from "date-fns/locale";

export type Appointment = {
  id: number;
  patientName: string;
  doctorName: string;
  dayOfWeek: string;
  time: string;
  status: string;
};

function getNextDateFromDayOfWeek(dayOfWeek: string): Date {
  const today = new Date();

  switch (dayOfWeek.toUpperCase()) {
    case "MONDAY":
      return nextMonday(today);
    case "TUESDAY":
      return nextTuesday(today);
    case "WEDNESDAY":
      return nextWednesday(today);
    case "THURSDAY":
      return nextThursday(today);
    case "FRIDAY":
      return nextFriday(today);
    case "SATURDAY":
      return nextSaturday(today);
    case "SUNDAY":
      return nextSunday(today);
    default:
      return today; // fallback caso o valor esteja errado
  }
}

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
    accessorKey: "dayOfWeek",
    header: "Data",
    enableColumnFilter: true,
    cell: ({ row }) => {
      const dayOfWeek = row.getValue("dayOfWeek") as string;
      const time = row.getValue("time") as string;

      const baseDate = getNextDateFromDayOfWeek(dayOfWeek);

      const [hours = 0, minutes = 0, seconds = 0] = time?.split(":")?.map(Number) || [];

      const finalDate = set(baseDate, {
        hours,
        minutes,
        seconds,
      });

      const formatted = format(finalDate, "dd/MM/yyyy 'às' HH:mm", {
        locale: ptBR,
      });

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
        <span className={`px-4 py-1 text-xs font-medium rounded-full ${statusStyle}`}>
          {status}
        </span>
      );
    },
  },
];
