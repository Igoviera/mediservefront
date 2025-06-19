"use client";

import Image from "next/image";
import Users from "../../../../public/assets/icons/icon-users.png";
import InfoMedico from "@/components/InfoPessoa";
import { useEffect, useState } from "react";
import doctorService from "@/services/doctorService";
import { Loading } from "@/components/ui/loading";
import { DataTable } from "@/components/ui/data-table";
import { User, usuarioColumns } from "@/components/colmuns/user-columns";
import userService from "@/services/userService";

export default function MedicosCadastrados() {
  const [users, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const users = await userService.getAllUsers();
        setUser(users);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar usuarios:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <main className="bg-[#FFFFFF] border border-[#C8C8C8] rounded-md w-full">
      <section className="flex flex-col">
        <div className="w-full flex flex-row justify-center my-[4rem]">
          <p className="text-center text-[25px] font-[700]">Usúarios</p>
          <Image alt="seta" src={Users} className="w-7 h-full ml-2 relative" />
        </div>
      </section>
      <section>
        {loading ? (
          <Loading />
        ) : (
          <div className="m-5">
            <DataTable columns={usuarioColumns} data={users} />
          </div>
        )}
      </section>
    </main>
  );
}
