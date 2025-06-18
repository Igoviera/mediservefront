"use client";
import React, { useEffect, useState } from "react";
import { Loading } from "@/components/ui/loading";
import InfoMedico from "@/components/InfoPessoa";
import Image from "next/image";

import pacient from "@/services/pacienteService";
import {pacienteColumns, Patient } from "@/components/colmuns/patient-colmns";
import { DataTable } from "@/components/ui/data-table";


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
    <main className="bg-[#FFFFFF] border border-[#C8C8C8] rounded-md mx-3 px-4 sm:px-0 sm:mx-10 my-10 w-screen">
      <section className="flex flex-col">
        <div className="w-full flex flex-row justify-center my-[4rem]">
          <p className="text-center text-[25px] font-[700]">Pacientes</p>
          <Image
            alt="seta"
            src="/assets/icons/icon-users.png"
            className="w-7 h-full ml-2 relative"
            width={24}
            height={24}
          />
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
