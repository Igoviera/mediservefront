"use client";

import AppBarChat from "@/components/AppBarChart";
import ChartPieDonutText from "@/components/ChartPieDonutText";
import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, User, CalendarX } from "lucide-react";


export default function Dashboard() {
  const stats = [
    {
      title: "Médicos cadastrados",
      value: 10,
      icon: <User className="w-6 h-6 text-blue-500" />,
      bg: "bg-blue-50",
      text: "text-blue-700",
    },
    {
      title: "Pacientes cadastrados",
      value: 10,
      icon: <Users className="w-6 h-6 text-orange-500" />,
      bg: "bg-orange-50",
      text: "text-orange-700",
    },
    {
      title: "Total de Consultas",
      value: 10,
      icon: <BarChart3 className="w-6 h-6 text-green-500" />,
      bg: "bg-green-50",
      text: "text-green-700",
    },
    {
      title: "Consultas Canceladas",
      value: 10,
      icon: <CalendarX className="w-6 h-6 text-red-500" />,
      bg: "bg-red-50",
      text: "text-red-700",
    },
  ];

  return (
    <div className="w-full p-4 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <Card key={index} className={`shadow-md transition duration-200 hover:shadow-xl ${item.bg}`}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className={`text-sm font-medium ${item.text}`}>{item.title}</CardTitle>
            {item.icon}
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{item.value}</div>
          </CardContent>
        </Card>
      ))}

      <div className="col-span-1 md:col-span-2">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Assistente Virtual</CardTitle>
          </CardHeader>
          <CardContent>
            <AppBarChat />
          </CardContent>
        </Card>
      </div>

      <div className="col-span-1 md:col-span-2">
        <Card className="shadow-md ">
          <CardHeader>
            <CardTitle>Estatísticas Visuais</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartPieDonutText />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
