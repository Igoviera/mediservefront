import React from 'react'
import Input from '@/components/Input'
import { SlActionUndo } from "react-icons/sl";

export default function Page() {
  return (
    <div className="w-screen h-screen bg-[#F1F1F1] flex items-center justify-center px-4 sm:px-8 md:px-16">
      {/* Quadrado branco que engloba tudo */}
      <div className="w-full max-w-[1000px] h-auto bg-white rounded-[12px] border p-[40px] flex flex-col items-center">
        <h1 className="font-bold text-[45.58px] font-[Poppins] mb-10 text-center">
          Agendar Consulta
        </h1>

        <div className="w-full flex flex-col items-center gap-[24px]">
          {/* Inputs em 2 colunas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[7.64px] w-full">
            <Input type="text" placeholder="Nome Completo" label="Nome completo:" />
            <Input type="text" placeholder="Profissional" label="Profissional:" />
            <Input type="date" label="Data do atendimento:" />
            <Input type="time" label="Horário:" />
          </div>

          {/* Input de categoria centralizado */}
          <div className="w-full sm:w-[432px]">
            <Input type="text" label="Categoria:" placeholder="Categoria" />
          </div>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-[20px] w-full justify-center">
            <button className="w-full sm:w-[166.15px] h-[55.03px] rounded-[13.93px] bg-[#222222] text-white font-semibold flex items-center justify-center">
              <SlActionUndo className="text-[20px] mr-2" />
              Retornar
            </button>
            <button className="w-full sm:w-[166.15px] h-[55.03px] rounded-[13.93px] bg-[#869FBB] text-white font-semibold">
              Agendar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
