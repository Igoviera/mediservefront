"use client";

import Input from "@/components/Input";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Car, UserPlus } from "lucide-react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import specialtyService from "@/services/specialtyService";
import { Specialty } from "@/components/colmuns/specialty-comns";
import doctorService from "@/services/doctorService";
import AlertMessage from "@/components/AlertMessage";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const schema = z.object({
  name: z
    .string()
    .min(2, "O nome é obrigatório e deve ter no mínimo 2 caracteres.")
    .max(50, "O nome deve ter no máximo 50 caracteres."),

  imgUrl: z.string().url("URL da imagem inválida").optional(),
  crm: z
    .string()
    .min(6, "O CRM deve conter exatamente 6 dígitos.")
    .regex(/^\d+$/, "O CRM deve conter apenas números.")
    .nonempty("O CRM é obrigatório."),
  cpf: z
    .string()
    .length(11, "CPF deve conter 11 dígitos")
    //.regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Formato de CPF inválido')
    .nonempty("O CPF é obrigatório."),
  phone: z
    .string()
    .min(14, "Telefone deve ter o formato (XX) XXXXX-XXXX")
    .regex(/^\(\d{2}\)\s\d{5}-\d{4}$/, "Formato de telefone inválido")
    .nonempty("O telefone é obrigatório."),
  description: z
    .string()
    .min(10, "Descrição é obrigatória e deve ter no mínimo 10 caracteres")
    .max(200, "A descrição deve ter no máximo 200 caracteres."),
  queryValue: z
    .number({ invalid_type_error: "Valor da consulta deve ser numérico" })
    .positive("Valor da consulta deve ser maior que zero")
    .min(0.01, "O valor da consulta deve ser no mínimo R$ 0,01."),
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
  specialtyIds: z
    .array(z.string())
    .min(1, "Selecione pelo menos uma especialidade")
    .nonempty("Selecione pelo menos uma especialidade."),
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
  dayOfWeek: z.enum([
    "SEGUNDA",
    "TERÇA",
    "QUARTA",
    "QUINTA",
    "SEXTA",
    "SÁBADO",
  ]),
  startTime: z.string().min(1, "Informe o horário inicial"),
  endTime: z.string().min(1, "Informe o horário final"),
  durationMinutes: z.coerce.number().min(5, "Mínimo 5 minutos"),
});

type DoctorFormData = z.infer<typeof schema>;

export default function Cadastro() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [specialtys, setSpecialty] = useState<Specialty[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<DoctorFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      dayOfWeek: "SEGUNDA",
      startTime: "08:00",
      endTime: "12:00",
      durationMinutes: 30,
    },
  });

  const onSubmit = (data: DoctorFormData) => {
    const transformedData = {
      ...data,
      specialtyIds: data.specialtyIds.map((id) => Number(id)),
    };
    try {
      doctorService.createDoctor(transformedData);
      setSuccessMessage("Médico cadastrado com sucesso!");
      reset();

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error: any) {
      console.log(error);
      const apiErrors = error.response?.data?.errors;

      const message = Array.isArray(apiErrors)
        ? apiErrors.join(", ")
        : "Erro ao cadastrar Médico. Tente novamente.";
      console.log("Mensagem de erro:", message);

      setErrorMessage(message);

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    } finally {
      setLoading(false);
    }

    //console.log("Aqui", transformedData);
  };

  const onError = (errors: any) => {
    console.error("Erros de validação:", errors);
  };

  const getAllSpecialty = async () => {
    try {
      const specialtys = await specialtyService.getAllSpecialty();
      setSpecialty(specialtys);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllSpecialty();
  }, []);

  return (
    <div className=" bg-white rounded-[12px] border p-10 flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2 text-blue-500">
          <UserPlus className="h-6 w-6" />
          Cadastrar Médico
        </CardTitle>
        <CardDescription>
          Realize o cadastro do médico.
        </CardDescription>
      </CardHeader>

      <div className="w-1/3">
        {errorMessage && <AlertMessage type="error" message={errorMessage} />}
        {successMessage && (
          <AlertMessage type="success" message={successMessage} />
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit, onError)} className="mt-5">
        <div className="flex flex-col items-center gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3  w-full">
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
              id="cpf"
              type="text"
              placeholder="CPF"
              label="CPF:"
              {...register("cpf")}
              error={errors.cpf?.message}
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
              id="locationNumber"
              type="text"
              placeholder="Número"
              label="N°:"
              {...register("address.locationNumber")}
              error={errors.address?.locationNumber?.message}
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
              id="uf"
              type="text"
              placeholder="UF"
              label="UF:"
              {...register("address.uf")}
              error={errors.address?.uf?.message}
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
              type="number"
              placeholder="Valor da consulta"
              label="Valor da consulta:"
              {...register("queryValue", { valueAsNumber: true })}
              error={errors.queryValue?.message}
            />
          </div>
          <div className="w-full border rounded-md border-slate-300 p-3">
            <label className="block font-medium text-gray-700 mb-2">
              Selecione Especialidades:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {specialtys.map((spec) => (
                <label
                  key={spec.id}
                  className="flex items-center gap-2 text-sm"
                >
                  <input
                    type="checkbox"
                    value={spec.id}
                    {...register("specialtyIds", {
                      setValueAs: (value) => Number(value),
                    })}
                  />
                  {spec.name}
                </label>
              ))}
            </div>
            {errors.specialtyIds && (
              <p className="text-red-500 text-sm mt-1">
                {errors.specialtyIds.message}
              </p>
            )}
          </div>

          <div className="flex justify-end w-full mt-5">
            <button
              type="submit"
              className="w-full sm:w-1/2 h-10 rounded-md bg-blue-500 hover:bg-blue-700 text-white font-semibold flex items-center justify-center"
            >
              Salvar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
