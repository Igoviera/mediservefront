"use client";

import React, { useState } from 'react';
import Input from '@/components/Input';
import { SlActionUndo } from "react-icons/sl";

export default function Page() {
  const [nome, setNome] = useState('');
  const [profissional, setProfissional] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // validação
  const validateForm = () => {
    const erros: { [key: string]: string } = {};

    if (/\d/.test(nome)) erros.nome = "Nome não pode conter números.";
    if (/\d/.test(profissional)) erros.profissional = "Profissional não pode conter números.";
    if (data < new Date().toISOString().split('T')[0]) erros.data = "Data não pode ser no passado.";
    if (!hora) erros.hora = "Informe o horário.";
    if (hora && (hora < "08:00" || hora > "18:00")) erros.hora = "Horário deve estar entre 08:00 e 18:00.";

    setErrors(erros);
    return Object.keys(erros).length === 0;
  };

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/[^a-zA-Z\s]/.test(value)) return; // Bloqueia números e caracteres especiais
    setter(value);
  };

  const handleAgendar = () => {
    const formIsValid = validateForm();
    if (!formIsValid) return;
    console.log("Agendado com:", { nome, profissional, data, hora });
  };

  return (
    <div className="w-screen h-screen bg-[#F1F1F1] flex items-center justify-center px-4 sm:px-8 md:px-16">
      <div className="w-full max-w-[1000px] h-auto bg-white rounded-[12px] border p-[40px] flex flex-col items-center">
        <h1 className="font-bold text-[45.58px] font-[Poppins] mb-10 text-center">Agendar Consulta</h1>
        <div className="w-full flex flex-col items-center gap-[24px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[7.64px] w-full">
            <Input
              type="text"
              placeholder="Nome Completo"
              label="Nome completo:"
              value={nome}
              onChange={handleChange(setNome)}
              error={errors.nome}
            />
            <Input
              type="text"
              placeholder="Profissional"
              label="Profissional:"
              value={profissional}
              onChange={handleChange(setProfissional)}
              error={errors.profissional}
            />
            <Input
              type="date"
              label="Data do atendimento:"
              value={data}
              onChange={(e) => setData(e.target.value)}
              error={errors.data}
            />
            <Input
              type="time"
              label="Horário:"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              min="08:00"
              max="18:00"
              error={errors.hora}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-[20px] w-full justify-center">
            <button className="w-full sm:w-[138px] h-[30px] rounded-[13.93px] bg-[#222222] text-white font-semibold flex items-center justify-center">
              <SlActionUndo className="text-[20px] mr-2" />
              Retornar
            </button>
            <button onClick={handleAgendar} className="w-full sm:w-[138px] h-[30px] rounded-[13.93px] bg-[#869FBB] text-white font-semibold">
              Agendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
