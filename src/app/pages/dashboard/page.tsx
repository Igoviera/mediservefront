"use client";

import AppBarChat from "@/components/AppBarChart";
import ChartPieDonutText from "@/components/ChartPieDonutText";
import React from "react";

export default function Dashboard() {
  return (
    <div className="w-full font-semibold bg-white text-gray-800 rounded-[12px] border p-4 md:p-[40px] grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="py-8 text-white flex flex-col justify-center items-center bg-blue-500 rounded-sm">
        <h1 className="text-6xl">10</h1>
        <h2>Médicos cadastrados</h2>
      </div>
      <div className="py-8 text-white flex flex-col justify-center items-center bg-orange-500 rounded-sm">
        <h1 className="text-6xl">10</h1>
        <h2>Pacientes cadastrados</h2>
      </div>
      <div className="py-8 text-white flex flex-col justify-center items-center bg-green-500 rounded-sm">
        <h1 className="text-6xl">10</h1>
        <h2>Total de Consultas</h2>
      </div>
      <div className="py-8 text-white flex flex-col justify-center items-center bg-red-500 rounded-sm">
        <h1 className="text-6xl">10</h1>
        <h2>Consultas Canceladas</h2>
      </div>
      <div className="col-span-2">
        <AppBarChat/>
      </div>
      <div className="col-span-2">
        <ChartPieDonutText/>
      </div>
    </div>
  );
}
