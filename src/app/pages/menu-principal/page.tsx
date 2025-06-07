import IconDocumento from "../../../../public/assets/icon-documento.png";
import IconAgendamento from "../../../../public/assets/icon-agendamento.png";
import IconUser from "../../../../public/assets/icon-usuario.png";
import IconGrupo from "../../../../public/assets/icon-grupo.png";
import CardMenu from "../../../components/Menu/MenuCard";

export default function MenuPrincipal() {
  return (
    <main className="bg-white border border-[#C8C8C8] rounded-md p-6 sm:mx-10 my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <CardMenu
          href="/pages/agendar-consulta"
          icon={IconAgendamento}
          label="Agendar Consultas"
        />
        <CardMenu href="" icon={IconDocumento} label="Consultas Agendadas" />
        <CardMenu
          href="/pages/cadastro-medico"
          icon={IconUser}
          label="Cadastrar Médico"
        />
        <CardMenu
          href="/pages/medicos-cadastrados"
          icon={IconGrupo}
          label="Médicos Cadastrados"
        />
        <CardMenu href="" icon={IconUser} label="Cadastrar Paciente" />
        <CardMenu href="" icon={IconGrupo} label="Pacientes Cadastrados" />
        <CardMenu
          href="/pages/cadastrar-usuarios"
          icon={IconUser}
          label="Cadastrar Usuários"
        />
        <CardMenu
          href="/pages/usuarios-cadastrados"
          icon={IconGrupo}
          label="Usuários Cadastrados"
        />
      </div>
    </main>
  );
}
