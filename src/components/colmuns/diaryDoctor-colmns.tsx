import { ColumnDef } from "@tanstack/react-table";
import { Clock9 } from "lucide-react";

export type Diary = {
  id?: number;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  durationMinutes: number;
  doctorId: number;
};

export const diaryDoctorColumns: ColumnDef<Diary>[] = [
  {
    accessorKey: "dayOfWeek",
    header: "Dia da Semana",
  },
  {
    accessorKey: "startTime",
    header: "Horário Início",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Clock9 size={15} />
        <span>{row.getValue("startTime")}</span>
      </div>
    ),
  },
  {
    accessorKey: "endTime",
    header: "Horário Fim",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Clock9 size={15} />
        <span>{row.getValue("endTime")}</span>
      </div>
    ),
  },
  {
    accessorKey: "durationMinutes",
    header: "Duração (min)",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Clock9 size={15} />
        <span>{row.getValue("durationMinutes")}</span>
      </div>
    ),
  },
];
