"use client";
import React from "react";
import Icon from "../../assets/🦆 icon _users_.svg";
import VoltarButton from "@/components/buttonvoltar";
import TituloComIcone from "@/components/tituloIcone";
import CampoBusca from "@/components/campobusca";

export default function Pacientes() {
  return (
    <div className="w-screen h-screen bg-[#F1F1F1] flex items-center justify-center px-4 sm:px-8 md:px-16 overflow-x-hidden">
      <div className="w-full max-w-[1000px] h-auto bg-white rounded-[12px] border p-[40px] flex flex-col items-center">
        <div className="w-full flex items-center justify-between mb-10">
          <VoltarButton />
          <TituloComIcone titulo="Pacientes" iconSrc={Icon} iconAlt="Ícone de grupo" />
          <div className="w-[115px]" />
        </div>

        <p className="w-full text-left text-lg font-medium">Buscar um Paciente</p>
        <CampoBusca placeholder="Buscar paciente" onBuscar={() => {}} />
      </div>
    </div>
  );
}
