import Image from "next/image";
import Lapis from "../../public/assets/icon-lapis.png"
import Lixeira from "../../public/assets/icon-lixeira.png";

type InfoMedicoProps = {
  nome: string;
  especialidade: string;
  email: string;
  celular: string;
  foto?: any;
}

function formatacaoCelular(celular: string){
  const digitos = celular.replace(/\D/g, '').slice(0, 11);
  const formatado = digitos.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');

  return formatado;
}

export default function InfoMedico({nome, especialidade, email, celular} : InfoMedicoProps){
  return(
    <>
      <div className="h-[4rem] bg-[#D9D9D9] flex flex-row flex-wrap justify-evenly md:justify-between items-center border-none rounded-lg gap-2 md:gap-5 mx-2 md:mx-10 my-5 px-2 md:px-5">
        <div>
          {/* <Image
            alt=""
            src={}
            width={} height={}
          /> */}
          <p className="text-[#0D4077] text-[15px] md:[18px] font-[700]">{nome}</p>
        </div>
        <p className="font-[500] text-[15px] md:[18px]">{especialidade}</p>
        <p className="hidden md:block">{email}</p>
        <p className="hidden lg:block">{formatacaoCelular(celular)}</p>
        <div className="flex flex-row gap-2 md:gap-5">
          <button
          >
            <Image
              alt=""
              src={Lapis}
              className="w-[15px] md:w-[20px]"
            />
          </button>
          <button
          >
            <Image
              alt=""
              src={Lixeira}
              className="w-[15px] md:w-[20px]"
            />
          </button>
        </div>
      </div>
    </>
  );
}