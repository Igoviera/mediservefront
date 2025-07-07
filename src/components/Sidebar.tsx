"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Home,
  HomeIcon,
  LayoutDashboard,
  Menu,
  Stethoscope,
  UserCircle,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function LayoutComSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar fixa no desktop */}
      <aside className="hidden md:flex md:w-64 bg-white border-r flex-col p-4">
        <SidebarContent />
      </aside>

      {/* Sidebar móvel no mobile */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden absolute top-4 left-4 z-50"
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-4">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Conteúdo principal */}
      <main className="flex-1 bg-gray-100 overflow-auto p-6">{children}</main>
    </div>
  );
}

// Menu em comum para mobile e desktop
function SidebarContent() {
  return (
    <nav className="space-y-4">
      <Link
        href="/dashboard"
        className="flex gap-2 p-2 text-gray-500 font-medium hover:text-blue-600"
      >
        <LayoutDashboard size={18} /> Dashboard
      </Link>
      <Link
        href="/cadastrar-especialidade"
        className="flex gap-2 p-2 text-gray-500 font-medium hover:text-blue-600"
      >
        <Stethoscope size={18} /> Especialidade
      </Link>
      <Link
        href="#"
        className="flex gap-2 p-2 text-gray-500 font-medium hover:text-blue-600"
      >
        <Calendar size={18} /> Agenda
      </Link>
      <Link
        href="/pacientes"
        className="flex gap-2 p-2 text-gray-500 font-medium hover:text-blue-600"
      >
        <Users size={18} /> Pacientes
      </Link>
      <Link
        href="/medicos-cadastrados"
        className="flex gap-2 p-2 text-gray-500 font-medium hover:text-blue-600"
      >
        <UserCircle size={18} /> Médicos
      </Link>
      <Link
        href="#"
        className="flex gap-2 p-2 text-gray-500 font-medium hover:text-blue-600"
      >
        Relatórios
      </Link>
      <Link
        href="#"
        className="flex gap-2 p-2 text-gray-500 font-medium hover:text-blue-600"
      >
        Opções
      </Link>
    </nav>
  );
}
