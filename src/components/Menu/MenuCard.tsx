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
    <section className="font-bold py-4 px-5 my-5 shadow-md rounded-lg transition-all duration-300 bg-white hover:bg-[#869FBB]">
      <Link
        href={href}
        role="button"
        className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 group"
      >
        <div className="flex items-center gap-4 sm:gap-6 text-center sm:text-left">
          <Image
            width={32}
            height={32}
            alt=""
            src='/assets/icons/icon-flecha.svg'
            aria-hidden="true"
            className="transition duration-300 group-hover:brightness-200"
          />

          {label}
        </div>
        <Image
          width={24}
          height={24}
          alt="Ir para página"
          src={icon}
          className="hidden sm:block transition duration-300 group-hover:brightness-200"
        />
      </Link>
    </section>
  );
}
