"use client";

import Input from '@/components/Input';
import React, { useState } from 'react';
import { DadosCadastro, validateCadastro } from '@/lib/validateCadastro';

export default function Cadastro() {
  const [dadosCadastro, setDadosCadastro] = useState<DadosCadastro>({
    nome: '',
    crm: '',
    especialidade: '',
    cep: '',
    rua: '',
    cidade: '',
    bairro: '',
    descricao: '',
    valor: '',
    telefone: '',
  });

  const [erros, setErros] = useState<Partial<Record<keyof DadosCadastro, string>>>({});

  const handleChange = (field: keyof DadosCadastro) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setDadosCadastro(prevData => ({
      ...prevData,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const validationErrors = validateCadastro(dadosCadastro);
    setErros(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Cadastro realizado com sucesso!', dadosCadastro);
    }
  };

  return (
    <div className="w-screen h-screen bg-[#F1F1F1] flex items-center justify-center px-4 sm:px-8 md:px-16">
      <div className="w-full max-w-[1000px] h-auto bg-white rounded-[12px] border p-[40px] flex flex-col items-center">
        <h1 className="font-bold text-[45.58px] font-[Poppins] mb-10 text-center">
          Cadastro de Médico
        </h1>

        <div className="w-full flex flex-col items-center gap-[24px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[7.64px] w-full">
            <Input
              type="text"
              placeholder="Nome Completo"
              label="Nome completo:"
              value={dadosCadastro.nome}
              onChange={handleChange('nome')}
              error={erros.nome}
            />
            <Input
              type="text"
              placeholder="CEP"
              label="CEP:"
              value={dadosCadastro.cep}
              onChange={handleChange('cep')}
              error={erros.cep}
            />
            <Input
              type="text"
              placeholder="Descrição"
              label="Descrição:"
              value={dadosCadastro.descricao}
              onChange={handleChange('descricao')}
              error={erros.descricao}
            />
            <Input
              type="text"
              placeholder="CRM"
              label="CRM:"
              value={dadosCadastro.crm}
              onChange={handleChange('crm')}
              error={erros.crm}
            />
            <Input
              type="text"
              placeholder="Rua"
              label="Rua:"
              value={dadosCadastro.rua}
              onChange={handleChange('rua')}
              error={erros.rua}
            />
            <Input
              type="text"
              placeholder="Valor da consulta"
              label="Valor da consulta:"
              value={dadosCadastro.valor}
              onChange={handleChange('valor')}
              error={erros.valor}
            />
            <Input
              type="text"
              placeholder="Especialidade"
              label="Especialidade:"
              value={dadosCadastro.especialidade}
              onChange={handleChange('especialidade')}
              error={erros.especialidade}
            />
            <Input
              type="text"
              placeholder="Cidade"
              label="Cidade:"
              value={dadosCadastro.cidade}
              onChange={handleChange('cidade')}
              error={erros.cidade}
            />
            <Input
              type="text"
              placeholder="Telefone"
              label="Telefone:"
              value={dadosCadastro.telefone}
              onChange={handleChange('telefone')}
              error={erros.telefone}
            />
            <Input
              type="text"
              placeholder="Bairro"
              label="Bairro:"
              value={dadosCadastro.bairro}
              onChange={handleChange('bairro')}
              error={erros.bairro}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-[20px] w-full justify-center">
            <button
              className="w-full sm:w-[138px] h-[30px] rounded-[13.93px] bg-[#869FBB] text-white font-semibold flex items-center justify-center"
              onClick={handleSubmit}
            >
              Salvar
            </button>
            <button className="w-full sm:w-[138px] h-[30px] rounded-[13.93px] bg-[#F21A1A] text-white font-semibold">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
