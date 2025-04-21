'use client'
import Link from "next/link";
import { useState } from "react";
import IconMenu from "../../public/assets/icon-botao-menu.png"
import Image from "next/image";

export default function Header() {
  const[open, setOpen] = useState(false);
  const[openMenu, setOpenMenu] = useState(false);

  const menuDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpen(prev => !prev);
  }
  
  const menuLateral = () => {
    setOpenMenu(prev => !prev);
  }

  return (
    <header className="text-[#1F4153] text-[18px] font-[500] flex flex-row items-center justify-between mx-8 my-6">
      <p>Nome do Sistema</p>
      <div className="hidden md:flex flex-row items-center gap-10 relative md:text-[15px]">
        <Link href="/menu-principal">Início</Link>
        <div className="relative">
          <button onClick={menuDropdown}>Cadastrar</button>
          {open && (
            <div className="absolute right-[-50px] mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <Link href="" className="block px-4 py-2 text-sm hover:bg-gray-100">Paciente</Link>
              <Link href="" className="block px-4 py-2 text-sm hover:bg-gray-100">Médico</Link>
            </div>
          )}
        </div>
        <Link href="">Agendamentos</Link>
        <Link href="">Consultas</Link>
        <button>Sair</button>
      </div>
      <div className="md:hidden">
        <button 
          onClick={menuLateral}
        >
          <Image 
            className="w-[20px] sm:w-[30px]"
            alt=""
            src={IconMenu}
            width={30} height={30}
          />
        </button>
      </div>
    </header>
  );
}
