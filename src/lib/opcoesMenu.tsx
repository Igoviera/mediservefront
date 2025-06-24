// opcoesMenu.tsx

import {
  CalendarCheck,
  ClipboardList,
  FileText,
  UserPlus,
  Stethoscope,
  Users,
  User,
  BarChart2,
} from "lucide-react";
import { ReactNode } from "react";

interface OpcaoMenu {
  label: string;
  icon: ReactNode;
  href: string;
}

export const opcoesMenu: OpcaoMenu[] = [
  {
    label: "Agendar Consultas",
    icon: <CalendarCheck size={24} />,
    href: "/pages/agendar-consulta",
  },
  {
    label: "Consultas Agendadas",
    icon: <ClipboardList size={24} />,
    href: "/pages/consultas-agendadas",
  },
  {
    label: "Cadastrar Especialidade",
    icon: <FileText size={24} />,
    href: "/pages/cadastrar-especialidade",
  },
  {
    label: "Cadastrar Médico",
    icon: <UserPlus size={24} />,
    href: "/pages/cadastro-medico",
  },
  {
    label: "Médicos Cadastrados",
    icon: <Stethoscope size={24} />,
    href: "/pages/medicos-cadastrados",
  },
  {
    label: "Cadastrar Paciente",
    icon: <UserPlus size={24} />,
    href: "/pages/cadastro-paciente",
  },
  {
    label: "Pacientes Cadastrados",
    icon: <Users size={24} />,
    href: "/pages/pacientes",
  },
  {
    label: "Cadastrar Usuário",
    icon: <UserPlus size={24} />,
    href: "/pages/cadastrar-usuarios",
  },
  {
    label: "Usuários Cadastrados",
    icon: <Users size={24} />,
    href: "/pages/usuarios-cadastrados",
  },
  {
    label: "Dashboard",
    icon: <BarChart2 size={24} />,
    href: "/pages/dashboard",
  },
];
