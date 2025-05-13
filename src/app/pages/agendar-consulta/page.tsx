"use client";

import React, { useState } from 'react';
import Input from '@/components/Input';
import { SlActionUndo } from "react-icons/sl";

export default function Page() {
  const [nome, setNome] = useState('');
  const [profissional, setProfissional] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  // validação
  const validateForm = () => {
    if (/\d/.test(nome)) return "Nome não pode conter números.";
    if (/\d/.test(profissional)) return "Profissional não pode conter números.";
    if (data < new Date().toISOString().split('T')[0]) return "Data não pode ser no passado.";
    if (!hora) return "Informe o horário.";
    return null;
  };

  
  const handleChange = (setter) => (e) => {
    const value = e.target.value;
    if (/[^a-zA-Z\s]/.test(value)) return; // Bloqueia números e caracteres especiais
    setter(value);
  };

  const handleAgendar = () => {
    const errorMessage = validateForm();
    if (errorMessage) return alert(errorMessage);
    console.log("Agendado com:", { nome, profissional, data, hora });
  };

  return (
    <div className="w-screen h-screen bg-[#F1F1F1] flex items-center justify-center px-4 sm:px-8 md:px-16">
      <div className="w-full max-w-[1000px] h-auto bg-white rounded-[12px] border p-[40px] flex flex-col items-center">
        <h1 className="font-bold text-[45.58px] font-[Poppins] mb-10 text-center">Agendar Consulta</h1>
        <div className="w-full flex flex-col items-center gap-[24px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[7.64px] w-full">
            <Input type="text" placeholder="Nome Completo" label="Nome completo:" value={nome} onChange={handleChange(setNome)} />
            <Input type="text" placeholder="Profissional" label="Profissional:" value={profissional} onChange={handleChange(setProfissional)} />
            <Input type="date" label="Data do atendimento:" value={data} onChange={(e) => setData(e.target.value)} />
            <Input type="time" label="Horário:" value={hora} onChange={(e) => { if (e.target.value >= "08:00" && e.target.value <= "18:00") setHora(e.target.value); }} min="08:00" max="18:00" />
          </div>

          <div className="flex flex-col sm:flex-row gap-[20px] w-full justify-center">
            <button className="w-full sm:w-[166.15px] h-[55.03px] rounded-[13.93px] bg-[#222222] text-white font-semibold flex items-center justify-center">
              <SlActionUndo className="text-[20px] mr-2" />
              Retornar
            </button>
            <button onClick={handleAgendar} className="w-full sm:w-[166.15px] h-[55.03px] rounded-[13.93px] bg-[#869FBB] text-white font-semibold">
              Agendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
