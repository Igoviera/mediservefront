"use client";

import Input from "@/components/Input";
import React, { useState } from "react";
import { DadosCadastro, validateCadastro } from "@/lib/validateCadastro";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Nome é obrigatório").max(20),
  imgUrl: z.string().url("URL da imagem inválida"),
  crm: z.string().min(6, "CRM deve conter no mínimo 6 caracteres").max(6),
  cpf: z
    .string()
    .length(11, "CPF deve conter 11 dígitos")
    .regex(/^\d+$/, "CPF deve conter apenas números"),
  phone: z
    .string()
    .min(14, "Telefone deve ter o formato (XX) XXXXX-XXXX")
    .regex(/^\(\d{2}\)\s\d{5}-\d{4}$/, "Formato de telefone inválido"),
  description: z
    .string()
    .min(10, "Descrição é obrigatória e deve ter no mínimo 10 caracteres")
    .max(200),
  queryValue: z
    .number({ invalid_type_error: "Valor da consulta deve ser numérico" })
    .positive("Valor da consulta deve ser maior que zero"),
  address: z.object({
    cep: z
      .string()
      .regex(/^\d{5}-\d{3}$/, "CEP deve estar no formato 00000-000"),
    logradouro: z.string().min(3, "Logradouro é obrigatório"),
    locationNumber: z.string().min(1, "Número do local é obrigatório"),
    neighborhood: z.string().min(3, "Bairro é obrigatório"),
    city: z.string().min(2, "Cidade é obrigatória"),
    uf: z.string().length(2, "UF deve ter 2 letras").toUpperCase(),
  }),
  specialtyIds: z
    .array(z.number())
    .min(1, "Selecione pelo menos uma especialidade"),
});

type DoctorFormData = z.infer<typeof schema>;

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DoctorFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: DoctorFormData) => {
    console.log(data);
  };

  console.log(errors);

  const mock = [
    { id: 1, nome: "Cardiologia" },
    { id: 2, nome: "Pediatria" },
    { id: 3, nome: "Dermatologia" },
  ];

  return (
    <div className="w-screen h-screen bg-[#F1F1F1] flex items-center justify-center px-4 sm:px-8 md:px-16">
      <div className="w-full max-w-[1000px] h-auto bg-white rounded-[12px] border p-[40px] flex flex-col items-center">
        <h1 className="font-bold text-2xl mb-3 text-center">
          Cadastro de Médico
        </h1>
        <button
          className="bg-[#E6ECF2] text-[#0D407780] font-bold px-4 py-2 mb-7 rounded-full text-sm shadow hover:bg-[#d9e4ef] transition"
          onClick={() => {
            // Redirecionar ou exibir lista de médicos cadastrados
            console.log("Ir para lista de médicos cadastrados");
            // exemplo: router.push('/medicos');
          }}
        >
          Médicos Cadastrados
        </button>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex flex-col items-center gap-[24px]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[7.64px] w-full">
              <Input
                id="name"
                type="text"
                placeholder="Nome Completo"
                label="Nome:"
                {...register("name")}
                error={errors.name?.message}
              />
              <Input
                id="crm"
                type="text"
                placeholder="CRM"
                label="CRM:"
                {...register("crm")}
                error={errors.crm?.message}
              />
              <Input
                id="description"
                type="text"
                placeholder="Descrição"
                label="Descrição:"
                {...register("description")}
                error={errors.description?.message}
              />
              <Input
                id="cep"
                type="text"
                placeholder="CEP"
                label="CEP:"
                {...register("address.cep")}
                error={errors.address?.cep?.message}
              />
              <Input
                id="logradouro"
                type="text"
                placeholder="Rua"
                label="Rua:"
                {...register("address.logradouro")}
                error={errors.address?.logradouro?.message}
              />
              <Input
                id="city"
                type="text"
                placeholder="Cidade"
                label="Cidade:"
                {...register("address.city")}
                error={errors.address?.city?.message}
              />
              <Input
                id="phone"
                type="text"
                placeholder="Telefone"
                label="Telefone:"
                {...register("phone")}
                error={errors.phone?.message}
              />
              <Input
                id="neighborhood"
                type="text"
                placeholder="Bairro"
                label="Bairro:"
                {...register("address.neighborhood")}
                error={errors.address?.neighborhood?.message}
              />
              <Input
                id="queryValue"
                type="text"
                placeholder="Valor da consulta"
                label="Valor da consulta:"
                {...register("queryValue")}
                error={errors.queryValue?.message}
              />
            </div>
            <div className="flex justify-end w-full">
              <button
                type="submit"
                className="w-full sm:w-1/2 h-10 rounded-[13.93px] bg-[#869FBB] hover:bg-slate-600 text-white font-semibold flex items-center justify-center"
              >
                Salvar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
