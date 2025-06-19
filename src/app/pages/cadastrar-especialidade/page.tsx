"use client";

import Input from "@/components/Input";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import specialtyService from "@/services/specialtyService";
import { Loading } from "@/components/ui/loading";
import { DataTable } from "@/components/ui/data-table";
import {
  Specialty,
  specialtyColumns,
} from "@/components/colmuns/specialty-comns";

const schema = z.object({
  name: z
    .string()
    .min(2, "A especialidae é obrigatório")
    .max(20, "A especialidade deve ter no máximo 20 caracteres."),
});

type SpecialtyFormData = z.infer<typeof schema>;

export default function CadastroEspecialidade() {
  const [specialtys, setSpecialty] = useState<Specialty[]>([]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SpecialtyFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: SpecialtyFormData) => {
    try {
      const newSpecialty: Specialty = {
        name: data.name,
      };
      const response = await specialtyService.creatSpecialty(newSpecialty);
      setSuccess(true);
      await fetchSpecialty();
      reset();
      setTimeout(() => setSuccess(false), 3000);
      
    } catch (error) {
      console.error("Erro ao cadastrar especialidade:", error);
    }
  };

  const fetchSpecialty = async () => {
    try {
      const specialtys = await specialtyService.getAllSpecialty();
      setSpecialty(specialtys);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar médicos:", error);
    }
  };

  useEffect(() => {
    fetchSpecialty();
  }, []);

  return (
    <div className="w-screen bg-[#F1F1F1] flex items-center justify-center px-4 sm:px-8 md:px-16 ">
      <div className="w-full max-w-[1000px] h-auto bg-white rounded-[12px] border p-[40px] flex flex-col items-center">
        <h1 className="font-bold text-2xl mb-10 text-center">
          Cadastro de Especialidade
        </h1>
        <form
          className="flex justify-end justify-items-center gap-2 min-w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-3/6">
            <Input
              id="especialidade"
              type="text"
              placeholder="Nome da especialidade"
              {...register("name")}
              error={errors.name?.message}
            />
          </div>
          <div>
            <button
              type="submit"
              className="h-10 rounded-sm bg-[#869FBB] hover:bg-slate-600 text-white font-semibold flex items-center justify-center px-4" /* Adicionei px-4 para preenchimento lateral */
            >
              Salvar
            </button>
          </div>
        </form>
        {success && (
          <div className="bg-green-300 text-green-700 w-full py-4 flex justify-center items-center rounded-sm mt-3 font-semibold">
            Especialidade salva com sucesso!
          </div>
        )}

        <div className="overflow-x-auto w-full mt-5">
          {loading ? (
            <Loading />
          ) : (
            <div className="m-5">
              <DataTable columns={specialtyColumns} data={specialtys} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
