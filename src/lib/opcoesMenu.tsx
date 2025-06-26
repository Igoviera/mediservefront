// opcoesMenu.tsx

import {
  CalendarCheck,
  ClipboardList,
  FileText,
  UserPlus,
  Stethoscope,
  Users,
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
    href: "/agendar-consulta",
  },
  {
    label: "Consultas Agendadas",
    icon: <ClipboardList size={24} />,
    href: "/consultas-agendadas",
  },
  {
    label: "Cadastrar Especialidade",
    icon: <FileText size={24} />,
    href: "/cadastrar-especialidade",
  },
  {
    label: "Cadastrar Médico",
    icon: <UserPlus size={24} />,
    href: "/cadastro-medico",
  },
  {
    label: "Médicos Cadastrados",
    icon: <Stethoscope size={24} />,
    href: "/medicos-cadastrados",
  },
  {
    label: "Cadastrar Paciente",
    icon: <UserPlus size={24} />,
    href: "/cadastro-paciente",
  },
  {
    label: "Pacientes Cadastrados",
    icon: <Users size={24} />,
    href: "/pacientes",
  },
  {
    label: "Cadastrar Usuário",
    icon: <UserPlus size={24} />,
    href: "/cadastrar-usuarios",
  },
  {
    label: "Usuários Cadastrados",
    icon: <Users size={24} />,
    href: "/usuarios-cadastrados",
  },
  {
    label: "Dashboard",
    icon: <BarChart2 size={24} />,
    href: "/dashboard",
  },
];
