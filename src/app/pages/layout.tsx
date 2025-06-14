import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen min-h-screen bg-[#F1F1F1] flex flex-col">
      <Header />
      <div className="flex-grow flex justify-center items-center p-4 sm:p-8 md:p-16">
        {children}
      </div>
    </div>
  );
}
