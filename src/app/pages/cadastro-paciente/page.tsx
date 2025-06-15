"use client";

import Input from "@/components/Input";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(2, "O nome é obrigatório e deve ter no mínimo 2 caracteres.")
    .max(50, "O nome deve ter no máximo 50 caracteres."),
  cpf: z
    .string()
    .length(11, "CPF deve conter 11 dígitos")
    .regex(/^\d+$/, "CPF deve conter apenas números")
    .nonempty("O CPF é obrigatório."),
  phone: z
    .string()
    .min(14, "Telefone deve ter o formato (XX) XXXXX-XXXX")
    .regex(/^\(\d{2}\)\s\d{5}-\d{4}$/, "Formato de telefone inválido")
    .nonempty("O telefone é obrigatório."),
  address: z.object({
    cep: z
      .string()
      .regex(/^\d{5}-\d{3}$/, "CEP deve estar no formato 00000-000")
      .nonempty("O CEP é obrigatório."),
    logradouro: z
      .string()
      .min(2, "O logradouro é obrigatório e deve ter no mínimo 2 caracteres.")
      .nonempty("O logradouro é obrigatório."),
    locationNumber: z
      .string()
      .min(1, "Número do local é obrigatório")
      .nonempty("O número do local é obrigatório."),
    neighborhood: z
      .string()
      .min(2, "Bairro é obrigatório e deve ter no mínimo 3 caracteres.")
      .nonempty("O bairro é obrigatório."),
    city: z
      .string()
      .min(2, "A cidade é obrigatória e deve ter no mínimo 2 caracteres.")
      .nonempty("A cidade é obrigatória."),
    uf: z
      .string()
      .length(2, "UF deve ter 2 letras")
      .toUpperCase()
      .nonempty("A UF é obrigatória."),
  }),
  user: z.object({
    username: z
      .string()
      .min(2, "O username é obrigatório deve ter no mínimo 2 caracteres.")
      .max(50, "O username deve ter no máximo 50 caracteres.")
      .nonempty("O username é obrigatório."),
    email: z
      .string()
      .email("O e-mail é inválido. Digite um e-mail válido.")
      .nonempty("O e-mail é obrigatório."),
    password: z
      .string()
      .min(6, "A senha deve ter no mínimo 8 caracteres.")
      .nonempty("A senha é obrigatória."),
  }),
});

type DoctorFormData = z.infer<typeof schema>;

export default function CadastroPaciente() {
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


  return (
    <div className="w-screen bg-[#F1F1F1] flex items-center justify-center px-4 sm:px-8 md:px-16">
      <div className="w-full max-w-[1000px] h-auto bg-white rounded-[12px] border p-[40px] flex flex-col items-center">
        <h1 className="font-bold text-2xl mb-10 text-center">
          Cadastro de Paciente
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex flex-col items-center gap-[24px]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[7.64px] w-full">
              <Input
                id="username"
                type="text"
                placeholder="Username"
                label="Username:"
                {...register("user.username")}
                error={errors.user?.username?.message}
              />
              <Input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                label="E-mail:"
                {...register("user.email")}
                error={errors.user?.email?.message}
              />
              <Input
                id="password"
                type="password"
                placeholder="Digite uma senha"
                label="Senha:"
                {...register("user.password")}
                error={errors.user?.password?.message}
              />
              <Input
                id="name"
                type="text"
                placeholder="Nome Completo"
                label="Nome completo:"
                {...register("name")}
                error={errors.name?.message}
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

