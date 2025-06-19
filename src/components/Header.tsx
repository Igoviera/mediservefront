'use client'

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import MenuLateral from "./MenuLateral";
import { useRouter } from "next/navigation";

export default function Header() {
  const[open, setOpen] = useState(false);
  const[openMenu, setOpenMenu] = useState(false);

  const menuDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpen(prev => !prev);
  }
  
  const mostrarMenuLateral = () => {
    setOpenMenu(prev => !prev);
  }

  const router = useRouter();

  const botaoLogout = () => {
    localStorage.clear();
    router.push('/auth');
  }

  return (
    <header className="text-[#1F4153] text-[18px] font-[500] flex flex-row items-center justify-between px-8 py-6">
      <div className="md:hidden">
        <button 
          onClick={mostrarMenuLateral}
        >
          <Image 
            className="w-[20px] sm:w-[30px]"
            alt=""
            src='/assets/icon-botao-menu.png'
            width={30} height={30}
          />
        </button>
      </div>
      { openMenu && 
        <MenuLateral 
          active={setOpenMenu}
        />
      }
      <Link href="/pages/menu-principal">Nome do Sistema</Link>
      <div className="hidden md:flex flex-row items-center gap-10 relative md:text-[15px]">
        <Link href="/pages/menu-principal">Início</Link>
        <div className="relative">
          <button onClick={menuDropdown}>Cadastrar</button>
          {open && (
            <div className="absolute right-[-50px] mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <Link 
                href="" 
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Paciente
              </Link>
              <Link 
                href="/pages/cadastro-medico"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Médico
              </Link>
            </div>
          )}
        </div>
        <Link href="">Agendamentos</Link>
        <Link href="">Consultas</Link>
        <button 
          onClick={botaoLogout}
          className="bg-[#869FBB] p-0.5 px-4 rounded-md hover:bg-[#4d5f73] hover:text-[#ffffff] transition duration-500 ease-in-out"
        >
          Sair
        </button>
      </div>
    </header>
  );
}
