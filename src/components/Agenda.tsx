import { useState } from "react";
import { CalendarForm } from "./CalendarForm";
import { format } from "date-fns";
import { CalendarDays } from 'lucide-react';

// ou o caminho correto
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Exemplo de mock de agenda
const agenda = [
  {
    date: "2025-07-05",
    day: "sábado",
    horarios: [
      "08:00",
      "08:30",
      "09:00",
      "09:30",
      "10:00",
      "10:30",
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "15:30",
      "16:00",
      "16:30",
      "17:00",
      "17:30",
    ],
  },
  {
    date: "2025-07-06",
    day: "domingo",
    horarios: [],
  },
];

export function DialogAgenda() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"default"} size="sm" className="bg-transparent border border-blue-500 text-blue-500 hover:border-blue-700 hover:text-blue-700 px-4 py-2 rounded hover:bg-transparent">
          <CalendarDays/>Agendar Consulta
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl text-blue-500 font-bold">
            Agenda: Dr(a). Letícia Abreu
          </DialogTitle>
          <DialogDescription>Selecione uma data.</DialogDescription>
        </DialogHeader>

        {/* Passa o estado para o formulário */}
        <div className="my-6">
          <CalendarForm
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>

        {/* Agenda List - Filtrar com base na data */}
        <div className="mt-4 space-y-6">
          {agenda
            .filter((item) =>
              selectedDate
                ? item.date === format(selectedDate, "yyyy-MM-dd")
                : false
            ) // <-- filtro
            .map(({ date, day, horarios }) => (
              <div key={date} className="flex flex-col">
                <p className="text-slate-600 text-sm mb-3">Seleciona um horário desejado na lista.</p>
                <div className="flex items-center gap-4 mb-2 text-sm">
                  <div className="text-blue-500 font-medium">
                    <p className="w-20">{date}</p>
                    <p className="w-20 capitalize">{day}</p>
                  </div>

                  {horarios.length === 0 ? (
                    <span className="text-muted-foreground text-sm">
                      ❌ Não atende
                    </span>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {horarios.map((h, i) => (
                        <Button
                          key={i}
                          variant="ghost"
                          className="border px-3 py-1 text-xs rounded-sm hover:bg-blue-100"
                        >
                          {h}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>

        <div className="flex justify-end">
          <Button className="bg-blue-500 hover:bg-blue-700 w-1/4">
            Agendar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
