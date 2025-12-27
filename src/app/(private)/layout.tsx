"use client";

import Header from "@/components/Header";
import LayoutComSidebar from "@/components/Sidebar";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
  <Header/>
  <LayoutComSidebar>{children}</LayoutComSidebar>;
  </> 
}
