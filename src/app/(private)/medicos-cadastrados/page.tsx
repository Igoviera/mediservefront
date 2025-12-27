"use client";

import Image from "next/image";
import InfoMedico from "@/components/InfoPessoa";
import { FaUserDoctor } from "react-icons/fa6";
import { useEffect, useState } from "react";
import doctorService from "@/services/doctorService";
import { Loading } from "@/components/ui/loading";
import { DataTable } from "@/components/ui/data-table";
import { Doctor, medicoColumns } from "@/components/colmuns/doctor-colmns";
import { Stethoscope, UserRoundPlus } from "lucide-react";
import Link from "next/link";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function MedicosCadastrados() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const doctors = await doctorService.getAllDoctors();
        setDoctors(doctors);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar médicos:", error);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <main className="bg-[#FFFFFF] border border-[#C8C8C8] rounded-md mx-3 px-4 sm:px-0 sm:mx-10 my-10">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2 text-blue-500">
            <Stethoscope className="h-6 w-6" />
            Médicos Cadastrados
          </CardTitle>
          <CardDescription>Adicione e gerencie os médicos..</CardDescription>
        </CardHeader>
        <div className="flex m-5">
          <Link href={"/cadastro-medico"}>
            <button className="flex border gap-2 justify-center items-center border-blue-500 rounded-md p-2 text-blue-500 hover:border-blue-700 hover:text-blue-700">
              <UserRoundPlus /> Novo Médico
            </button>
          </Link>
        </div>
      <section>
        {loading ? (
          <Loading />
        ) : (
          <div className="m-5 mt-10">
            <DataTable columns={medicoColumns} data={doctors} />
          </div>
        )}
      </section>
    </main>
  );
}
