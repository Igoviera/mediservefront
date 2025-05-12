"use client";

import React, { useState } from "react";
import { Medico } from "../types/teste";
import Image from "next/image";
import Icon from "../../assets/🦆 icon _users_.svg";
import VoltarButton from "@/components/buttonvoltar";
import TituloComIcone from "@/components/tituloIcone";
import CampoBusca from "@/components/campobusca";
import Group from "../../assets/Group.png";
import Vector from "../../assets/Vector (2).png";

// Simulando uma lista de médicos
const medicosMock: Medico[] = [
  {
    id: "1",
    nome: "João Silva",
    especialidade: "Cardiologista",
    email: "joao.silva@medico.com",
    telefone: "(11) 1234-5678",
    fotoUrl: "", 
  },
  {
    id: "2",
    nome: "Maria Oliveira",
    especialidade: "Dermatologista",
    email: "maria.oliveira@medico.com",
    telefone: "(83) 9876-5432",
    fotoUrl: "", 
  },
];

export default function Cadastrados() {
  const [medicos, setMedicos] = useState<Medico[]>(medicosMock); 
  const [busca, setBusca] = useState("");

  const medicosFiltrados = medicos.filter((m) =>
    m.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="w-screen h-screen bg-[#F1F1F1] flex items-center justify-center px-4 sm:px-8 md:px-16 overflow-x-hidden">
      <div className="w-full max-w-[1000px] h-auto bg-white rounded-[12px] border p-[40px] flex flex-col items-center">
        <div className="w-full flex items-center justify-between mb-10">
          <VoltarButton />
          <TituloComIcone titulo="Médicos" iconSrc={Icon} iconAlt="Ícone de grupo" />
          <div className="w-[115px]" />
        </div>

        <p className="w-full text-left text-lg font-medium">Buscar um Médico</p>
        <CampoBusca
          placeholder="Buscar médico"
          onBuscar={(e) => setBusca(e.target.value)}
        />

        <div className="w-full mt-4">
          {medicosFiltrados.length > 0 ? (
            medicosFiltrados.map((medico) => (
              <div
                key={medico.id}
                className="flex items-center justify-between p-4 border rounded mb-4 bg-gray-100"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={medico.fotoUrl || "/default-avatar.png"}
                    alt={medico.nome}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="text-sm sm:text-base text-gray-800">
                    <span className="text-[#0D4077] font-semibold">{medico.nome}</span>
                    {" - "}
                    <span>{medico.especialidade}</span>
                    {" - "}
                    <span>{medico.telefone}</span>
                    {" - "}
                    <span>{medico.email}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Image src={Group} alt="Group Icon" width={15} height={15} />
                  <Image src={Vector} alt="Vector Icon" width={15} height={15} />
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-lg text-gray-500">Nenhum médico encontrado.</p>
          )}
        </div>
      </div>
    </div>
  );
}
