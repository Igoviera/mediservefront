import Image from "next/image";
import Link from "next/link";
import Seta from "../../../public/assets/icon-seta.svg";
import Users from "../../../public/assets/icon-users.png";
import InfoMedico from "@/components/InfoMedico";

export default function MedicosCadastrados(){
  return(
    <>
      <main className="bg-[#FFFFFF] border border-[#C8C8C8] rounded-md mx-3 sm:mx-10 my-10">
        <section className="flex flex-col">
          <div className="w-full flex flex-row justify-center mt-[4rem] mb-[4rem]">
            <Link
              href="/menu-principal"
              className="flex flex-row gap-2 items-center text-[#ffffff] bg-[#222222] p-2 border-none rounded-[5px] relative left-[-450px]"
            >
              <Image
                alt="seta"
                src={Seta}
                width={20} height={20}
              />
              Retornar
            </Link>
            <p className="text-center text-[25px] font-[700]">Médicos</p>
            <Image
              alt="seta"
              src={Users}
              className="w-7 h-full ml-2 relative"
            />
          </div>
          <div className="flex flex-row justify-end my-6 mr-10">
            <div className="flex flex-col">
              <label htmlFor="busca" className="text-left font-[500]">Buscar médico: </label>
              <div>
                <input id="busca" type="search" className="w-[20rem] h-[35px] border border-[#CCCCCC] rounded-[4px] mr-5" />
                <button className="w-[90px] h-[35px] bg-[#0D407780] text-[#FFFFFF] border-none rounded-[4px]">Buscar</button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <p className="text-[20px] font-[500] ml-[4rem]">Médicos:</p>
          <div>
            <InfoMedico nome="Lígia Kaylanne" especialidade="Neurologista" celular="87523652" email="emailexemplo@gmail.com"/>
            <InfoMedico nome="Lígia Kaylanne" especialidade="Neurologista" celular="87523652" email="emailexemplo@gmail.com"/>
            <InfoMedico nome="Lígia Kaylanne" especialidade="Neurologista" celular="87523652" email="emailexemplo@gmail.com"/>
            <InfoMedico nome="Lígia Kaylanne" especialidade="Neurologista" celular="87523652" email="emailexemplo@gmail.com"/>
          </div>
        </section>
      </main>
    </>
  );
}