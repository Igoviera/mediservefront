"use client";

import Image from "next/image";
import InfoMedico from "@/components/InfoMedico";
import { useEffect, useState } from "react";
import doctorService from "@/services/doctorService";
import { Doctor } from "@/types/Doctor";
import { Loading } from "@/components/ui/loading";

const MEDICOS = [
  {
    nome: "Lígia Kaylanne",
    especialidade: "Neurologista",
    celular: "83987523652",
    email: "emailexemplo@gmail.com",
  },
  {
    nome: "João Costa",
    especialidade: "Cardiologista",
    celular: "83987523653",
    email: "emailexemplo2@gmail.com",
  },
  {
    nome: "Maria Eduarda",
    especialidade: "Cirurgiã",
    celular: "83987523654",
    email: "emailexemplo3@gmail.com",
  },
];

export default function MedicosCadastrados() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastMedico = currentPage * itemsPerPage;
  const indexOfFirstMedico = indexOfLastMedico - itemsPerPage;
  const currentMedicos = MEDICOS.slice(indexOfFirstMedico, indexOfLastMedico);
  const [doctors, setDoctors] = useState<Doctor[]>([]);

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
        {doctors.length == 0 ? (
          <Loading />
        ) : (
          <div>
            {doctors.map((medico) => (
              <InfoMedico
                key={medico.id}
                id={medico.id}
                nome={medico.name}
                imgUrl={medico.imgUrl}
                crm={medico.crm}
                queryValue={medico.queryValue}
                especialidade={medico.specialties[0]} // pegando a primeira especialidade
                clinicId={medico.clinicId}
                userId={medico.userId}
                status={medico.status}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
