"use client";

import { useEffect, useState } from "react";
import AppBarChat from "@/components/AppBarChart";
import ChartPieDonutText from "@/components/ChartPieDonutText";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, User, CalendarX, CalendarOff } from "lucide-react";
import dashboardService from "@/services/dashboardService"; // ajuste o caminho conforme necessário

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    totalDoctors: 0,
    totalPatient: 0,
    totalAppointment: 0,
    totalAppointmentCancel: 0

  });

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await dashboardService.getDashboard();
        setDashboardData(data);
      } catch (error) {
        console.error("Erro ao carregar dados do dashboard:", error);
      }
    };

    fetchDashboard();
  }, []);

  const stats = [
    {
      title: "Médicos cadastrados",
      value: dashboardData.totalDoctors,
      icon: <User className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Pacientes cadastrados",
      value: dashboardData.totalPatient,
      icon: <Users className="w-6 h-6 text-orange-500" />,
    },
    {
      title: "Total de Consultas",
      value: dashboardData.totalAppointment,
      icon: <BarChart3 className="w-6 h-6 text-green-500" />,
    },
        {
      title: "Consultas Canceladas",
      value: dashboardData.totalAppointmentCancel,
      icon: <CalendarOff className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Consultas Hoje",
      value: 0,
      icon: <CalendarX className="w-6 h-6 text-red-500" />,
    },
  ];
  
  return (
    <div className="w-full p-4 md:p-8 grid grid-cols-1 md:grid-cols-5 gap-6">
      {stats.map((item, index) => (
        <Card
          key={index}
          className={`shadow-md transition duration-200 hover:shadow-xl h-36`}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className={`text-sm font-medium ${item.text}`}>
              {item.title}
            </CardTitle>
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
            <CardTitle>..</CardTitle>
          </CardHeader>
          <CardContent>
            <AppBarChat />
          </CardContent>
        </Card>
      </div>

      <div className="col-span-1 md:col-span-2">
        <Card className="shadow-md ">
          <CardHeader>
            <CardTitle>..</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartPieDonutText />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
