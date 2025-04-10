import Image from "next/image";
import Link from "next/link";

import IconFlecha from "../../../public/assets/icon-flecha.svg";
import IconMaleta from "../../../public/assets/icon-maleta.svg";
import IconDocumento from "../../../public/assets/icon-documento.svg";
import IconSuporte from "../../../public/assets/icon-suporte.svg";

export default function(){
  return(
    <>
      <main className="bg-[#FFFFFF] text-[ubuntu] border border-[#C8C8C8] rounded-md mx-10 my-10">
        <section className="mx-10 my-10 px-4 py-4 shadow-md border-none rounded-lg">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-6">
              <Image
                width={40} height={40}
                alt="icon-maleta"
                src={IconMaleta}
              />
              <p className="text-[22px] text-[#2C5891] font-[700]">Agendar Consultas</p>
            </div>
            <Link href="">
              <Image
                width={40} height={40}
                alt="icon-flecha"
                src={IconFlecha}
              />
            </Link>
          </div>
        </section>
        <section className="mx-10 my-10 px-4 py-4 shadow-md border-none rounded-lg">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-6">
              <Image
                width={40} height={40}
                alt="icon-documento"
                src={IconDocumento}
              />
              <p className="text-[22px] text-[#2C5891] font-[700]">Consultas Agendadas</p>
            </div>
            <Link href="">
              <Image
                width={40} height={40}
                alt="icon-flecha"
                src={IconFlecha}
              />
            </Link>
          </div>
        </section>
        <section className="mx-10 my-10 px-4 py-4 shadow-md border-none rounded-lg">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-6">
              <Image
                width={40} height={40}
                alt="icon-maleta"
                src={IconMaleta}
              />
              <p className="text-[22px] text-[#2C5891] font-[700]">Pacientes Cadastrados</p>
            </div>
            <Link href="">
              <Image
                width={40} height={40}
                alt="icon-flecha"
                src={IconFlecha}
              />
            </Link>
          </div>
        </section>
        <section className="mx-10 my-10 px-4 py-4 shadow-md border-none rounded-lg">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-6">
              <Image
                width={40} height={40}
                alt="icon-documento"
                src={IconDocumento}
              />
              <p className="text-[22px] text-[#2C5891] font-[700]">Médicos Cadastrados</p>
            </div>
            <Link href="">
              <Image
                width={40} height={40}
                alt="icon-flecha"
                src={IconFlecha}
              />
            </Link>
          </div>
        </section>
        <section className="mx-10 my-10 px-4 py-4 shadow-md border-none rounded-lg">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-6">
              <Image
                width={40} height={40}
                alt="icon-suporte"
                src={IconSuporte}
              />
              <p className="text-[22px] text-[#2C5891] font-[700]">Cadastrar Médico/Paciente</p>
            </div>
            <Link href="">
              <Image
                width={40} height={40}
                alt="icon-flecha"
                src={IconFlecha}
              />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}