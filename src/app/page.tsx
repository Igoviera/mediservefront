import CreateDoctor from "@/components/createDoctor/createDoctor";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MenuPrincipal from "./pages/menu-principal/page";

export default function Home() {
  return (
    <main>
      <Header />
      <MenuPrincipal />
      {/* <CreateDoctor/> */}
    </main>
  );
}
