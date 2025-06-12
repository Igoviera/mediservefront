// components/MenuCard.tsx
import Image from "next/image";
import Link from "next/link";

import IconFlecha from "../../../public/assets/icon-flecha.svg";

interface MenuCardProps {
  href: string;
  icon: any;
  label: string;
}

export default function MenuCard({ href, icon, label }: MenuCardProps) {
  return (
    <section className="mx-4 sm:mx-10 my-10 px-2 sm:px-4 py-4 shadow-md border-none rounded-lg">
      <Link href={href} className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-6">
          <Image width={40} height={40} alt={`icon-${label}`} src={icon} />
          <p className="text-[22px] text-[#2C5891] font-[700]">{label}</p>
        </div>
        <Image width={40} height={40} alt="icon-flecha" src={IconFlecha}/>
      </Link>
    </section>
  );
}
