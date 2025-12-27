import appointmentsService from "@/services/appointmentsService";
import { ColumnDef } from "@tanstack/react-table";
import { format, set, getDay, nextDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Check, Pencil, X } from "lucide-react";
import { useState } from "react";
import { CancelAppointmentModal } from "../CancelAppointmentModal";

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
          : status === "CANCELADA"
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
  {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const appointment = row.original;

      const [openModal, setOpenModal] = useState(false);
      const [loading, setLoading] = useState(false);

      const isAgendada = appointment.status === "AGENDADA";
      const isCancelada = appointment.status === "CANCELADA";

      const handleEdit = () => {
        console.log("Editar consulta:", appointment.id);
      };

      const handleCancelAppointment = async () => {
        try {
          setLoading(true);
          await appointmentsService.appointmentCancel(
            appointment.id.toString()
          );
          setOpenModal(false);
          // aqui você pode:
          // refetch()
          // ou invalidar cache
          console.log("Consulta cancelada com sucesso");
        } catch (error) {
          console.error("Erro ao cancelar consulta", error);
        } finally {
          setLoading(false);
        }
      };

      const handleCompleteAppointment = async () => {
        try {
          setLoading(true);
          await appointmentsService.finishAppointment(
            appointment.id.toString()
          );
          console.log("Consulta concluída com sucesso");
        } catch (error) {
          console.error("Erro ao concluir consulta", error);
        } finally {
          setLoading(false);
        }
      };

      return (
        <div className="flex gap-2">
          <button
            onClick={handleEdit}
            className="p-2 rounded-lg text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            title="Editar consulta"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={handleCompleteAppointment}
            disabled={!isAgendada || loading}
            className={`p-2 rounded-lg transition-colors ${
              isAgendada
                ? "text-gray-500 hover:bg-green-50 hover:text-green-600"
                : "opacity-20 cursor-not-allowed text-gray-300"
            }`}
            title="Marcar como concluída"
          >
            <Check size={18} />
          </button>

          <button
            onClick={() => setOpenModal(true)}
            disabled={!isAgendada || loading}
            className={`p-2 rounded-lg transition-all ${
              isAgendada
                ? "text-gray-400 hover:bg-red-50 hover:text-red-600"
                : "opacity-20 cursor-not-allowed text-gray-300"
            }`}
            title="Cancelar consulta"
          >
            <X size={18} strokeWidth={2.5} />
          </button>

          <CancelAppointmentModal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            onConfirm={handleCancelAppointment}
            loading={loading}
          />
        </div>
      );
    },
  },
];
