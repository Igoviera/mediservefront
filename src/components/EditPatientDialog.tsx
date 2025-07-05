"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { PatientFormData } from "@/components/PatientForm";
import PatientForm from "@/components/PatientForm";
import Patient from "@/types/Patient";
import pacienteService from "@/services/pacienteService";
import { da } from "date-fns/locale";
import AlertSuccess from "./AlertMessage";

type Props = {
  patient: Patient;
};

export function EditPatientDialog({ patient }: Props) {
  const [open, setOpen] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);

  const handleUpdate = async (data: PatientFormData) => {
    console.log(data);
    try {
      await pacienteService.updatePatient(patient.id, data);
      setAlertSuccess(true);
      
      setOpen(false);
    } catch (error) {
      console.error("Erro ao atualizar paciente:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Pencil size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex justify-center sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl p-6">
        <PatientForm onSubmit={handleUpdate} defaultValues={patient} />
      </DialogContent>
      {alertSuccess && (
        <AlertSuccess message="Paciente Atualizado com sucesso!" />
      )}
    </Dialog>
  );
}
