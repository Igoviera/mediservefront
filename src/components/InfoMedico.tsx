import Image from "next/image";
import Lapis from "../../public/assets/icon-lapis.png";
import Lixeira from "../../public/assets/icon-lixeira.png";

type InfoMedicoProps = {
  id: number;
  nome: string;
  imgUrl: string;
  crm: string;
  queryValue: number;
  especialidade: string;
  clinicId: number;
  userId: number;
  status: string;
};

function formatacaoCelular(celular: string) {
  const digitos = celular.replace(/\D/g, "").slice(0, 11);
  const formatado = digitos.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");

  return formatado;
}

export default function InfoMedico({
  nome,
  imgUrl,
  crm,
  queryValue,
  especialidade,
  status,
}: InfoMedicoProps) {
  return (
    <div className="bg-gray-200 rounded-xl px-6 py-4 mx-4 my-2 flex justify-between items-center shadow-sm">
      <div className="flex flex-col gap-1">
        <p className="text-sm md:text-base text-gray-800">
          <span className="font-semibold text-[#0D4077]">Nome:</span> {nome}
        </p>
        <p className="text-sm md:text-base text-gray-800">
          <span className="font-semibold">Especialidade:</span> {especialidade}
        </p>
      </div>

      <div className="hidden sm:flex flex-col gap-1 text-sm md:text-base text-gray-800">
        <p>
          <span className="font-semibold">CRM:</span> {crm}
        </p>
        <p>
          <span className="font-semibold">Valor:</span> R$ {queryValue}
        </p>
      </div>

      <p className="text-sm md:text-base text-gray-800">
        <span className="font-semibold">Status:</span>
        <span className={`px-5 rounded-full ml-4 font-medium text-white ${
          status == 'INATIVO'? 'bg-red-500':'bg-green-400'
        }`}>
          {status.toLocaleLowerCase()}
        </span>
      </p>
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
