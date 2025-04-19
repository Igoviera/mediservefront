import React from 'react'
import Input from '@/components/Input'

function CadastroMedico() {
  return (
    <div className="w-screen h-screen bg-[#F1F1F1] flex items-center justify-center">
      {/* Quadrado branco que engloba tudo */}
      <div className="w-[1000px] h-[550px] bg-white rounded-[12px] border p-[40px] flex flex-col items-center">
      <h1 className="font-bold text-[45.58px] font-[Poppins] mb-10 text-center flex items-center justify-center">
      <img src="" alt="Ícone" className="w-[42px] h-[36px] mr-4" /> Agendar Consulta</h1>

        <div className="w-[912px] flex flex-col items-center gap-[24px]">
          {/* Inputs responsivos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[7.64px] w-full">
            <Input type="text" placeholder="Nome Completo" label="Nome completo:" />
            <Input type="text" placeholder="Profissional" label="Profissional:" />
            <Input type="date" label="Data do atendimento:" />
            <Input type="time" label="Horário:" />
          </div>

          {/* Input de categoria centralizado */}
          <div className="w-[432px]">
            <Input type="text" label="Categoria:" placeholder="Categoria" />
          </div>

          {/* Botões */}
          <div className="flex gap-[20px]">
            <button className="w-[166.15px] h-[55.03px] rounded-[13.93px] bg-[#222222] text-white font-semibold">
              Retornar
            </button>
            <button className="w-[166.15px] h-[55.03px] rounded-[13.93px] bg-[#869FBB] text-white font-semibold">
              Agendar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CadastroMedico
