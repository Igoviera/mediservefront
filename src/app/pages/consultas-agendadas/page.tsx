"use client";

import { useEffect, useState } from "react";
import { Loading } from "@/components/ui/loading";
import { DataTable } from "@/components/ui/data-table";
import { Appointment, appointmentColumns } from "@/components/colmuns/appointments-clmns";
import appointmentsService from "@/services/appointmentsService";
import { ClipboardList } from "lucide-react";


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
    <main className="bg-[#FFFFFF] border border-[#C8C8C8] rounded-md mx-3 px-4 sm:px-0 sm:mx-10 my-10 w-screen">
      <section className="flex flex-col">
        <div className="w-full flex flex-row justify-center my-[4rem]">
          <p className="text-center text-[25px] font-[700] text-blue-900">Consultas Agendadas</p>
          <ClipboardList size={30} className="text-blue-900"/>  
        </div>
      </section>
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
