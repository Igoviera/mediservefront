"use client";

import { useEffect, useState } from "react";
import { Loading } from "@/components/ui/loading";
import { DataTable } from "@/components/ui/data-table";
import { User, usuarioColumns } from "@/components/colmuns/user-columns";
import userService from "@/services/userService";
import { Users } from "lucide-react";

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
        <div className="flex justify-center text-2xl text-blue-800 font-bold mt-10 gap-2">
          <p>Usúarios Cadastrados</p>
          <Users size={30} />
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
