'use client'

import Link from "next/link";
import { Dispatch, SetStateAction} from "react";

interface MenuLateralProps {
  active: Dispatch<SetStateAction<boolean>>;
}

export default function MenuLateral({active}: MenuLateralProps){
  return(
    <>
      <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col p-4">
      <button 
        onClick={() => active(false)} 
        className="self-end text-gray-600 hover:text-black"
      >
        ✕
      </button>
      <nav className="mt-8 flex flex-col gap-5 text-[#1F4153] text-[16px] font-medium">
        <Link href="">Início</Link>
        <Link href=""> Cadastrar Paciente</Link>
        <Link href="">Cadastrar Médico</Link>
        <Link href="">Agendamentos</Link>
        <Link href="">Consultas</Link>
        <button className="text-left text-[#a83f3f]">Sair</button>
      </nav>
    </div>
    </>
  );
}