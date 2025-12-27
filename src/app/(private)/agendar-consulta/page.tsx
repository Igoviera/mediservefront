"use client";

import React, { useEffect, useState } from "react";
import Input from "@/components/Input";
import { SlActionUndo } from "react-icons/sl";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Doctor } from "@/components/colmuns/doctor-colmns";
import doctorService from "@/services/doctorService";
import { Patient } from "@/components/colmuns/patient-colmns";
import pacienteService from "@/services/pacienteService";
import appointmentsService from "@/services/appointmentsService";
import { fetchServerResponse } from "next/dist/client/components/router-reducer/fetch-server-response";

const schema = z.object({
  patientId: z.coerce.number().min(1, "Selecione um paciente."),
  doctorId: z.coerce.number().min(1, "Selecione um médico"),
  data: z.string().nonempty("Data é obrigatória."),
  hora: z.string().nonempty("Hora é obrigatória."),
});

type FormData = z.infer<typeof schema>;

export default function Page() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const doctors = await doctorService.getAllDoctors();
        setDoctors(doctors);
      } catch (error) {
        console.error("Erro ao buscar médicos:", error);
      }
    };
    fetchDoctors();
  }, []);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const patients = await pacienteService.getAllPatients();
        setPatients(patients);
      } catch (error) {
        console.error("Erro ao buscar pacientes:", error);
      }
    };
    fetchPatients();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = async (data: FormData) => {
    try {
      const isoDateTime = `${data.data}T${data.hora}:00`;

      const body = {
        clinicId: 1,
        doctorId: 1,
        patientId: 1, // Pode substituir conforme necessário
        data: isoDateTime,
        status: "AGENDADA",
      };

      const response = await appointmentsService.creatAppointments(body);
      console.log("sucesso", response)
      reset();
    } catch (err) {
      alert("Erro ao agendar consulta. Tente novamente.");
      console.error(err);
    }
  };

  return (
    <div className="w-screen bg-[#F1F1F1] flex items-center justify-center px-4 sm:px-8 md:px-16">
      <Input type="text" placeholder="Digite o nome do médico" />
    </div>
  );
}
