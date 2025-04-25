import Image from "next/image";
import Lapis from "../../public/assets/icon-lapis.png"
import Lixeira from "../../public/assets/icon-lixeira.png";
import Linha from "../../public/assets/linha.png";

type InfoMedicoProps = {
  nome: string;
  especialidade: string;
  email: string;
  celular: string;
  foto?: any;
}

export default function InfoMedico({nome, especialidade, email, celular} : InfoMedicoProps){
  return(
    <>
      <div className="h-[4rem] bg-[#D9D9D9] flex flex-row justify-between items-center border-none rounded-lg gap-5 mx-10 my-5 px-5">
        <div>
          {/* <Image
            alt=""
            src={}
            width={} height={}
          /> */}
          <p className="text-[#0D4077] text-[18px] font-[700]">{nome}</p>
        </div>
        <Image
          alt="linha"
          src={Linha}
          className="h-[full]"
        />
        <p className="font-[500]">{especialidade}</p>
        <Image
          alt="linha"
          src={Linha}
          className="h-[full]"
        />
        <p>{email}</p>
        <Image
          alt="linha"
          src={Linha}
          className="h-[full]"
        />
        <p>{celular}</p>
        <div className="flex flex-row gap-5">
          <button
          >
            <Image
              alt=""
              src={Lapis}
              width={20} height={15}
            />
          </button>
          <button
          >
            <Image
              alt=""
              src={Lixeira}
              width={20} height={15}
            />
          </button>
        </div>
      </div>
    </>
  );
}