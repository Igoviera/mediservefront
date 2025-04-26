'use client'

import { useState } from "react";
import Image from "next/image";
import Users from "../../../public/assets/icon-users.png";
import InfoMedico from "@/components/InfoMedico";

const MEDICOS = [
  { nome: "Lígia Kaylanne", especialidade: "Neurologista", celular: "83987523652", email: "emailexemplo@gmail.com" },
  { nome: "José da Silva", especialidade: "Cardiologista", celular: "83987523653", email: "emailexemplo2@gmail.com" },
  { nome: "Maria Oliveira", especialidade: "Pediatra", celular: "83987523654", email: "emailexemplo3@gmail.com" },
];

export default function MedicosCadastrados(){
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastMedico = currentPage * itemsPerPage;
  const indexOfFirstMedico = indexOfLastMedico - itemsPerPage;
  const currentMedicos = MEDICOS.slice(indexOfFirstMedico, indexOfLastMedico);

  return (
    <main className="bg-[#FFFFFF] border border-[#C8C8C8] rounded-md mx-3 sm:mx-10 my-10">
      <section className="flex flex-col">
        <div className="w-full flex flex-row justify-center mt-[4rem] mb-[4rem]">
          <p className="text-center text-[25px] font-[700]">Médicos</p>
          <Image
            alt="seta"
            src={Users}
            className="w-7 h-full ml-2 relative"
          />
        </div>
        <div className="flex flex-row justify-end my-6 mr-10">
          <div className="flex flex-col">
            <label htmlFor="busca" className="text-left font-[500]">Buscar médico: </label>
            <div>
              <input
                id="busca"
                type="search"
                className="w-[20rem] h-[35px] border border-[#CCCCCC] rounded-[4px] mr-5"
              />
              <button className="w-[90px] h-[35px] bg-[#0D407780] text-[#FFFFFF] border-none rounded-[4px]">Buscar</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <p className="text-[20px] font-[500] ml-[4rem]">Médicos:</p>
        <div>
          {currentMedicos.map((medico, index) => (
            <InfoMedico
              key={index}
              nome={medico.nome}
              especialidade={medico.especialidade}
              celular={medico.celular}
              email={medico.email}
            />
          ))}
        </div>
      </section>
    </main>
  );
}