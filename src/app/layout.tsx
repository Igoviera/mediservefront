import Header from "@/components/Header";
import "@/app/globals.css";
import { Toaster } from "sonner";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans w-screen min-h-screen bg-[#F1F1F1] flex flex-col">
        <Header />
        <div className="flex-grow flex justify-center items-center p-4 sm:p-8 md:p-16">
          {children}
          <Toaster richColors position="top-right" />
        </div>
      </body>
    </html>
  );
}
