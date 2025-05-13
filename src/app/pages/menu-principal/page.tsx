import IconDocumento from "../../../../public/assets/icon-documento.png";
import IconAgendamento from "../../../../public/assets/icon-agendamento.png";
import IconUser from "../../../../public/assets/icon-usuario.png";
import IconGrupo from "../../../../public/assets/icon-grupo.png";
import CardMenu from "../../../components/Menu/MenuCard";

export default function MenuPrincipal(){
  return(
    <>
      <main className="bg-[#FFFFFF] text-[ubuntu] border border-[#C8C8C8] rounded-md mx-3 sm:mx-10 my-10">
        <CardMenu
          href="/pages/agendar-consulta" 
          icon={IconAgendamento} 
          label="Agendar Consultas"
        />
        <CardMenu
          href="" 
          icon={IconDocumento} 
          label="Consultas Agendadas"
        />
        <CardMenu 
          href="" 
          icon={IconGrupo} 
          label="Pacientes Cadastrados"
        />
        <CardMenu
          href="/pages/medicos-cadastrados" 
          icon={IconGrupo} 
          label="Medicos Cadastrados"
        />
        <CardMenu
          href="/pages/cadastro-medico" 
          icon={IconUser} 
          label="Cadastrar Médico"
        />
        <CardMenu
          href="" 
          icon={IconUser} 
          label="Cadastrar Paciente"
        />
      </main>
    </>
  );
}