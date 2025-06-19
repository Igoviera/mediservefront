import CardMenu from "@/components/Menu/MenuCard";
import {opcoesMenu} from '@/lib/opcoesMenu';

export default function MenuPrincipal() {
  return (
    <main className="bg-white border border-[#C8C8C8] rounded-md p-6 sm:mx-10 my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {opcoesMenu.map((opcao) => (
          <CardMenu
            key={opcao.label}
            href={opcao.href}
            icon={opcao.icon}
            label={opcao.label}
          />
        ))}
      </div>
    </main>
  );
}