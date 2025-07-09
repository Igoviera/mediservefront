"use client";
import React, { useEffect, useState } from "react";
import { Loading } from "@/components/ui/loading";
import InfoMedico from "@/components/InfoPessoa";
import Image from "next/image";

import pacient from "@/services/pacienteService";
import { pacienteColumns, Patient } from "@/components/colmuns/patient-colmns";
import { DataTable } from "@/components/ui/data-table";
import { User, UserRoundPlus, Users, Users2 } from "lucide-react";
import Link from "next/link";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Pacientes() {
  const [patients, setPatient] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const patients = await pacient.getAllPatients();
        setPatient(patients);
        setLoading(false);
      } catch (error: any) {
        console.error("Erro ao buscar pacientes:", error.response?.data);
      }
    };
    fetchPatient();
  }, []);

  return (
    <main className="bg-[#FFFFFF]  border border-[#C8C8C8] rounded-md mx-3 px-4 sm:px-0 sm:mx-10 my-10">
      <section className="flex flex-col ">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2 text-blue-500">
            <Users2 className="h-6 w-6" />
            Paciente cadastrados
          </CardTitle>
          <CardDescription>
            Adicione e gerencie os pacientes.
          </CardDescription>
        </CardHeader>

        <div className="flex m-5">
          <Link href={"/cadastro-paciente"}>
            <button className="flex border gap-2  border-blue-500 rounded-md px-5 py-2 text-blue-500 hover:border-blue-700 hover:text-blue-700">
              <UserRoundPlus /> Novo Paciente
            </button>
          </Link>
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
