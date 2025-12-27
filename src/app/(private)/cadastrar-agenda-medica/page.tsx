
"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const diasSemana = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

const AgendaMedica = () => {
  const [agenda, setAgenda] = useState(
    diasSemana.map((dia, index) => ({
      dia,
      ativo: index < 5,
      inicio: index < 5 ? "08:00" : "",
      fim: index < 5 ? (dia === "Sexta" ? "12:00" : "18:00") : "",
      duracao: index < 5 ? "30 min" : "",
    }))
  );

  const handleToggle = (index:any) => {
    const novaAgenda = [...agenda];
    novaAgenda[index].ativo = !novaAgenda[index].ativo;
    setAgenda(novaAgenda);
  };

  const handleChange = (index:any, campo:any, valor:any) => {
   setAgenda((prev) => {
      const novaAgenda = [...prev];
      novaAgenda[index] = {
        ...novaAgenda[index],
        [campo]: valor,
      };
      return novaAgenda;
    });
  };

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold">Cadastro de Agenda Médica</h1>
      {agenda.map((dia, index) => (
        <Card key={index} className="p-4">
          <CardContent className="grid grid-cols-6 items-center gap-4">
            <Label className="col-span-1">{dia.dia}</Label>
            <Switch
              checked={dia.ativo}
              onCheckedChange={() => handleToggle(index)}
            />
            <Input
              type="time"
              value={dia.inicio}
              disabled={!dia.ativo}
              onChange={(e) => handleChange(index, "inicio", e.target.value)}
            />
            <Input
              type="time"
              value={dia.fim}
              disabled={!dia.ativo}
              onChange={(e) => handleChange(index, "fim", e.target.value)}
            />
            <Input
              type="text"
              value={dia.duracao}
              disabled={!dia.ativo}
              onChange={(e) => handleChange(index, "duracao", e.target.value)}
            />
          </CardContent>
        </Card>
      ))}
      <Button className="mt-4 bg-blue-500 hover:bg-blue-800">Salvar Agenda</Button>
    </div>
  );
};

export default AgendaMedica;
