"use client";

import { useEffect, useState } from "react";
import { Calendar, CalendarDays, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import pacienteService from "@/services/pacienteService";
import doctorService from "@/services/doctorService";
import appointmentsService from "@/services/appointmentsService";
import AlertMessage from "./AlertMessage";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
}

interface AvailabilityResponse {
  doctorId: number;
  date: string;
  durationMinutes: number;
  availableSlots: string[];
}

interface AppointmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  doctor: Doctor;
}

export function AppointmentDialog({
  open,
  onOpenChange,
  doctor,
}: AppointmentDialogProps) {
  const [patients, setPatients] = useState<{ id: number; name: string }[]>([]);
  const [selectedPatientId, setSelectedPatientId] = useState<number | null>(
    null
  );

  const [selectedDate, setSelectedDate] = useState<string>("");
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // 🔹 Buscar pacientes
  useEffect(() => {
    pacienteService
      .getAllPatients()
      .then((res) => setPatients(res))
      .catch((err) => console.error("Erro ao buscar pacientes", err));
  }, []);

  // 🔹 Buscar disponibilidade do médico por data
  useEffect(() => {
    if (!doctor?.id || !selectedDate) return;

    doctorService
      .getAvailability(doctor.id, selectedDate)
      .then((res) => {
        const data: AvailabilityResponse = res.data;
        setAvailableSlots(data.availableSlots);
        setSelectedTime("");
      })
      .catch((error) => {
        console.error("Erro ao carregar disponibilidade", error);
        setAvailableSlots([]);
      });
  }, [doctor?.id, selectedDate]);

  // 🔹 Criar agendamento
  const handleSchedule = async () => {
    if (!selectedDate || !selectedTime || !selectedPatientId) return;

    try {
      await appointmentsService.creatAppointments({
        clinicId: 1,
        doctorId: doctor.id,
        patientId: selectedPatientId,
        date: `${selectedDate}T${selectedTime}`,
      });

      setSuccessMessage("Consulta agendada com sucesso!");

      setTimeout(() => {
        setSuccessMessage("");
        onOpenChange(false);
      }, 3000);
    } catch (error: any) {
      const apiErrors = error.response?.data?.errors;
      setErrorMessage(
        Array.isArray(apiErrors)
          ? apiErrors.join(", ")
          : "Erro ao agendar consulta"
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Agendar Consulta
          </DialogTitle>
          <DialogDescription>
            Selecione a data e o horário para consulta com{" "}
            <span className="font-medium">{doctor.name}</span>
          </DialogDescription>
        </DialogHeader>

        {/* Mensagens */}
        {errorMessage && <AlertMessage type="error" message={errorMessage} />}
        {successMessage && (
          <AlertMessage type="success" message={successMessage} />
        )}

        {/* Seleção do paciente */}
        <div className="space-y-2">
          <h3 className="font-medium flex items-center gap-2">
            <User className="h-4 w-4" />
            Paciente
          </h3>
          <select
            className={`
      w-full rounded px-3 py-2
      border transition-all
      focus:outline-none focus:ring-2 focus:ring-blue-500
      ${selectedPatientId ? "border-blue-500" : "border-input"}
    `}
            onChange={(e) => setSelectedPatientId(Number(e.target.value))}
            defaultValue=""
          >
            <option value="" disabled>
              Selecione um paciente
            </option>
            {patients.map((patient) => (
              <option key={patient.id} value={patient.id}>
                {patient.name}
              </option>
            ))}
          </select>
        </div>

        {/* Seleção de data */}
        <div className="space-y-2 mt-4">
          <h3 className="font-medium flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            Data
          </h3>
          <input
            type="date"
            value={selectedDate}
            //min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setSelectedDate(e.target.value)}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              selectedDate ? "border-blue-500" : "border-input"
            }`}
          />
        </div>

        {/* Seleção de horário */}
        <div className="mt-4">
          <h3 className="font-medium flex items-center gap-2 mb-2">
            <Clock className="h-4 w-4" />
            Horários disponíveis
          </h3>

          {availableSlots.length === 0 ? (
            <p className="text-muted-foreground text-sm">
              Nenhum horário disponível para esta data
            </p>
          ) : (
            <ScrollArea>
              <div className="grid grid-cols-4 gap-2">
                {availableSlots.map((time) => (
                  <Button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
className={`transition-all ${
    selectedTime === time
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : "border border-blue-500 text-blue-500 bg-white hover:bg-blue-100"
  }`}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>

        {/* Rodapé */}
        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button
            onClick={handleSchedule}
            disabled={!selectedPatientId || !selectedDate || !selectedTime}
            className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirmar Agendamento
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
