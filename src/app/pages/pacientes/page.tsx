"use client";
import React, { useEffect, useState } from "react";
import { Loading } from "@/components/ui/loading";
import InfoMedico from "@/components/InfoPessoa";
import Image from "next/image";

import pacient from "@/services/pacienteService";
import { pacienteColumns, Patient } from "@/components/colmuns/patient-colmns";
import { DataTable } from "@/components/ui/data-table";
import { Users } from "lucide-react";

export default function Pacientes() {
  const [patients, setPatient] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const patients = await pacient.getAllPatients();
        setPatient(patients);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar pacientes:", error);
      }
    };
    fetchPatient();
  }, []);

  return (
    <main className="bg-[#FFFFFF]  border border-[#C8C8C8] rounded-md mx-3 px-4 sm:px-0 sm:mx-10 my-10 w-screen">
      <section className="flex flex-col ">
        <div className="flex gap-5 justify-center mt-10 text-blue-900 font-bold text-2xl mb-10">
          <h1>Pacientes Cadastrados</h1>
          <Users size={30} />
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="m-5">
            <DataTable columns={pacienteColumns} data={patients} />
          </div>
        )}
      </section>
    </main>
  );
}
