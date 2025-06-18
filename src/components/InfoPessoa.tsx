import Image from "next/image";
import Lapis from "../../public/assets/icons/icon-lapis.png";
import Lixeira from "../../public/assets/icons/icon-lixeira.png";

type InfoPessoalProps = {
  id?: number;
  nome?: string;
  username?: string;
  email?: string;
  imgUrl?: string;
  crm?: string;
  queryValue?: number;
  especialidade?: string;
  clinicId?: number;
  userId?: number;
  status?: string;
  roles?: 'MEDICO' | 'PACIENTE';
  cpf?: string;
  telefone?: string;
  endereco?: string;
};


function formatacaoCelular(celular: string) {
  const digitos = celular.replace(/\D/g, "").slice(0, 11);
  const formatado = digitos.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");

  return formatado;
}

export default function InfoPessoa({
  nome,
  imgUrl,
  crm,
  queryValue,
  especialidade,
  status,
  roles,
  cpf,
  telefone,
  endereco,
}: InfoPessoalProps) {
  return (
    <div className="bg-gray-200 rounded-xl px-6 py-4 mx-4 my-2 flex justify-between items-center shadow-sm">
      <div className="flex flex-col gap-1">
        {nome && (
          <p className="text-sm md:text-base text-gray-800">
            <span className="font-semibold text-[#0D4077]">Nome:</span> {nome}
          </p>
        )}
        {roles && (
          <p className="text-sm md:text-base text-gray-800">
            <span className="font-semibold text-[#0D4077]">Perfil:</span> {roles}
          </p>
        )}

        {roles === "MEDICO" && especialidade && (
          <p className="text-sm md:text-base text-gray-800">
            <span className="font-semibold">Especialidade:</span> {especialidade}
          </p>
        )}

        {roles === "PACIENTE" && cpf && (
          <p className="text-sm md:text-base text-gray-800">
            <span className="font-semibold">CPF:</span> {cpf}
          </p>
        )}

        {telefone && (
          <p className="text-sm md:text-base text-gray-800">
            <span className="font-semibold">Telefone:</span>{" "}
            {formatacaoCelular(telefone)}
          </p>
        )}

        {endereco && (
          <p className="text-sm md:text-base text-gray-800">
            <span className="font-semibold">Endereço:</span> {endereco}
          </p>
        )}
      </div>

      <div className="hidden sm:flex flex-col gap-1 text-sm md:text-base text-gray-800">
        {roles === "MEDICO" && crm && (
          <p>
            <span className="font-semibold">CRM:</span> {crm}
          </p>
        )}
        {roles === "MEDICO" && queryValue && (
          <p>
            <span className="font-semibold">Valor:</span> R$ {queryValue}
          </p>
        )}
      </div>

      {status && (
        <p className="text-sm md:text-base text-gray-800">
          <span className="font-semibold">Status:</span>
          <span
            className={`px-5 rounded-full ml-4 font-medium ${
              status === "INATIVO"
                ? "bg-red-400 text-red-800"
                : "bg-green-300 text-green-700"
            }`}
          >
            {status.charAt(0).toUpperCase() +
              status.slice(1).toLocaleLowerCase()}
          </span>
        </p>
      )}

      <div className="flex gap-4 items-center">
        <button title="Editar">
          <Image
            src={Lapis}
            alt="Editar"
            className="w-5 h-5 hover:scale-110 transition-transform duration-200"
          />
        </button>
        <button title="Excluir">
          <Image
            src={Lixeira}
            alt="Excluir"
            className="w-5 h-5 hover:scale-110 transition-transform duration-200"
          />
        </button>
      </div>
    </div>
  );
}
