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
      <div className="w-full max-w-[1000px] h-auto bg-white rounded-[12px] border p-[40px] flex flex-col items-center">
        <h1 className="font-bold text-2xl mb-10 text-center">
          Agendar Consulta
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center gap-[24px]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[7.64px] w-full">
            <select
              {...register("patientId")}
              className="w-full border border-gray-300 rounded p-2"
            >
              <option value="">Selecione um paciente</option>
              {patients.map((patient) => (
                <option key={patient.id} value={patient.id}>
                  {patient.name}
                </option>
              ))}
            </select>
            {errors.patientId && (
              <p className="text-red-500 text-sm">{errors.patientId.message}</p>
            )}

            <select
              {...register("doctorId")}
              className="w-full border border-gray-300 rounded p-2"
            >
              <option value="">Selecione um médico</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name}
                </option>
              ))}
            </select>
            {errors.doctorId && (
              <p className="text-red-500 text-sm">{errors.doctorId.message}</p>
            )}

            <Input
              type="date"
              label="Data do atendimento:"
              {...register("data")}
              error={errors.data?.message}
            />
            <Input
              type="time"
              label="Horário:"
              {...register("hora")}
              min="08:00"
              max="18:00"
              error={errors.hora?.message}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-[20px] w-full justify-center">
            <button
              type="submit"
              className="w-full sm:w-[138px] h-[30px] rounded-[13.93px] bg-[#869FBB] text-white font-semibold"
            >
              Agendar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
