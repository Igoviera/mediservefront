import React from "react";
import Image from "next/image";

interface TituloComIconeProps {
  titulo: string;
  iconSrc: string;
  iconAlt: string;
}

export default function TituloComIcone({ titulo, iconSrc, iconAlt }: TituloComIconeProps) {
  return (
    <div className="flex items-center gap-2">
      <h1 className="font-bold text-[36px] sm:text-[45.58px] font-[Poppins] text-center">
        {titulo}
      </h1>
      <Image src={iconSrc} alt={iconAlt} width={41.52} height={25.74} />
    </div>
  );
}
