"use client";

import { useEffect, useState } from "react";
import { Loading } from "@/components/ui/loading";
import { DataTable } from "@/components/ui/data-table";
import {
  Appointment,
  appointmentColumns,
} from "@/components/colmuns/appointments-clmns";
import appointmentsService from "@/services/appointmentsService";
import { Calendar, CalendarCheck, ClipboardList } from "lucide-react";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "recharts";

export default function MedicosCadastrados() {
  const [appointments, setAppointment] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppoitment = async () => {
      try {
        const appointments = await appointmentsService.getAllAppointments();
        setAppointment(appointments);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar médicos:", error);
      }
    };
    fetchAppoitment();
  }, []);

  return (
    <main className="bg-[#FFFFFF] border border-[#C8C8C8] rounded-md mx-3 px-4 sm:px-0 sm:mx-10 my-10">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2 text-blue-500">
          <CalendarCheck className="h-6 w-6" />
          Consultas Agendadas
        </CardTitle>
        <CardDescription>
          Visualize os horários já reservados para este médico.
        </CardDescription>
      </CardHeader>
      <section>
        {loading ? (
          <Loading />
        ) : (
          <div className="m-5">
            <DataTable columns={appointmentColumns} data={appointments} />
          </div>
        )}
      </section>
    </main>
  );
}
