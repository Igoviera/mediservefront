"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "./AppointmentDialog";
import { Doctor } from "@/types";

interface AgendarConsultaButtonProps {
  doctor: Doctor;
}

export function AgendarConsultaButton({ doctor }: AgendarConsultaButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleScheduleAppointment = (appointment: any) => {
    console.log("Agendamento enviado para API:", appointment);
    // Aqui você pode chamar a API real
    // await api.post("/appointments", appointment)
  };

  return (
    <>
      <Button
        className="text-blue-500 bg-transparent border border-blue-500 hover:bg-transparent"
        onClick={() => setIsOpen(true)}
      >
        Agendar Consulta
      </Button>
      <AppointmentDialog
        open={isOpen}
        onOpenChange={setIsOpen}
        doctor={doctor}
        onScheduleAppointment={handleScheduleAppointment}
      />
    </>
  );
}
