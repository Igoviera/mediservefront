import CreateDoctor from "@/components/createDoctor/createDoctor";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MenuPrincipal from "./pages/menu-principal/page";

export default function Home() {
  // const doctors = [
  //   {
  //     name: "Dr. João Silva",
  //     email: "joao@email.com",
  //     phone: "(11) 99999-9999",
  //     crm: "123456",
  //   },
  //   {
  //     name: "Dra. Maria Souza",
  //     email: "maria@email.com",
  //     phone: "(11) 98888-8888",
  //     crm: "654321",
  //   },
  // ];

  return (
    <main>
      <Header />
      <MenuPrincipal />
      {/* <CreateDoctor/> */}
    </main>
  );
}
