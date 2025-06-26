"use client";

import Input from "@/components/Input";
import { User, UserPlus } from "lucide-react";
import { useState } from "react";

export default function CadastroUsuario() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className="w-screen bg-[#F1F1F1] flex items-center justify-center px-4 sm:px-8 md:px-16">
      <div className="w-full max-w-[1000px] h-auto bg-white rounded-[12px] border p-[40px] flex flex-col items-center">
        <div className="flex justify-center text-2xl text-blue-800 font-bold mt-10 mb-10 gap-2">
          <p>Cadastrar Usúario</p>
          <UserPlus size={30} />
        </div>

        <div className="w-full flex flex-col items-center gap-[24px]">
          {/* Inputs em 2 colunas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[7.64px] w-full">
            <Input
              type="text"
              placeholder="Nome de usúario"
              label="Nome"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Digite seu e-mail"
              label="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Digite uma senha"
              label="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Digite o perfil do usúario"
              label="Perfil"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>

          <div className="flex sm:flex-row gap-[20px] w-full justify-center">
            <button className=" w-full py-3 rounded-[13.93px] bg-blue-500 hover:bg-blue-800 text-white font-semibold">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
