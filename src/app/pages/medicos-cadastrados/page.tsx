"use client";

import Image from "next/image";
import InfoMedico from "@/components/InfoPessoa";
import { useEffect, useState } from "react";
import doctorService from "@/services/doctorService";
import { Loading } from "@/components/ui/loading";
import { DataTable } from "@/components/ui/data-table";
import { Doctor, medicoColumns } from "@/components/colmuns/doctor-colmns";


export default function MedicosCadastrados() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const doctors = await doctorService.getAllDoctors();
        setDoctors(doctors);
         setLoading(false)
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
          <p className="text-center text-[25px] font-[700]">Médicos</p>
          <Image
            alt="seta"
            src="/assets/icons/icon-users.png"
            className="w-7 h-full ml-2 relative"
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-row justify-center flex-wrap items-center mx-3 md:my-6 md:mr-10 md:justify-end">
          <div className="flex flex-col">
            <label htmlFor="busca" className="text-left font-[500]">
              Buscar médico:{" "}
            </label>
            <div>
              <input
                id="busca"
                type="search"
                className="w-[15rem] md:w-[20rem] h-[35px] border border-[#CCCCCC] rounded-[4px] mr-5 pl-2"
              />
              <button className="w-[90px] h-[35px] bg-[#0D407780] text-[#FFFFFF] mt-3 sm:mt-0 border-none rounded-[4px]">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <p className="text-[20px] font-[500] ml-0 md:ml-5 my-7 text-center md:text-left">
          Médicos:
        </p>
        {loading ? (
          <Loading/>
        ) : (
          <div className="m-5">
            <DataTable columns={medicoColumns} data={doctors} />
          </div>  
        )}
      </section>
    </main>
  );
}
