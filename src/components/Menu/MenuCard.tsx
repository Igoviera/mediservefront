// components/MenuCard.tsx
import Image from "next/image";
import Link from "next/link";

interface MenuCardProps {
  href: string;
  icon: string;
  label: string;
}

export default function MenuCard({ href, icon, label }: MenuCardProps) {
  return (
    <div className="font-light text-xl py-7 px-5 my-5 shadow-md shadow-blue-500/50 rounded-lg  bg-white hover:bg-blue-500 transition duration-700">
      <Link
        href={href}
        role="button"
        className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0"
      >
        <div className="flex items-center gap-4 sm:gap-6 text-center sm:text-left hover:text-white">
          <Image
            width={32}
            height={32}
            alt=""
            src="/assets/icons/icon-flecha.svg"
            aria-hidden="true"
            className="transition duration-300 group-hover:brightness-200"
          />

          {label}
        </div>
        <Image
          width={40}
          height={40}
          alt="Ir para página"
          src={icon}
          className="hidden sm:block transition duration-300 group-hover:brightness-200"
        />
      </Link>
    </div>
  );
}
