"use client";

import Image from "next/image";
import InfoMedico from "@/components/InfoPessoa";
import { FaUserDoctor } from "react-icons/fa6";
import { useEffect, useState } from "react";
import doctorService from "@/services/doctorService";
import { Loading } from "@/components/ui/loading";
import { DataTable } from "@/components/ui/data-table";
import { Doctor, medicoColumns } from "@/components/colmuns/doctor-colmns";

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
    <main className="bg-[#FFFFFF] border border-[#C8C8C8] rounded-md mx-3 px-4 sm:px-0 sm:mx-10 my-10 w-screen">
      <section className="flex flex-col">
        <div className="w-full flex flex-row justify-center my-[4rem]">
          <p className="text-center text-[25px] font-[700] text-blue-500">Médicos</p>
          <Image
            alt="seta"
            src="/assets/icons/icon-users.png"
            className="w-7 h-full ml-2 relative"
            width={24}
            height={24}
          />
        </div>
      </section>
      <section>
        {loading ? (
          <Loading />
        ) : (
          <div className="m-5">
            <DataTable columns={medicoColumns} data={doctors} />
          </div>
        )}
      </section>
    </main>
  );
}
