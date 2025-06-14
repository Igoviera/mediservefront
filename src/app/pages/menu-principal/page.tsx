import CardMenu from "@/components/Menu/MenuCard";

export default function MenuPrincipal() {
  return (
    <main className="bg-white border border-[#C8C8C8] rounded-md p-6 sm:mx-10 my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <CardMenu
          href="/pages/agendar-consulta"
          icon='/assets/icons/icon-agendamento.png'
          label="Agendar Consultas"
        />
        <CardMenu 
          href="" 
          icon='/assets/icons/icon-documento.png' 
          label="Consultas Agendadas" 
        />
        <CardMenu 
          href="/pages/cadastrar-especialidade" 
          icon='/assets/icons/icon-documento.png' 
          label="Cadastrar Especialidade" 
        />
        <CardMenu
          href="/pages/cadastro-medico"
          icon='/assets/icons/icon-usuario.png'
          label="Cadastrar Médico"
        />
        <CardMenu
          href="/pages/medicos-cadastrados"
          icon='/assets/icons/icon-grupo.png'
          label="Médicos Cadastrados"
        />
        <CardMenu 
          href="/pages/cadastro-paciente" 
          icon='/assets/icons/icon-usuario.png' 
          label="Cadastrar Paciente" 
        />
        <CardMenu 
          href="" 
          icon='/assets/icons/icon-grupo.png' 
          label="Pacientes Cadastrados" 
        />
        <CardMenu
          href="/pages/cadastrar-usuarios"
          icon='/assets/icons/icon-usuario.png'
          label="Cadastrar Usuários"
        />
        <CardMenu
          href="/pages/usuarios-cadastrados"
          icon='/assets/icons/icon-grupo.png'
          label="Usuários Cadastrados"
        />
      </div>
    </main>
  );
}
