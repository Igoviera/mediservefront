// components/MenuCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface MenuCardProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export default function MenuCard({ href, label,icon }: MenuCardProps) {
  return (
    <div className="font-medium text-xl my-5 shadow-md shadow-blue-500/50 rounded-lg bg-white hover:bg-blue-500 transition duration-700">
      <Link
        href={href}
        role="button"
        className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0"
      >
        <div className="w-full py-7 px-5 flex items-center gap-4 sm:gap-6 text-center sm:text-left text-slate-500 hover:text-white">
          <span className="transition duration-300 group-hover:brightness-200">
            {icon}
          </span>
          {label}
        </div>
      </Link>
    </div>
  );
}
