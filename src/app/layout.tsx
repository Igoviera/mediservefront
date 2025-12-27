import Header from "@/components/Header";
import "@/app/globals.css";
import { Toaster } from "sonner";
import Sidebar from "@/components/Sidebar";
import LoginForm from "./login/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans h-screen bg-[#F1F1F1] flex flex-col">
        {/* <Header />
        <Sidebar>{children}</Sidebar> */}
        {children}
      </body>
    </html>
  );
}
