"use client";

import Input from "@/components/Input";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import specialtyService from "@/services/specialtyService";
import { Specialty } from "@/types/Specialty";
import { Loading } from "@/components/ui/loading";

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
      console.log("Especialidade cadastrada com sucesso:", response);
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
          {specialtys.length === 0 ? (
            <Loading />
          ) : (
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                <tr>
                  <th className="py-3 px-6 text-left">Especialidade</th>
                  <th className="flex justify-end py-3 px-6 text-left">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {specialtys?.map((specialty) => (
                  <tr
                    key={specialty.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {specialty.name}
                    </td>
                    <td className=" flex justify-end py-3 px-6 text-left">
                      <div className="flex item-center justify-start">
                        <button className="w-6 mr-2 transform hover:scale-110">
                          {/* Ícone de Edição (ex: um lápis) */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z"
                            />
                          </svg>
                        </button>
                        <button className="w-6 mr-2 transform hover:scale-110 text-red-500">
                          {/* Ícone de Excluir (ex: uma lixeira) */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
